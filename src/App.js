import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import axios from "axios";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
function App() {
  const getClick = async () => {
    try {
      //axios.get("http://alexjun12.loca.lt/bike/unlockRequest");
      axios.get("http://175.123.140.225:8080/test");
    } catch (error) {
      console.log("s;kdjal");
    }
  };
  const postClick = async (post: string) => {
    try {
      // axios.post("http://alexjun12.loca.lt/bike/lockBike", {
      //   lockbike: post,
      // });
      axios.get("http://175.123.140.225:8080/test", {});
      console.log(post);
    } catch (e) {
      console.log("sdad");
    }
  };
  return (
    <div className={styles.App}>
      <div className={styles.JJY}>
        <button className={styles.btn} onClick={() => getClick()}>
          겟
        </button>
        <button className={styles.btn} onClick={() => postClick("false")}>
          폴스맨
        </button>
        <button className={styles.btn} onClick={() => postClick("true")}>
          트루맨
        </button>
      </div>
      <div>
        <h1>Root</h1>
        <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    </div>
  );
}

export default App;
