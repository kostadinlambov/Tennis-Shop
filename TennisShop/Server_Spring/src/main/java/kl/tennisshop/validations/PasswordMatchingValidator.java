package kl.tennisshop.validations;

import kl.tennisshop.models.bindingModels.user.RegisterUserDto;
import org.springframework.stereotype.Component;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

@Component
public class PasswordMatchingValidator implements ConstraintValidator<PasswordMatching, Object> {
    @Override
    public void initialize(PasswordMatching constraintAnnotation) {

    }

    @Override
    public boolean isValid(Object o, ConstraintValidatorContext constraintValidatorContext) {
        if (o instanceof RegisterUserDto) {
            RegisterUserDto user = (RegisterUserDto) o;
            return user.getPassword().equals(user.getConfirmPassword());
        }
        return false;
    }
}
