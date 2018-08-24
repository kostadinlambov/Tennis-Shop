package kl.tennisshop.web.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import kl.tennisshop.domain.models.bindingModels.racket.RacketCreateBindingModel;
import kl.tennisshop.domain.models.bindingModels.racket.RacketEditBindingModel;
import kl.tennisshop.domain.models.serviceModels.RacketServiceModel;
import kl.tennisshop.domain.models.viewModels.racket.RacketAllViewModel;
import kl.tennisshop.domain.models.viewModels.racket.RacketDetailsViewModel;
import kl.tennisshop.services.RacketService;
import kl.tennisshop.utils.constants.ResponseMessageConstants;
import kl.tennisshop.utils.responseHandler.exceptions.CustomException;
import kl.tennisshop.utils.responseHandler.successResponse.SuccessResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/rackets")
public class RacketController {
    private RacketService racketService;
    private ModelMapper modelMapper;
    private ObjectMapper objectMapper;

    @Autowired
    public RacketController(RacketService racketService, ModelMapper modelMapper, ObjectMapper objectMapper) {
        this.racketService = racketService;
        this.modelMapper = modelMapper;
        this.objectMapper = objectMapper;
    }

    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity createRacket(@RequestBody @Valid RacketCreateBindingModel racketCreateBindingModel) throws JsonProcessingException {

        boolean result = this.racketService.saveRacket(this.modelMapper.map(racketCreateBindingModel, RacketServiceModel.class));

        if (result) {
            SuccessResponse successResponse = new SuccessResponse(
                    new Date(),
                    "Racket have been successfully added.",
                    "",
                    true);

            System.out.println(this.objectMapper.writeValueAsString(successResponse));

//            return ResponseEntity.ok(this.objectMapper.writeValueAsString(successResponse));
            return new ResponseEntity<>(this.objectMapper.writeValueAsString(successResponse), HttpStatus.OK);
//        return ResponseEntity.created(new URI("/rackets/create")).body(result);
        }
        throw new CustomException(ResponseMessageConstants.SERVER_ERROR_MESSAGE);
    }

    @PutMapping(value = "/edit", produces = "application/json")
    public ResponseEntity updateRacket(@RequestBody @Valid RacketEditBindingModel racketEditBindingModel) throws JsonProcessingException {
        boolean result = this.racketService.updateRacket(this.modelMapper.map(racketEditBindingModel, RacketServiceModel.class));

        if (result) {
            SuccessResponse successResponse = new SuccessResponse(
                    new Date(),
                    "Racket have been successfully edited.",
                    "",
                    true);
//            return ResponseEntity.ok(this.objectMapper.writeValueAsString(successResponse));
            return new ResponseEntity<>(this.objectMapper.writeValueAsString(successResponse), HttpStatus.OK);
//        return ResponseEntity.created(new URI("/rackets/create")).body(result);
        }
        throw new CustomException(ResponseMessageConstants.SERVER_ERROR_MESSAGE);
    }


    @GetMapping(value = "/all", produces = "application/json")
    public @ResponseBody
    List<RacketAllViewModel> allRackets() {
        return this.racketService
                .getAllRackets()
                .stream()
                .map(x -> this.modelMapper.map(x, RacketAllViewModel.class))
                .collect(Collectors.toList());
    }

    @GetMapping(value = "/details/{id}", produces = "application/json")
    public @ResponseBody RacketDetailsViewModel getRacketDetails(@PathVariable String id) {
        return this.modelMapper.map(this.racketService.getById(id), RacketDetailsViewModel.class);
    }

    @DeleteMapping(value = "/delete/{id}", produces = "application/json")
    public ResponseEntity deleteRacket(@PathVariable String id) throws JsonProcessingException {
        boolean result = this.racketService.deleteById(id);

        if (result) {
            SuccessResponse successResponse = new SuccessResponse(
                    new Date(),
                    "Racket have been successfully deleted.",
                    "",
                    true);
            return new ResponseEntity<>(this.objectMapper.writeValueAsString(successResponse), HttpStatus.OK);
        }
        throw new CustomException(ResponseMessageConstants.SERVER_ERROR_MESSAGE);
    }


}
