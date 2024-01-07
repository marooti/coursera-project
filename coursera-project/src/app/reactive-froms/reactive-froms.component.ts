import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reactive-froms',
  templateUrl: './reactive-froms.component.html',
  styleUrls: ['./reactive-froms.component.scss']
})
export class ReactiveFromsComponent {
  herosServiceData:any;
  constructor(private service: ServiceService) {
   
   }
   ngOnInit(){
     this.service.getHeros();
     this.herosServiceData = this.service.getHeros();
     console.log("this is heros service responce:", this.herosServiceData);
   }
  heroDataMethod(hero:any){
    console.log("this is hero data method responce:", hero)
  }
}
