import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ageValidator, atLeastOneSkillValidator} from "../../../shared/domain/validators/person.validators";
import {SkillsService} from "../../../shared/services/api-services/skills.service";
import {PeopleService} from 'src/app/shared/services/api-services/people.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {


  personForm: FormGroup = new FormGroup({});
  personSkillsIds: number[] = [];

  @Output() onClickCloseModalEmitter = new EventEmitter<void>();


  constructor(private formBuilder: FormBuilder, private _skillsService: SkillsService,
              private _peopleService: PeopleService
  ) {
  }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      personName: ['', [Validators.required, Validators.minLength(5)]],
      personBirthDate: [null, [Validators.required, ageValidator(18)]],
      personSkillsId: [[], [Validators.required, atLeastOneSkillValidator()]]
    });

  }

  submitPerson() {
    this._peopleService.addPerson({
      ...this.personForm.value,
      personIcon: 'person',
    });
    this.onClickCloseModalEmitter.emit();
  }

  onClickSkill(skillId: number) {
    const index = this.personSkillsIds.indexOf(skillId);
    if (index === -1) {
      this.personSkillsIds.push(skillId);
    } else {
      this.personSkillsIds.splice(index, 1);
    }
    this.personForm.controls['personSkillsId'].setValue(this.personSkillsIds);
  }

  get skills() {
    return this._skillsService.getSkillList();
  }


}
