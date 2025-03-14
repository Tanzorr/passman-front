import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vaultErrorMessages } from '../../../../constans/error-messages';

@Component({
  selector: 'app-add-vault-modal',
  templateUrl: './add-vault-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddVaultModalComponent {
  vaultForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.vaultForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.maxLength(255)]],
    });
  }

  saveVault(): void {
    if (this.vaultForm.valid) {
      this.activeModal.close(this.vaultForm.value);
    }
  }

  close(): void {
    this.activeModal.dismiss();
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.vaultForm.get(controlName);

    if (control?.dirty && control?.errors) {
      const firstErrorKey = Object.keys(control.errors)[0];
      return vaultErrorMessages[controlName][firstErrorKey];
    }
    return null;
  }
}
