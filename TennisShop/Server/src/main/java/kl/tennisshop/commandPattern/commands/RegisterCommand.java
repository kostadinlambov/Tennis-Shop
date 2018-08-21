package kl.tennisshop.commandPattern.commands;

import kl.tennisshop.config.validation.ValidatorConfig;
import kl.tennisshop.domain.models.bindingModels.user.UserRegisterBindingModel;
import kl.tennisshop.services.*;

public class RegisterCommand extends Command {
    public RegisterCommand(CategoryService categoryService, FeedbackService feedbackService, OrderService orderService, PaymentService paymentService, RacketService racketService, RoleService roleService, UserService userService) {
        super(categoryService, feedbackService, orderService, paymentService, racketService, roleService, userService);
    }


    @Override
    public String execute(String... params) {
//        String[] newUserParams =  new String[]{
//                "Pesho", "Peshov",  "pesho@abv.bg", "1111", "1111", "Vasil Levski 20", "Sofia"
//        };

        UserRegisterBindingModel registerUser = new UserRegisterBindingModel();

        registerUser.setFirstName(params[0]);
        registerUser.setLastName(params[1]);
        registerUser.setEmail(params[2]);
        registerUser.setPassword(params[3]);
        registerUser.setConfirmPassword(params[4]);
        registerUser.setAddress(params[5]);
        registerUser.setCity(params[6]);
        //        registerUser.setDeleted(false);

        if (!ValidatorConfig.checkIsValid(registerUser)) {
            return ValidatorConfig.getInvalidParameterMessage(registerUser);
        }

//        try {
//            super.getUserService().createUser(registerUser);
//        } catch (Exception e) {
//            return e.getMessage();
//        }

       // super.getUserService().persistRegisterDto(registerUser);

        return String.format("%s have successfully registered and logged in!", params[2]);
    }
}
