import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MiddleComponent } from './components/middle/middle.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MiddleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
