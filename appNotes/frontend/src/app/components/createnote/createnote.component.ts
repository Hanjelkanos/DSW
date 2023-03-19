import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent {
  imgCharged = ""

  note:any;

  noteForm =  new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private noteService:NotesService, private router:Router){

  }

  
  onSubmit(){
    let email = "" + this.noteForm.get('author')?.value
    if(this.noteForm.get('title')?.value == ""){
      Swal.fire('Hey user!', 'Empty Title field', 'error');
    }
    else if(this.noteForm.get('body')?.value == ""){
      Swal.fire('Hey user!', 'Empty Body field', 'error');
    }
    else if(this.noteForm.get('author')?.value == ""){
      Swal.fire('Hey user!', 'Empty Author field', 'error');
      
    }
    else if(!this.emailValidator(email)){
      Swal.fire('Hey user!', 'Invalid email format', 'error');
    }
    else if(this.noteForm.get('date')?.value == ""){
      Swal.fire('Hey user!', 'Empty Date field', 'error');
    }
    else{
      let title = "" + this.noteForm.get('title')?.value
      let body = "" + this.noteForm.get('body')?.value
      let author = "" + this.noteForm.get('author')?.value
      let date = "" + this.noteForm.get('date')?.value

       let noteForm2 =  new FormGroup({
        title: new FormControl(title),
        body: new FormControl(body),
        author: new FormControl(author),
        date: new FormControl(date),
        image: new FormControl(this.imgCharged)
      });
      
      this.noteService.addNote(noteForm2.value).subscribe(
        note => {
          this.note = note
            this.router.navigate(['/listNotes'])
            Swal.fire('Success', 'Note created successfully', 'success');
        }, error => {
          Swal.fire('Hey user!', 'Error adding note', 'error');
        }
  
      )
    }
    
    
  }

onFileChanged(e: { base64: string; }[]){
  this.imgCharged = e[0].base64;

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

}
