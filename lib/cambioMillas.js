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

/* global getAssetRegistry getFactory emit */

/**
 * ejecutarCambio transaction processor function.
 * @param {com.kruger.millas.transacciones.CambiarMillas} tx The sample transaction instance.
 * @transaction
 */
async function ejecutarCambio(tx) {  // eslint-disable-line no-unused-vars

    if ((tx.billeteraOrigen.valorActual - tx.valorTransaccion) < 0)
      throw new Error('No existen millas suficientes para la transaccion');
    // Save the old value of the asset.
    //const oldValue = tx.billetera.value;

    // Update the asset with the new value.
    tx.billeteraDestino.valorActual = tx.billeteraDestino.valorActual + tx.valorTransaccion;
    tx.billeteraOrigen.valorActual = tx.billeteraOrigen.valorActual - tx.valorTransaccion;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('com.kruger.millas.activos.Billetera');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.billeteraDestino);
    await assetRegistry.update(tx.billeteraOrigen);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('com.kruger.millas.eventos', 'CambioMillas');
    event.billeteraOrigen = tx.billeteraOrigen;
    event.billeteraDestino = tx.billeteraDestino;
    event.valorTransaccion = tx.valorTransaccion;
    event.objetoCambio = tx.objetoCambio;
    event.referenciaCambio = tx.referenciaCambio;
  	emit(event);
}
