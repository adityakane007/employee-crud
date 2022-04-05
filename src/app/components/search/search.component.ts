import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: any = '';
  locked: any[] = [];
  public searchFilter: any = '';

  constructor() { }

  Students = [
    {
      "id": 1,
      "name": "Aditya Kane",
      "email": "ak@example.com"
    },
    {
      "id": 2,
      "name": "Arvind Kulkarni",
      "email": "aakul@example.com"
    },
    {
      "id": 3,
      "name": "Mayur Vagh",
      "email": "mv@example.com"
    }
  ]

  ngOnInit() {

  }

}
