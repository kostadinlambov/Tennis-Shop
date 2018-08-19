package kl.tennisshop.repositories;

import kl.tennisshop.domain.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@RepositoryRestResource(path = "/orders")
public interface OrderRepository extends JpaRepository<Order, String> {

}
