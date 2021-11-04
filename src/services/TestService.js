import {restData} from '../Database/restData'

export default class TestService {
    static instance = TestService.instance || new TestService()

    helloWorld() {
        console.log("Hello World... !!!")
    }

    getName() {
        return restData.name;
    }

    getLocation() {
        return restData.location;
    }

    getCategories() {
        // return restData.Categories;
        return Object.values(restData.Categories)
    }

}