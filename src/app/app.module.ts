import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './CollegeClientProject/header/header.component';
import { FooterComponent } from './CollegeClientProject/footer/footer.component';
import { BodyComponent } from './CollegeClientProject/body/body.component';
import { FacilityComponent } from './CollegeClientProject/facility/facility.component';
import { RouterModule } from '@angular/router';
import { CollegeRouts } from './CollegeClientProject/routing.config';
import { ContactAppComponent } from './CollegeClientProject/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FacilityComponent,
    ContactAppComponent

 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(CollegeRouts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
