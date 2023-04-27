import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';
import { FriendshipsService } from 'src/app/services/friendships.service';
import { FriendrequestsService } from 'src/app/services/friendrequests.service';

@Component({
  selector: 'app-friendrequests',
  templateUrl: './friendrequests.component.html',
  styleUrls: ['./friendrequests.component.scss']
})
export class FriendrequestsComponent {
  userEmail:any;
  friendshipsList:any[] = []
  usersList:any[] = []
  otherusers:any[] = []
  requestsList:any[] = []
  requestsListnofilter:any[] = []
  sendrequestForm! : FormGroup;
  constructor(private userService: UsersService,  private router:Router, private route: ActivatedRoute, private friendshipService: FriendshipsService, private friendrequestService: FriendrequestsService){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    this.RequestList()
    this.UserList()
    this.sendrequestForm =  new FormGroup({
      useremail: new FormControl('')
    });
  }

  RequestList(){
    this.friendrequestService.listFriendrequest().subscribe(
      requests =>{
        this.requestsListnofilter = Object.values(requests)
        for(let i=0; i<this.requestsListnofilter.length;i++){
          if(this.requestsListnofilter[i].targetuseremail == this.userEmail){
            this.requestsList.push(this.requestsListnofilter[i])
          }
        }
      }
    )

  }

  UserList(){
    this.userService.listUser().subscribe(
      users => {
        this.usersList = Object.values(users)
        for(let i=0; i<this.usersList.length;i++){
          if(this.usersList[i].email != this.userEmail){
            this.otherusers.push(this.usersList[i])
          }
        }
      }
    )
  }
  deny(id:any){
    this.friendrequestService.deleteFriendrequest(id).subscribe(friendrequest => {
      
    });
    Swal.fire('Success', 'Request deleted successfully', 'info');
    this.RequestList()
    this.RequestList()
    this.recharge()
    
    
  }

  accept(id:any, sourceuseremail:any){
    let sourceuseremailString = "" + sourceuseremail
    let friendshipform =  new FormGroup({
      useremail1: new FormControl(this.userEmail),
      useremail2: new FormControl(sourceuseremailString)
    });
    this.friendshipService.addFriendship(friendshipform.value).subscribe(
      friendship => {
        
      },error => {
        Swal.fire('Hey user!', 'Error accepting friend request', 'error');
      }
    )
    
    this.friendrequestService.deleteFriendrequest(id).subscribe(friendrequest => {
      
    });
    Swal.fire('Success', 'Now you are friends with ' + sourceuseremailString, 'success');
    this.RequestList()
    this.RequestList()

    
    this.recharge()
    
  }

  recharge(){
    window.location.reload();

  }

  sendrequest(){
    let useremail = "" + this.sendrequestForm.get('useremail')?.value
    let date: Date = new Date();
    let friendrequest =  new FormGroup({
      sourceuseremail: new FormControl(this.userEmail),
      targetuseremail: new FormControl(useremail),
      date: new FormControl(date.toDateString())
    });

    if(useremail == ""){
      Swal.fire('Hey user!', 'You have to select a user', 'error');
    }
    else{
      this.friendshipService.listFriendship().subscribe(
        friendships => {
          let existingFriendship = false
          let existingRequest = false
          let justinvited = false
          this.friendshipsList = Object.values(friendships)
          for(let i=0;i<this.friendshipsList.length;i++){
            if((this.friendshipsList[i].useremail1 == this.userEmail && this.friendshipsList[i].useremail2 == useremail) || (this.friendshipsList[i].useremail2 == this.userEmail && this.friendshipsList[i].useremail1 == useremail)){
              existingFriendship = true;
            }
          }
          if(existingFriendship == true){
            Swal.fire('Hey user!', 'You already have a friendship with this user', 'error');
          }
          else{
            for(let j=0;j<this.requestsListnofilter.length;j++){
              if(this.requestsListnofilter[j].sourceuseremail == this.userEmail && this.requestsListnofilter[j].targetuseremail == useremail){
                existingRequest = true
              }
              else if(this.requestsListnofilter[j].targetuseremail == this.userEmail && this.requestsListnofilter[j].sourceuseremail == useremail){
                justinvited = true
              }
            }
            if(existingRequest == true){
              Swal.fire('Hey user!', 'You already have sent friend request to this user', 'error');
            }
            else if(justinvited == true){
              Swal.fire('Hey user!', 'Other user has invited you. Please revise your requests', 'error');
            }
            else{
              this.friendrequestService.addFriendrequest(friendrequest.value).subscribe(
                frndrequest => {
                  Swal.fire('Success', 'Friend request sent to ' + useremail, 'success');
                },error => {
                  Swal.fire('Hey user!', 'Error sending friend request', 'error');
                }
              )
            }
            
          }
        }
      )
      
    }
    
    this.requestsList = []
    this.RequestList()
    
    
  }
  

}
