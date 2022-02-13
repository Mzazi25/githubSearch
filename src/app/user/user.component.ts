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
  public userName:any= [];
  public userRepo:any=[];
  user!: User;

  constructor(private userservice:UserService) { }

  findUser(){
    this.userservice.updateUser(this.userName);
    this.userservice.getUserInfo().subscribe((response: any) =>{
      this.userName = response;
      console.log(response);
    });
    this.userservice.getUserRepo().subscribe((userRepo: any) =>{
      this.userRepo = userRepo;
      console.log(userRepo);
    });
  }
  ngOnInit(): void{
    
  }

}