import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appNumberValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: NumberValidatorDirective,
        multi: true
    }]
})

export class NumberValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        const number = Number(control.value);
        return number < 0 || number > 10000  ? { 'invalidNumber': true } : null;
    }
}
