import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group.component';

@NgModule({
  declarations: [FormGroupComponent],
  exports: [FormGroupComponent],
  imports: [CommonModule],
})
export class FormGroupModule {}
