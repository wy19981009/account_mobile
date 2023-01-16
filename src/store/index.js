import { createStore } from "vuex";

export default createStore({
	state() {
		return {
			id: 2,
			username: "",
			password: "",
			nickname: "",
			phone: "",
			avatar: "",
			signature: "",
			theme: "light",
			themeChecked: false,
			active: "/home",
		};
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
});
