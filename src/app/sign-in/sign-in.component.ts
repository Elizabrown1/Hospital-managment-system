import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public router: Router) { }

  public user:any = {
    email:"",
    password: "",
  }
  public myData:any = JSON.parse(localStorage.getItem("userData")!);
  public errorMsg: string ="";
  
  

  ngOnInit(): void {
    this.myData = JSON.parse(localStorage.getItem("userData")!);
  }

  signIn(){
    let {email, password} = this.user;
    if (email && password){
      let findUser = this.myData.find((val:any)=> val.email == email && val.password == password)
      if(findUser){
        alert(`welcome ${findUser.firstName} ${findUser.lastName}`)
      }
      this.errorMsg = ""
      this.user.email = "";
      this.user.password = "";
      localStorage.setItem("currentUser",JSON.stringify(findUser))
      this.router.navigate(["/user-dashboard"]);
    }
    else{
      this.errorMsg = "incorrect email or password"
    }
  }

}
