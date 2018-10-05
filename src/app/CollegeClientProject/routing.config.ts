import { Routes } from '@angular/router'
import { FacilityComponent } from './facility/facility.component';
import { BodyComponent } from './body/body.component';
import { ContactAppComponent } from './contact/contact.component';

export const CollegeRouts: Routes = [
    { path: '', component: BodyComponent },
    { path: 'facility', component: FacilityComponent },
    { path: 'contact', component: ContactAppComponent }

]