import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProduitComponent } from './produit/produit.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    ProduitComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
