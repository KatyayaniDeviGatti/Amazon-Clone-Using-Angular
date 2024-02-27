import { AbstractControl } from "@angular/forms";

export function passwordMatch(password:string,ReEnterPassword:string){

     return function(form:AbstractControl){
        const passwordValue = form.get(password)?.value;
        const reenter_password = form.get(ReEnterPassword)?.value;

        if(passwordValue === reenter_password){
            return null;
        }
        return {passwordMisMatchError:true}
    }

}