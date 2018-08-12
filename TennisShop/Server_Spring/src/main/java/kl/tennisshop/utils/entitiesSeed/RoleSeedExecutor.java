package kl.tennisshop.utils.entitiesSeed;

import kl.tennisshop.entities.Role;
import kl.tennisshop.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class RoleSeedExecutor {
    private final RoleRepository roleRepository;

    @Autowired
    public RoleSeedExecutor(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @PostConstruct
    public void insertRoles() {
        if(roleRepository.count() == 0L ){
            Role role1 = new Role();
            Role role2 = new Role();
            role1.setName("ADMIN");
            role2.setName("USER");
            this.roleRepository.save(role1);
            this.roleRepository.save(role2);
        }
    }
}
