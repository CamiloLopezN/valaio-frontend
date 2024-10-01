import {Component, Input} from '@angular/core';
import {ITaskType} from "../../../shared/domain/types/task.types";
import {IPersonType} from "../../../shared/domain/types/person.types";
import {PeopleService} from "../../../shared/services/api-services/people.service";
import {TasksService} from "../../../shared/services/api-services/tasks.service";
import {faCheck, faClock, faSpinner} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


  @Input() taskList: ITaskType[] = [];
  isModalVisible = false;

  constructor(private _peopleService: PeopleService, private _tasksService: TasksService) {
  }


  setModalVisibility(taskId: number) {
    this.taskList.find(task => task.taskId === taskId)!.modalVisibility =
      !this.taskList.find(task => task.taskId === taskId)!.modalVisibility;
    this.isModalVisible = !this.isModalVisible;
  }

  getPeopleFromIds(peopleId: number[]): IPersonType[] {
    return this._peopleService.getPeopleFromIds(peopleId);
  }

  deleteTask(taskId: number) {
    this._tasksService.deleteTask(taskId);
    this.taskList = this._tasksService.getTaskList();
  }

  completeTask(taskId: number) {
    this._tasksService.completeTask(taskId);
    this.taskList = this._tasksService.getTaskList();
  }

  protected readonly faCheck = faCheck;
  protected readonly faSpinner = faSpinner;
  protected readonly faClock = faClock;
}
