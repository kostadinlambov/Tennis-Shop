package kl.tennisshop.repositories;

import kl.tennisshop.domain.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@RepositoryRestResource(path = "/category")
public interface CategoryRepository extends JpaRepository<Category, String> {
    Category findByName(String name);
}
