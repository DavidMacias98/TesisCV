import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  student:any
  }

@Component({
  selector: 'app-modal-documents',
  templateUrl: './modal-documents.component.html',
  styleUrls: ['./modal-documents.component.css']
})
export class ModalDocumentsComponent {


constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData
,public dialogRef: MatDialogRef<ModalDocumentsComponent>
){}


cerrar(){
  this.dialogRef.close()
}

}
