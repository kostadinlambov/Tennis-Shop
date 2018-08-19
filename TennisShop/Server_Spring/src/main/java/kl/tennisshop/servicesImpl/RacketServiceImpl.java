package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.Category;
import kl.tennisshop.domain.entities.Racket;
import kl.tennisshop.domain.models.bindingModels.racket.RacketCreateBindingModel;
import kl.tennisshop.domain.models.serviceModels.RacketServiceModel;
import kl.tennisshop.repositories.RacketRepository;
import kl.tennisshop.services.CategoryService;
import kl.tennisshop.services.RacketService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RacketServiceImpl implements RacketService {

    private final RacketRepository racketRepository;
    private final ModelMapper modelMapper;
    private final CategoryService categoryService;

    @Autowired
    public RacketServiceImpl(RacketRepository racketRepository, ModelMapper modelMapper, CategoryService categoryService) {
        this.racketRepository = racketRepository;
        this.modelMapper = modelMapper;
        this.categoryService = categoryService;
    }

    @Override
    public Racket persist(RacketCreateBindingModel addRacketDto) {
        Racket racket = this.modelMapper.map(addRacketDto, Racket.class);
        return this.racketRepository.saveAndFlush(racket);
    }

    @Override
    public boolean saveRacket(RacketServiceModel racketServiceModel) {

        Category category = this.categoryService.findByName(racketServiceModel.getCategory().getName());
        if(category != null){
            racketServiceModel.setCategory(category);
            Racket racket = this.modelMapper.map(racketServiceModel, Racket.class);
            Racket savedRacket = this.racketRepository.save(racket);
            return savedRacket != null;
        }
        return false;

    }

    @Override
    public boolean updateRacket(RacketServiceModel racketServiceModel){
        Racket racketFromDb = this.racketRepository.findById(racketServiceModel.getId()).orElse(null);
        if(racketFromDb != null) {
//            return this.saveRacket(racketServiceModel);
            Category category = this.categoryService.findByName(racketServiceModel.getCategory().getName());
                if(category != null){
                    racketServiceModel.setCategory(category);
                    Racket racket = this.modelMapper.map(racketServiceModel, Racket.class);
                    Racket savedRacket = this.racketRepository.saveAndFlush(racket);
                    return savedRacket != null;
                }
        }
        return false;
    }


    @Override
    public void persistRacket(Racket racket) {
        this.racketRepository.save(racket);
    }

    @Override
    public List<Racket> findAllRacketsByCategory(Category category) {
        return this.racketRepository.findAllByCategory(category);
    }

    @Override
    public Racket getByName(String name) {
        return this.racketRepository.findByName(name);
    }

    @Override
    public List<RacketServiceModel> getAllRackets() {
//        List<Racket> rackets = this.racketRepository.findAll();
//        List<RacketServiceModel> racketServiceModels = new ArrayList<>();
//        for (Racket racket : rackets) {
//            RacketServiceModel racketServiceModel = this.modelMapper.map(racket,RacketServiceModel.class);
//            racketServiceModels.add(racketServiceModel);
//        }
//        return racketServiceModels;

        return this.racketRepository
                .findAll()
                .stream()
                .map(x-> this.modelMapper.map(x, RacketServiceModel.class))
                .collect(Collectors.toUnmodifiableList());
    }

    @Override
    public RacketServiceModel getById(String id) {
        Racket racket = this.racketRepository.findById(id).orElse(null);

        if(racket != null){
          return  this.modelMapper.map(racket, RacketServiceModel.class);
        }
        return null;
    }

    @Override
    public Racket getFirstRacketByName(String name) {
      return  this.racketRepository.findFirstByName(name);
    }
}
