// booking.model.ts
export interface Booking {
    id?:number
    showId: number;
    userId: number |undefined
    seatNumbers: string[];
  }
  