package kl.tennisshop.repositories;

import kl.tennisshop.domain.entities.Category;
import kl.tennisshop.domain.entities.Logger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoggerRepository extends JpaRepository<Logger, String> {
        List<Logger> findAllByOrderByTimeDesc();

        List<Logger> findAllByUsernameOrderByTimeDesc(String username);
}