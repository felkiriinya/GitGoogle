import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repositories } from 'src/app/models/repositories';
import { Users } from 'src/app/models/users';
import { SearchGitService } from 'src/app/services/search-git.service';

@Component({
  selector: 'app-name-result',
  templateUrl: './name-result.component.html',
  styleUrls: ['./name-result.component.css']
})
export class NameResultComponent implements OnInit {

    repos:Repositories[];
    user:Users;
    username:string;

  constructor(private route: ActivatedRoute, private searchGitService: SearchGitService) { }

    searchResult(){

        this.searchGitService.userInfoRequest(this.username)
        this.user = this.searchGitService.user
        this.searchGitService.userRepoRequest(this.username)
        this.repos =this.searchGitService.repos

    }
  ngOnInit(){

    this.searchResult()
  }

}
