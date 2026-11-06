import { Component, computed, effect, signal } from '@angular/core';
import { MOCK_TASKS, TaskItem } from '../../entities';
import { Button } from '../../shared';
import type { Task } from '../../entities';

@Component({
  imports: [TaskItem, Button],
  selector: 'app-tasks',
  styleUrl: './tasks.scss',
  templateUrl: './tasks.html',
})
export class Tasks {
  protected readonly tasks = signal(MOCK_TASKS);
  protected readonly showCompletedOnly = signal(false);

  protected readonly completedCount = computed(
    () => this.tasks().filter((task) => task.status === 'completed').length,
  );

  protected readonly total = computed(() => this.tasks().length);

  protected readonly visibleTasks = computed(() =>
    this.showCompletedOnly()
      ? this.tasks().filter((task) => task.status === 'completed')
      : this.tasks(),
  );

  constructor() {
    effect(() => console.info('Task list updated:', this.tasks()));
  }

  protected readonly toggleTask = (task: Task): void => {
    this.tasks.update((tasks) =>
      tasks.map((currentTask) =>
        currentTask.id === task.id
          ? {
              ...currentTask,
              status: currentTask.status === 'completed' ? 'planned' : 'completed',
            }
          : currentTask,
      ),
    );
  };

  protected toggleCompletedFilter(): void {
    this.showCompletedOnly.update((showCompletedOnly) => !showCompletedOnly);
  }
}
