import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[appSignup]',
  providers: [{
    provide:NG_VALIDATORS,
    useExisting: SignupDirective,
    multi:true
  }]
})
export class SignupDirective implements Validators{

 
  constructor() { }
  validate(control: AbstractControl): {[key: string]: any }| null{
    if(control.value){
      if(control.value.length < 4){
        return {"minLength":true}
      }else{
        if(control.value.length > 14){
          return{"lengthErr": true}
        }
        return null
      }
    }
    return null
  }


}



