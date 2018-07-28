import { Document, Model } from 'mongoose';

export interface Awesomes {
  id: string;
  title: string;
}

export type AwesomesDocument = Awesomes & Document;
export type AwesomesModel = Model<AwesomesDocument>;
