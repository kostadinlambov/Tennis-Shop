package kl.tennisshop.services;

        import kl.tennisshop.domain.entities.Category;
        import kl.tennisshop.domain.entities.Racket;

public interface CategoryService {
    void persistCategory(Category category);

    Category findByName(String name);


}
