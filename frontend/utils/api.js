// utils/api.js
export async function fetchInitialData() {
  const response = await fetch('/api/user-data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
}