package kl.tennisshop.command;

import kl.tennisshop.models.bindingModels.user.LoggedInUserDto;
import kl.tennisshop.services.*;
import kl.tennisshop.utils.Session;

public class LoginCommand extends Command {
    public LoginCommand(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
        super(categoryService, feedbackService, orderService, paymentService, racketService, roleService, userService);
    }

    @Override
    public String execute(String... params) {
        String email = params[0];
        String password = params[1];

        if(Session.getCurrentLoggedInUserDto() != null){
            return "User already logged in.";
        }

        LoggedInUserDto loggedInUserDto = super.getUserService().login(email, password);
        if(loggedInUserDto == null){
            return "Incorrect email/password.";
        }

        Session.setCurrentLoggedInUserDto(loggedInUserDto);


        return String.format("%s have successfully logged in.", params[0]);
    }
}
