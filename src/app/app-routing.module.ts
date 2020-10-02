import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';


const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'my-profile', component: MyProfileComponent},
    {path: 'name-result/:username' , component:NameResultComponent},
    {path: 'repo-result/:reponame', component:RepoResultComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
