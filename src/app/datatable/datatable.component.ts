import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community'; 

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input() tableData :any;
 
  colDefs: ColDef[] = [
    {field : "userId", flex: 2, resizable: false},
    { field: "username", flex : 2, resizable: false },
    { field: "email", flex : 2, resizable: false },
    { field: "addresses", flex: 2, resizable: false }
  ];

  defaultCols :ColDef = {
    filter : "agTextColumnFilter",
    floatingFilter : true
  }
}
