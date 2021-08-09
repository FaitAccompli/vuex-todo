<template>
	<div class="filter">
		Filter Todos:
		<select v-model="selected" @change="onChange($event)">
			<option v-for="item in values" :value="item" :key="item">
				{{ item }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "FilterTodos",
	data() {
		return {
			values: ["200", "100", "50", "20", "10", "5"],
			selected: "200",
		};
	},
	methods: {
		...mapActions(["filterTodos"]),
		onChange(e) {
			this.selected = e.target.value;
			this.filterTodos(this.selected);
		},
	},
};
</script>

<style scoped>
.filter {
	color: #8e8d8a;
	font-weight: bold;
}
select {
	margin-top: 20px;
	padding: 6px;
	border: #e85a4f 1px solid;
}
</style>
