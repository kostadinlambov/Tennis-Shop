package kl.tennisshop.services;

import kl.tennisshop.domain.entities.User;
import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserUpdateBindingModel;
import kl.tennisshop.domain.models.serviceModels.UserServiceModel;
import kl.tennisshop.domain.models.viewModels.user.UserAllViewModel;
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

    // TODO: Delete all login method in User Controller, Service and Repository
    UserLoginBindingModel login(String email, String Password);

    // TODO: Delete all login method in User Controller, Service and Repository
    UserLoginViewModel loginUser(UserLoginBindingModel userLoginBindingModel);

    List<UserServiceModel> getAllUsers();

    UserDeleteViewModel deleteUserByEmail(String email);

    boolean promoteUser(String id);

    boolean demoteUser(String id);


//    void update(UserDto userDto, String id);


}
