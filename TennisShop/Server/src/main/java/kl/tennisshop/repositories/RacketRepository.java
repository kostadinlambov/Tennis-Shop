package kl.tennisshop.repositories;

import kl.tennisshop.domain.entities.Category;
import kl.tennisshop.domain.entities.Racket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
//@RepositoryRestResource(path = "/rackets")
//@CrossOrigin(value = "http://localhost:4200",allowedHeaders = "*",exposedHeaders = "Content-Type",
//        methods = {RequestMethod.GET, RequestMethod.POST} )
public interface RacketRepository extends JpaRepository<Racket, String> {
        List<Racket> findAllByCategory(Category category);

        Racket findByName(String name);

        Racket findFirstByName(String name);

        Racket deleteRacketById(String id);
}
