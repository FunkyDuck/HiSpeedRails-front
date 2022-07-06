import { AbstractControl, FormArray, FormArrayName, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_USER: FormType = {
    firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(64)]),
    mail: new FormControl(null, [Validators.required, Validators.email]),
    adress: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    birthDate: new FormControl(null, [Validators.required]),
    hireDate: new FormControl(null, [Validators.required]),
    role: new FormControl(null, [Validators.required]),
    gender: new FormControl('x', [Validators.required])
}