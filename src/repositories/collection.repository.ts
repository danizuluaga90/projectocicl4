import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Collection, CollectionRelations} from '../models';

export class CollectionRepository extends DefaultCrudRepository<
  Collection,
  typeof Collection.prototype.id,
  CollectionRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Collection, dataSource);
  }
}
