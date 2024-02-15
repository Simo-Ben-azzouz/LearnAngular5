import { Component, inject } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

/**
 *
 */
route = inject(Router)
// constructor(private router: Router) {}

  redirection()
  {
    this.route.navigate(['following',12,'simo'],{
      queryParams : {page :12 , val : 'niceCatch'}
    })
  }
}
