import { Component } from '@angular/core';
import { Comprobante } from 'src/app/domain/comprobante';
import { ComprobantesService } from 'src/app/services/comprobantes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent {
  comprobante: Comprobante = new Comprobante();
  control: boolean  = false;
  listadoTarifasWS: any;
  constructor(private comprobanteService: ComprobantesService,
    private tarifaService: TarifasService,
    private router: Router){
      this.listadoTarifasWS =this.tarifaService.getAll()
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.comprobante = new Comprobante()
        this.comprobante = params['comprobante']
      }
    }
    private delay(ms: number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    ngOnInit(): void {
      this.listadoTarifasWS =this.tarifaService.getAll()
    }
    listarTarifa(){
      this.listadoTarifasWS =this.tarifaService.getAll()
    }

    guardar(){
      console.log(this.comprobante)
      console.log(this.comprobante.codigoTarifa)
      this.comprobanteService.save(this.comprobante).subscribe(data => {
        console.log("rsultado Ws save", data)
        if (data.codigo != 1111) {
          alert(data.mensaje)
        } else {
          this.comprobante = new Comprobante()
          this.listadoTarifasWS = "";
          this.router.navigate(['paginas/listacomprobantes'])
        }
      });
    }
}
