import { DocumentToObjectOptions } from 'mongoose';

export const normalizeDocument: DocumentToObjectOptions['transform'] = (doc, ret) => {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};
