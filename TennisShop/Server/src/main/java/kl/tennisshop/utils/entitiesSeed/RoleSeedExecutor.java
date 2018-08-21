//package kl.tennisshop.utils.entitiesSeed;
//
//import kl.tennisshop.domain.entities.UserRole;
//import kl.tennisshop.repositories.RoleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
//import javax.annotation.PostConstruct;
//
//@Component
//public class RoleSeedExecutor {
//    private final RoleRepository roleRepository;
//
//    @Autowired
//    public RoleSeedExecutor(RoleRepository roleRepository) {
//        this.roleRepository = roleRepository;
//    }
//
//    @PostConstruct
//    public void insertRoles() {
//        if(roleRepository.count() == 0L ){
//            UserRole role1 = new UserRole();
//            UserRole role2 = new UserRole();
//            UserRole role3 = new UserRole();
//            role1.setAuthority("ADMIN");
//            role2.setAuthority("USER");
//            role3.setAuthority("ROOT");
//            this.roleRepository.save(role1);
//            this.roleRepository.save(role2);
//            this.roleRepository.save(role3);
//        }
//    }
//}
