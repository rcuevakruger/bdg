import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Billetera} from './com.kruger.millas.activos';
import {MotivoAcreditacion,MotivoCobro} from './com.kruger.millas.enums';
// export namespace com.kruger.millas.eventos{
   export class AcreditaMillas extends Event {
      billetera: Billetera;
      valor: number;
      motivo: MotivoAcreditacion;
      sistemaOrigen: string;
      productoOrigen: string;
   }
   export class CambioMillas extends Event {
      billeteraOrigen: Billetera;
      billeteraDestino: Billetera;
      valorTransaccion: number;
      objetoCambio: string;
      referenciaCambio: string;
   }
   export class CobroMillas extends Event {
      billetera: Billetera;
      valorCobro: number;
      referencia: string;
      motivo: MotivoCobro;
   }
// }
