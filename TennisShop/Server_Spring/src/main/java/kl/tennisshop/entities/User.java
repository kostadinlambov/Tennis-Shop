package kl.tennisshop.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Entity
@Table(name = "users")
@Transactional
public class User {
    private String id;
    private String email;
    private String password;
    private String confirmPassword;
    private String firstName;
    private String lastName;
    private String address;
    private String city;

    private Set<Role> roles;
    private Boolean isDeleted = false;

    private Set<Order> orders;
    private Set<Payment> payments;
    private Set<Feedback> feedbackSet;

    // Shopping Cart
    private Set<Racket> shoppingCartProducts;
    private Set<Racket> boughtProducts;

//    private byte[] profilePicture;
//    private LocalDateTime registeredOn;
//    private LocalDateTime lastTimeLoggedIn;

    public User() {
        this.roles = new HashSet<>();
        this.orders = new HashSet<>();
        this.payments = new HashSet<>();
        this.feedbackSet = new HashSet<>();
    }

    //    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
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


    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name="users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
    public Set<Role> getRoles() {
        return this.roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Column(nullable = false, name = "email", unique = true)
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        String regex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//        if (!Pattern.matches(regex, email)) {
        if (!email.matches(regex)) {
            throw new IllegalArgumentException("Invalid e-mail address!");
        }

        if (email.length() < 1) {
            throw new IllegalArgumentException("E-mail is required!");
        }

        this.email = email;
    }

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    public Set<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    public Set<Payment> getPayments() {
        return this.payments;
    }

    public void setPayments(Set<Payment> payments) {
        this.payments = payments;
    }

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.MERGE, targetEntity = Feedback.class)
    public Set<Feedback> getFeedbackSet() {
        return this.feedbackSet;
    }

    public void setFeedbackSet(Set<Feedback> feedbackSet) {
        this.feedbackSet = feedbackSet;
    }

    @Column(nullable = false, name = "password")
    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
//        Pattern pattern = Pattern.compile("[A-Z][a-zA-Z]+");
//        Matcher matcher = pattern.matcher(password);
//        String regex = "^[a-zA-Z0-9]+$";
//
//        if (password.length() < 4 || password.length() > 16) {
//            throw new IllegalArgumentException("Password should be at least 4 and maximum 16 characters long.");
//        }
//
//        if (!Pattern.matches(regex, password)) {
//            throw new IllegalArgumentException("Password must contain only letters and digits.");
//        }

        this.password = password;
    }

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        String regex = "^[A-Z]([a-zA-Z]+)?$";

//        if (!Pattern.matches(regex, firstName)) {
        if (!firstName.matches(regex)) {
            throw new IllegalArgumentException("First Name must start with a capital letter and must contain only letters.");
        }

        if (firstName.length() < 1) {
            throw new IllegalArgumentException("First Name is required!");
        }
        this.firstName = firstName;
    }

    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        String regex = "^[A-Z]([a-zA-Z]+)?$";

        if (!lastName.matches(regex)) {
            throw new IllegalArgumentException("Last Name must start with a capital letter and must contain only letters.");
        }

        if (lastName.length() < 1) {
            throw new IllegalArgumentException("Last Name is required!");
        }
        this.lastName = lastName;
    }


    @Column(name = "is_deleted")
    public Boolean getDeleted() {
        return this.isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    @Override
    public String toString() {
        String result = "User{\n" +
                "id=" + id +
                ",\nemail='" + email + '\'' +
                ",\npassword='" + password + '\'' +
                ",\nfirstName='" + firstName + '\'' +
                ",\nlastName='" + lastName + "\'\n";

        result += "Roles: ";
        for (Role role : roles) {
            result +=  role.getName();
        }

        result += '}';

        return result;
    }

    @Transient
    public String getConfirmPassword() {
        return this.confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }


    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    //    @Column(name = "registered_on")
//    public LocalDateTime getRegisteredOn() {
//        return this.registeredOn;
//    }
//
//    public void setRegisteredOn(LocalDateTime registeredOn) {
//        this.registeredOn = registeredOn;
//    }
//
//    @Column(name = "last_time_logged_in")
//    public LocalDateTime getLastTimeLoggedIn() {
//        return this.lastTimeLoggedIn;
//    }
//
//    public void setLastTimeLoggedIn(LocalDateTime lastTimeLoggedIn) {
//        this.lastTimeLoggedIn = lastTimeLoggedIn;
//    }


//    @Column(name = "profile_picture", columnDefinition = "LONGBLOB")
//    public byte[] getProfilePicture() {
//        return this.profilePicture;
//    }
//
//    public void setProfilePicture(byte[] profilePicture) {
//        // Check if picture size > 1MB
//        if (profilePicture.length > 1024 * 1024) {
//            throw new IllegalArgumentException("Picture is too big.");
//        }
//        this.profilePicture = profilePicture;
//    }


}
