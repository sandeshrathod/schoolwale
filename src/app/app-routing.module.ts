import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './home/home.component';
import { SchooleventsComponent } from './schoolevents/schoolevents.component';
import { FormComponent } from './student/form/form.component';
import { OtpverificationComponent } from './student/otpverification/otpverification.component';
import { StudentComponent } from './student/student.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'teacher',component:TeachersComponent},
  {path:'events',component:SchooleventsComponent},
  {path:'Register',component:ApplicationComponent},
  {path:'student',
  children:[
    {path:'',component:OtpverificationComponent},
    {path:'registration',component:FormComponent},
  
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
