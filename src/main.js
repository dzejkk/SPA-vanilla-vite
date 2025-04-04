import { initRouter } from "./router";
import { renderHeader } from "./components/header";
import { renderFooter } from "./components/footer";



const initApp = () => {


    renderHeader();
    renderFooter();


    initRouter();
}


document.addEventListener('DOMContentLoaded',initApp);