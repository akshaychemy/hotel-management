const BASE_URL = 'http://localhost:3000'; // Your backend server URL

export async function fetchHotels() {
  const response = await fetch(`${BASE_URL}/hotels`);
  if (!response.ok) {
    throw new Error('Failed to fetch hotels');
  }
  return response.json();
}
