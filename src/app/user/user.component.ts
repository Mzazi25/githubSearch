import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
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
  repository!: Repository;
  user!: User;

  constructor(private http:HttpClient) { }
  ngOnInit() {

    interface ApiResponse{
      userName:string;
      userRepo:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Mzazi25?access_token=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").subscribe(data=>{
      // Succesful API request
      this.user = new User()
    })
  }

}