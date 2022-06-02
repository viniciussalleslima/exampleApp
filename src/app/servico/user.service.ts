import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public listarUsuarios=[];

  private url= 'https://api/users?page=2';
  constructor(private http: HttpClient) { }

  buscarTodosUsuarios(){
    return this.http.get(this.url);
  }
}
