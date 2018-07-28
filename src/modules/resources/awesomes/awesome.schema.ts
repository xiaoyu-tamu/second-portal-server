import * as mongoose from 'mongoose';
import { normalizeDocument } from 'utilities/mongoose';

export const awesomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

awesomeSchema.set('toJSON', {
  transform: normalizeDocument,
});
