package kl.tennisshop.services;

import kl.tennisshop.entities.Payment;

public interface PaymentService {
    Payment persistPayment(Payment payment);
}
