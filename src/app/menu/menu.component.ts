import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  item1:boolean=false;
  item2:boolean=false;
  value = 'Clear me';
  constructor() { }

  ngOnInit() {
  }

  public toggle1(){
       this.item1=!this.item1;
  }

  public toggle2(){
    this.item2=!this.item2;
  }

  getIpaddress(serviceAddress:string){
      console.log('chandan');
  }
}
