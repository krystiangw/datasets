export interface Order {
  id: string;
  name: string;
  createdAt: string;
  datasetIds: number[];
  countries: string[];
  budget: string;
}