import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { EmailService } from './email.service';
import { CoursesComponent } from './courses.component';
import { CoursesSevice } from './courses.service';
import { ResumePipe } from './resume.pipe';
import { StarComponent } from './star.component';
import { PanelComponent } from './panel/panel.component';
import { TestDerectiveDirective } from './test-derective.directive';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursComponent,
    StarComponent,
    ResumePipe,
    PanelComponent,
    TestDerectiveDirective,
    ContactFormComponent,
    ReactiveFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmailService,
    CoursesSevice,
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
