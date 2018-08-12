package kl.tennisshop.services;

import kl.tennisshop.entities.Role;
import org.springframework.stereotype.Service;


public interface RoleService {
    void persist(Role role);

    Role getByName(String name);
}
