import * as mongoose from 'mongoose';
import { normalizeDocument } from 'utilities/mongoose';

export const awesomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  desciption: { type: String, required: true },
  category: { type: String, default: 'uncategorized' },
});

awesomeSchema.set('toJSON', {
  transform: normalizeDocument,
});
