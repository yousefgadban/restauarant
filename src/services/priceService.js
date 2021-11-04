import { Subject } from 'rxjs';

const priceSubject = new Subject();
const itemsCountSubject = new Subject();

export const priceService = {
    updatePrice: price => priceSubject.next(price),
    getPrice: () => priceSubject.asObservable(),
    
    updateOrderItemsCount: count => itemsCountSubject.next(count),
    getItemsCount: () => itemsCountSubject.asObservable(),
};