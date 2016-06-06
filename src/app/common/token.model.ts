import { IEntity } from './entity.model'

export interface IToken extends IEntity {
    user_id: string;
}