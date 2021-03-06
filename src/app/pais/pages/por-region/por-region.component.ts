import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{margin-right:5px;}`
  ]
})
export class PorRegionComponent{

regiones:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
regionActive:string='';
paises:Country[]=[];

  constructor(private paisService:PaisService) { }

getClaseCSS(region:string):string{
return (region===this.regionActive) ? 'btn btn-primary':'btn btn-outline-primary';
}
activarRegion(region:string){
if(region ===this.regionActive){return;}
this.regionActive=region;
this.paises=[];
//TODO hacer llamado al service.
this.paisService.buscarRegion(region)
.subscribe( (paises) => this.paises=paises);
}
}
