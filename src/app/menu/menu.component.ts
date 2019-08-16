import { Component, OnInit, ViewChild } from '@angular/core';
import { ScriptService } from '../services/script.service';
import { IpDetails } from '../util/ipDetails';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  item1:boolean=false;
  item2:boolean=false;
  value = 'Clear me';
  ipList:IpDetails[];
  displayedColumns: string[] = ['checked','systemName', 'systemAddress', 'systemTechName', 'status'];
  dataSource:MatTableDataSource<IpDetails> ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private scriptService:ScriptService) { }

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
      let ipList1:IpDetails[]=this.scriptService.getDetailsByAddress(serviceAddress);
      this.ipList=ipList1;
      this.dataSource=new MatTableDataSource<IpDetails>(this.ipList);
      this.dataSource.paginator = this.paginator;
  }
}
