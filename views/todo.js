var TodoApp = TodoApp || {};

(function($, Backbone, _) {
    TodoApp.TodoItem = Backbone.View.extend({
        tagName: 'li',

        initialize: function() {
            this.template = _.template($('#todo-item').html());
        },

        events: {
            'click .toggle': 'toggle'
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        toggle: function() {
            this.model.toggle();

            if (this.model.get('done')) {
                this.$el.wrap('<strike>');
            } else {
                this.$el.unwrap('<strike>');
            }
        }
    });
}(jQuery, Backbone, _));