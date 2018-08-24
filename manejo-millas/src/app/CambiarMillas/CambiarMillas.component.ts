/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CambiarMillasService } from './CambiarMillas.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-cambiarmillas',
  templateUrl: './CambiarMillas.component.html',
  styleUrls: ['./CambiarMillas.component.scss'],
  providers: [CambiarMillasService]
})
export class CambiarMillasComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  billeteraOrigen = new FormControl('', Validators.required);
  billeteraDestino = new FormControl('', Validators.required);
  valorTransaccion = new FormControl('', Validators.required);
  objetoCambio = new FormControl('', Validators.required);
  referenciaCambio = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceCambiarMillas: CambiarMillasService, fb: FormBuilder) {
    this.myForm = fb.group({
      billeteraOrigen: this.billeteraOrigen,
      billeteraDestino: this.billeteraDestino,
      valorTransaccion: this.valorTransaccion,
      objetoCambio: this.objetoCambio,
      referenciaCambio: this.referenciaCambio,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCambiarMillas.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'com.kruger.millas.transacciones.CambiarMillas',
      'billeteraOrigen': this.billeteraOrigen.value,
      'billeteraDestino': this.billeteraDestino.value,
      'valorTransaccion': this.valorTransaccion.value,
      'objetoCambio': this.objetoCambio.value,
      'referenciaCambio': this.referenciaCambio.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'billeteraOrigen': null,
      'billeteraDestino': null,
      'valorTransaccion': null,
      'objetoCambio': null,
      'referenciaCambio': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceCambiarMillas.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'billeteraOrigen': null,
        'billeteraDestino': null,
        'valorTransaccion': null,
        'objetoCambio': null,
        'referenciaCambio': null,
        'transactionId': null,
        'timestamp': null
      });
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'com.kruger.millas.transacciones.CambiarMillas',
      'billeteraOrigen': this.billeteraOrigen.value,
      'billeteraDestino': this.billeteraDestino.value,
      'valorTransaccion': this.valorTransaccion.value,
      'objetoCambio': this.objetoCambio.value,
      'referenciaCambio': this.referenciaCambio.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceCambiarMillas.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  deleteTransaction(): Promise<any> {

    return this.serviceCambiarMillas.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceCambiarMillas.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'billeteraOrigen': null,
        'billeteraDestino': null,
        'valorTransaccion': null,
        'objetoCambio': null,
        'referenciaCambio': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.billeteraOrigen) {
        formObject.billeteraOrigen = result.billeteraOrigen;
      } else {
        formObject.billeteraOrigen = null;
      }

      if (result.billeteraDestino) {
        formObject.billeteraDestino = result.billeteraDestino;
      } else {
        formObject.billeteraDestino = null;
      }

      if (result.valorTransaccion) {
        formObject.valorTransaccion = result.valorTransaccion;
      } else {
        formObject.valorTransaccion = null;
      }

      if (result.objetoCambio) {
        formObject.objetoCambio = result.objetoCambio;
      } else {
        formObject.objetoCambio = null;
      }

      if (result.referenciaCambio) {
        formObject.referenciaCambio = result.referenciaCambio;
      } else {
        formObject.referenciaCambio = null;
      }

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'billeteraOrigen': null,
      'billeteraDestino': null,
      'valorTransaccion': null,
      'objetoCambio': null,
      'referenciaCambio': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
