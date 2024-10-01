import {Component} from '@angular/core';
import {SkillsService} from "../../shared/services/api-services/skills.service";
import {ISkillType} from "../../shared/domain/types/skill.types";


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  isModalVisible = false;
  filteredSkillList: ISkillType[] = [];

  constructor(private _skillsService: SkillsService) {
    this.filteredSkillList = this._skillsService.getSkillList();
  }

  setModalVisibility() {
    this.isModalVisible = !this.isModalVisible;
  }

  getInputValue(inputValue: string) {
    this.filteredSkillList = this._skillsService.getSkillList().filter(task =>
      task.skillName.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

}
