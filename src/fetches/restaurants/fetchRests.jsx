const fetchRestaurants = async (page = 0) => {
  const limit = 15;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    cache: "no-store",
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
    const data = {
      itemCount: result.itemCount,
      restaurants: result.restaurants,
    };
    return data;
  } catch (error) {
    console.error("Error fetching restaurants:", error.message);
  }
};

export default fetchRestaurants;
