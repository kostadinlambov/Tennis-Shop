package kl.tennisshop.domain.models.bindingModels.user;

import kl.tennisshop.validations.Password;
import kl.tennisshop.validations.PasswordMatching;
import kl.tennisshop.validations.UniqueEmail;
import kl.tennisshop.validations.UniqueUsername;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;

@PasswordMatching
public class UserRegisterBindingModel implements Serializable {
    private static final String INVALID_EMAIL_MESSAGE = "Invalid e-mail address.";
    private static final String INVALID_USERNAME_MESSAGE = "Username should be at least 4 and maximum 16 characters long.";
    private static final String INVALID_FIRST_NAME_MESSAGE = "First Name must start with a capital letter and must contain only letters.";
    private static final String INVALID_LAST_NAME_MESSAGE = "Last Name must start with a capital letter and must contain only letters.";

    @Pattern(regexp = "^([a-zA-Z0-9]+)$")
    @Size(min = 4, max = 16, message = INVALID_USERNAME_MESSAGE)
    @UniqueUsername
    private String username;

    @Pattern(regexp = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",message = INVALID_EMAIL_MESSAGE)
    @UniqueEmail
    private String email;

    @Password(minLength = 4, maxLength = 16, containsOnlyLettersAndDigits = true)
    private String password;

    private String confirmPassword;

    @Pattern(regexp = "^[A-Z]([a-zA-Z]+)?$", message = INVALID_FIRST_NAME_MESSAGE)
    private String firstName;

    @Pattern(regexp = "^[A-Z]([a-zA-Z]+)?$", message = INVALID_LAST_NAME_MESSAGE)
    private String lastName;

    private String address;
    private String city;

//    private Set<UserRole> roles;
//    private Boolean isDeleted = false;
//
//    private Set<Order> orders;
//    private Set<Payment> payments;
//    private Set<Feedback> feedbackSet;

    public UserRegisterBindingModel() {
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {
        return this.confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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
}
