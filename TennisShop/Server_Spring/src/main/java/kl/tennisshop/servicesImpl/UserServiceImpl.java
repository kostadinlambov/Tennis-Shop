package kl.tennisshop.servicesImpl;

import kl.tennisshop.models.bindingModels.user.LoggedInUserDto;
import kl.tennisshop.utils.modelMapper.ModelMapperConfig;
import kl.tennisshop.entities.Role;
import kl.tennisshop.entities.User;
import kl.tennisshop.models.bindingModels.user.RegisterUserDto;
import kl.tennisshop.repositories.RoleRepository;
import kl.tennisshop.repositories.UserRepository;
import kl.tennisshop.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public User persist(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User persistRegisterDto(RegisterUserDto registerUser) {

        User user = ModelMapperConfig.getInstance().map(registerUser, User.class);

        Role adminRole = this.roleRepository.findByName("ADMIN");
        Role userRole = this.roleRepository.findByName("USER");
        Set<Role> roles = new HashSet<>();
        if(this.userRepository.findAll().size() == 0){
            roles.add(adminRole);

        }

        roles.add(userRole);
        user.setRoles(roles);
        this.userRepository.saveAndFlush(user);


//        User user = new User();
//
//        user.setEmail(regUserDto.getEmail());
//        user.setPassword(regUserDto.getPassword());
//        user.setFirstName(regUserDto.getFirstName());
//        user.setLastName(regUserDto.getLastName());
//        user.setCity(regUserDto.getCity());
//        user.setAddress(regUserDto.getAddress());
//        user.setDeleted(false);

//        return this.userRepository.save();
        return user;
    }

//    @Override
//    public UserDto getById(String id) {
//        UserDto userDto = new UserDto();
//
//        // Option 1
//        User user = this.userRepository.findById(id).orElse(null);
//        if (user != null) {
//            userDto.setEmail(user.getEmail());
//            userDto.setFirstName(user.getFirstName());
//            userDto.setLastName(user.getLastName());
//        }
//
//        // Option 2
////        Optional<User> user = this.userRepository.findById(id);
////        if(user.isPresent()){
////            userDto.setEmail(user.get().getEmail());
////            userDto.setFirstName(user.get().getFirstName());
////            userDto.setLastName(user.get().getLastName());
////        }
//
//        return userDto;
//    }

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
        return this.userRepository.findByEmail(email);
    }

    @Override
    public LoggedInUserDto login(String email, String password) {
        User user = this.userRepository.findByEmailAndPassword(email, password);
        LoggedInUserDto loggedInUserDto = null;
        if(user != null){
            loggedInUserDto = ModelMapperConfig.getInstance().map(user, LoggedInUserDto.class);
        }

        return loggedInUserDto;
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
////            user.setRoles(user.getRoles().addAll(userDto.getRoles()));
//            user.getRoles().addAll(userDto.getRoles());
//            Set<Role> roles = user.getRoles();
//            System.out.println(roles);
//        }
//
//        this.userRepository.save(user);
//    }
}
