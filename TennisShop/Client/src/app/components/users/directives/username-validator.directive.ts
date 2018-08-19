import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appUsernameValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: UsernameValidatorDirective,
        multi: true
    }]
})

export class UsernameValidatorDirective implements Validator {
    // @Input('appUsernameValidator') inputUsernameValue: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        // return !/^[A-Z]([a-zA-Z0-9]+)?$/.test(control.value) ? {'invalidUsername': true} : null;
        return !/^([a-zA-Z0-9]+)$/.test(control.value) ? {'invalidUsername': true} : null;
        // return control.value === /^[A-Z]/.test(this.inputUsernameValue) ? {'invalidUsername': true} : null;
    }
}


