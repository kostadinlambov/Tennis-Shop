import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appOrderQuantityValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: OrderQuantityValidatorDirective,
        multi: true
    }]
})

export class OrderQuantityValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        const number = Number(control.value);
        return number < 0 || number > 10  ? { 'invalidOrderQuantity': true } : null;
    }
}
