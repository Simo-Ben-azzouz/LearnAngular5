import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-following',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './profil-following.component.html',
  styleUrl: './profil-following.component.css'
})
export class ProfilFollowingComponent {
/**
 *
 */
constructor(private route : ActivatedRoute) {
  
}

ngOnInit(){
  this.route.paramMap.subscribe(
    params  => {
      console.log(params.get('username'));
      
    }
  )
}
}
