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
id : any;
username : any;
/**
 *
 */

constructor(private route : ActivatedRoute) {
  // this.id=0;
}

ngOnInit(){
  this.route.paramMap.subscribe(
    params  => {
      this.id = params.get('id');
      this.username = params.get('username');
      
    }
  )
}
}
