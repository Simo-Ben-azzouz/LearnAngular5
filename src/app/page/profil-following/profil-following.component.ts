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
  id: number = 0;
  username: any;
  type: any;
  varname: any;
  page: number = 0;
  /**
   *
   */
  constructor(private route: ActivatedRoute) {
    // this.id=0;
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.username = this.route.snapshot.paramMap.get('username');

    this.page = Number(this.route.snapshot.queryParamMap.get('Page'));
    this.varname = this.route.snapshot.queryParamMap.get('var');
    this.type = this.route.snapshot.queryParamMap.get('type');
  }
}
