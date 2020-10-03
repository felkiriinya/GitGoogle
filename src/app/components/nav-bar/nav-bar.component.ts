import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NumberOfRepo } from 'src/app/models/number-of-repo';
import { RepoByName } from 'src/app/models/repo-by-name';
import { Repositories } from 'src/app/models/repositories';
import { Users } from 'src/app/models/users';
import { SearchGitService } from 'src/app/services/search-git.service';
import { NameResultComponent } from '../name-result/name-result.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    username:string;
    user:Users;
    repos:Repositories[];
    nameResult: NameResultComponent;
    repoByName: RepoByName[];
    reponame:string;

    isShowUserForm =false;
    isShowRepoForm = false;

    numberOfRepos: NumberOfRepo;

  constructor(private router: Router, private searchGitService: SearchGitService) { }


    toggleUserForm(){
        this.isShowUserForm =!this.isShowUserForm;
    }
    findProfile(){
        this.router.navigate(['/name-result',this.username])
        this.searchGitService.userInfoRequest(this.username)
        this.user = this.searchGitService.user
        this.searchGitService.userRepoRequest(this.username)
        this.repos =this.searchGitService.repos
    }

  ngOnInit(): void {
  }

}
