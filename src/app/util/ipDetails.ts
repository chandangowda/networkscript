export class IpDetails{
    systemName:string;
    systemAddress:string;
    systemTechName:string;
    status:string;

    constructor(systemName:string, systemAddress:string,systemTechName:string,status:string){
            this.status=status;
            this.systemAddress=systemAddress;
            this.systemName=systemName;
            this.systemTechName=systemTechName;
    }
}