import { Routes } from '@angular/router';
import { ExerciceComponent } from './page/exercice/exercice.component';
import { HomeComponent } from './page/home/home.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProfilFollowingComponent } from './page/profil-following/profil-following.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'following',
        component : ExerciceComponent
    },
    {
        path : 'following/:username',
        component : ProfilFollowingComponent
    },

    {
        path : '**',
        component : NotFoundComponent
    },


];
