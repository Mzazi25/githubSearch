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
  findUser(){
    this.userservice.updateRepo(this.myRepos);
    this.myRepos= this.userservice.searchRepo().subscribe((data: any)=>{
      this.myRepos = data ['items'];
      console.log(data);
    });
  }
  ngOnInit(): void {
   
     this.myRepos= this.myRepos.searchRepo().subscribe((data: string[])=>{
        this.myRepos = data as string[];
        console.log(data);
      });

  }

}