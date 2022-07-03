import React from "react"

import { Redirect } from "react-router-dom"
import Discover from "../pages/discover"
import Friends from "../pages/friend"
import Mine from "../pages/mine"
import Recommend from "../pages/discover/children-pages/recommend"
import Artist from "../pages/discover/children-pages/artist"
import Album from "../pages/discover/children-pages/album"
import Djradio from "../pages/discover/children-pages/djradio"
import Ranking from "../pages/discover/children-pages/ranking"
import Songs from "../pages/discover/children-pages/songs"

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
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/toplist",
        component: Ranking
      },
      {
        path: "/discover/playlist",
        component: Songs
      },
      {
        path: "/discover/djradio",
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      }
    ]
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friends
  }
]

export default routes