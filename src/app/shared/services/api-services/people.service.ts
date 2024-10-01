import {Injectable} from '@angular/core';
import {IPersonType} from "../../domain/types/person.types";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  initPersonList: IPersonType[] = [
    {
      personId: 1,
      personName: 'John Doe',
      personBirthDate: '1990-01-01',
      personIcon: 'person',
      personSkillsId: [1, 2, 3, 4, 5, 6, 7]
    },
    {
      personId: 2,
      personName: 'Jane Doe',
      personBirthDate: '1991-01-01',
      personIcon: 'person',
      personSkillsId: [4, 5, 6]
    },
    {
      personId: 3,
      personName: 'Jack Doe',
      personBirthDate: '1992-01-01',
      personIcon: 'person',
      personSkillsId: [7, 8, 9]
    }
  ]

  constructor() {
    if (localStorage.getItem('people')) {
      this.initPersonList = JSON.parse(localStorage.getItem('people') as string);
      return
    }
    localStorage.setItem('people', JSON.stringify(this.initPersonList));
  }

  addPerson(person: IPersonType) {
    const maxId = this.initPersonList.reduce((max, person) => person.personId > max ? person.personId : max, 0);
    person.personId = maxId + 1;
    this.initPersonList.push(person);
    localStorage.setItem('people', JSON.stringify(this.initPersonList));
  }

  getPersonList(): IPersonType[] {
    return this.initPersonList;
  }

  getPeopleFromIds(peopleId: number[]): IPersonType[] {
    return this.initPersonList.filter(person => peopleId.includes(person.personId));
  }

  deletePerson(personId: number) {
    this.initPersonList = this.initPersonList.filter(person => person.personId !== personId);
    localStorage.setItem('people', JSON.stringify(this.initPersonList));
  }

  deleteSkillFromPeople(skillId: number) {
    this.initPersonList.forEach(person => {
      person.personSkillsId = person.personSkillsId.filter(id => id !== skillId)
    });
    localStorage.setItem('people', JSON.stringify(this.initPersonList));
  }

}
