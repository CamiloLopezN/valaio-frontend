import {Component, Input} from '@angular/core';
import {ISkillType} from "../../../shared/domain/types/skill.types";
import {SkillsService} from "../../../shared/services/api-services/skills.service";
import {PeopleService} from "../../../shared/services/api-services/people.service";

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {

  @Input() skillList: ISkillType[] = [];

  getPercentageFromSKillDifficulty(skillDifficulty: number): string {
    return `${(skillDifficulty * 10)}%`;
  }

  constructor(private _skillsService: SkillsService, private _peopleService: PeopleService) {

  }

  deleteSkill(skillId: number) {
    this._skillsService.deleteSkill(skillId);
    this.skillList = this._skillsService.getSkillList();
    this._peopleService.deleteSkillFromPeople(skillId);
  }
}
