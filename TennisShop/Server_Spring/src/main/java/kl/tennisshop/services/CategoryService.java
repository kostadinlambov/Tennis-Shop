package kl.tennisshop.services;

import kl.tennisshop.entities.Category;
import kl.tennisshop.entities.Racket;

import java.util.List;

public interface CategoryService {
     void persistCategory(Category category);

     Category findByName(String name);


}
