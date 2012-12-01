define(['source/common/infrastructure/event'], function(Event) {

    function circleView(model, elements) {
        debugger;
        this._model = model;
        this._elements = elements;

        this.listModified = new Event(this);
        this.addButtonClicked = new Event(this);
        this.delButtonClicked = new Event(this);

        var _this = this;

        // attach model listeners
        this._model.collectionChanged.attach(function() {
            _this.rebuildList();
        });
    }

    circleView.prototype = {
        show: function() {
            this.rebuildList();
        },
        rebuildList: function() {
            var list, items, key, string;

            list = this._elements.list;

            items = this._model.getItems();
            string = '<article><table><tr>';
            for (key in items) {
                string += '<td>';
                    string += '<div id="moduleA" class="module">';
                        string += '<svg width="128" height="128">';
                        string += '<circle cx="64" cy="64" r="64" fill="#808b87" fill-opacity="1" class="ready"></circle>';
                        string += '</svg>';
                    string += '</div>';
                string += '</td>';
//                string += '<td>';
//                    string += '<div id="moduleB" class="module">';
//                        string += '<svg width="128" height="128">';
//                        string += '<circle cx="64" cy="64" r="64" fill="#7a776c" fill-opacity="1" class="ready"></circle>';
//                        string += '</svg>';
//                    string += '</div>';
//                string += '</td>';
//                string += '<td>';
//                    string += '<div id="moduleC" class="module">';
//                        string += '<svg width="128" height="128">';
//                        string += '<circle cx="64" cy="64" r="64" fill="#645849" fill-opacity="1" class="ready"></circle>';
//                        string += '</svg>';
//                    string += '</div>';
//                string += '</td>';
//                string += '<td>';
//                    string += '<div id="moduleD" class="module">';
//                        string += '<svg width="128" height="128">';
//                        string += '<circle cx="64" cy="64" r="64" fill="#7a7060" fill-opacity="1" class="ready"></circle>';
//                        string += '</svg>';
//                    string += '</div>';
//                string += '</td>';
            }
            string += '</tr></table></article>';
            
            list.innerHTML = string;
            
            this._model.setSelectedIndex(-1);
        }
    };

    return circleView;
});