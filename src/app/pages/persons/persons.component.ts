import {Component} from '@angular/core';
import {IPersonType} from "../../shared/domain/types/person.types";
import {PeopleService} from "../../shared/services/api-services/people.service";


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {

  isModalVisible = false;

  filteredPersonList: IPersonType[] = [];

  constructor(private _peopleService: PeopleService) {
    this.filteredPersonList = this._peopleService.getPersonList();
  }


  getInputValue(inputValue: string) {
    this.filteredPersonList = this._peopleService.getPersonList().filter(task =>
      task.personName.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  setModalVisibility() {
    this.isModalVisible = !this.isModalVisible;
  }

}
