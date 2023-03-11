import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.scss']
})
export class ListnotesComponent {

  notes:any;
  constructor(private noteService: NotesService, private router:Router){

  }

  ngOnInit(){
    this.NoteList()
  }

  NoteList(){
    this.notes = this.noteService.listNote().subscribe(
      note => {
        this.notes = note
        console.log(this.notes);
      }
    )
  }
  deleteNote(id:any){
    this.noteService.deleteNote(id).subscribe(note => {
    });
    
    
    Swal.fire('Success', 'Note deleted successfully', 'info');
  }

  recharge(){
    window.location.reload();

  }

}
