/*
 * @Author: heinan
 * @Date: 2021-05-05 10:54:23
 * @Last Modified by: heinan
 * @Last Modified time: 2021-05-05 11:52:51
 */
import RouterView from "@/router";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "@/components/layout";

function App() {
  return (
    <Router>
      <Layout>
        <RouterView></RouterView>
      </Layout>
    </Router>
  );
}

export default App;
