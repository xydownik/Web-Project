import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestPageComponent} from "./test-page/test-page.component";
import {UniListComponent} from "./uni-list/uni-list.component";
import {UniInfoComponent} from "./uni-info/uni-info.component";
import {SpecialtiesComponent} from "./specialties/specialties.component";
import {TestsComponent} from "./tests/tests.component";
import {Test3Component} from "./test3/test3.component";
import {Test1Component} from "./test1/test1.component";
import {Test2Component} from "./test2/test2.component";
import {ConsultService} from "./consult.service";
import {ConsultPageComponent} from "./consult-page/consult-page.component";
import {RadarChartComponent} from "./radar-chart/radar-chart.component";
import {TestResultsComponent} from "./test-results/test-results.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home'},
  {path: 'home/test-page', component: TestPageComponent, title: 'Test Page'},
  {path: 'home/test-page/tests', component: TestsComponent, title: 'Tests'},
  {path: 'home/test-page/tests/1', component: Test1Component, title: 'Test1'},
  {path: 'home/test-page/tests/2', component: Test2Component, title: 'Test2'},
  {path: 'home/test-page/tests/3', component: Test3Component, title: 'Test3'},
  {path: 'home/specialties', component: SpecialtiesComponent, title: 'Specialties'},
  {path: 'home/universities', component: UniListComponent, title: 'Universities'},
  {path: 'home/consultation', component: ConsultPageComponent, title: 'Consultation'},
  {path: 'home/tests/test-results', component: TestResultsComponent, title: 'Test Results'},
  {path: 'home/universities/:id', component: UniInfoComponent, title: 'University Information'},
  {path: 'home/login-page', component: LoginPageComponent, title: 'Login'},
  {path: 'home/sign-in-page', component: SignInPageComponent, title: 'Sign In'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];
