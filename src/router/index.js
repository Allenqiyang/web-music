import Discover from "../pages/discover"
import Friends from "../pages/friend"
import Mine from "../pages/mine"

const routes = [
  {
    path: "/",
    exact: true,
    component: Discover
  },{
    path: "/mine",
    exact: true,
    component: Mine
  },{
    path: "/friend",
    exact: true,
    component: Friends
  },
]

export default routes