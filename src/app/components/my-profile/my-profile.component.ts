import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { SearchGitService } from 'src/app/services/search-git.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

user:Users;


  constructor(private searchGitService: SearchGitService, private http:HttpClient) { }

  ngOnInit(){

    this.searchGitService.userInfoRequest("felkiriinya")
    this.user = this.searchGitService.user
  }

}
