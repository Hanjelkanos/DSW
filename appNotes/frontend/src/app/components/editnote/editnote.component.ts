import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent {
  imgCharged = ""
  noteForm! : FormGroup;
  note:any;
  id:any
  userEmail:any

  constructor(private noteService: NotesService, private route: ActivatedRoute, private router:Router){

  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    this.id = Number(routeParams.get('noteID'));
    console.log(this.id);
    console.log(this.userEmail)
    this.noteService.findNote(this.id).subscribe(
      note => {
        this.note = note
        console.log(note)
        this.noteForm =  new FormGroup({
          title: new FormControl(this.note.title),
          body: new FormControl(this.note.body),
          author: new FormControl(this.note.author),
          date: new FormControl(this.note.date),
          image: new FormControl(this.note.image),
          collection: new FormControl(this.note.collection)
        });

      }
    )
  }

  onSubmit(){

    if(this.noteForm.get('title')?.value == ""){
      Swal.fire('Hey user!', 'Empty Title field', 'error');
    }
    else if(this.noteForm.get('body')?.value == ""){
      Swal.fire('Hey user!', 'Empty Body field', 'error');
    }
    else if(this.noteForm.get('author')?.value == ""){
      Swal.fire('Hey user!', 'Empty Author field', 'error');
    }
    else if(this.noteForm.get('date')?.value == ""){
      Swal.fire('Hey user!', 'Empty Date field', 'error');
    }
    else{

      let title = "" + this.noteForm.get('title')?.value
      let body = "" + this.noteForm.get('body')?.value
      let author = "" + this.noteForm.get('author')?.value
      let date = "" + this.noteForm.get('date')?.value
      let collection = "" + this.noteForm.get('collection')?.value

       let noteForm2 =  new FormGroup({
        title: new FormControl(title),
        body: new FormControl(body),
        author: new FormControl(author),
        date: new FormControl(date),
        image: new FormControl(this.imgCharged),
        collection: new FormControl(collection)
      });

      this.noteService.updateNote(noteForm2.value, this.id).subscribe(
        note =>{
          console.log(noteForm2.value)
          console.log("Note Updated Succesfully");
          
        }
  
      )
      this.router.navigate(['/listNotes/' + this.userEmail]) 
      Swal.fire('Success', 'Note updated successfully', 'success');
    }
    
        
  }

  onFileChanged(e: { base64: string; }[]){
    this.imgCharged = e[0].base64;
  
  }

}
