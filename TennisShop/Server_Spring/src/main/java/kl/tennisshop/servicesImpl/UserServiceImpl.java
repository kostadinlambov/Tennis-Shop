package kl.tennisshop.servicesImpl;

import kl.tennisshop.domain.entities.UserRole;
import kl.tennisshop.domain.models.bindingModels.user.UserLoginBindingModel;
import kl.tennisshop.domain.models.bindingModels.user.UserUpdateBindingModel;
import kl.tennisshop.domain.models.serviceModels.UserServiceModel;
import kl.tennisshop.domain.models.viewModels.user.UserCreateViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserDeleteViewModel;
import kl.tennisshop.domain.models.viewModels.user.UserLoginViewModel;
import kl.tennisshop.utils.modelMapper.ModelMapperConfig;
import kl.tennisshop.domain.entities.User;
import kl.tennisshop.domain.models.bindingModels.user.UserRegisterBindingModel;
import kl.tennisshop.repositories.RoleRepository;
import kl.tennisshop.repositories.UserRepository;
import kl.tennisshop.services.UserService;
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
            roles.add(adminRole);
            roles.add(rootRole);
        }

        roles.add(userRole);
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
    public UserLoginBindingModel login(String email, String password) {
        User user = this.userRepository.findByEmailAndPassword(email, password);
        UserLoginBindingModel loggedInUserDto = null;
        if (user != null) {
            loggedInUserDto = ModelMapperConfig.getInstance().map(user, UserLoginBindingModel.class);
        }

        return loggedInUserDto;
    }

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
        return null;
    }

    @Override
    public List<UserCreateViewModel> getAllUsers() {
        List<User> users = this.userRepository.findAll();
        List<UserCreateViewModel> usersViewModelList = new ArrayList<>();

//        for (User user : users) {
//            UserCreateViewModel  mappedUser = this.modelMapper.map(user, UserCreateViewModel.class);
//            Set<String> roleSet = new HashSet<>();
//            for (UserRole role : user.getAuthorities()) {
//                String roleName = role.getAuthority();
//                roleSet.add(roleName);
//            }
//            mappedUser.setRoleName(roleSet);
//            usersViewModelList.add(mappedUser);
//        }

        for (User user : users) {
            UserCreateViewModel mappedUser = this.modelMapper.map(user, UserCreateViewModel.class);
            Set<String> roleSet = new HashSet<>();
            for (UserRole role : user.getAuthorities()) {
                String roleName = role.getAuthority();
                roleSet.add(roleName);
            }
            mappedUser.setRoles(roleSet);
            usersViewModelList.add(mappedUser);
        }

        return usersViewModelList;
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
}
