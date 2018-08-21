package kl.tennisshop.commandPattern.commands;

import kl.tennisshop.services.*;

public class LogoutCommand extends Command {
    public LogoutCommand(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
        super(categoryService, feedbackService, orderService, paymentService, racketService, roleService, userService);
    }

    @Override
    public String execute(String... params) {
//        if(Session.getCurrentLoggedInUserDto() == null){
//            return "Cannot log out. No user was logged in.";
//        }
//
//        UserLoginBindingModel loggedInUserDto = Session.getCurrentLoggedInUserDto();
//        Session.setCurrentLoggedInUserDto(null);
//
//
//        return String.format("User %s successfully logged out", loggedInUserDto.getEmail());
        return null;
    }
}
