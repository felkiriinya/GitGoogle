import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VisitedRepoDirective } from './directives/visited-repo.directive';
import { DaysPassedPipe } from './pipes/days-passed.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyProfileComponent,
    RepoResultComponent,
    NameResultComponent,
    NavBarComponent,
    VisitedRepoDirective,
    DaysPassedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
