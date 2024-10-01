import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faCircleUser, faEdit, faIceCream, faTrash, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    FontAwesomeModule,
    ButtonComponent
  ],
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() cardTitle: string | undefined;
  @Input() cardDescription: string | undefined;
  @Input() cardIcon: IconDefinition = faTrash;
  @Output() onClickEmitter: EventEmitter<void> = new EventEmitter<void>();

  onClickButton() {
    this.onClickEmitter.emit();
  }


  protected readonly faCircleUser = faCircleUser;
  protected readonly faTrash = faTrash;
  protected readonly faEdit = faEdit;
  protected readonly faIceCream = faIceCream;
}
