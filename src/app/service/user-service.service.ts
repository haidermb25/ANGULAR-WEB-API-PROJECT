import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../../Models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  //Get data by the item id
  getUserData(userid:number):Observable<user>{
    return this.http.get<user>(`https://dummyjson.com/products/${userid}`)
  }
  //get the data of the whole items
  getAllData():Observable<user[]>{
    return this.http.get<user[]>('https://dummyjson.com/products')
  }

}
