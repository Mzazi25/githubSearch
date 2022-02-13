import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';




@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  public myRepos: any;
  public repoName: string = "";
  public repository: any = [];
  constructor(private userservice:UserService) { }

  APIRequest() {
    let promise = new Promise((resolve, reject) => {
      this.userservice.searchRepo().subscribe((data) => {
        if (data) {
          resolve(data as string[]);
        }
        else {
          reject("nothing")
        }
      })
    })
    return promise
  }
  findRepository(){
    this.userservice.updateRepo(this.repoName);
    this.myRepos=this.userservice.searchRepo().subscribe((response: any) =>{
      this.myRepos = response;
  
    });
    this.userservice.getUserRepo().subscribe((myRepo: any) =>{
      this.myRepos = ["items"];
    });
  }
  ngOnInit(): void {
    
     this.myRepos= this.userservice.searchRepo().subscribe((data)=>{
        this.myRepos = data as string[];
      });

  }

}
