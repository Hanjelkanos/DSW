import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user:any; 
  users:any[] = []
  useremail:string = ""
  emailexist = false

  signupForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rol: new FormControl("user")
  });

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(){
    this.ListUsers()
  }

  constructor(private userService:UsersService, private router:Router){

  }

  signup(){
    let email = "" + this.signupForm.get('email')?.value
    let password = "" + this.signupForm.get('password')?.value
    if(this.signupForm.get('name')?.value == ""){
      Swal.fire('Hey user!', 'Insert a name', 'error');
    }
    else if(this.signupForm.get('surname')?.value == ""){
      Swal.fire('Hey user!', 'Insert a surname', 'error');
    }
    else if(this.signupForm.get('email')?.value == ""){
      Swal.fire('Hey user!', 'Insert an email', 'error');
    }
    else if(!this.emailValidator(email)){
      Swal.fire('Hey user!', 'Invalid email format', 'error');
    }
    else if(this.signupForm.get('password')?.value == ""){
      Swal.fire('Hey user!', 'Insert a password', 'error');
    }
    else if(password.length < 8){
      Swal.fire('Hey user!', 'Password has to have at least 8 characters', 'error');
    }
    else{
      for(let i=0; i<this.users.length;i++){
        if(email == this.users[i].email){
          this.emailexist = true
          console.log("existe")

        }
      }
      

      if(this.emailexist){
        Swal.fire('Error', 'This email is already registered', 'error');
      }
      else{
        Swal.fire('Success', 'User created successfully', 'success');
        this.userService.addUser(this.signupForm.value).subscribe(
          user => {
            this.user = user
            this.ListUsers()
            this.signupForm.reset()
            window.location.reload();

          },error => {
            Swal.fire('Hey user!', 'Error creating user', 'error');
          }
        )
      }
      
    }
  }

  login(){
    let loginCorrecto = false;
    if(this.loginForm.get('email')?.value == ""){
      Swal.fire('Hey user!', 'Insert an email to login', 'error');
    }
    else if(this.loginForm.get('password')?.value == ""){
      Swal.fire('Hey user!', 'Insert a password', 'error');
    }
    else{
      this.userService.listUser().subscribe(
        users => {
          this.users = Object.values(users);
          for(let i=0;i<this.users.length;i++){
            if(this.users[i].email == this.loginForm.get('email')?.value && this.users[i].password == this.loginForm.get('password')?.value){
              loginCorrecto = true;
              
              if(this.users[i].rol == "admin"){
                Swal.fire('Success', 'You have successfully logged in as admin', 'success');
                this.router.navigate(['/adminMenu'])
              }
              else if(this.users[i].rol == "user"){
                Swal.fire('Success', 'You have successfully logged in as user', 'success');
                this.router.navigate(['/listNotes/' + this.users[i].email])
              }
            }
            if(!loginCorrecto){
              Swal.fire('Error', 'Email or password incorrect', 'error');
            }
          }
        }
      )
    }

  }

  emailValidator(email:string) : boolean{
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if(emailPattern.test(email)){
      return true;
    }
    else{
      return false;
    }
  }

  ListUsers(){
    this.userService.listUser().subscribe(
      users => {
        this.users = Object.values(users)
      }
    )
  }


}
