import axios from "axios";
import api from "../../helpers/constants";
const state = {
	todos: [],
};

const getters = {
	allTodos: (state) => state.todos,
};

const actions = {
	async fetchTodos({ commit }) {
		const response = await axios.get(api.url);
		commit("setTodos", response.data);
	},
	async addTodo({ commit }, title) {
		const response = await axios.post(api.url, { title, completed: false });
		commit("newTodo", response.data);
	},
	async deleteTodo({ commit }, id) {
		await axios.delete(`${api.url}/${id}`);
		commit("removeTodo", id);
	},
	async filterTodos({ commit }, limit) {
		const response = await axios.get(`${api.url}?_limit=${parseInt(limit)}`);
		commit("setTodos", response.data);
	},

	async updateTodo({ commit }, updTodo) {
		const response = await axios.put(`${api.url}/${updTodo.id}`, updTodo);
		commit("updateTodo", response.data);
	},
};

const mutations = {
	setTodos: (state, todos) => (state.todos = todos),
	newTodo: (state, todo) => state.todos.unshift(todo),
	removeTodo: (state, id) =>
		(state.todos = state.todos.filter((todo) => todo.id !== id)),
	updateTodo: (state, updTodo) => {
		const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
		if (index !== -1) {
			state.todos.splice(index, 1, updTodo);
		}
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
