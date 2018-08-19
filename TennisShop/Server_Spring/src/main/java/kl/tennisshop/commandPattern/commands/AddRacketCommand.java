//package kl.tennisshop.commandPattern.commands;
//
//import kl.tennisshop.domain.entities.Category;
//import kl.tennisshop.domain.models.bindingModels.racket.RacketCreateBindingModel;
//import kl.tennisshop.services.*;
//import kl.tennisshop.commandPattern.Session;
//import kl.tennisshop.config.validation.ValidatorConfig;
//
//import java.math.BigDecimal;
//
//public class AddRacketCommand extends Command {
//    public AddRacketCommand(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
//        super(categoryService, feedbackService, orderService, paymentService, racketService, roleService, userService);
//    }
//
//    @Override
//    public String execute(String... params) {
////        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
////        try {
////            Date date = simpleDateFormat.parse("20-05-2018");
////        } catch (ParseException e) {
////            e.printStackTrace();
////        }
//
//        if (Session.getCurrentLoggedInUserDto() == null) {
//            return "No user logged in";
//        }
//
//
////        boolean isAdmin = false;
////        for (UserRole role : Session.getCurrentLoggedInUserDto().getAuthorities()) {
////            System.out.println("---UserRole: " + role.getAuthority());
////            if (role.getAuthority().equals("ADMIN")) {
////                isAdmin = true;
////            }
////        }
//
////        if (!isAdmin) {
////            return "Only admins can add Rackets.";
////        }
//        Category category = this.getCategoryService().findByName(params[9]);
//
//        RacketCreateBindingModel addRacketDto = new RacketCreateBindingModel(params[0], params[1], new BigDecimal(params[2]), Integer.valueOf(params[3]), Integer.valueOf(params[4]), params[5], params[6], params[7], params[8], category);
//
//        if (!ValidatorConfig.checkIsValid(addRacketDto)) {
//            return ValidatorConfig.getInvalidParameterMessage(addRacketDto);
//        }
//        super.getRacketService().persist(addRacketDto);
//
//        return String.format("Added %s", params[0]);
//
//    }
//}
