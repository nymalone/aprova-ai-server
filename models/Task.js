const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const TaskSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: 'Clients', // <=== Esse nome é o mesmo nome do model de Clients
    },
    aproval: String,
    properties: Object,
  },
  {
    timestamps: true,
  },
);
const Task = model('Task', TaskSchema);
module.exports = Task;
