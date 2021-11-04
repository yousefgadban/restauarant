import { priceService } from '../services/priceService';


export default class OrderService {
    static instance = OrderService.instance || new OrderService();

    order = {
        orderId: 'orderID',
        items: [],
    }

    price = 0;
    itemsCount = 0;

    helloWorld() {
        console.log("Hello World... order !!!")
    }

    setEmptyOrder() {
        this.order.items = [];
        this.price = 0;
        this.itemsCount = 0;
        priceService.updatePrice(this.calculatePrice());
        priceService.updateOrderItemsCount(0);
    }

    updateItemsCount(items) {
        this.itemsCount = items;
    }

    calculatePrice() {
        let total = 0;
        Object.values(this.order.items).forEach(item => {
            total += item.price;

            if (item.hasOwnProperty('additions')) {
                Object.values(item.additions).forEach(addition => {

                    Object.values(addition.additionItems).forEach(additionItem => {
                        total += additionItem.default ? additionItem.price : 0;
                    })

                })
            }

        });

        this.price = total;
        return total;
        
    }

    addItemToOrder(item1, uuid) {

        console.log(this.order);
        
        let item = {};
        item.id = uuid //''+new Date().getTime() 
        item.key = item1.key
        item.name = item1.name
        item.name_ar = item1.name_ar
        item.name_en = item1.name_en
        item.name_he = item1.name_he
        item.price = item1.price
        item.url = item1.url
        if (item1.hasOwnProperty('additions')) {
            item.additions = item1.additions
        }
        

        console.log('item', item);
        console.log('add item to order ', item, uuid);
        //item['id'] = ''+new Date().getTime() // uuid;

        //this.order.items.push(item);
        //this.order.items = [...this.order.items, item]

        this.order.items[uuid] = item;

        priceService.updatePrice(this.calculatePrice());
        priceService.updateOrderItemsCount(++this.itemsCount);

        console.log(this.order);


        return
    }

    // addItemToOrder(item, uuid) {
        
    //     console.log('item', item);
    //     console.log('add item to order ', item, uuid);
    //     // item['id'] = uuid;
    //     this.order.items[uuid] = item;
    //     delete this.order.items[uuid].id;
    //     console.log(this.order.items[uuid]);
    //     this.order.items[uuid]['id'] = uuid;


    //     console.log(this.order);
    // }

    getPrice() {
        return this.price;
    }

    getItemsCount() {
        return this.itemsCount;
    }

    print() {
        console.log(this.order);
    }

    getOrder() {
        return this.order;
    }

    removeItem(id) {
        delete this.order.items[id];
        priceService.updatePrice(this.calculatePrice());
        priceService.updateOrderItemsCount(--this.itemsCount);
        return true;
    }


    getItemAdditions(id) {

        console.log(id);
   
        if (typeof id !== 'undefined' && typeof this.order.items[id] !== 'undefined') {
            console.log(this.order.items[id].additions);
            return this.order.items[id].hasOwnProperty('additions') ? Object.values(this.order.items[id].additions) : [];
        } 
        return [];
        
    }



    updateAdditionItem(itemId, addition, additionItem) {
        console.log(itemId, addition, additionItem);
        console.log(addition.key, additionItem.key);
        
        if (!addition.singleChoice) {

            let currentDefault = this.order.items[itemId].additions[addition.key].additionItems[additionItem.key].default;
            this.order.items[itemId].additions[addition.key].additionItems[additionItem.key].default = !currentDefault;

        } else {

            Object.values(this.order.items[itemId].additions[addition.key].additionItems).forEach(additionItem => {
                additionItem.default = false;
            });

            this.order.items[itemId].additions[addition.key].additionItems[additionItem.key].default = true

        }

        priceService.updatePrice(this.calculatePrice());
        console.log(this.order);

    }
    
}