import axios from "axios";

class MapService {
  async getStores(lat, lon) {
    const response = await axios.get("http://localhost:3000/api/nike-stores", {
      params: {
        location: `${lat}, ${lon}`,
        radius: 50000,
        keyword: "nike",
        key: "AIzaSyCihes12Wt7sRvlo9PzHjTRmrmlkWetxJw",
      },
    });
    return response;
  }
}

export const mapService = new MapService();
