import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {nom :"TOUNSI",prenom : "Mohamed" , email:"tmed@gmail.com" , photo :"./assets/images/photo.png"  }

  comments = [{date : new Date().toLocaleString() , msg :"bravo !!"}] ;
  comment : string='' ;
  disable = true ;
  constructor() { }

  ngOnInit(): void {
  }

  addComm() {
    if (this.comment.trim()!== '')
      this.comments.push({msg:this.comment , date:new Date().toLocaleString() })
  this.comment='';
    this.disable=true ;
  }

  activer() {
    if (this.comment!='')
      this.disable =false ;
    else
      this.disable = true ;
  }

  addComm2($event: KeyboardEvent) {
if($event.key=="Enter")
  this.addComm() ;
  }

  delete(pos: number) {

    for (let j=pos ;j<this.comments.length-1 ; j++ )
         this.comments[j] = this.comments[j+1] ;

    this.comments.pop() ;
  }
}
