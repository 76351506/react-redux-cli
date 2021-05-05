/*
 * @Author: heinan
 * @Date: 2021-05-05 10:56:25
 * @Last Modified by: heinan
 * @Last Modified time: 2021-05-05 11:08:58
 */

import Post from "@/containers/post";

const RouterConfig = [
  {
    path: "/post",
    name: "post",
    component: Post,
  },
  {
    path: "/project",
    name: "project",
    component: Project,
  },
  {
    path: "/train",
    name: "train",
    component: Train,
  },
  {
    path: "/answers",
    name: "answers",
    component: Answers,
    children: [
      { path: "/answers/list", name: "answerList", component: AnswerList },
      { path: "/answers/mine", name: "mineAnswer", component: mineAnswer },
    ],
  },
  {
    path: "/interview",
    name: "interview",
    component: Interview,
    children: [
      {
        path: "/interview/history",
        name: "history",
        component: History,
      },
      {
        path: "/interview/mine",
        name: "mine",
        component: Mine,
      },
      {
        path: "/interview/topList",
        name: "topList",
        component: TopList,
      },
    ],
  },
];
export default RouterConfig;
