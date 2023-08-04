import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Cliente} from 'src/app/domain/cliente';
import {Resultado} from 'src/app/domain/resultado';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: Cliente = new Cliente();
  control: boolean  = false;

  constructor(private clienteService: ClientesService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.cliente = new Cliente()
        this.cliente = params['cliente']
      }
    }
    private delay(ms: number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    guardar(){
      console.log(this.cliente)
      this.clienteService.save(this.cliente).subscribe(data => {
        console.log("rsultado Ws save", data)
        if (data.codigo != 1111) {
          alert(data.mensaje)
        } else {
          this.cliente = new Cliente()
          this.router.navigate(['paginas/listaclientes'])
        }
      });
    }
}
