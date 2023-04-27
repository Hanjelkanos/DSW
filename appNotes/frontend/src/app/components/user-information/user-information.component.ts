import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent {
  userEmail:any;
  usersList:any[] = [];
  userForm! : FormGroup;
  user:any;
  id:any


  constructor(private userService: UsersService, private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    this.getUserInformation(this.userEmail);
    
  }


  getUserInformation(userEmail:any){
    this.userService.listUser().subscribe(
      users => {
        this.usersList = Object.values(users)
        for(let i=0; i<this.usersList.length;i++){
          if(this.usersList[i].email == this.userEmail){
            this.userService.findUser(this.usersList[i].id).subscribe(
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
        }
      }
    )
    
  }
}

