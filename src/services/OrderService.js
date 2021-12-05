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

            if (item.additions.length !== 0) {
                Object.values(item.additions).forEach(addition => {

                    Object.values(addition.additionItems).forEach(additionItem => {
                        total += additionItem.isDefault ? additionItem.price : 0;
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
        item._id = item1._id
        item.name = item1.name
        item.name_ar = item1.name_ar
        item.name_en = item1.name_en
        item.name_he = item1.name_he
        item.price = item1.price
        item.url = item1.url
        item.additions = item1.additions
        // if (item1.additions.length !== 0) {
        //     item.additions = item1.additions
        // }
        

        console.log('item1', item1, item1.additions.length);
        console.log('add item to order ', item, uuid);
        //item['id'] = ''+new Date().getTime() // uuid;

        //this.order.items.push(item);
        //this.order.items = [...this.order.items, item]

        //this.order.items[uuid] = item;
        this.order.items.push(item);

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
        console.log(this.order);
        return this.order;
    }

    getOrderStringfy() {
        return JSON.stringify(this.order);
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
            return this.order.items[id].additions.length !== 0 ? Object.values(this.order.items[id].additions) : [];
        } 
        return [];
        
    }



    // updateAdditionItem(itemId, addition, additionItem) {
    //     console.log(itemId, addition, additionItem);
    //     console.log(addition._id, additionItem._id);
    //     console.log();
        
    //     if (!addition.singleChoice) {

    //         let currentDefault = this.order.items[itemId].additions[addition._id].additionItems[additionItem._id].default;
    //         this.order.items[itemId].additions[addition._id].additionItems[additionItem._id].default = !currentDefault;

    //     } else {

    //         Object.values(this.order.items[itemId].additions[addition._id].additionItems).forEach(additionItem => {
    //             additionItem.isDefault = false;
    //         });

    //         this.order.items[itemId].additions[addition._id].additionItems[additionItem._id].default = true

    //     }

    //     priceService.updatePrice(this.calculatePrice());
    //     console.log(this.order);

    // }


    updateAdditionItem(itemId, addition, additionItem) {
        console.log(itemId, addition, additionItem);
        console.log(addition._id, additionItem._id);
        console.log();
        
        if (!addition.singleChoice) {

            let AI = this.order.items[itemId].additions.find((add) => {
                return add._id === addition._id
            });

            AI.additionItems.find(addItem => {
                if (additionItem._id === addItem._id ) {
                    addItem.isDefault = !addItem.isDefault;
                }
            });

        } else {

            let AI = this.order.items[itemId].additions.find((add) => {
                return add._id === addition._id
            });

            console.log('AI', AI);

            AI.additionItems.forEach(addItem => {
                addItem.isDefault = false;

                if (additionItem._id === addItem._id ) {
                    addItem.isDefault = true;
                }
            });

//            this.order.items[itemId].additions[addition._id].additionItems[additionItem._id].isDefault = true

        }

        priceService.updatePrice(this.calculatePrice());
        console.log(this.order);

    }
    
}