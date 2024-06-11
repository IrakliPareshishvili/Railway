
export interface Seat {
    seatId: string;
    number: string;
    price: number;
    isOccupied: boolean;
    vagonId: number;
  }
  
  export interface Vagon {
    id: number;
    trainId: number;
    trainNumber: number;
    name: string;
    seats: Seat[];
  }
  
  export interface Train {
    id: number;
    number: number;
    name: string;
    date: string;
    from: string;
    to: string;
    departure: string;
    arrive: string;
    departureId: number;
    vagons: Vagon[];
  }
  
  export interface TrainFlight {
    id: number;
    source: string;
    destination: string;
    date: string;
    trains: Train[];
  }