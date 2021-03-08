import React from 'react';
import { Redirect } from "react-router-dom";
import Home from '../application/Home'; //公共组件
import Recommend from '../application/Recommend'; //推荐组件
import Singers from '../application/Singers'; //歌手组件
import Rank from '../application/Rank'; //排行榜组件

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to = {"/recommend"}/>
        )
      },
      {
        path: "/recommend",
        component: Recommend
      },
      {
        path: "/singers",
        component: Singers
      },
      {
        path: "/rank",
        component: Rank
      }
    ]
  }
]