package kl.tennisshop.services;


import kl.tennisshop.domain.entities.Category;
import kl.tennisshop.domain.entities.Racket;
import kl.tennisshop.domain.models.bindingModels.racket.RacketCreateBindingModel;
import kl.tennisshop.domain.models.serviceModels.RacketServiceModel;

import java.util.List;

public interface RacketService {

    Racket persist(RacketCreateBindingModel addRacketDto);

    boolean saveRacket(RacketServiceModel racketServiceModel);

    boolean updateRacket(RacketServiceModel racketServiceModel);

    void persistRacket(Racket racket);

    List<Racket> findAllRacketsByCategory(Category category);

    Racket getByName(String name);

    Racket getFirstRacketByName(String name);

    List<RacketServiceModel> getAllRackets();

    RacketServiceModel getById(String id);

    boolean deleteById(String id);
}