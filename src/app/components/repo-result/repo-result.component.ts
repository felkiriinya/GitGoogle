import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumberOfRepo } from 'src/app/models/number-of-repo';
import { RepoByName } from 'src/app/models/repo-by-name';
import { SearchGitService } from 'src/app/services/search-git.service';

@Component({
  selector: 'app-repo-result',
  templateUrl: './repo-result.component.html',
  styleUrls: ['./repo-result.component.css']
})
export class RepoResultComponent implements OnInit {

    reposByName:RepoByName[];
    reponame:string;
    numberOfRepos: NumberOfRepo;
  
    constructor( private route: ActivatedRoute, private searchGitService: SearchGitService ) {}
  
    repoResult(){
      
        // this.reponame = this.route.snapshot.paramMap.get('reponame')
        this.searchGitService.repoByNameRequest(this.reponame)
          this.reposByName =this.searchGitService.reposByName;
    
        this.searchGitService.repoByNameNumberRequest(this.reponame)
          this.numberOfRepos =this.searchGitService.numberOfRepos;
    
        console.log(this.numberOfRepos)
      
      
    }
  
    ngOnInit(){
      this.repoResult()
    }

}
