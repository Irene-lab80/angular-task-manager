import { Component } from '@angular/core';
import { PlannerCard } from '../../planner-card/planner-card';
import { FocusCard } from '../../focus-card/focus-card';
import { ProgressCard } from '../../progress-card/progress-card';

@Component({
  imports: [PlannerCard, FocusCard, ProgressCard],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
