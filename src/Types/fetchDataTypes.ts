export async function fetchData<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return body;
}

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
