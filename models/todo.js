var TodoApp = TodoApp || {};

(function($, Backbone, _) {
    TodoApp.TodoModel = Backbone.Model.extend({
        defaults: function() {
            return {
                title: '',
                done: false
            }
        },

        toggle: function() {
            this.save({done: !this.get('done')});
        }
    });
}(jQuery, Backbone, _));