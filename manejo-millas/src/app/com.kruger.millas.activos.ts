import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Propietario} from './com.kruger.millas.participantes';
// export namespace com.kruger.millas.activos{
   export class Billetera extends Asset {
      idBilletera: string;
      propietario: Propietario;
      valorActual: number;
   }
// }
