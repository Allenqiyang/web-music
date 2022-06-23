import React from "react"

import { Redirect } from "react-router-dom"
import Discover from "../pages/discover"
import Friends from "../pages/friend"
import Mine from "../pages/mine"

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: Discover
  },{
    path: "/mine",
    component: Mine
  },{
    path: "/friend",
    component: Friends
  },
]

export default routes