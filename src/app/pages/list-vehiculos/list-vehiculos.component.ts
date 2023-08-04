import { Component } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import {NavigationExtras, Router} from '@angular/router';
import { Vehiculo } from 'src/app/domain/vehiculo';

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.css']
})
export class ListVehiculosComponent {

    /*tarifa: Tarifa = new Tarifa();
    control: boolean  = false;*/
    listadoVehiculosWS: any;
    constructor( private vehiculoService: VehiculosService,
      private router: Router){
        console.log('listadoVehiculosWS', this.listadoVehiculosWS)
        this.listadoVehiculosWS =this.vehiculoService.getAll()
        let params = this.router.getCurrentNavigation()?.extras.queryParams;
        if(params){
          console.log(params)
          /*this.tarifa = new Tarifa()
          this.tarifa = params['tarifa']*/
        }
      }
      ngOnInit(): void {
        this.listadoVehiculosWS =this.vehiculoService.getAll()
      }
      listarTarifa(){
        this.listadoVehiculosWS =this.vehiculoService.getAll()
      }
  
      eliminar(tarifa: Vehiculo){
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
  
      /*editar(tarifa: Tarifa){
        console.log(tarifa)
        this.tarifaService.save(tarifa).subscribe(data => {
          console.log("rsultado Ws update", data)
          if (data.codigo != 1111) {
            alert(data.mensaje)
          } else {
            tarifa = new Tarifa()
            this.router.navigate(['paginas/nuevo-tarifa'])
          }
        });*/
      }
  
      
  
 
        



  