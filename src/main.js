import { initRouter } from "./router";
import { renderHeader } from "./components/header";



const initApp = () => {


    renderHeader();


    initRouter();
}


document.addEventListener('DOMContentLoaded',initApp);