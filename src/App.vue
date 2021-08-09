<template>
	<div id="app">
		<div class="container">
			<AddTodo />
			<FilterTodo />
			<Todos />
		</div>
	</div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";

export default {
	name: "App",
	components: {
		Todos,
		AddTodo,
		FilterTodo,
	},
};
</script>

<style>
h3 {
	color: #8e8d8a;
}
body {
	font-family: "Roboto Mono", monospace;
	line-height: 1.6;
	background: #eae7dc;
}

.container {
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
}
</style>
