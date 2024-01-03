import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { EmailService } from './email.service';
import { CoursesComponent } from './courses.component';
import { CoursesSevice } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EmailService,
    CoursesSevice,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
