import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendshipsService {

  url:string = "http://127.0.0.1:3000";

  constructor(private http: HttpClient) { }

  listFriendship(){
    return this.http.get(this.url + "/api/v4/friendships");

  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addFriendship(data:any){
    return this.http.post(this.url + "/api/v4/friendships", data, this.httpOptions);
  }

  findFriendship(id:any){
    return this.http.get(this.url + "/api/v4/friendships/" + id)
  }

  updateFriendship(data:any, id:any){
    return this.http.put(this.url + "/api/v4/friendships/" +id, data, this.httpOptions);
  }

  deleteFriendship(id:any){
    return this.http.delete(this.url + "/api/v4/friendships/" + id)

  }
}
