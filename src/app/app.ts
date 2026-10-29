import { Component } from '@angular/core';
import { Header } from './widgets/header/header';
import { Footer } from './widgets/footer/footer';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';
import { Create } from './pages/create/create';

@Component({
  imports: [Header, Footer, Home, Tasks, Create],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected currentPage: 'home' | 'tasks' | 'create' = 'home';
}
