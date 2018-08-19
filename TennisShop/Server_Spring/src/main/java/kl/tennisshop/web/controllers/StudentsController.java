//package kl.tennisshop.web.controllers;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.ModelAndView;
//
//@Controller
//@RequestMapping("/students")
//public class StudentsController extends BaseController {
////    private final StudentService studentService;
////
//    @Autowired
//    public StudentsController(StudentService studentService) {
//        this.studentService = studentService;
//    }
//
//    @PostMapping("/create")
//    public ModelAndView createStudent(CreateStudentBindingModel createStudentBindingModel) {
//        this.studentService.create(createStudentBindingModel);
//
//        return this.redirect("all");
//    }
//
//    @GetMapping(value = "/all", produces = "application/json")
//    public @ResponseBody Object allStudents() {
//
//        return this.studentService.getAll();
//    }
//
//    @GetMapping("/all")
//    public ModelAndView allStudents(ModelAndView modelAndView) {
//        modelAndView.addObject("students", this.studentService.getAll());
//
//        return this.view("students-all", modelAndView);
//    }
//
//
//
//    @GetMapping("/details/{id}")
//    public @ResponseBody
//    String details(@PathVariable String id) {
//        return this
//                .studentService
//                .findById(id)
//                .extractStudentAsString();
//    }
//}
//
////import org.springframework.http.MediaType;
////import org.springframework.web.bind.annotation.GetMapping;
////
////@GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
////public ResponseEntity<Object>  allStudents() {
////
////        List<RacketViewModel> all = this.racketService.getAll();
//////        Racket babolat_pure_drive = this.racketService.getFirstRacketByName("Babolat Pure Drive");
//////        System.out.println(all);
//////        return babolat_pure_drive;
////
////        return new ResponseEntity<Object>(all, HttpStatus.OK);
////        }
