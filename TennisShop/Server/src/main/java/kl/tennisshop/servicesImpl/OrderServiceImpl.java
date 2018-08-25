package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.Order;
import kl.tennisshop.domain.entities.Racket;
import kl.tennisshop.domain.entities.User;
import kl.tennisshop.domain.models.serviceModels.OrderServiceModel;
import kl.tennisshop.repositories.OrderRepository;
import kl.tennisshop.repositories.RacketRepository;
import kl.tennisshop.repositories.UserRepository;
import kl.tennisshop.services.OrderService;
import kl.tennisshop.utils.responseHandler.exceptions.CustomException;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.stream.Collectors;

import static kl.tennisshop.utils.constants.ResponseMessageConstants.*;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;
    private ModelMapper modelMapper;
    private UserRepository userRepository;
    private RacketRepository racketRepository;

    public OrderServiceImpl(OrderRepository orderRepository, ModelMapper modelMapper, UserRepository userRepository, RacketRepository racketRepository) {
        this.orderRepository = orderRepository;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.racketRepository = racketRepository;
    }


    @Override
    @Transactional
    public boolean orderRacket(String userId , String racketId, Integer quantity) {
        User user = this.userRepository.findById(userId).orElse(null);

        Racket racket = this.racketRepository.findById(racketId).orElse(null);

        if (user == null || racket == null) {
            throw new CustomException(FAILURE_ORDER_CREATE_MESSAGE);
        }

       return  this.placeOrder(racket, user, quantity);
    }

    @Override
    public boolean createOrder(OrderServiceModel orderServiceModel) {
        Order orderEntity = this.modelMapper.map(orderServiceModel, Order.class);

        try {
            this.orderRepository.saveAndFlush(orderEntity);
        } catch (Exception ignored) {
            throw new CustomException(SERVER_ERROR_MESSAGE);
        }
        return true;
    }

    private boolean placeOrder(Racket racket, User user, Integer quantitty) {
        OrderServiceModel orderServiceModel = new OrderServiceModel();

        orderServiceModel.setOrderedOn(LocalDateTime.now());
        orderServiceModel.setRacket(racket);
        orderServiceModel.setUser(user);
        orderServiceModel.setQuantity(quantitty);

        return  this.createOrder(orderServiceModel);
    }

    @Override
    public Set<OrderServiceModel> getAllByUserId(String userId) {
        Set<OrderServiceModel> ordersByUserId = this.orderRepository
                .findAllByUserId(userId)
                .stream()
                .map(x -> this.modelMapper.map(x, OrderServiceModel.class))
                .collect(Collectors.toUnmodifiableSet());

        return ordersByUserId;
    }


    @Override
    public Order persistOrder(Order order) {
        return this.orderRepository.save(order);
    }

    @Override
    public boolean checkout(String id) {
        try{
            this.getAllByUserId(id).forEach(order -> this.orderRepository.deleteById(order.getId()));
            return true;
        }catch (Exception e){
            e.printStackTrace();
            throw new CustomException(FAILURE_CHECKOUT_MESSAGE);
        }
    }

    @Override
    public boolean remove(String id) {
        try{
            this.orderRepository.deleteById(id);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            throw new CustomException(FAILURE_ORDER_REMOVE_MESSAGE);
        }
    }
}
