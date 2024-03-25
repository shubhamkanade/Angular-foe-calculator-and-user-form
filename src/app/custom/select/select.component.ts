import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  private _DataSource:Array<any>;
  private _PropertyName: any;

 
  @Output()
  onChange:EventEmitter<any>;

  constructor() {
    this._DataSource = new Array<any>();

    this.onChange = new EventEmitter<any>();
  }

  @Input({required:true})
  set DataSource(val:Array<any>){
     this._DataSource = val;
  }

  get DataSource():Array<any> {
    return this._DataSource;
  }

  @Input()
  set PropertyName(val:any){
    this._PropertyName = val;
  }

  get PropertyName():any{
    return this._PropertyName;
  }

  changeValue($event:any):void {
    this.onChange.emit($event.target.value);
  }

}
