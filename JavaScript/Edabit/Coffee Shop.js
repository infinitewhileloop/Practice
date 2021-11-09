// https://edabit.com/challenge/ydgurBgEdGkueNmmp

class CoffeeShop {

    constructor(name, menu, orders) {
        this.name = name;
        this.menu = menu;
        this.orders = orders;
    }
    addOrder(orderName) {
        let existsOnMenu = this.menu.some(elem => elem.item === orderName);  // check if it exists on menu
        if (existsOnMenu) {
            this.orders.push(orderName);
            return 'Order added!';
        } else {
            return 'This item is currently unavailable!';
        }
    }
    fulfillOrder() {
        if (this.orders.length > 0) {  // orders array is not empty
            let firstElem = this.orders.shift();
            return `The ${firstElem} is ready!`;
        } else {  // orders array is empty
            return 'All orders have been fulfilled!';
        }
    }
    listOrders() {
        return this.orders;
    }
    dueAmount() {
        return Math.round(this.orders.reduce((acc, curOrderElem) => {
            return acc + this.menu.find(menuElem => menuElem.item === curOrderElem).price
        }, 0) * 100) / 100;
    }
    cheapestItem() {
        let minPrice = Infinity;
        let minItem = '';
        this.menu.forEach(elem => {
            if (elem.price < minPrice) {
                minPrice = elem.price;
                minItem = elem.item;
            }
        });
        return minItem;
    }
    drinksOnly() {
        return this.menu.filter(elem => elem.type === 'drink')
            .map(elem => elem.item);
    }
    foodOnly() {
        return this.menu.filter(elem => elem.type === 'food')
            .map(elem => elem.item);
    }
}
