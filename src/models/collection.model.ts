import {Entity, model, property} from '@loopback/repository';

@model()
export class Collection extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  weight?: string;

  @property({
    type: 'string',
    required: true,
  })
  type?: string;

  @property({
    type: 'string',
    required: true,
  })
  presentation?: string;


  constructor(data?: Partial<Collection>) {
    super(data);
  }
}

export interface CollectionRelations {
  // describe navigational properties here
}

export type CollectionWithRelations = Collection & CollectionRelations;
