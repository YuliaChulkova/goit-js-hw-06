

class Storage {
    #items = [];


    constructor(item) {
        this.#items = item;
    }
    getItems() {
        return this.#items; 
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemToRemove) {

       const findIdx = this.#items.indexOf(itemToRemove);
        // console.log(findIdx);
        if (findIdx !== -1) {
            this.#items.splice(findIdx, 1);
        }
        return this.#items;
 
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
