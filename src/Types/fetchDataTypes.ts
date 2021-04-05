export interface mainAnimeType {
  title: string;
  mal_id: number;
  image_url: string;
  airing_start(): Date;
  type: string;
}

export interface details extends mainAnimeType {
  synopsis: string;
  episodes?: number;
  score?: number;
  scored_by: number;
  source: string;
  status: string;
  aired: {
    prop: {
      from: {
        year: number;
      };
      to: {
        year: number;
      };
    };
  };
  premiered?: string;
  genres: { name: string }[];
  members: number;
}
