import "./styles/app.scss";
import "./assets/flag.png";
import { Render } from "./js/render/render";

const bodyContainer = document.getElementById("app");

if (!bodyContainer) throw new Error("no body container");

const render = new Render(bodyContainer);
