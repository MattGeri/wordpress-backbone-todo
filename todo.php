<?php
/*
Plugin Name: Todo
Plugin URI: http://mattgeri.com
Description: A simple todo application
Author: Matt Geri
Version: 0.1
Author URI: http://mattgeri.com
*/

add_action( 'wp_enqueue_scripts', 'register_scripts' );
add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );

function register_scripts() {
	wp_register_script( 'backbone-localstorage', 'https://cdnjs.cloudflare.com/ajax/libs/backbone-localstorage.js/1.1.16/backbone.localStorage-min.js', array( 'backbone' ) );
	wp_register_script( 'todo-model', plugins_url( 'models/todo.js', __FILE__ ), array(), 0.1, true );
	wp_register_script( 'todo-collection', plugins_url( 'collections/list.js', __FILE__ ), array( 'todo-model' ), 0.1, true );
	wp_register_script( 'todo-view-view', plugins_url( 'views/todo.js', __FILE__ ), array(), 0.1, true );
	wp_register_script( 'todo-view-app', plugins_url( 'views/app.js', __FILE__ ), array( 'todo-collection', 'todo-view-view' ), 0.1, true );
	wp_register_script( 'todo', plugins_url( 'todo.js', __FILE__ ), array( 'jquery', 'backbone', 'backbone-localstorage', 'todo-view-app'  ), 0.1, true );
}

function enqueue_scripts() {
	wp_enqueue_script( 'backbone-localstorage' );
	wp_enqueue_script( 'todo' );
}

add_shortcode( 'todo', 'load_shortcode' );

function load_shortcode( $attributes ) {
	?>
	<script type="text/template" id="todo-item">
		<input type="checkbox" class="toggle"><%- title %>
	</script>
	<div id="todo-app">
		<div id="todo">
			<ul></ul>
			<input type="text" name="add" class="add" placeholder="Add item to list" value="" />
		</div>
	</div>
	<?php
}