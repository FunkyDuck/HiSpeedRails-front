import { AbstractControl, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_TRAIN: FormType = {
    id: new FormControl(null, [Validators.required]),
    tconstructor: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    dateCommissioning: new FormControl(null, [Validators.required]),
    maxSpeed: new FormControl(null, [Validators.required]),
    maxPassengers: new FormControl(null, [Validators.required])
}