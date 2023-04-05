import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { UsersService } from 'src/app/services/users.service';
import { NotesusersService } from 'src/app/services/notesusers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notes-collections',
  templateUrl: './notes-collections.component.html',
  styleUrls: ['./notes-collections.component.scss']
})
export class NotesCollectionsComponent {
  userEmail:any;
  notes:any
  notesList:any[] = []
  notesCollection:any[] = []
  users:any
  collections:any[] = []
  notesusersList:any[] = []
  notesFilter:any[] = []
  usersList:any[] = []
  otherusers:any[] = []
  collectionForm =  new FormGroup({
    collection: new FormControl('Select collection')
  });
  constructor(private noteService: NotesService, private userService: UsersService, private NoteuserService: NotesusersService , private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.userEmail = routeParams.get('useremail');
    this.NoteList()
    this.CollectionList()
    this.NoteListCollection()
    this.filterNotesUser()
    console.log(this.collections)
    /*this.NoteUsersList*/
    this.UserList()
    /*this.selectUserNotes()*/
    this.collectionForm =  new FormGroup({
      collection: new FormControl('Select collection')
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
  CollectionList(){
    this.noteService.listNote().subscribe(
      notes => {
        this.notesList = Object.values(notes);
        for(let i=0;i<this.notesList.length;i++){
          this.collections.push(this.notesList[i].collection) 
        }
        let collectionsArr = new Set(this.collections)
        let collectionsNoRep = [...collectionsArr];
        this.collections = collectionsNoRep;
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

  NoteListCollection(){
    this.notesCollection = []
    console.log(this.notesFilter)
    console.log(this.userEmail)
    for(let i=0;i<this.notesFilter.length;i++){
      if(this.notesFilter[i].collection == this.collectionForm.value.collection){
        this.notesCollection.push(this.notesFilter[i])
      }
    }
  }
  




  
  

}