import { Component } from '@angular/core';
import {Tarifa} from 'src/app/domain/tarifa';
import { TarifasService } from 'src/app/services/tarifas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent {
  tarifa: Tarifa = new Tarifa();
  control: boolean  = false;

  constructor(private TarifasService: TarifasService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.tarifa = new Tarifa()
        this.tarifa = params['tarifa']
      }
    }
    private delay(ms: number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    guardar(){
      console.log(this.tarifa)
      this.TarifasService.save(this.tarifa).subscribe(data => {
        console.log("rsultado Ws save", data)
        if (data.codigo != 1111) {
          alert(data.mensaje)
        } else {
          this.tarifa = new Tarifa()
          this.router.navigate(['paginas/listatarifas'])
        }
      });
    }
}
