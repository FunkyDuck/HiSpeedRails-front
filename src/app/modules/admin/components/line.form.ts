import { AbstractControl, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_LINE: FormType = {
    id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    dateCommissioning: new FormControl(null, [Validators.required]),
    maxSpeed: new FormControl(null, [Validators.required])
}