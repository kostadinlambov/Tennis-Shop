package kl.tennisshop.repositories;

import kl.tennisshop.entities.Category;
import kl.tennisshop.entities.Racket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RacketRepository extends JpaRepository<Racket, String> {
        List<Racket> findAllByCategory(Category category);

        Racket findByName(String name);
}
