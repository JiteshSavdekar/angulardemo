import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParsoninfoComponent } from './parsoninfo/parsoninfo.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectworkingComponent } from './projectworking/projectworking.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { CareerObjectiveComponent } from './career-objective/career-objective.component';
import { NamedeComponent } from './namede/namede.component';

@NgModule({
  declarations: [
    AppComponent,
    ParsoninfoComponent,
    EducationComponent,
    SkillComponent,
    ProjectworkingComponent,
    DeclarationComponent,
    CareerObjectiveComponent,
    NamedeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
