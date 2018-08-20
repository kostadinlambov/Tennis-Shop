package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.UserRole;
import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserUpdateBindingModel;
import kl.tennisshop.domain.models.serviceModels.UserServiceModel;
import kl.tennisshop.domain.models.viewModels.user.UserAllViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserCreateViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserDeleteViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserLoginViewModel;
import kl.tennisshop.utils.constants.ResponseMessageConstants;
import kl.tennisshop.utils.modelMapper.ModelMapperConfig;
import kl.tennisshop.domain.entities.User;
import kl.tennisshop.domain.models.bindingModels.user.UserRegisterBindingModel;
import kl.tennisshop.repositories.RoleRepository;
import kl.tennisshop.repositories.UserRepository;
import kl.tennisshop.services.UserService;
import kl.tennisshop.utils.responseHandler.exceptions.CustomException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository, ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public User persist(User user) {
        return this.userRepository.save(user);
    }



    @Override
    public UserCreateViewModel createUser(UserServiceModel userServiceModel) {

        User userEntity = this.modelMapper.map(userServiceModel, User.class);

        userEntity.setPassword(this.bCryptPasswordEncoder
                .encode(userEntity.getPassword()));

        UserRole adminRole = this.roleRepository.findByAuthority("ADMIN");
        UserRole userRole = this.roleRepository.findByAuthority("USER");
        UserRole rootRole = this.roleRepository.findByAuthority("ROOT");
        Set<UserRole> roles = new HashSet<>();
        if (this.userRepository.findAll().isEmpty()) {
            roles.add(rootRole);
//            roles.add(moderatorRole);
        }else{
            roles.add(userRole);
        }

        userEntity.setAuthorities(roles);

        User user = this.userRepository.saveAndFlush(userEntity);
        if (user != null) {
            return this.modelMapper.map(userEntity, UserCreateViewModel.class);
        }

        return null;
    }

    @Override
    public UserCreateViewModel updateUser(UserServiceModel userServiceModel) {
        User userOrigin = this.userRepository.getOne(userServiceModel.getId());

        if (userOrigin != null) {
            User userEntity = this.modelMapper.map(userServiceModel, User.class);
            userEntity.setPassword(userOrigin.getPassword());

            User updatedUser = this.userRepository.save(userEntity);
            return this.modelMapper.map(updatedUser, UserCreateViewModel.class);
//            return updatedUser;
        }

        return null;
    }

    @Override
    public User getByUsername(String username) {
        User user = this.userRepository.findByUsername(username).orElse(null);
        if (user != null) {
            return user;
        }
        return null;
    }


    @Override
    public User getByIdUser(String id) {
        User user = this.userRepository.findById(id).orElse(null);
        if (user != null) {
            return user;
        }
        return null;
    }

    @Override
    public User getByFirstName(String firstName) {
        return this.userRepository.findAllByFirstName(firstName);
    }

    @Override
    public User getByEmail(String email) {
        User user = this.userRepository.findByEmail(email);
        if (user != null) {
            return user;
        }
        return null;
    }

    @Override
    public List<UserServiceModel> getAllUsers() {
        return this.userRepository
                .findAll()
                .stream()
                .map(x -> this.modelMapper.map(x, UserServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDeleteViewModel deleteUserByEmail(String email) {

        User user = this.userRepository.findByEmail(email);

        if (user != null) {
            this.userRepository.delete(user);
            return this.modelMapper.map(user, UserDeleteViewModel.class);
        }
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userRepository
                .findByUsername(username)
                .orElse(null);

        if (user == null) throw new UsernameNotFoundException("No such user.");

        return user;
    }


//    @Override
//    public void update(UserDto userDto, String id) {
//        User user = this.userRepository.findById(id).orElse(null);
//
//
//        if (user != null) {
//            user.setEmail(userDto.getEmail());
//            user.setFirstName(userDto.getFirstName());
//            user.setLastName(userDto.getLastName());
//
////            user.setAuthorities(user.getAuthorities().addAll(userDto.getAuthorities()));
//            user.getAuthorities().addAll(userDto.getAuthorities());
//            Set<UserRole> roles = user.getAuthorities();
//            System.out.println(roles);
//        }
//
//        this.userRepository.save(user);
//    }

    public boolean promoteUser(String id) {
        User user = this.userRepository
                .findById(id)
                .orElse(null);

        if(user == null) return false;

        String userAuthority = this.getUserAuthority(user.getId());

        switch (userAuthority) {
            case "USER":
                user.setAuthorities(this.getAuthorities("ADMIN"));
                break;
//            case "ADMIN":
//                user.setAuthorities(this.getAuthorities("ROOT"));
//                break;
            default:
                throw new CustomException("There is no role, higher than Admin");
        }

        this.userRepository.saveAndFlush(user);
        return true;
    }

    @Override
    public boolean demoteUser(String id) {
        User user = this.userRepository
                .findById(id)
                .orElse(null);

        if(user == null) return false;

        String userAuthority = this.getUserAuthority(user.getId());

        switch (userAuthority) {
//            case "ROOT":
//                user.setAuthorities(this.getAuthorities("ADMIN"));
//                break;
            case "ADMIN":
                user.setAuthorities(this.getAuthorities("USER"));
                break;
            default:
                throw new CustomException("There is no role, lower than USER");
        }

        this.userRepository.saveAndFlush(user);
        return true;
    }

    private Set<UserRole> getAuthorities(String authority) {
        Set<UserRole> userAuthorities = new HashSet<>();

        userAuthorities.add(this.roleRepository.getByAuthority(authority));

        return userAuthorities;
    }

    private String getUserAuthority(String userId) {
        return this
                .userRepository
                .findById(userId)
                .get()
                .getAuthorities()
                .stream()
                .findFirst()
                .get()
                .getAuthority();
    }


    // TODO: Delete all login method in User Controller, Service and Repository
    @Override
    public UserLoginBindingModel login(String email, String password) {
        User user = this.userRepository.findByEmailAndPassword(email, password);
        UserLoginBindingModel loggedInUserDto = null;
        if (user != null) {
            loggedInUserDto = ModelMapperConfig.getInstance().map(user, UserLoginBindingModel.class);
        }

        return loggedInUserDto;
    }

    // TODO: Delete all login method in User Controller, Service and Repository
    @Override
    public UserLoginViewModel loginUser(UserLoginBindingModel userLoginBindingModel) {
//        User user = this.userRepository.findByEmail(userLoginBindingModel.getEmail());
        User user = this.userRepository
                .findByUsername(userLoginBindingModel.getUsername())
                .orElse(null);

        if (user != null) {
            String enteredPassword = this.bCryptPasswordEncoder.encode(userLoginBindingModel.getPassword());

            if (user.getPassword().equals(enteredPassword)) {
                return this.modelMapper.map(user, UserLoginViewModel.class);
            }
        }
        throw new CustomException(ResponseMessageConstants.INVALID_CREDENTIALS_ERROR_MESSAGE);
    }
}
