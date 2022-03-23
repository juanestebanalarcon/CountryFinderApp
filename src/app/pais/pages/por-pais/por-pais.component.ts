import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li {cursor:pointer;}`
  ]
})
export class PorPaisComponent {
  termino:string="";
  HayError:boolean=false;
  paises: Country[]=[];
  paisesSugeridos: Country[]=[];
  mostrarSugerencias:boolean=false;

  constructor(private paisService:PaisService) { }
  
  buscar(termino:string) {
    this.mostrarSugerencias=false;
    this.HayError=false;
    this.termino=termino;
    this.paisService.buscarPais(termino)
    .subscribe( (paises) => {
      console.log(paises);
      this.paises=paises;
    },(err)=>{
      this.HayError=true;
      this.paises=[];
    });
  }
  suggestions(termino:string){
    this.HayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    //TODO crear sugerencias.
    this.paisService.buscarPais(termino).subscribe(paises=>this.paisesSugeridos=paises.splice(0,5),
    (err)=>this.paisesSugeridos=[]); 
  }
  buscarSugerido(termino:string){
    this.buscar(termino);
  
  }  
}
