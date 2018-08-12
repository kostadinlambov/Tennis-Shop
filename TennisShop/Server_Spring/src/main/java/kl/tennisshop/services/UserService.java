package kl.tennisshop.services;

import kl.tennisshop.entities.User;
import kl.tennisshop.models.bindingModels.user.LoggedInUserDto;
import kl.tennisshop.models.bindingModels.user.RegisterUserDto;

public interface UserService {
    User persist(User user);

    User persistRegisterDto(RegisterUserDto registerUser);

//    UserDto getById(String id);

    User getByIdUser(String id);

    User getByFirstName(String firstName);

    User getByEmail(String email);

    LoggedInUserDto login(String email, String Password);


//    void update(UserDto userDto, String id);


}
