import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {MotivoAcreditacion,MotivoCobro} from './com.kruger.millas.enums';
import {Billetera} from './com.kruger.millas.activos';
// export namespace com.kruger.millas.transacciones{
   export class AcreditarMillas extends Transaction {
      billetera: Billetera;
      valor: number;
      motivo: MotivoAcreditacion;
      sistemaOrigen: string;
      productoOrigen: string;
   }
   export class CambiarMillas extends Transaction {
      billeteraOrigen: Billetera;
      billeteraDestino: Billetera;
      valorTransaccion: number;
      objetoCambio: string;
      referenciaCambio: string;
   }
   export class CobrarMillas extends Transaction {
      billetera: Billetera;
      valorCobro: number;
      referencia: string;
      motivo: MotivoCobro;
   }
// }
