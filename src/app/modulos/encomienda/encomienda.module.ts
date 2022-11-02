import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncomiendaRoutingModule } from './encomienda-routing.module';
import { Create1Component } from './create1/create1.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';


@NgModule({
  declarations: [
    Create1Component,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    EncomiendaRoutingModule
  ]
})
export class EncomiendaModule { }
