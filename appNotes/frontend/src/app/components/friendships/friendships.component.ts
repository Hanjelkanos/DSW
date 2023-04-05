import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendshipsService } from 'src/app/services/friendships.service';
import { UsersService } from 'src/app/services/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.scss']
})
export class FriendshipsComponent {
  userEmail:any;
  friends:any[] = []
  friendshipsList:any[] = []
  usersList:any[] = []
  constructor(private userService: UsersService, private friendshipService: FriendshipsService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    console.log("El user email es:" + this.userEmail)
    this.FriendsList()
    
  }

  FriendsList(){
    this.friendshipService.listFriendship().subscribe(
      friendships => {
        this.friendshipsList = Object.values(friendships)
        console.log(this.friendshipsList)
        this.userService.listUser().subscribe(
          users => {
            this.usersList = Object.values(users)
            for(let i=0; i<this.friendshipsList.length;i++){
              if(this.friendshipsList[i].useremail1 == this.userEmail){
                for(let j=0;j<this.usersList.length;j++){
                  console.log(this.usersList[j].email + "---" + this.friendshipsList[i].useremail2)
                  if(this.usersList[j].email == this.friendshipsList[i].useremail2){
                    console.log("hola")
                    this.friends.push(this.usersList[j])
                  }
                }
              }
              else if(this.friendshipsList[i].useremail2 == this.userEmail){
                for(let k=0;k<this.usersList.length;k++){
                  if(this.usersList[k].email == this.friendshipsList[i].useremail1){
                    this.friends.push(this.usersList[k])
                  }
                }
              }
            }
          }
        )
      }
    )
    
    
    
  }

  

  
  deleteFriendship(email:any){
    for(let i=0;i<this.friendshipsList.length;i++){
      if(this.friendshipsList[i].useremail1 == this.userEmail && this.friendshipsList[i].useremail2 == email){
        Swal.fire('Success', 'Friendship deleted successfully', 'info');
        this.friendshipService.deleteFriendship(this.friendshipsList[i].id).subscribe(friendship => {
        });
      }
      
      else if(this.friendshipsList[i].useremail2 == this.userEmail && this.friendshipsList[i].useremail1 == email){
        Swal.fire('Success', 'Friendship deleted successfully', 'info');
        this.friendshipService.deleteFriendship(this.friendshipsList[i].id).subscribe(friendship => {
        });
      }
    }
    
    
    
    this.FriendsList()
    this.FriendsList()
    this.recharge()
  }

  recharge(){
    window.location.reload();

  }


  

}
