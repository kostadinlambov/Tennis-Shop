package kl.tennisshop.services;

import kl.tennisshop.entities.Order;

public interface OrderService {

    Order persistOrder(Order order);
}
