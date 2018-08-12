package kl.tennisshop.servicesImpl;

import kl.tennisshop.entities.Order;
import kl.tennisshop.repositories.OrderRepository;
import kl.tennisshop.services.OrderService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public Order persistOrder(Order order) {
       return this.orderRepository.save(order);
    }
}
