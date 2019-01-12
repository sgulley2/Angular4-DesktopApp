import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteComponent } from './components/quote/quote.component';
import { QuoteDetailComponent } from './components/detail/quote.detail.component';

import { ReicoLoginComponent } from './reico_module/components/login/login.component';
import { LoginService } from './reico_module/services/login/login.service';


const appRoutes: Routes = [
    { path: '', component: QuoteComponent, canActivate: [LoginService] },
    { path: 'quote-details', component: QuoteDetailComponent, canActivate: [LoginService] },
    { path: 'login', component: ReicoLoginComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
