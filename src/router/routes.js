/*
 * @Author: heinan
 * @Date: 2021-05-05 10:56:25
 * @Last Modified by: heinan
 * @Last Modified time: 2021-05-05 11:46:56
 */

import Train from "@/containers/train";
import Post from "@/containers/post";
import Project from "@/containers/project";
import Interview from "@/containers/interview";
import MineInterview from "@/containers/interview/mine";
import InterviewTopList from "@/containers/interview/toplist";
import InterviewHistory from "@/containers/interview/history";
import Answer from "@/containers/answer";
import AnswerList from "@/containers/answer/list";
import MineAnswer from "@/containers/answer/mine";
import NotFound from "@/components/404";
const RouterConfig = [
  {
    path: "/",
    name: "default",
    redirect: "/post",
  },
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
    path: "/answer",
    name: "answer",
    component: Answer,
    children: [
      { path: "/answer/list", name: "answerList", component: AnswerList },
      { path: "/answer/mine", name: "mineAnswer", component: MineAnswer },
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
        component: InterviewHistory,
      },
      {
        path: "/interview/mine",
        name: "mine",
        component: MineInterview,
      },
      {
        path: "/interview/topList",
        name: "topList",
        component: InterviewTopList,
      },
    ],
  },
  {
    name: "404",
    component: NotFound,
  },
];
export default RouterConfig;
