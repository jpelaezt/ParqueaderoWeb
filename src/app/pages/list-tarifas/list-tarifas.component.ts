import { Component } from '@angular/core';
import { Tarifa } from 'src/app/domain/tarifa';
import { TarifasService } from 'src/app/services/tarifas.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-list-tarifas',
  templateUrl: './list-tarifas.component.html',
  styleUrls: ['./list-tarifas.component.css']
})
export class ListTarifasComponent 
  {
    /*tarifa: Tarifa = new Tarifa();
    control: boolean  = false;*/
    listadoTarifasWS: any;
    constructor( private tarifaService: TarifasService,
      private router: Router){
        console.log('listadoTarifasWS', this.listadoTarifasWS)
        this.listadoTarifasWS =this.tarifaService.getAll()
        let params = this.router.getCurrentNavigation()?.extras.queryParams;
        if(params){
          console.log(params)
          /*this.tarifa = new Tarifa()
          this.tarifa = params['tarifa']*/
        }
      }
      ngOnInit(): void {
        this.listadoTarifasWS =this.tarifaService.getAll()
      }
      listarTarifa(){
        this.listadoTarifasWS =this.tarifaService.getAll()
      }
  
      eliminar(tarifa: Tarifa){
        /*console.log(tarifa.descripcion)
        this.tarifaService.delete(cliente.cedula).subscribe(data => {
         console.log("rsultado Ws delete", data)
         
        });
        //this.cliente = new Cliente()
        //this.router.navigate(['paginas/nuevo-contacto'], params)      
        this.router.navigate(['paginas/nuevo-cliente'])*/
      }
      private delay(ms: number){
        return new Promise(resolve => setTimeout(resolve, ms));
      }
  
      editar(tarifa: Tarifa){
        console.log(tarifa)
        this.tarifaService.save(tarifa).subscribe(data => {
          console.log("rsultado Ws update", data)
          if (data.codigo != 1111) {
            alert(data.mensaje)
          } else {
            tarifa = new Tarifa()
            this.router.navigate(['paginas/nuevo-tarifa'])
          }
        });
      }
  
      
  
 
        


  }
  