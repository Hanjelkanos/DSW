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

  noteForm! : FormGroup;
  note:any;
  id:any

  constructor(private noteService: NotesService, private route: ActivatedRoute, private router:Router){

  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('noteID'));
    console.log(this.id);
    this.noteService.findNote(this.id).subscribe(
      note => {
        this.note = note
        this.noteForm =  new FormGroup({
          title: new FormControl(this.note.title),
          body: new FormControl(this.note.body),
          author: new FormControl(this.note.author),
          date: new FormControl(this.note.date)
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
      this.noteService.updateNote(this.noteForm.value, this.id).subscribe(
        note =>{
          console.log("Note Updated Succesfully");
          
        }
  
      )
      this.router.navigate(['/listNotes'])
      Swal.fire('Success', 'Note updated successfully', 'success');
    }
    
        
  }

}
