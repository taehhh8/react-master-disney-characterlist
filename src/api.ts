const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;
export function fetchDisneyCharc() {
  return fetch(`${BASE_URL}`).then((response) => response.json());
}

export function fetchDisneyCharcId(id: string) {
  return fetch(`${BASE_URL}/${id}`).then((response) => response.json());
}
