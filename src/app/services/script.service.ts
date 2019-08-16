import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IpDetails } from '../util/ipDetails';


@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor(private http: HttpClient) { }

  public getDetailsByAddress(serviceAddress:string):IpDetails[]{
   let  ipsList:IpDetails[]=[];
       let ips1:IpDetails;
       ips1= new IpDetails('asdsd','asdad','asdas','asdasd');
       let ips2:IpDetails;
       ips2= new IpDetails('asdsd','asdad','asdas','asdasd');
       ipsList.push(ips1);
       ipsList.push(ips2);

       return ipsList;
  }
}
