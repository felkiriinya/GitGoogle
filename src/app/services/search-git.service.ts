import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { NumberOfRepo } from '../models/number-of-repo';
import { RepoByName } from '../models/repo-by-name';
import { Repositories } from '../models/repositories';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class SearchGitService {

    user: Users;
    repos: Repositories[]=[];
    username: string;
    reposByName: RepoByName[]=[];
    reponame: string;
    numberOfRepos:NumberOfRepo;
    repositories =[]
    

  constructor(private http: HttpClient, private route: ActivatedRoute) {

    this.user = new Users ("", "", "", "", 0 , 0, 0, new Date() , "", "");
    this.numberOfRepos =new NumberOfRepo(0)

      
   }

   userInfoRequest(username){
    interface userApiResponse{
         name:string,
         login: string,
         bio: string,
         url: string,
         followers: number,
         following: number,
         public_repos: number,
         created_at: Date,
         avatar_url: string,
         email: string
    }

    // 'https://api.github.com/users/daneden?access_token=' + apiKey

    let promise =new Promise ((resolve, reject)=>{
        this.http.get<userApiResponse>(`${environment.gitUrl}${username}?client_id=${environment.apiKey}`).toPromise().then(response =>{
            this.user.name = response.name
            this.user.login= response.login
            this.user.bio  = response.bio
            this.user.url = response.url
            this.user.followers=response.followers
            this.user.following =  response.following
            this.user.public_repos =  response.public_repos
            this.user.created_at =  response.created_at
            this.user.avatar_url =  response.avatar_url
            this.user.email = response.email
            resolve()
        },
        error =>{
            this.user.login ="User not found"
            console.log("An error occured")
            reject(error)
        }
        )
    })

    return promise

   }

   userRepoRequest(username){
       interface repoApiResponse{
         name: string,
         description: string,
         language: string,
         html_url: string,
         forks: number
       }
       let promise = new Promise ((resolve,reject)=>{
           let arrayLength = this.repos.length;

           for (let i=0; i<arrayLength; i++){
               this.repos.pop()
           }

           this.http.get<repoApiResponse>(`${environment.gitUrl}${username}/repos?client_id=${environment.apiKey}`).toPromise().then(response=>{
               for (let i=0; i<this.user.public_repos; i++){
                   let repo = new Repositories("","","","",0)

                   repo.name = response[i]["name"]
                   repo.description =response[i]["description"]
                   repo.language=response[i]["language"]
                   repo.html_url = response [i]["html_url"]
                   repo.forks = response[i]["forks"]

                   this.repos.push(repo)
               }
               resolve()
           },

           error => {
               console.log("an error occurred")
               reject(error)
           }
           )
       })

       return promise
   }
}
