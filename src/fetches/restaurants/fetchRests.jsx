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

    console.log(result);
    console.log(result.imageValues);
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

export const fetchRestaurantById = async (restaurantId) => {
  const requestOptions = {
    method: "POST",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `http://174.138.59.141:8080/api/v1/restaurant/get?id=${restaurantId}`,
      requestOptions
    );
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error fetching restaurant details:", error);
    throw error;
  }
};

// reviews
export const fetchReviews = async (restId) => {
  const requestOptions = {
    method: "POST",
    cache: "no-store",
    redirect: "follow",
  };
  try {
    const response = await fetch(
      `http://174.138.59.141:8080/api/v1/comment/find?id=${restId}`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
