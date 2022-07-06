import { AbstractControl, FormControl, Validators } from "@angular/forms";

export type FormType = { [key: string]: AbstractControl };

export const F_LINETOSTATION: FormType = {
    line: new FormControl(null, [Validators.required]),
    position: new FormControl(0, [Validators.required])
}