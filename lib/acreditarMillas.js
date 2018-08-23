/**
 * acreditarMillas transaction processor function.
 * @param {com.kruger.millas.transacciones.AcreditarMillas} tx The sample transaction instance.
 * @transaction
 */
async function acreditarMillas(tx) {

    
   tx.billetera.valorActual = tx.billetera.valorActual + tx.valor;
   // Get the asset registry for the asset.
   const assetRegistry = await getAssetRegistry('com.kruger.millas.activos.Billetera');
   // Update the asset in the asset registry.
   await assetRegistry.update(tx.billetera);
   
   /**
    * --> Billetera billetera
  o String sistemaOrigen
  o String productoOrigen
  o MotivoAcreditacion motivo
  o Long valorMillas
    */

   // Emit an event for the modified asset.
   let event = getFactory().newEvent('com.kruger.millas.eventos', 'AcreditaMillas');
   event.billetera = tx.billetera;
   event.sistemaOrigen = tx.sistemaOrigen;
   event.productoOrigen = tx.productoOrigen;
   event.motivo = tx.motivo;
   event.valor = tx.valor;
   emit(event);

}