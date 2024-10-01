import {Component, Input} from '@angular/core';
import {IPersonType} from "../../../shared/domain/types/person.types";
import {SkillsService} from "../../../shared/services/api-services/skills.service";
import {ISkillType} from "../../../shared/domain/types/skill.types";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {PeopleService} from "../../../shared/services/api-services/people.service";
import {TasksService} from "../../../shared/services/api-services/tasks.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  @Input() personList: IPersonType[] = [];
  isModalVisible = false;


  constructor(private _skillsService: SkillsService, private _peopleService: PeopleService,
              private _tasksService: TasksService) {
  }

  setModalVisibility(personId: number) {
    this.personList.find(person => person.personId === personId)!.modalVisibility =
      !this.personList.find(person => person.personId === personId)!.modalVisibility;
    this.isModalVisible = !this.isModalVisible;
  }

  getSkillsFromIds(skillsId: number[]): ISkillType[] {
    return this._skillsService.getSkillsFromIds(skillsId);
  }

  getAge(birthDate: string): string {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age.toString();
  }

  deletePerson(personId: number) {
    this._peopleService.deletePerson(personId);
    this._tasksService.deletePersonFromTasks(personId);
    this.personList = this._peopleService.getPersonList();
  }

  protected readonly cardIcon = faTrash;
}
