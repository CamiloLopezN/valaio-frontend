import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {

  @Output() inputValueEmitter: EventEmitter<string> = new EventEmitter<string>();


  setInputValue(event: any) {
    this.inputValueEmitter.emit(event.target.value);
  }

}
