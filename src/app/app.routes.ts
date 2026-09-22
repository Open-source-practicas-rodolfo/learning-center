import { Routes } from '@angular/router';
import { Home } from './shared/presentation/views/home/home';
import { About } from './shared/presentation/views/about/about';

const baseTitle ='ACME Learning Center'

const about = () =>import('./shared/presentation/views/about/about').then(m => m.About);
export const routes: Routes = [
{ path: 'home', component: Home, title: `${baseTitle} - home`},
  {path: 'about', loadComponent: about, title: `${baseTitle} - About`},

];
