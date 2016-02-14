/**
 * Created by lexon222 on 13.02.16.
 */
var app = app || {};

(function () {
    'use strict';

    // Item Model
    // ----------

    // Our basic **item** model has 'id', 'name', 'image', 'icon', 'description', 'type', 'set', and 'stackable' attributes.
    app.Item = Backbone.Model.extend({
        // Default attributes for the item
        // and ensure that each item created has following default keys.
        defaults: {
            id: '',
            name: 'item-name',
            description: 'item-description',
            image: this.name + '.jpg',
            stackable: false,
            action: undefined
        },

        // Toggle the `completed` state of this todo item.
        toggle: function () {
            this.save({
                completed: !this.get('completed')
            });
        }
    });
})();
