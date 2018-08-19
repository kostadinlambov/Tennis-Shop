package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.Category;
import kl.tennisshop.repositories.CategoryRepository;
import kl.tennisshop.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    private CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void persistCategory(Category category) {
        this.categoryRepository.save(category);
    }

    @Override
    public Category findByName(String name) {
        return this.categoryRepository.findByName(name);
    }
}


