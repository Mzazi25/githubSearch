import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username:string;
  private repoName: string;

  private clientId = 'acb5b1492f73531f4322';
  

  constructor(private http:HttpClient) { 
    console.log("profile service is now ready");
    this.username = 'mzazi25'; //default profile

    console.log ("repos");
    this.repoName = 'Akan-Name';
  }
  //function to collect data from github
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + environment.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  getUserRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + environment.clientSecret)
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  searchRepo(){
    return this.http.get("https://api.github.com/search/repositories?q=" + this.repoName + "&client_secret=" + environment.clientSecret) 
    .pipe(map(data=>{
      return data;
    }));
  }
  updateUser(username: string){
    this.username = username;

  }
   updateRepo(repoName: string){
      this.repoName = repoName;
   } 
}