import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import de datos http
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

//Pipes
import { NoImgePipe } from './pipes/no-imge.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImgePipe,
    TarjetasComponent,
    LoadingComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
