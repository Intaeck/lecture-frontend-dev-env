import MainController from "./controllers/MainController.js";
//번들링 된 ./dist/main.js 파일에서 ./main.css을 로드할 수 있음
import './main.css';

document.addEventListener("DOMContentLoaded", () => {
  new MainController();
});
