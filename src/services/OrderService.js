//import {order} from '../Database/order'
import { v4 as uuidv4 } from 'uuid';

export default class OrderService {
    static instance = OrderService.instance || new OrderService();

    order = {
        orderId: 'orderID',
        items: [],
    }

    price = 0;

    helloWorld() {
        console.log("Hello World... order !!!")
    }

    addItemToOrder(item) {
        let uuid = uuidv4();
        console.log('add item to order ', typeof item, uuid);
        item['id'] = uuid;
        this.order.items.push(item);
        this.price+= item.price;
    }

    getPrice() {
        return this.price;
    }

    print() {
        console.log(this.order);
    }

    getOrder() {
        return this.order;
    }

    removeItem(key) {
        let removeIndex = this.order.items.map(item => item.key).indexOf(key);

        if (removeIndex !== -1) {
            this.order.items.splice(removeIndex, 1);
            return true;
        }

        return false;

        //console.log(this.order.items);

        // let itemsArr = this.order.items.filter((item)=>{
        //     if (item.id !== id) {
        //         return item;
        //     }
        // })
        // this.order.items
    }
    

}