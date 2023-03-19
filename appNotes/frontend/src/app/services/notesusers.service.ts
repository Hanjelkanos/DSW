import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesusersService {

  url:string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  listNoteUser(){
    return this.http.get(this.url + "/api/v3/notesusers");

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  addNoteUser(data:any){
    return this.http.post(this.url + "/api/v3/notesusers", data, this.httpOptions);
  }

  findNoteUser(id:any){
    return this.http.get(this.url + "/api/v3/notesusers/" + id)
  }


  updateNoteUser(data:any, id:any){
    return this.http.put(this.url + "/api/v3/notesusers/" +id, data, this.httpOptions);
  }

  deleteNoteUser(id:any){
    return this.http.delete(this.url + "/api/v3/notesusers/" + id)

  }
}
