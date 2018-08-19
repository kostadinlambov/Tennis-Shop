//package kl.tennisshop;
//
//import kl.tennisshop.services.*;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import java.lang.reflect.Executable;
//
//@Component
//public class CommandFactory {
//
//    private UserService userService;
//    private CategoryService categoryService;
//    private FeedbackService feedbackService;
//    private OrderService orderService;
//    private PaymentService paymentService;
//    private RacketService racketService;
//    private RoleService roleService;
//
//    @Autowired
//    public CommandFactory(UserService userService, CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService) {
//        this.userService = userService;
//        this.categoryService = categoryService;
//        this.feedbackService = feedbackService;
//        this.orderService = orderService;
//        this.paymentService = paymentService;
//        this.racketService = racketService;
//        this.roleService = roleService;
//    }
//
//
//    public Executable getCommand(String command){
//        switch(command){
//            case "Register":
//                return new RegisterCommand(this.categoryService, this.feedbackService, this.orderService, this.paymentService, this.racketService, this.roleService, this.userService);
//            case "Login":
//                return  new LoginCommand(this.categoryService, this.feedbackService, this.orderService, this.paymentService, this.racketService, this.roleService, this.userService);
//            case "Logout":
//                return  new LogoutCommand(this.categoryService, this.feedbackService, this.orderService, this.paymentService, this.racketService, this.roleService, this.userService);
//            case "AddRacket":
//                return  new AddRacketCommand(this.categoryService, this.feedbackService, this.orderService, this.paymentService, this.racketService, this.roleService, this.userService);
//            case "AllRackets":
//                return  new AllRacketsCommand(this.categoryService, this.feedbackService, this.orderService, this.paymentService, this.racketService, this.roleService, this.userService);
//        }
//
//        return  null;
//    }
//
//}
