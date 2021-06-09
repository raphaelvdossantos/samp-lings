export default class IDb {
  create(item) {
    throw new NotImplementedException();
  }

  read(query) {
    throw new NotImplementedException();
  }

  update(id, item) {
    throw new NotImplementedException();
  }

  delete(item) {
    throw new NotImplementedException();
  }

  isConnected() {
    throw new NotImplementedException();
  }

  connect() {
    throw new NotImplementedException();
  }
}

class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented Exception');
  }
}
