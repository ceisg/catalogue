import {Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import {Produit} from "../Produit";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  @Input() p!: Produit;
  @Output () produitPanier = new EventEmitter<Produit>()



  ajouter(pp: Produit) {
    this.produitPanier.emit(pp) ;
  }
}
