export interface ICafeItem {
  id: number;
  name: string;
  address: string;
  landmark: string;
  cuisine: string;
  distance: number;
  time: number;
  photo: string;
  business_lunch: boolean;
  price: number;
  content: string;
}

export interface ICafeState {
  isСаfesLoading: boolean;
  page: number;
  limit: number;
  cafes: ICafeItem[];
}

export interface IGlobalStore {
  cafe: ICafeState;
}
