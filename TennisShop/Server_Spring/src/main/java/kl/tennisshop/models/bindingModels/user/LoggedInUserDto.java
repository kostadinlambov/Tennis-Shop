package kl.tennisshop.models.bindingModels.user;

import kl.tennisshop.entities.Role;

import java.util.HashSet;
import java.util.Set;

public class LoggedInUserDto {
    private String id;
    private Set<Role> roles;
    private String email;

    public LoggedInUserDto() {
        this.roles = new HashSet<>();
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

//    public Role getRole() {
//        return this.role;
//    }
//
//    public void setRole(Role role) {
//        this.role = role;
//    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Role> getRoles() {
        return this.roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }
}
