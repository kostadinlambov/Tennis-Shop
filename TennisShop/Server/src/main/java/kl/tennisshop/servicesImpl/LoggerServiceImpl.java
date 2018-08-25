package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.Logger;
import kl.tennisshop.domain.models.serviceModels.LoggerServiceModel;
import kl.tennisshop.repositories.LoggerRepository;
import kl.tennisshop.services.LoggerService;
import kl.tennisshop.utils.responseHandler.exceptions.CustomException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class LoggerServiceImpl implements LoggerService {

    private final ModelMapper modelMapper;
    private final LoggerRepository loggerRepository;

    @Autowired
    public LoggerServiceImpl(ModelMapper modelMapper, LoggerRepository loggerRepository) {
        this.loggerRepository = loggerRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public void saveLog(Logger logger) {
        Logger logger1 = this.loggerRepository.saveAndFlush(logger);
        System.out.println(logger1);
        if(logger1 != null) {
            System.out.println("Log was written successfully");
        }else{
            System.out.println("Failure log saving");
        }
    }

    @Override
    public List<LoggerServiceModel> getAllLogs() {
        return this.loggerRepository
                .findAllByOrderByTimeDesc()
                .stream()
                .map(x -> this.modelMapper.map(x, LoggerServiceModel.class))
                .collect(Collectors.toUnmodifiableList());

    }

    @Override
    public List<LoggerServiceModel> getLogsByUsername(String username) {
        return this.loggerRepository
                .findAllByUsernameOrderByTimeDesc(username)
                .stream()
                .map(x -> this.modelMapper.map(x, LoggerServiceModel.class))
                .collect(Collectors.toUnmodifiableList());
    }

    @Override
    public boolean deleteAll() {
        try{
            this.loggerRepository.deleteAll();

        }catch (Exception e){
            throw new CustomException("Logs clearing error.");
        }
        return true;
    }

    @Scheduled(cron = "* */10 * * * *")
    public void testSchedule(){
        System.out.println("Logs deleted successfully");
        this.deleteAll();
    }
}


