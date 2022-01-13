import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./configureStore";
import { Provider } from "react-redux";
import "./styles/main.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
