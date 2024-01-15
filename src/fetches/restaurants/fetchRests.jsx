const fetchRestaurants = async () => {
  const limit = 15;
  const page = 0;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `http://174.138.59.141:8080/api/v1/restaurant/findAll?limit=${limit}&page=${page}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Failed to fetch restaurants");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
  }
};

export default fetchRestaurants;
