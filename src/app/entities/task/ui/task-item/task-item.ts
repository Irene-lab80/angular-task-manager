import { Component, input } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  imports: [],
  selector: 'app-task-item',
  styleUrl: './task-item.scss',
  templateUrl: './task-item.html',
})
export class TaskItem {
  readonly task = input.required<Task>();
  readonly toggleTask = input.required<(arg: Task) => void>();
}
