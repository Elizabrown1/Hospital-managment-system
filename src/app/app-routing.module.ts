import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CalenderComponent } from './calender/calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'patient-dashboard', component: PatientDashboardComponent},
  {path: 'patient-profile', component:PatientProfileComponent},
  {path: 'calender', component:CalenderComponent},
 
  
  // {path: 'dashboard', component:DashboardComponent},
  // {path: 'side-nav', component: SideNavComponent}

  {path: '', component: SideNavComponent, children:[
    {path: 'dashboard', component: DashboardComponent }, 
   
    {path : 'user-dashboard', component: UsersDashboardComponent},
    {path: 'patient-dashboard', component: PatientDashboardComponent},

   
  ]},
    {path: 'side-nav', component: SideNavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
