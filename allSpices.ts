class AllSpices {

    public prix: number[];
    public recettes: string[];
    public prixTotal: number;
    public index: number;

    constructor() {
        this.prix = new Number[20];
        this.recettes = new String[20];
        this.prixTotal = 0;
        this.index = 0;
    }

    add(order: string, price: number): void {
        if (this.prix.length == 0) {
            this.prix[0] = price;
            this.recettes[0] = order;
        } else {
            var i: Number;
            this.index = this.findIndex();
            this.prix[this.index] = price;
            this.recettes[this.index] = order;
        }
    }

    findIndex() {
        this.index = this.prix.length;
        return this.index;
    }

    remove(recipe: string, price: number): void {
        var i, j;
        i = this.recettes.indexOf(recipe);
        this.recettes[i] = null;
        this.prix[i] = null;
        j = i;
        while (j<this.prix.length) {
            this.recettes[j] = this.recettes[j++];
            this.recettes[j++] = null;
            this.prix[j] = this.prix[j++];
            this.prix[j++] = null;
            j = j+1;
        }
        this.index = this.findIndex();
    }

    setPrixTotal() {
        this.prixTotal = 0;
        var i, j;
        i = this.recettes.length;
        j = 0;
        while (j<i) {
            this.prixTotal = this.prixTotal + this.prix[j];
        }
    }
}