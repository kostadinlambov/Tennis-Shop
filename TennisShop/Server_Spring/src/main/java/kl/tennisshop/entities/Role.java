package kl.tennisshop.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Entity
@Table(name = "roles")
public class Role {
    private String id;
    private String name;

//    private Set<User> user;

    public Role() {
    }

    @Id
    @GeneratedValue(generator="system-uuid2")
    @GenericGenerator(name="system-uuid2",
            strategy = "uuid")
    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }


    @Column(name = "role_name", nullable = false)
    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        Pattern pattern = Pattern.compile("^[a-zA-Z]+$");
        Matcher matcher = pattern.matcher(name);
        if (!matcher.find()) {
            throw new IllegalArgumentException("Roles Name must contain only letters");
        }
        this.name = name;
    }

//    @ManyToMany(targetEntity = )
//    public Set<User> getUser() {
//        return this.user;
//    }
//
//    public void setUser(Set<User> user) {
//        this.user = user;
//    }
}
