package kl.tennisshop.servicesImpl;

import kl.tennisshop.entities.Role;
import kl.tennisshop.repositories.RoleRepository;
import kl.tennisshop.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleServiceImpl(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    @Override
    public void persist(Role role) {
        this.roleRepository.save(role);
    }

    @Override
    public Role getByName(String name) {
        return this.roleRepository.findByName(name);
    }
}
