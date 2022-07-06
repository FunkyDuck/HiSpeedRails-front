import { AbstractControl, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_STATION: FormType = {
    // id: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    dateCommissioning: new FormControl(null, [Validators.required]),
    openAt: new FormControl(null, [Validators.required]),
    closedAt: new FormControl(null, [Validators.required])
}