import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(forbiddenPattern:RegExp)
{
    return (control: AbstractControl)=>{
        // const regExp:RegExp=/admin/i;
        const validationRes={'forbiddenName':{'value':control.value }};
        return forbiddenPattern.test(control.value)? validationRes: null;
    }
}

// export function forbiddenNameValidator(control: AbstractControl)
// {
//   let name=control.get("fullName")?.value;
//   let nameNew="/"+name+"/i";
//   const regExp:RegExp=RegExp(nameNew);
//   const validationRes={'forbiddenName':{'value':control.value }};
//   return regExp.test(control.value)? validationRes: null;
// }