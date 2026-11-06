import { Component } from '@angular/core';
import { Create, Home, Tasks } from './pages';
import { Button } from './shared';
import { Footer, Header } from './widgets';

@Component({
  imports: [Header, Footer, Home, Tasks, Create, Button],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected currentPage: 'home' | 'tasks' | 'create' = 'home';
}
