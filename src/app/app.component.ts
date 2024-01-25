import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  viewCourse = 'Laravel';
  title = 'Angular5v2';
  body ='Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia'

  courses:any;
trackCourse(index:any , course:any)
{
  return course ? course.id : undefined;
}
  loadCourse()
  {
    this.courses = [
      {id :1 , title : "Laravel"},
      {id :2 , title : "Angular"},
      {id :3 , title : "VueJS"},
      {id :4 , title : "ReactJS"}    
    ];
  }
  addCourse()
  {
    this.courses.push({id :6 , title : "Firebase"});
  }
  removeCourse(remove:any)
  {
    let index = this.courses.indexOf(remove);
    this.courses.splice(index,1);
  }
}
