import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendshipsService } from 'src/app/services/friendships.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-friendshipsadmin',
  templateUrl: './friendshipsadmin.component.html',
  styleUrls: ['./friendshipsadmin.component.scss']
})
export class FriendshipsadminComponent {
  friendships:any
  constructor(private friendshipService: FriendshipsService, private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.FriendshipList()
    
  }

  FriendshipList(){
    this.friendships = this.friendshipService.listFriendship().subscribe(
      friendship => {
        this.friendships = friendship

      }
    )
  }

  
  deleteFriendship(id:any){
    this.friendshipService.deleteFriendship(id).subscribe(friendship => {
    });
    
    
    Swal.fire('Success', 'Friendship deleted successfully', 'info');
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }

  recharge(){
    window.location.reload();

  }

  

}