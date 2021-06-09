
const { dbaKey } = require('./config');
const Mongoose = require('mongoose');
const ICrud = require('../../Interfaces/IDb');

export default class MongoDBStrategy extends ICrud {
  constructor(connectionSring) {
    super();
    this._connectionString = connectionSring;
    this._schema = null;
    this._connection = null;
  }

  connectionStatus = {
    0: 'Disconnected',
    1: 'Conected',
    2: 'Connecting',
    3: 'Disconnecting'
  }

  getConnectionStatus() {
    return this.connectionStatus(this._connection.readyState);
  }

  async create(item) {
    return this._schema.create(item)
  }

  async read(item, skip = 0, limit = 10) {
    return this.schema.find(item).skip(skip).limit(limit);
  }

  update(id, item) {
    super.update(id, item);
  }

  delete(item) {
    super.delete(item);
  }

  async isConnected() {
    const state = this._connection.readyState;

    if (state === 2) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return state === 1;
    }

    return state === 1;
  }

  async connect(connectionString, options) {
    Mongoose.connect(connectionString, options, error => {
      if (!error) return;
      console.log("Connection Failed", error);
    })

    const connection = Mongoose.connection;
    this._connection = connection;
    connection.once('open', () => console.log("Conneciton Stablished."))
    this.defineModel();
  }

  defineModel(schema) {
    this._schema = new Mongoose.Schema(this.getSchema(schema));
  }

  getSchema(schema) {

    const Schemas = {
      Posts: {
        category: {
          type: String,
          required: true,
        },
        subcategory: {
          type: String,
          required: true
        },
        snapshot: {
          type: String,
          required: true
        },
        content: {
          type: String,
          required: true
        },
        tags: {
          type: String,
        },
        author: {
          type: String,
          default: 'Raphael Santos'
        },
        insertedAt: {
          type: Date,
          default: new Date()
        }
      },
    }

    return Schemas[schema];
  }
}

