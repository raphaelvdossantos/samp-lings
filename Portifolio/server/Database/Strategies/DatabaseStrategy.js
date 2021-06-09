const IDb = require('../Interfaces/IDb');

export default class DatabaseStrategy extends IDb {

  constructor(strategy) {
    super();
    this._database = strategy;
  }

  isConnected() {
    return this._database.isConnected();
  }

  connect() {
    return this._database.connect();
  }

  create(item) {
    return this._database.create(item);
  }

  read(item, skip, limit) {
    return this._database.read(item, skip, limit);
  }

  update(id, item) {
    return this._database.update(id, item);
  }

  delete(id) {
    return this._database.delete(id);
  }

}