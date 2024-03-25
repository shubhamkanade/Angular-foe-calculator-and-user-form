import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent {
  @Input() columns;
  @Input() data;
  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();
  canDelete = false;
  @Output() rowDeleted: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  isDeleted = false;
  constructor()
  {
    this.columns = new Array<string>();
    this.data = new Array<any>();
  }

  onRowClick(row: any): void {
    this.rowClick.emit(row);
  }

  deleteRow(row: any): void {
    this.rowDeleted.emit(row);
  }

  sortData(column: string): void {
    this.data.sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
  }

  reverseData(column: string): void {
    this.data.reverse();
  }
}
