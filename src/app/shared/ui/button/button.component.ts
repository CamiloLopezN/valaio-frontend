import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonType: 'button' | 'submit' | 'reset' = 'button';
  @Input() buttonText: string | undefined;
  @Input() buttonClass: string | undefined;
  @Input() buttonState: boolean = false;
  @Output() onClickEmitter: EventEmitter<void> = new EventEmitter<void>();

  onClickButton() {
    this.onClickEmitter.emit();
  }

}
