import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent {
  userForm! : FormGroup;
  user:any;
  id:any

  constructor(private userService: UsersService, private route: ActivatedRoute, private router:Router){

  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('userID'));
    this.userService.findUser(this.id).subscribe(
      user => {
        this.user = user
        this.userForm =  new FormGroup({
          name: new FormControl(this.user.name),
          surname: new FormControl(this.user.surname),
          email: new FormControl(this.user.email),
          password: new FormControl(this.user.password)
        });

      }
    )
  }

  onSubmit(){

    if(this.userForm.get('name')?.value == ""){
      Swal.fire('Hey !', 'Empty Name field', 'error');
    }
    else if(this.userForm.get('surname')?.value == ""){
      Swal.fire('Hey!', 'Empty Surname field', 'error');
    }
    else if(this.userForm.get('email')?.value == ""){
      Swal.fire('Hey!', 'Empty Email field', 'error');
    }
    else if(this.userForm.get('password')?.value == ""){
      Swal.fire('Hey!', 'Empty Password field', 'error');
    }
    else{
      this.userService.updateUser(this.userForm.value, this.id).subscribe(
        user =>{
          console.log("User Updated Succesfully");
          
        }
  
      )
      this.router.navigate(['/listUsers'])
      Swal.fire('Success', 'User updated successfully', 'success');
    }
    
        
  }

  

}
