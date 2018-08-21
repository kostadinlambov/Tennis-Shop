package kl.tennisshop.domain.entities;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class UserRole implements GrantedAuthority {
    private String id;
    private String authority;

//    private Set<User> user;

    public UserRole() {
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", nullable = false, unique = true, updatable = false)
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    @Column(name = "authority", nullable = false)
    public String getAuthority() {
        return this.authority;
    }

    public void setAuthority(String authority) {
//        Pattern pattern = Pattern.compile("^[a-zA-Z]+$");
//        Matcher matcher = pattern.matcher(authority);
//        if (!matcher.find()) {
//            throw new IllegalArgumentException("Roles Name must contain only letters");
//        }
        this.authority = authority;
    }
//
//    @Override
//    public String getAuthority() {
//        return null;
//    }

//    @ManyToMany(targetEntity = )
//    public Set<User> getUser() {
//        return this.user;
//    }
//
//    public void setUser(Set<User> user) {
//        this.user = user;
//    }
}
