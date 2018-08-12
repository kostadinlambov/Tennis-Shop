package kl.tennisshop.services;


import kl.tennisshop.entities.Category;
import kl.tennisshop.entities.Racket;
import kl.tennisshop.models.bindingModels.racket.AddRacketDto;
import kl.tennisshop.models.viewModels.racket.RacketViewModel;

import java.util.List;

public interface RacketService  {

    Racket persist(AddRacketDto addRacketDto);

    void persistRacket(Racket racket);

    List<Racket> findAllRacketsByCategory(Category category);

    Racket getByName(String name);

    List<RacketViewModel> getAll();



}
