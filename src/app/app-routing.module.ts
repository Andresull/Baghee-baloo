import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { BagheeComponent } from './components/baghee/baghee.component';
// import { BalooComponent } from './components/baloo/baloo.component';
import { SisbenSearchComponent } from './components/sisben-search/sisben-search.component';
//rutas de navegacion
const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path : 'pagina1', component: Pagina1Component},
  {path : 'pagina2', component: Pagina2Component},
  {path : 'pagina3', component: Pagina3Component},
  {path : 'Baghee', component: BagheeComponent},
  {path : 'sisben-search', component : SisbenSearchComponent},
  {path : '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
