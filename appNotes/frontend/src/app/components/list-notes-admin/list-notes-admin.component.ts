import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { UsersService } from 'src/app/services/users.service';
import { NotesusersService } from 'src/app/services/notesusers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-notes-admin',
  templateUrl: './list-notes-admin.component.html',
  styleUrls: ['./list-notes-admin.component.scss']
})
export class ListNotesAdminComponent {
  userEmail:any;
  notes:any;
  users:any
  shareForm! : FormGroup;
  constructor(private noteService: NotesService, private userService: UsersService, private NoteuserService: NotesusersService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    console.log("El user email es:" + this.userEmail)
    this.NoteList()
    this.UserList()
    this.shareForm =  new FormGroup({
      useremail: new FormControl('')
    });
  }

  NoteList(){
    this.notes = this.noteService.listNote().subscribe(
      note => {
        this.notes = note
        console.log(this.notes);
      }
    )
  }

  UserList(){
    this.users = this.userService.listUser().subscribe(
      user => {
        this.users = user
      }
    )
  }
  deleteNote(id:any){
    this.noteService.deleteNote(id).subscribe(note => {
    });
    
    
    Swal.fire('Success', 'Note deleted successfully', 'info');
    window.location.reload();
    window.location.reload();
    window.location.reload();
  }

  recharge(){
    window.location.reload();

  }

  

}
