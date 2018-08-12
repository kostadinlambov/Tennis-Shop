package kl.tennisshop.servicesImpl;

import kl.tennisshop.entities.Category;
import kl.tennisshop.entities.Racket;
import kl.tennisshop.models.bindingModels.racket.AddRacketDto;
import kl.tennisshop.models.viewModels.racket.RacketViewModel;
import kl.tennisshop.repositories.RacketRepository;
import kl.tennisshop.services.RacketService;
import kl.tennisshop.utils.modelMapper.ModelMapperConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class RacketServiceImpl implements RacketService {

    private final RacketRepository racketRepository;

    @Autowired
    public RacketServiceImpl(RacketRepository racketRepository) {
        this.racketRepository = racketRepository;
    }

    @Override
    public Racket persist(AddRacketDto addRacketDto) {
        Racket racket = ModelMapperConfig.getInstance().map(addRacketDto, Racket.class);
        return this.racketRepository.saveAndFlush(racket);
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
    public List<RacketViewModel> getAll() {
        List<Racket> rackets = this.racketRepository.findAll();
        List<RacketViewModel> racketViewModels = new ArrayList<>();
        for (Racket racket : rackets) {
            RacketViewModel racketViewModel = ModelMapperConfig.getInstance().map(racket,RacketViewModel.class);
            racketViewModels.add(racketViewModel);
        }
        return racketViewModels;
    }
}
