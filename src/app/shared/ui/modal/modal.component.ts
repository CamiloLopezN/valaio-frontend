import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  imports: [
    ButtonComponent,
    FontAwesomeModule
  ],
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() modalTitle: string | undefined;
  @Input() modalDescription: string | undefined;
  @Input() modalVisibility: boolean = false;

  @Output() onClickCloseModalEmitter = new EventEmitter<void>();

  onClickButton() {
    this.onClickCloseModalEmitter.emit();
  }

  protected readonly faClose = faClose;
}
