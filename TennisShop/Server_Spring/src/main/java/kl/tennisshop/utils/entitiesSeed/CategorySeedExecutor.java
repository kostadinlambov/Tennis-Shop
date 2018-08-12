package kl.tennisshop.utils.entitiesSeed;

import kl.tennisshop.entities.Category;
import kl.tennisshop.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class CategorySeedExecutor {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategorySeedExecutor(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @PostConstruct
    public void insertCategories(){
        // // Available Categories
        // Tour racket
        // Allround racket
        // Comfort racket
        // Junior racket
        if(this.categoryRepository.count() == 0){
            Category category1 = new Category("Tour racket");
            Category category2 = new Category("Allround racket");
            Category category3 = new Category("Comfort racket");
            Category category4 = new Category("Junior racket");

            this.categoryRepository.save(category1);
            this.categoryRepository.save(category2);
            this.categoryRepository.save(category3);
            this.categoryRepository.save(category4);
        }
//
    }
}
