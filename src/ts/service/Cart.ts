import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        return this._items.reduce((sumCurt, product) => sumCurt + product.price, 0);
    }

    sumWithDiscount(percent: number): number {
        return this.sum() * (100 - percent) / 100;
    }

    remove(id: number): void {
        this._items.forEach( el => {
            if (el.id === id) {
                this._items.splice(this._items.indexOf(el), 1);
            } 
        })
    }

}
