import { Component } from '@angular/core';
import { MOCK_TASKS } from '../../entities/task/model/mock-tasks';
import type { Task } from '../../entities/task/model/task';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.scss',
  templateUrl: './tasks.html',
})
export class Tasks {
  protected tasks: Task[] = MOCK_TASKS.map((task) => ({ ...task }));

  protected get completedCount(): number {
    return this.tasks.filter((task) => task.status === 'completed').length;
  }

  protected toggleTask(task: Task): void {
    task.status = task.status === 'completed' ? 'planned' : 'completed';
  }
}
