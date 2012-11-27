define(['source/common/infrastructure/event'], function(Event) {   
    
    function ListModel() {
        this._items = [];
        this._selectedIndex = -1;

        this.collectionChanged = new Event(this);
        this.selectedIndexChanged = new Event(this);
    }

    ListModel.prototype = {
        getItems : function () {
            return [].concat(this._items);
        },

        addItem : function (item) {
            this._items.push(item);
            this.collectionChanged.notify({ item : item });
        },

        removeItemAt : function (index) {
            var item;

            item = this._items[index];
            this._items.splice(index, 1);
            this.collectionChanged.notify({ item : item });
            if (index === this._selectedIndex) {
                this.setSelectedIndex(-1);
            }
        },

        getSelectedIndex : function () {
            return this._selectedIndex;
        },

        setSelectedIndex : function (index) {
            var previousIndex;

            previousIndex = this._selectedIndex;
            this._selectedIndex = index;
            this.selectedIndexChanged.notify({ previous : previousIndex });
        }
    }; 
    
    return ListModel;
});