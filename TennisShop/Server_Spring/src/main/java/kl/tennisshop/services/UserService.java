package kl.tennisshop.services;

import kl.tennisshop.domain.entities.User;
import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserUpdateBindingModel;
import kl.tennisshop.domain.models.serviceModels.UserServiceModel;
import kl.tennisshop.domain.models.viewModels.user.UserCreateViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserDeleteViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserLoginViewModel;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends  UserDetailsService {
    User persist(User user);

    UserCreateViewModel createUser(UserServiceModel userRegisterBindingModel);

    UserCreateViewModel updateUser(UserServiceModel userUpdateBindingModel);

//    UserDto getById(String id);

    User getByUsername(String username);

    User getByIdUser(String id);

    User getByFirstName(String firstName);

    User getByEmail(String email);

    UserLoginBindingModel login(String email, String Password);

    UserLoginViewModel loginUser(UserLoginBindingModel userLoginBindingModel);

    List<UserCreateViewModel> getAllUsers();

    UserDeleteViewModel deleteUserByEmail(String email);


//    void update(UserDto userDto, String id);


}
