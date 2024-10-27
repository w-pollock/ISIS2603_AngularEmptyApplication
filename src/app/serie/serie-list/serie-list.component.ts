import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SerieService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.calcularAverageSeasons();
    })
  }

  calcularAverageSeasons(): void {
    let totalSeasons = this.series.reduce((suma, serie) => suma + serie.seasons, 0);
    this.averageSeasons = totalSeasons/this.series.length;
  }

}
