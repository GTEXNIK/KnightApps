import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

bridge.send("VKWebAppGetCommunityToken", {"app_id": 7578894, "group_id": 196114853, "scope": "app_widget"}).then(data => {
      console.log(data);
    })
    .catch(e => console.log(e))