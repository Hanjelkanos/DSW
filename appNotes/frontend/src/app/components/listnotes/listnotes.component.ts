import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { UsersService } from 'src/app/services/users.service';
import { NotesusersService } from 'src/app/services/notesusers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.scss']
})
export class ListnotesComponent {
  userEmail:any;
  /*allnotes:any;
  allnoteslist:any[] = []
  notesuserslist:any[] = []
  notes: any[] = []
  notesusers:any*/
  notes:any
  users:any
  shareForm! : FormGroup;
  constructor(private noteService: NotesService, private userService: UsersService, private NoteuserService: NotesusersService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    console.log("El user email es:" + this.userEmail)
    this.NoteList()
    /*this.NoteUsersList*/
    this.UserList()
    /*this.selectUserNotes()*/
    this.shareForm =  new FormGroup({
      useremail: new FormControl('')
    });
  }

  /*NoteList(){
    this.allnotes = this.noteService.listNote().subscribe(
      note => {
        this.allnotes = note
        console.log(this.allnotes);
      }
    )
  }
  NoteUsersList(){
    this.notesusers = this.NoteuserService.listNoteUser().subscribe(
      noteuser => {
        this.notesusers = noteuser
      }
    )
  }

  selectUserNotes(){

    this.allnoteslist = Object.values(this.allnotes)
    this.notesuserslist = Object.values(this.notesusers)
    console.log(this.allnoteslist.length)
    console.log(this.notesuserslist.length)


    for(let i=0; i<this.allnoteslist.length;i++){
      for(let j=0; j<this.notesuserslist.length;j++){
        console.log("Aqui")
        console.log(this.allnoteslist[i].author)
        console.log(this.userEmail)
        if(this.allnoteslist[i].author == this.userEmail || ( this.allnoteslist[i].id == this.notesuserslist[j].noteid && this.notesuserslist[j].useremail == this.userEmail)){
          this.notes.push(this.allnoteslist[i]);
          console.log("hola")
        }
      }
    }

  }*/

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

  share(noteId:string){
    let useremail = "" + this.shareForm.get('useremail')?.value
    console.log(useremail);
    let noteuserform =  new FormGroup({
      noteid: new FormControl(noteId),
      useremail: new FormControl(useremail)
    });

    this.NoteuserService.addNoteUser(noteuserform.value).subscribe(
      noteuser => {
          Swal.fire('Success', 'Note shared with' + useremail, 'success');

      }, error => {
        Swal.fire('Hey user!', 'Error sharing note', 'error');
      }

    )

  }
  

}
