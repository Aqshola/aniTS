export async function fetchData<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return body;
}

export interface todayReleasesType {
  title: string;
  score: number;
  mal_id: number;
  image_url: string;
}
