import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino:string="";
  HayError:boolean=false;
  paises: Country[]=[];

  constructor(private paisService:PaisService) { }
  
  buscar(termino:string) {
    this.HayError=false;
    this.termino=termino;
    this.paisService.buscarCapital(termino)
    .subscribe( (paises) => {
      this.paises=paises;
    },(err)=>{
      this.HayError=true;
      this.paises=[];
    });
  }  
}
