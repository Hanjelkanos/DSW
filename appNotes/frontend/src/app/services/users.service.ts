import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  listUser(){
    return this.http.get(this.url + "/api/v2/users");

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addUser(data:any){
    return this.http.post(this.url + "/api/v2/users", data, this.httpOptions);
  }

  findUser(id:any){
    return this.http.get(this.url + "/api/v2/users/" + id)
  }

  findUserbyemail(email:any){
    return this.http.get(this.url + "/api/v2/users/" + email)
  }

  updateUser(data:any, id:any){
    return this.http.put(this.url + "/api/v2/users/" +id, data, this.httpOptions);
  }

  deleteUser(id:any){
    return this.http.delete(this.url + "/api/v2/users/" + id)

  }
}
