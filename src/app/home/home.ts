import { Component, signal } from '@angular/core';
import { TITLE } from '../app.constants';
import { GendersList } from '../genders-list/genders-list';
import { SelectGender } from '../select-gender/select-gender';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  imports: [GendersList, SelectGender, MatToolbarModule, MatDividerModule],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class Home {
  protected readonly title = signal(TITLE);
  protected readonly subtitle = `How many genders exist?`;
  protected readonly body = `The number is indeterminate but asymtophically approaches infinity as God creates new genders`;
}
