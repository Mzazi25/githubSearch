import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  repos:Repository

  constructor(private http:HttpClient) {
    this.repos = new Repository("","","");
   }

   repoRequest(){
     interface ApiResponse{
       homePage:string;
       desciption:string;
       username:string



     }
//      let promise = new Promise<void>((resolve,reject)=>{
//        this.http.get<ApiResponse>(environment.clientSecret).toPromise().then(response=>{
//          this.repos.homePage = response.homePage
//          this.repos.userName = response.username

//          resolve()
//        },
//        error=>{
//          this.repos.homePage = "Never, never, never give up"
//          this.repos.description = "Winston Churchill"

//          reject(error)
//        })
//      })
//      return promise
//    }
// }
    }}