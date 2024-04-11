import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestPageComponent} from "./test-page/test-page.component";
import {UniListComponent} from "./uni-list/uni-list.component";
import {UniInfoComponent} from "./uni-info/uni-info.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'home/test-page', component: TestPageComponent, title: 'Test Page'},
  {path: 'home/universities', component: UniListComponent, title: 'Universities'},
  {path: 'home/universities/:id', component: UniInfoComponent, title: 'University Information'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];
