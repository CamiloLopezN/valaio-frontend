import {Component} from '@angular/core';
import {ITaskType} from "../../shared/domain/types/task.types";
import {TasksService} from "../../shared/services/api-services/tasks.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  isModalVisible = false;
  filteredTaskList: ITaskType[] = [];

  constructor(private _tasksService: TasksService) {
    this.filteredTaskList = this._tasksService.getTaskList();
  }

  getInputValue(inputValue: string) {
    this.filteredTaskList = this._tasksService.getTaskList().filter(task =>
      task.taskName.toLowerCase().includes(inputValue.toLowerCase()) ||
      task.taskStatus.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  setModalVisibility() {
    this.isModalVisible = !this.isModalVisible;
  }

}
