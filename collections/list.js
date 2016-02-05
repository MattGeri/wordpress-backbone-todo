var TodoApp = TodoApp || {};

(function($, Backbone, _) {
    var TodoList = Backbone.Collection.extend({
        model: TodoApp.TodoModel,

        localStorage: new Backbone.LocalStorage('todos')
    });

    TodoApp.TodoList = new TodoList();
}(jQuery, Backbone, _));