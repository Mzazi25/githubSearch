import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../repository';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public myRepos: any;
  public repoName: string = "";
  public repository: any = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {

    interface ApiResponse{
      author:string;
      quote:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/mzazi25?access_token=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").subscribe(data=>{
      // Succesful API request
      // this.repoName = new (data.author, data.quote)
    })
  }

}