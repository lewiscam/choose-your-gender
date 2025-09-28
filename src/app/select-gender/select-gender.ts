import { Component, inject } from '@angular/core';
import { MatAutocompleteModule, MatOption } from '@angular/material/autocomplete';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GendersService } from '../genders-service/genders-service';
import { TitleCasePipe } from '@angular/common';
import { Gender } from '../types/gender.interface';

@Component({
  selector: 'app-select-gender',
  imports: [
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormField,
    MatLabel,
    MatOption,
    ReactiveFormsModule,
    TitleCasePipe,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  templateUrl: './select-gender.html',
  styleUrl: './select-gender.sass',
})
export class SelectGender {
  gendersService = inject(GendersService);
  genderForm = new FormGroup({
    genderControl: new FormControl('', Validators.required),
  });
  options = this.gendersService.genders;

  submit() {
    const genderControl = this.genderForm.get('genderControl');
    if (genderControl?.value) {
      this.gendersService.addGender(genderControl.value as string);
    }
  }
}
