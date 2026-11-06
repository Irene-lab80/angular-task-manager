import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Task } from '../../entities/task/model/task';

@Component({
  imports: [FormsModule],
  selector: 'app-create',
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create {
  protected title = '';
  protected description = '';
  protected createdTasks: Task[] = [];
  private nextTaskId = 1;

  protected addTask(): void {
    const title = this.title.trim();
    if (!title) {
      return;
    }

    this.createdTasks = [
      ...this.createdTasks,
      {
        id: `created-task-${this.nextTaskId++}`,
        title,
        description: this.description.trim(),
        status: 'planned',
      },
    ];
    this.title = '';
    this.description = '';
  }
}
