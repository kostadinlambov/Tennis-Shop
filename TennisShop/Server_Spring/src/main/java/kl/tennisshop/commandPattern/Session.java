package kl.tennisshop.commandPattern;

import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;

public class Session {
    private static UserLoginBindingModel currentLoggedInUserDto;

    public static UserLoginBindingModel getCurrentLoggedInUserDto() {
        return currentLoggedInUserDto;
    }

    public static void setCurrentLoggedInUserDto(UserLoginBindingModel loggedInUserDto) {
        Session.currentLoggedInUserDto = loggedInUserDto;
    }
}
