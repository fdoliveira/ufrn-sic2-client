/* Defines the Contato entity */
import { IEntity } from './entity.model'; 

export interface IContato extends IEntity {
    nome: string;
    cpf: string;
}