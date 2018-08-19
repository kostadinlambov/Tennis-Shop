package kl.tennisshop.web.controllers;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserRegisterBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserUpdateBindingModel;
import kl.tennisshop.domain.models.serviceModels.UserServiceModel;
import kl.tennisshop.domain.models.viewModels.user.UserCreateViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserDeleteViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserLoginViewModel;
import kl.tennisshop.utils.responseHandler.exceptions.BadRequestException;
import kl.tennisshop.utils.responseHandler.exceptions.UserNotFoundException;
import kl.tennisshop.services.UserService;
import kl.tennisshop.utils.responseHandler.successResponse.SuccessResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {
    private static final String SERVER_ERROR_MESSAGE = "Server Error";

    private final UserService userService;
    private final ModelMapper modelMapper;
    private final ObjectMapper objectMapper;

    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper, ObjectMapper objectMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
        this.objectMapper = objectMapper;
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> registerUser(@RequestBody @Valid UserRegisterBindingModel userRegisterBindingModel) throws JsonProcessingException {
//        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);

        if (!userRegisterBindingModel.getPassword().equals(userRegisterBindingModel.getConfirmPassword())) {
//            throw new IllegalArgumentException("Passwords do not match.");
            throw new BadRequestException("Passwords do not match.");
//            return ResponseEntity.badRequest().body("Error: Passwords do not match!");
        }

        UserServiceModel user = modelMapper.map(userRegisterBindingModel, UserServiceModel.class);
        UserCreateViewModel savedUser = this.userService.createUser(user);

        if (user != null) {
            SuccessResponse successResponse = new SuccessResponse(
                    new Date(),
                    "You have been successfully registered.",
                    savedUser,
                    true);

            System.out.println(this.objectMapper.writeValueAsString(successResponse));

//            return ResponseEntity.ok(this.objectMapper.writeValueAsString(successResponse));
            return new ResponseEntity<>(this.objectMapper.writeValueAsString(successResponse), HttpStatus.OK);
        }

        throw new IllegalStateException(SERVER_ERROR_MESSAGE);
//        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        ResponseEntity.badRequest().body(new ExceptionResponse())
    }

    @PostMapping(value = "/login")
    public ResponseEntity<Object> loginUser(@Validated @RequestBody UserLoginBindingModel userLoginBindingModel) {

        UserLoginViewModel user = this.userService.loginUser(userLoginBindingModel);
        String message = "You have successfully logged in!";

//        Map<String, Object> responseBodyMap = new HashMap<>();
//        responseBodyMap

        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Incorrect email or password", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping(value = "update")
    public ResponseEntity<Object> updateUser(@RequestBody UserUpdateBindingModel userUpdateBindingModel) {
        UserServiceModel user = modelMapper.map(userUpdateBindingModel, UserServiceModel.class);

        UserCreateViewModel savedUser = this.userService.updateUser(user);
        if (user != null) {
            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        }

        throw new IllegalStateException("Server Error");

//        return this.userService.updateUser(user);

    }

    @DeleteMapping(value = "delete/{email}")
    public ResponseEntity<Object> deleteUser(@PathVariable String email) {

        UserDeleteViewModel user = this.userService.deleteUserByEmail(email);
        if (user == null) {
            throw new UserNotFoundException("User not found!");
        }

        return new ResponseEntity<>(user, HttpStatus.OK);

//        return new ResponseEntity<>("User not found!", HttpStatus.BAD_REQUEST);
    }

    @GetMapping(value = "all")
    public ResponseEntity<List<UserCreateViewModel>> getAllUsers() {

        List<UserCreateViewModel> allUsers = this.userService.getAllUsers();
        return new ResponseEntity<List<UserCreateViewModel>>(allUsers, HttpStatus.OK);

//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add("header1", "new value 1");
////        httpHeaders.add("header2", "new value 2");

//        return new ResponseEntity<List<UserCreateViewModel>>(allUsers, httpHeaders, HttpStatus.OK);
    }


}
