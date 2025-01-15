// movie.model.ts
export interface Movie {
    id?: number;
    title: string;
    genre: string;
    director: string;
    duration: number;
    rating: number;
    showVisible?: boolean; 

  }
  