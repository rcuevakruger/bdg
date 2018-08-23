import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {TipoIdentificacion,EstadoParticipante} from './com.kruger.millas.enums';
// export namespace com.kruger.millas.participantes{
   export class Propietario extends Participant {
      id: string;
      tipoIdentificacion: TipoIdentificacion;
      nombre: string;
      estado: EstadoParticipante;
   }
   export class Cliente extends Propietario {
      tipo: string;
   }
   export class Comercio extends Propietario {
      tipo: string;
   }
   export class Emisor extends Propietario {
      tipo: string;
   }
// }
