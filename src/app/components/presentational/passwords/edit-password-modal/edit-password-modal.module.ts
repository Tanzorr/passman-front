import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPasswordModalComponent } from './edit-password-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroupModule } from '../../../libs/form-group/form-group.module';
import { CustomInputModule } from '../../../libs/custom-input/custom-input.module';
import { CustomTextareaModule } from '../../../libs/custom-textarea/custom-textarea.module';

@NgModule({
  declarations: [EditPasswordModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroupModule,
    CustomInputModule,
    CustomTextareaModule,
  ],
})
export class EditPasswordModalModule {}
