import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Task } from '../../entities';
import { Button } from '../../shared';

@Component({
  imports: [FormsModule, Button],
  selector: 'app-create',
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create {
  protected title = '';
  protected description = '';
  private nextTaskId = 1;

  protected readonly createdTasks = signal<Task[]>([]);

  protected addTask(): void {
    const title = this.title.trim();
    if (!title) {
      return;
    }

    this.createdTasks.update((tasks) => [
      ...tasks,
      {
        id: `created-task-${this.nextTaskId++}`,
        title,
        description: this.description.trim(),
        status: 'planned',
      },
    ]);
    this.title = '';
    this.description = '';
  }
}
