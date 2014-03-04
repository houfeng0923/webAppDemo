/*global Backbone */
// var app = app || {};

define(['backbone','collections/todos'],function(Backbone,todos){
	'use strict';

	// Todo Router
	// ----------
	var TodoRouter = Backbone.Router.extend({
		routes: {
			'*filter': 'setFilter'
		},

		setFilter: function (param) {
			// Set the current filter to be used
			app.TodoFilter = param || '';

			// Trigger a collection filter event, causing hiding/unhiding
			// of Todo view items
			todos.trigger('filter');
		}
	});

	var todoRouter = new TodoRouter();
	// Backbone.history.start();

	return todoRouter;
});
