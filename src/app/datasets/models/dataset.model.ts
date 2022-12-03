import { Country } from './../../countries/models/country.model';
import { Order } from './../../orders/models/order.model';

export interface Dataset {
  id: number;
  name: string;
  label: string;
  thumbnailUrl: string;
  description: string;
  costPerRecord: number;
};

export interface DatasetWithOrders {
  dataset: Dataset;
  orders: Order[];
  countries: Country[];
  availableRecords: number;
}