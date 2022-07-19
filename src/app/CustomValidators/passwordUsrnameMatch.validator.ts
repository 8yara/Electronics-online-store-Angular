import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Cross-field custom validator
// export function passwordUsrnameMatchValidator (control: AbstractControl) {
// let name=control.get("fullName")?.value;
//   let nameNew="/"+name+"/i";
//   const regExp:RegExp=RegExp(nameNew);
//   const validationRes={'forbiddenPassword':{'value':control.value }};
//   return regExp.test(control.value)? validationRes: null;

//     }

export function passwordUsrnameMatchValidator (control: AbstractControl){
    const name=control.get("fullName");
    const pass=control.get('password')
    return name && pass && name.value === pass.value ? { NameInPassword: true } : null;
    
  };
    
// if(control.value.startsWith('y')){
//     return{invalide:true};
// }
// return null
  