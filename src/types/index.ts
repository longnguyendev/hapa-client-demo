export type DataType = Array<{
  address: string;

  id: number;
  image: string;
  name: string;
  info?: {
    series: string;
    installationSate: string;
  };
  items: Array<{
    id: number;
    image: string;
    name: string;
    lastChange: string;
    circle: string;
    nextChange: string;
    cost: number;
  }>;
}>;
