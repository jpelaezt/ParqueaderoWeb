import { Component, OnInit } from '@angular/core';
import { ComprobantesService } from 'src/app/services/comprobantes.service';
import {NavigationExtras, Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Cabecera } from 'src/app/domain/cabecera';




@Component({
  selector: 'app-list-comprobantes-pagados',
  templateUrl: './list-comprobantes-pagados.component.html',
  styleUrls: ['./list-comprobantes-pagados.component.css']
  
})
export class ListComprobantesPagadosComponent implements OnInit{


  listadoComprobantesPWS: any;

  
  constructor( private clienteService: ComprobantesService,
    private router: Router){
      console.log('listadoComprobantesPWS', this.listadoComprobantesPWS)
      this.listadoComprobantesPWS =this.clienteService.getAllP()
      
    }
    ngOnInit(): void {
      this.listadoComprobantesPWS =this.clienteService.getAllP()
      
    }
    listarcomprobante(){
      this.listadoComprobantesPWS =this.clienteService.getAllP()
     

    }

  
    

    
    
  
     

    /*eliminar(cliente: Cliente){
      console.log(cliente.cedula)
      this.clienteService.delete(cliente.cedula).subscribe(data => {
       console.log("rsultado Ws delete", data)
       
      });
      //this.cliente = new Cliente()
      //this.router.navigate(['paginas/nuevo-contacto'], params)      
      this.router.navigate(['paginas/nuevo-cliente'])
    }*/

    
    

    
      /*let params: NavigationExtras = {
        queryParams: {
          cliente: cliente
          //,
          //cedula: '0104997041'
        }
      }
      this.router.navigate(['paginas/nuevo-cliente'], params)*/
    }