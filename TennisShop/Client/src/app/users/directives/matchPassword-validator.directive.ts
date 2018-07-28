import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appMatchPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: MatchPasswordValidatorDirective,
        multi: true
    }]
})

export class MatchPasswordValidatorDirective implements Validator {
    @Input('appMatchPasswordValidator') appMatchPasswordValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // console.log('passwordValue: ', this.passwordValue);
        // console.log('control: ', control);
        const passwordValue = control.parent.get(this.appMatchPasswordValidator);
        if (passwordValue && passwordValue.value !== control.value) {
             return   {'notEqual': true} ;
        }
        return null;
        // return !/^[a-zA-Z0-9]*?$/.test(control.value) ? {'invalidPassword': true} : null;
        // return control.value === /^[A-Z]/.test(this.inputUsernameValue) ? {'invalidUsername': true} : null;
    }
}


