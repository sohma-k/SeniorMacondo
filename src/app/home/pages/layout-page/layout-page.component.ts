import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  
  constructor(private router:Router){}
  regresar() {
    this.router.navigate(['/WebSrMacondo/home']);
  }

}
