import { Component, Input } from '@angular/core';
import { Film } from 'src/types/data';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.sass']
})

export class ListFilmsComponent {
    @Input() cinemaName: string = ""
    @Input() availableFilms: Film[] = []
}
