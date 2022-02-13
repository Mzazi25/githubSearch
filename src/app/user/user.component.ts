import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myUser:any=[];
  public repos:any=[];
  public username: string = "";
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
    this.userservice.updateUser(this.username);
    this.userservice.getUserInfo().subscribe((response: any) =>{
      this.myUser = response;
  
    });
    this.userservice.getUserRepo().subscribe((myRepo: any) =>{
      this.repos = myRepo;

    });
  }
  ngOnInit(): void{
    
  }

}
