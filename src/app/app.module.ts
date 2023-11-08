import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NavmenComponent } from './components/navmen/navmen.component';
import { Pagina3Component } from './components/pagina3/pagina3.component';
import { BagheeComponent } from './components/baghee/baghee.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { BalooComponent } from './components/baloo/baloo.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SisbenSearchComponent } from './components/sisben-search/sisben-search.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pagina1Component,
    Pagina2Component,
    PagenotfoundComponent,
    NavmenComponent,
    Pagina3Component,
    BagheeComponent,
    // BalooComponent,
    CarouselComponent,
    SisbenSearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
