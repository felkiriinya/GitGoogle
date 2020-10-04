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
    reposByName: RepoByName[];
    reponame:string;

    isShowUserForm =false;
    isShowRepoForm = false;

    numberOfRepos: NumberOfRepo;

  constructor(private router: Router, private searchGitService: SearchGitService) { }


    toggleUserForm(){
        this.isShowUserForm =!this.isShowUserForm;
    }

    toggleRepoForm(){
        this.isShowRepoForm =!this.isShowRepoForm;
    }

    findProfile(){
        this.router.navigate(['/name-result',this.username])
        this.searchGitService.userInfoRequest(this.username)
        this.user = this.searchGitService.user
        this.searchGitService.userRepoRequest(this.username)
        this.repos =this.searchGitService.repos
    }

    findRepo(){
        this.router.navigate(['/repo-result',this.reponame])
        this.searchGitService.repoByNameRequest(this.reponame)
        this.reposByName = this.searchGitService.reposByName
        this.searchGitService.repoByNameNumberRequest(this.reponame)
        this.numberOfRepos =this.searchGitService.numberOfRepos

    }

  ngOnInit(): void {
  }

}
