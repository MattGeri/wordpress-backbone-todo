var TodoApp = TodoApp || {};

(function($, Backbone, _) {
    TodoApp.App = Backbone.View.extend({
        el: $('#todo-app'),

        initialize: function() {
            this.input = this.$('.add');
            this.listenTo(TodoApp.TodoList, 'add', this.newTodo);
        },

        events: {
            'keypress .add': 'addTodo'
        },

        addTodo: function(e) {
            if (e.keyCode != 13) return;
            if (this.input.val() == '') return;

            TodoApp.TodoList.create({title: this.input.val(), done: false});

            this.input.val('');
        },

        newTodo: function(model) {
            var item = new TodoApp.TodoItem({model: model});
            this.$('#todo ul').append(item.render().el);
        }
    });
}(jQuery, Backbone, _));