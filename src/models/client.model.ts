import {Entity, model, property} from '@loopback/repository';

@model()
export class Client extends Entity {
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
  document?: string;

  @property({
    type: 'string',
    required: true,
  })
  name?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname?: string;

  @property({
    type: 'string',
    required: true,
  })
  country?: string;

  @property({
    type: 'string',
    required: true,
  })
  city?: string;

  @property({
    type: 'string',
    required: true,
  })
  state?: string;

  @property({
    type: 'string',
    required: true,
  })
  address?: string;

  @property({
    type: 'string',
    required: true,
  })
  phone?: string;

  @property({
    type: 'string',
    required: true,
  })
  email?: string;

  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
