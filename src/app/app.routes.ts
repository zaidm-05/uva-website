import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { WhoWeAreComponent } from './about-us/who-we-are/who-we-are';
import { TransparencyComponent } from './about-us/transparency/transparency';
import { LegalRegistrationComponent } from './about-us/legal-registration/legal-registration';

// add routes to all pages
export const routes: Routes = [
    // home page
    {path: '', component: HomeComponent},
    {path: 'about-us', component: WhoWeAreComponent},
    {path: 'transparency', component: TransparencyComponent},
    {path: 'legal-registration', component: LegalRegistrationComponent}
];
