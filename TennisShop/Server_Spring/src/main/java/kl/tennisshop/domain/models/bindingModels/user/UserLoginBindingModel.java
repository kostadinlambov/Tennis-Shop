package kl.tennisshop.domain.models.bindingModels.user;

import kl.tennisshop.validations.Password;
import kl.tennisshop.validations.UniqueUsername;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;

public class UserLoginBindingModel implements Serializable {
    private static final String INVALID_USERNAME_MESSAGE = "Username should be at least 4 and maximum 16 characters long.";

    @Pattern(regexp = "^([a-zA-Z0-9]+)$")
    @Size(min = 4, max = 16, message = INVALID_USERNAME_MESSAGE)
    private String username;

    @Password(minLength = 4, maxLength = 16, containsOnlyLettersAndDigits = true)
    private String password;

    public UserLoginBindingModel() {
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
