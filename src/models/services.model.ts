import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Client} from "./client.model";
import {Collection} from "./collection.model";

@model()
export class Services extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => Client, {name: 'originFk'})
  origin: string;

  @belongsTo(() => Client, {name: 'destinationFk'})
  destination: string;

  @property({
    type: 'string',
    required: true,
  })
  date?: string;

  @property({
    type: 'string',
    required: true,
  })
  time?: string;

  @belongsTo(() => Collection, {name: 'collectionFK'})
  collectionId: string;

  @property({
    type: 'string',
    required: true,
  })
  value?: string;

  constructor(data?: Partial<Services>) {
    super(data);
  }
}

export interface ServicesRelations {
  // describe navigational properties here
}

export type ServicesWithRelations = Services & ServicesRelations;
