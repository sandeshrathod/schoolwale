import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxComponent } from './parallax/parallax.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SchooleventsComponent } from './schoolevents/schoolevents.component';
import { ApplicationComponent } from './application/application.component';
import { StudentComponent } from './student/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './student/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './student/form/form.component';
import { OtpverificationComponent } from './student/otpverification/otpverification.component';
import { CourselComponent } from './coursel/coursel.component';
import { TeachersComponent } from './teachers/teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParallaxComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    SchooleventsComponent,
    ApplicationComponent,
    StudentComponent,
    ModalComponent,
    FormComponent,
    OtpverificationComponent,
    CourselComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
