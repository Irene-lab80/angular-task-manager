import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  styleUrl: './feature-card.scss',
  templateUrl: './feature-card.html',
})
export class FeatureCard {
  readonly artVariant = input.required<'planner' | 'focus' | 'progress'>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
