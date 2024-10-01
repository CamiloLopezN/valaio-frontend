import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {SearchInputComponent} from "../search-input/search-input.component";

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  standalone: true,
  imports: [
    ButtonComponent,
    SearchInputComponent
  ],
  styleUrls: ['./header-pages.component.css']
})
export class HeaderPagesComponent {

  @Input() tittle: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() description: string | undefined;

  @Output() inputValueEmitter: EventEmitter<string> = new EventEmitter<string>();

  getInputValue(inputValue: string) {
    this.inputValueEmitter.emit(inputValue);
  }

}
