import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent {
  users:any
  constructor( private userService: UsersService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.UserList()
  }

    

  UserList(){
    this.users = this.userService.listUser().subscribe(
      user => {
        this.users = user
      }
    )
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(user => {
    });
    
    
    Swal.fire('Success', 'User deleted successfully', 'info');
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }

  recharge(){
    window.location.reload();

  }

  
  

}
