import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})
export class DatatableComponent {
  @Input() tableData: any;

  colDefs: ColDef[] = [
    {
      field: 'userId',
      flex: 1.5,
      resizable: false,
      filter: 'agNumberColumnFilter',
      suppressMovable: true,
    },
    { field: 'username', flex: 2, resizable: false, suppressMovable: true },
    { field: 'email', flex: 2, resizable: false, suppressMovable: true },
    { field: 'addresses', flex: 2, resizable: false, suppressMovable: true },
    {
      field: 'actions',
      flex: 2,
      resizable: false,
      suppressMovable: true,
      cellRenderer: ActionsComponent,
      cellRendererParams: {
        deleteFunction: () => {
          this.deleteUser();
        },
      },
    },
  ];

  defaultCols: ColDef = {
    filter: 'agTextColumnFilter',
    floatingFilter: true,
  };

  deleteUser() {
    // console.log('alvish');
    this.tableData = JSON.parse(localStorage.getItem('userformData') as string);
  }
}
