package kl.tennisshop.repositories;

import kl.tennisshop.domain.entities.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@RepositoryRestResource(path = "/payments")
public interface PaymentRepository extends JpaRepository<Payment, String> {
}
