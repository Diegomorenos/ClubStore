import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Page404Component } from './components/page404/page404.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'store', component: StoreComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
