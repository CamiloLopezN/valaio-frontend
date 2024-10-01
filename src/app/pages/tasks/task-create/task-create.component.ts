import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SkillsService} from "../../../shared/services/api-services/skills.service";
import {PeopleService} from "../../../shared/services/api-services/people.service";
import {TasksService} from "../../../shared/services/api-services/tasks.service";
import {atLeastOneSkillValidator} from "../../../shared/domain/validators/person.validators";
import {faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {


  taskForm: FormGroup = new FormGroup({});
  peopleId: number[] = [];
  @Output() onClickCloseModalEmitter = new EventEmitter<void>();

  constructor(private formBuilder: FormBuilder, private _skillsService: SkillsService,
              private _peopleService: PeopleService, private _tasksService: TasksService
  ) {
  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', [Validators.required, Validators.minLength(5)]],
      taskLimitDate: ['', [Validators.required, Validators.minLength(5)]],
      taskPeopleId: [[], [Validators.required, atLeastOneSkillValidator()]]
    });
  }

  submitTask() {
    this._tasksService.addTask({
      ...this.taskForm.value,
      taskId: this._tasksService.getTaskList().length + 1,
      taskIcon: 'task',
      taskStatus: 'PENDING'
    });
    this.onClickCloseModalEmitter.emit();
  }


  onClickPerson(personId: number) {
    const index = this.peopleId.indexOf(personId);
    if (index === -1) {
      this.peopleId.push(personId);
    } else {
      this.peopleId.splice(index, 1);
    }
    this.taskForm.controls['taskPeopleId'].setValue(this.peopleId);
  }


  get people() {
    return this._peopleService.getPersonList();
  }

  protected readonly faUser = faUser;
}
