import axios from "axios";

class StoreService {
  async getShoe(page) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: "nike-shoes",
        client_id: "81HvXOHEMhKxfEjbbXgJ3cFrgJrKsyuxm0Jx3weBVrQ",
        per_page: 100,
        page: page
      },
    });
    return response;
  }
}

export const storeService = new StoreService();