import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { GendersService } from '../genders-service/genders-service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-genders-list',
  imports: [MatExpansionModule, MatListModule, UpperCasePipe, TitleCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './genders-list.html',
  styleUrl: './genders-list.sass',
})
export class GendersList implements OnInit {
  gendersService = inject(GendersService);
  readonly panelOpenState = signal(false);
  allGenders = this.gendersService.genders;

  ngOnInit(): void {
    this.gendersService.fetchGenders();
  }
}
