import { Component, computed, Input, input } from '@angular/core';
import { DUMMY_USERS } from '../../dumy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return `users/${this.avatar()}`;
  // });

  get imagePath() {
    return `users/${this.avatar}`;
  }

  onSelectUser() {}
}
