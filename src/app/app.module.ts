import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RepoResultComponent } from './components/repo-result/repo-result.component';
import { NameResultComponent } from './components/name-result/name-result.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VisitedRepoDirective } from './directives/visited-repo.directive';
import { DaysPassedPipe } from './pipes/days-passed.pipe';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
