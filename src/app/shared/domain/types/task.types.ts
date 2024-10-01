export interface ITaskType {
  taskId: number;
  taskName: string;
  taskLimitDate: string;
  taskIcon: string;
  taskPeopleId: number[];
  taskStatus: 'COMPLETED' | 'PENDING'
  modalVisibility?: boolean;
}
