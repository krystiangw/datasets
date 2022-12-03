export interface Country {
  countryCode: string;
  name: string;
  storedData: Array<{
    datasetId: number,
    recordCount: number}>
}