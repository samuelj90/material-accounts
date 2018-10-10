import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }

  showSnackbar(message: string, action?: string, config?: MatSnackBarConfig) {
    this.snackBar.open(message, action, config);
  }
}
