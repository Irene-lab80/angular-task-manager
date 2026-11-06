import { Component } from '@angular/core';
import { FeatureCard } from './ui/feature-card/feature-card';
import { FocusArt } from './ui/feature-art/focus-art/focus-art';
import { PlannerArt } from './ui/feature-art/planner-art/planner-art';
import { ProgressArt } from './ui/feature-art/progress-art/progress-art';

@Component({
  imports: [FeatureCard, PlannerArt, FocusArt, ProgressArt],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
