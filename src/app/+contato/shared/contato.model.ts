/* Defines the Contato entity */
import { IEntity } from '../../common/entity.model'; 

export interface IContato extends IEntity {
    nome: string;
    cpf: string;
}