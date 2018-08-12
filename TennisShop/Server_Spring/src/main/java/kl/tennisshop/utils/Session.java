package kl.tennisshop.utils;

import kl.tennisshop.models.bindingModels.user.LoggedInUserDto;

public class Session {
    private static LoggedInUserDto currentLoggedInUserDto;

    public static LoggedInUserDto getCurrentLoggedInUserDto() {
        return currentLoggedInUserDto;
    }

    public static void setCurrentLoggedInUserDto(LoggedInUserDto loggedInUserDto) {
        Session.currentLoggedInUserDto = loggedInUserDto;
    }
}
