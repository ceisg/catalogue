import { Component, OnInit } from '@angular/core';
import {Produit} from "../Produit";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {


  produits  : Produit[] =[] ;
  panier : Produit[] =[] ;





  constructor() {

  }

  ngOnInit(): void {

    this.produits.push( {ref :"C204MA-GJ0203",prix: 1550, image:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/c/2/c204ma-gj0203-10.jpg" , desc : "Écran 15.6\" HD - Processeur: Intel Celeron N4020 (1,10 GHz up to 2.80 GHz , 4Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go DDR4-2400 - Disque Dur: 1To HDD - Carte Graphique: Intel UHD 600 Graphics avec Wi-Fi, Bluetooth,1x USB 2.0, 2x USB 3.2 Gen 1, 1x HDMI 1.4, 1x prise combo casque/micro (3,5 mm) et lecteur de carte - Couleur: Gris - Garantie: 1 an + Sac à Dos & Souris Sans Fil"} ) ;
    this.produits[1] = {ref :"82C2000YFE",prix: 2000, image:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/8/1/81wq00gsfg.jpg", desc : "Écran 15.6\" HD - Processeur: Intel Celeron N4020 (1,10 GHz up to 2.80 GHz , 4Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go DDR4-2400 - Disque Dur: 1To HDD - Carte Graphique: Intel UHD 600 Graphics avec Wi-Fi, Bluetooth,1x USB 2.0, 2x USB 3.2 Gen 1, 1x HDMI 1.4, 1x prise combo casque/micro (3,5 mm) et lecteur de carte - Couleur: Noir - Garantie: 1 an + Sac à Dos & Souris Sans Fil  "} ;
    this.produits[2] = {ref :"81WH007TFE",prix: 2345, image:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/b/u/bu-81wq00grfg-21.jpg", desc : "\n" +
        "PC Portable LENOVO IdeaPad 3 15IGL05 N4020 4G 1To - Bleu\n" +
        "[BU-81WQ00GSFG]\n" +
        "Écran 15.6\" HD - Processeur: Intel Celeron N4020 (1,10 GHz up to 2.80 GHz , 4Mo de mémoire cache, Dual-Core) - Système d'exploitation: FreeDos - Mémoire RAM: 4 Go DDR4-2400 - Disque Dur: 1To HDD - Carte Graphique: Intel UHD 600 Graphics avec Wi-Fi, Bluetooth,1x USB 2.0, 2x USB 3.2 Gen 1, 1x HDMI 1.4, 1x prise combo casque/micro (3,5 mm) et lecteur de carte - Couleur: Bleu - Garantie: 1 an + Sac à Dos & Souris Sans Fil   "} ;
    this.produits[3] = {ref :"81WQ00GSFG",prix: 3421, image:"https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/8/1/81wq00gyfg-30.jpg", desc : "Écran 15.6\" HD - Processeur: Intel Celeron N4020 (1,10 GHz up to 2.80 GHz , 4Mo de mémoire cache, Dual-Core) - Système d'exploitation: Windows 11 Famille - Mémoire RAM: 4 Go DDR4-2400 - Disque Dur: 1To HDD - Carte Graphique: Intel UHD 600 Graphics avec Wi-Fi, Bluetooth,1x USB 2.0, 2x USB 3.2 Gen 1, 1x HDMI 1.4, 1x prise combo casque/micro (3,5 mm) et lecteur de carte - Couleur: Bleu - Garantie: 2 ans + Sac à Dos & Souris Sans Fil"} ;

  }


  AjouterP($event: Produit) : void {
   this.panier.push($event)  ;
   console.log($event.ref)
  }


  getTotal(): number {
    let  tot = 0 ;
    for (let pr of this.panier)
         tot += pr.prix ;
    return tot ;
  }


  delete(pos: number) {

    for (let i = pos ; i<this.panier.length-1;i++)
      this.panier[i] =this.panier[i+1] ;
this.panier.pop() ;


  }


}
