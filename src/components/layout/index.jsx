import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";
export default class Layout extends Component {
  render() {
    return (
      <div className='wraper'>
        <Header></Header>
        <main className='content'>{this.props.children}</main>
        <Footer></Footer>
      </div>
    );
  }
}
