import {Injectable} from '@angular/core';
import {ISkillType} from "../../domain/types/skill.types";
import {faAngular, faCss3, faHtml5, faJs, faNode, faNodeJs, faReact, faVuejs} from "@fortawesome/free-brands-svg-icons";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  initSkillList: ISkillType[] = [
    {skillId: 1, skillName: 'HTML', skillIcon: faHtml5, skillDifficulty: 2},
    {skillId: 2, skillName: 'CSS', skillIcon: faCss3, skillDifficulty: 5},
    {skillId: 3, skillName: 'JavaScript', skillIcon: faJs, skillDifficulty: 8},
    {skillId: 4, skillName: 'Angular', skillIcon: faAngular, skillDifficulty: 8},
    {skillId: 5, skillName: 'React', skillIcon: faReact, skillDifficulty: 8},
    {skillId: 6, skillName: 'Vue', skillIcon: faVuejs, skillDifficulty: 8},
    {skillId: 7, skillName: 'Node', skillIcon: faNode, skillDifficulty: 9},
    {skillId: 8, skillName: 'Express', skillIcon: faNodeJs, skillDifficulty: 4},
    {skillId: 9, skillName: 'MongoDB', skillIcon: faDatabase, skillDifficulty: 4},
  ];

  constructor() {
    if (localStorage.getItem('skills')) {
      this.initSkillList = JSON.parse(localStorage.getItem('skills') as string);
      return
    }
    localStorage.setItem('skills', JSON.stringify(this.initSkillList));
  }

  getSkillsFromIds(skillsId: number[]): ISkillType[] {
    return this.initSkillList.filter(skill => skillsId.includes(skill.skillId));
  }

  getSkillList(): ISkillType[] {
    return this.initSkillList;
  }

  deleteSkill(skillId: number): void {
    this.initSkillList = this.initSkillList.filter(skill => skill.skillId !== skillId);
    localStorage.setItem('skills', JSON.stringify(this.initSkillList));
  }

  addSkill(skill: ISkillType): void {
    this.initSkillList.push(skill);
  }

  updateSkill(skill: ISkillType): void {
    this.initSkillList = this.initSkillList.map(item => item.skillId === skill.skillId ? skill : item);
  }

}
