/**
 * ejecutarCobro transaction processor function.
 * @param {com.kruger.millas.transacciones.CobrarMillas} tx The sample transaction instance.
 * @transaction
 */
async function ejecutarCobro(tx) {

    if((tx.billetera.valorActual - tx.valorCobro) < 0)
     throw new Error('No existen las millas suficientes para realizar el cobro');

    tx.billetera.valorActual = tx.billetera.valorActual - tx.valorCobro;
   // Get the asset registry for the asset.
   const assetRegistry = await getAssetRegistry('com.kruger.millas.activos.Billetera');
   // Update the asset in the asset registry.
   await assetRegistry.update(tx.billetera);
   
   /**
   event CobroMillas {
  --> Billetera billetera  
  o MotivoCobro motivo
  o Long valor
  o String referencia
}
    */

   // Emit an event for the modified asset.
   let event = getFactory().newEvent('com.kruger.millas.eventos', 'CobroMillas');
   event.billetera = tx.billetera;
   event.motivo = tx.motivo;
   event.valor = tx.valorCobro;
   event.referencia = tx.referencia;
   emit(event);

}