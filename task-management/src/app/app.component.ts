import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './templates/header/header.component';
import { UsersComponent } from './templates/users/users.component';
import { DUMMY_USERS } from './dumy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'task-management';
  users = DUMMY_USERS;
}
