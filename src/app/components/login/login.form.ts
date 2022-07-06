import { AbstractControl, FormArray, FormArrayName, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_LOGIN: FormType = {
    id: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
}