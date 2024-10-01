import {Injectable} from '@angular/core';
import {ITaskType} from "../../domain/types/task.types";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  initTaskList: ITaskType[] = [
    {
      taskId: 1,
      taskName: 'Create a new project 1',
      taskLimitDate: '2021-12-31',
      taskIcon: 'task',
      taskPeopleId: [1, 2, 3],
      taskStatus: 'PENDING'
    },
    {
      taskId: 2,
      taskName: 'Create a new project 2',
      taskLimitDate: '2021-12-31',
      taskIcon: 'task',
      taskPeopleId: [1, 2, 3],
      taskStatus: 'PENDING'
    },
    {
      taskId: 3,
      taskName: 'Create a new project 3',
      taskLimitDate: '2021-12-31',
      taskIcon: 'task',
      taskPeopleId: [1, 2, 3],
      taskStatus: 'PENDING'
    },
    {
      taskId: 4,
      taskName: 'Create a new project 4',
      taskLimitDate: '2021-12-31',
      taskIcon: 'task',
      taskPeopleId: [1, 2, 3],
      taskStatus: 'COMPLETED'
    }
  ]

  constructor() {
    if (localStorage.getItem('tasks')) {
      this.initTaskList = JSON.parse(localStorage.getItem('tasks') as string);
      return
    }
    localStorage.setItem('tasks', JSON.stringify(this.initTaskList));
  }

  addTask(task: ITaskType) {
    this.initTaskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.initTaskList));
  }

  getTaskList(): ITaskType[] {
    return this.initTaskList;
  }


  completeTask(taskId: number) {
    this.initTaskList.find(task => task.taskId === taskId)!.taskStatus = 'COMPLETED';
    localStorage.setItem('tasks', JSON.stringify(this.initTaskList));
  }

  deletePersonFromTasks(personId: number) {
    this.initTaskList.forEach(task => {
      task.taskPeopleId = task.taskPeopleId.filter(id => id !== personId);
    });
    localStorage.setItem('tasks', JSON.stringify(this.initTaskList));
  }

  deleteTask(taskId: number) {
    this.initTaskList = this.initTaskList.filter(task => task.taskId !== taskId);
    localStorage.setItem('tasks', JSON.stringify(this.initTaskList));
  }

}
