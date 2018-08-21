package kl.tennisshop.web.controllers;

import kl.tennisshop.domain.entities.Racket;
import kl.tennisshop.domain.models.serviceModels.RacketServiceModel;
import kl.tennisshop.domain.models.viewModels.racket.RacketViewModel;
import kl.tennisshop.services.RacketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@Controller
@RestController
//@RequestMapping("/racket")
public class HomeController {

    private RacketService racketService;

    @Autowired
    public HomeController(RacketService racketService) {
        this.racketService = racketService;
    }

//    @GetMapping("/indexPage")
//    public @ResponseBody String index(){
//        List<RacketViewModel> allrackets = this.racketService.getAll();
//        StringBuilder sb = new StringBuilder();
//        for (RacketViewModel racket : allrackets) {
//            sb.append(racket.toString());
//            sb.append("<br>");
//        }
//        return sb.toString();
//    }

    @GetMapping("/indexPage")
    public  String index(Model model){
//        List<RacketViewModel> allrackets = this.racketService.getAll();
//        StringBuilder sb = new StringBuilder();
//        for (RacketViewModel racket : allrackets) {
//            sb.append(racket.toString());
//            sb.append("<br>");
//        }
        model.addAttribute("name","Pesho");
        return "Hello";
    }

    @GetMapping(value = "/all", produces = "application/json")
    public @ResponseBody Object allStudents() {

        List<RacketServiceModel> all = this.racketService.getAllRackets();
        Racket babolat_pure_drive = this.racketService.getFirstRacketByName("Babolat Pure Drive");
        System.out.println(all);
        return all;
    }

    @GetMapping(value = "/test", produces = "application/json")
//    @CrossOrigin(value = "http://localhost:4200",allowedHeaders = "*",exposedHeaders = "Content-Type", methods = {RequestMethod.GET,RequestMethod.POST} )
    public @ResponseBody List<RacketServiceModel> allTestStudents() {

        List<RacketServiceModel> all = this.racketService.getAllRackets();
        Racket babolat_pure_drive = this.racketService.getFirstRacketByName("Babolat Pure Drive");
        System.out.println(all);
        return all;
    }

    @GetMapping(value = "/rackets", produces = "application/json")
    public List<RacketServiceModel> allRackets() {

        List<RacketServiceModel> all = this.racketService.getAllRackets();
        Racket babolat_pure_drive = this.racketService.getFirstRacketByName("Babolat Pure Drive");
        System.out.println(all);
        return all;
    }

    @GetMapping(value = "/rackets/{name}",  produces = "application/json")
    public Racket oneRacket(@PathVariable("name") String name){
        return this.racketService.getByName(name);
    }

    @PostMapping(value = "/users")
    public void save(Racket racket){
        this.racketService.persistRacket(racket);
    }
}
