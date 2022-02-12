import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  public githubname :any= [];
  public description:any=[];
  public homepage:any=[];
  public html_url:any=[];
  repository!: Repository;

  constructor(private http:HttpClient) { }
  ngOnInit() {

    interface ApiResponse{
      githubname: string,
      description:string;
      homepage:string;
      html_url:string
    }

    this.http.get<ApiResponse>("https://api.github.com/users/Mzazi25?access_token=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").subscribe(data=>// Succesful API request
    // Succesful API request
    this.repository = new Repository(data.githubname, data.description, data.homepage, data.html_url))
  }

}