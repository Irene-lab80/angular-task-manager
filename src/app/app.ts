import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { PlannerCard } from './planner-card/planner-card';
import { FocusCard } from './focus-card/focus-card';
import { ProgressCard } from './progress-card/progress-card';

@Component({
  imports: [Header, Footer, PlannerCard, FocusCard, ProgressCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
