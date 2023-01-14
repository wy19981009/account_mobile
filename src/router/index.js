import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import BileView from "../views/BileView.vue";
import StatementView from "../views/StatementView.vue";
import PersonalView from "../views/PersonalView.vue";
import ExchangeRateView from "../views/ExchangeRateView.vue";
import HouseLoanView from "../views/HouseLoanView.vue";
import GiftView from "../views/GiftView.vue";
import SettingView from "../views/SettingView.vue";
import WishView from "../views/WishView.vue";
const routes = [
	{
		path: "/main",
		component: MainView,
		children: [
			{
				path: "/home",
				name: "home",
				component: HomeView,
			},
			{
				path: "/bile",
				name: "bile",
				component: BileView,
			},
			{
				path: "/statement",
				name: "statement",
				component: StatementView,
			},
			{
				path: "/personal",
				name: "personal",
				component: PersonalView,
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: LoginView,
	},
	{
		path: "/exchangerate",
		name: "exchangerate",
		component: ExchangeRateView,
	},
	{
		path: "/houseloan",
		name: "houseloan",
		component: HouseLoanView,
	},
	{
		path: "/gift",
		name: "gift",
		component: GiftView,
	},
	{
		path: "/setting",
		name: "setting",
		component: SettingView,
	},
	{
		path: "/register",
		name: "register",
		component: RegisterView,
	},
	{
		path: "/wish",
		name: "wish",
		component: WishView,
	},
	{
		path: "/",
		redirect: "/home",
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
