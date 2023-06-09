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
  notesList: any[] = []
  notesusersList:any[] = []
  notesFilter:any[] = []
  notes:any
  usersList:any[] = []
  otherusers:any[] = []
  shareForm! : FormGroup;
  constructor(private noteService: NotesService, private userService: UsersService, private NoteuserService: NotesusersService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    console.log("El user email es:" + this.userEmail)
    this.UserList()
    this.filterNotesUser()
    this.shareForm =  new FormGroup({
      useremail: new FormControl('')
    });
  }

  filterNotesUser(){
    this.noteService.listNote().subscribe(
      notes => {
        this.notesList = Object.values(notes)
        this.NoteuserService.listNoteUser().subscribe(
          notesusers => {
            this.notesusersList = Object.values(notesusers)
            for(let i=0; i<this.notesList.length;i++){
              if(this.notesList[i].author == this.userEmail){
                this.notesFilter.push(this.notesList[i])
              }
              else{
                for(let j=0;j<this.notesusersList.length;j++){
                  
                  if(this.notesusersList[j].noteid == this.notesList[i].id && this.notesusersList[j].useremail == this.userEmail){
                    this.notesFilter.push(this.notesList[i])
                  }
                }
              }
            }
          }
        )
      }
    )
    
    
    
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
  deleteNote(id:any){
    this.noteService.deleteNote(id).subscribe(note => {
      
    });
    for(let i=0; i<this.notesusersList.length;i++){
      console.log(this.notesusersList[i].noteid + "---" + id )
      if(this.notesusersList[i].noteid == id){
        this.NoteuserService.deleteNoteUser(this.notesusersList[i].id).subscribe(noteuser => {

        })
      }
    }
    
    
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
    let noteuserform =  new FormGroup({
      noteid: new FormControl(noteId),
      useremail: new FormControl(useremail)
    });

    if(useremail == ""){
      Swal.fire('Hey user!', 'You have to select a user', 'error');
    }
    else{
      this.NoteuserService.addNoteUser(noteuserform.value).subscribe(
        noteuser => {
            Swal.fire('Success', 'Note shared with' + useremail, 'success');
  
        }, error => {
          Swal.fire('Hey user!', 'Error sharing note', 'error');
        }
  
      )
    }
    

  }
  

}
