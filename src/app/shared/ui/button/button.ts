import { Component, input } from '@angular/core';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'filter' | 'navigation' | 'navigation-active' | 'primary';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="button"
      [class.button--filter]="variant() === 'filter'"
      [class.button--navigation]="variant() === 'navigation'"
      [class.button--navigation-active]="variant() === 'navigation-active'"
      [class.button--primary]="variant() === 'primary'"
      [type]="type()"
      [disabled]="disabled()"
      [attr.aria-pressed]="ariaPressed() ?? null"
    >
      <ng-content />
    </button>
  `,
  styleUrl: './button.scss',
})
export class Button {
  readonly type = input<ButtonType>('button');
  readonly variant = input<ButtonVariant>('primary');
  readonly disabled = input(false);
  readonly ariaPressed = input<boolean | undefined>(undefined);
}
