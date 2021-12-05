import { restData } from "../Database/restData";



export default class RestaurantService {
    static instance = RestaurantService.instance || new RestaurantService();

    restaurantID = null;
    restaurantData = {}

    getRestaurantData() {
        return this.restaurantData;
    }

    setRestaurantData(data) {
        this.restaurantData = data;
    }

    setRestaurantID(id) {
        this.restaurantID = id;
    }

    getRestaurantID() {
        return this.restaurantID;
    }

    getName() {
        return this.restaurantData !== {} ? this.restaurantData.name : '';
    }

    getLocation() {
        return this.restaurantData !== {} ? this.restaurantData.location : '';
    }

    getCategories() {
        if (this.restaurantData !== {}) {
            console.log(Object.values(this.restaurantData.categories));
            return Object.values(this.restaurantData.categories).filter((cat) => {
                return cat.items.length != 0;
            });
        } else {
            return [];
        }
    }
}