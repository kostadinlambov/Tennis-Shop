package kl.tennisshop.services;

import kl.tennisshop.domain.entities.Order;

public interface OrderService {

    Order persistOrder(Order order);
}
