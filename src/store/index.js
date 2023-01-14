import { createStore } from "vuex";

export default createStore({
	state() {
		return {
			id: "",
			username: "",
			password: "",
			nickname: "",
			phone: "",
			avatar: "",
			signature: "",
		};
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
