import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { SelectComponent } from './custom/select/select.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ProductComponent } from './product/product.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    CalculatorComponent,
    StudentComponent,
    SelectComponent,
    DatagridComponent,
    ProductComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
