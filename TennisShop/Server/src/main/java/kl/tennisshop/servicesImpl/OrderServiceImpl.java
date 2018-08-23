package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.Order;
import kl.tennisshop.repositories.OrderRepository;
import kl.tennisshop.services.OrderService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;

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

//    @Scheduled(cron = "* * * * * *")
//    public void testSchedule(){
//        System.out.println(new Date());
//    }
}
