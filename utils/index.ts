export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "a302c605c2msh0ac9f771f21c944p1b9fe5jsn312372be6c3f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await res.json();

  return result;
}
