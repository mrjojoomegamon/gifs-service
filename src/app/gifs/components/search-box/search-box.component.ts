
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>buscar</h5>
  <input type="text" placeholder="buscar"
  (keyup.enter)="searchTag()"
  #txtTagInput>
  `,
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public taginput!: ElementRef<HTMLInputElement>;



  constructor(private GifsService:GifsService) { }

  searchTag() {
    const newTag = this.taginput.nativeElement
    this.GifsService.searchTag(newTag.value);

    console.log(newTag.value);
  }
}
