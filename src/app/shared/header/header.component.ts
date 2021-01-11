import { Component, OnInit } from '@angular/core';
import { LABELS } from '../label_constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mylabels = LABELS;
  constructor() { }

  ngOnInit(): void {
  }

}
