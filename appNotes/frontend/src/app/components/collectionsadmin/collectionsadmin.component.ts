import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { UsersService } from 'src/app/services/users.service';
import { NotesusersService } from 'src/app/services/notesusers.service';


@Component({
  selector: 'app-collectionsadmin',
  templateUrl: './collectionsadmin.component.html',
  styleUrls: ['./collectionsadmin.component.scss']
})
export class CollectionsadminComponent {
  userEmail:any;
  notes:any
  notesList:any[] = []
  notesCollection:any[] = []
  users:any
  collections:any[] = []
  usersList:any[] = []

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
    console.log(this.collections)
    this.UserList()
    this.collectionForm =  new FormGroup({
      collection: new FormControl('Select collection')
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
    console.log(this.userEmail)
    for(let i=0;i<this.notesList.length;i++){
      if(this.notesList[i].collection == this.collectionForm.value.collection){
        this.notesCollection.push(this.notesList[i])
      }
    }
  }
}