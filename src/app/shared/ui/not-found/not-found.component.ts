import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {


  @Input() tittle: string = '¡No se encontraron coincidencias!';
  @Input() description: string = 'Podría intentar buscar algo diferente.';
  @Input() color: string = 'text-secondary';

}
