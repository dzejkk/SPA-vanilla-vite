import { homeView } from "./views/home";
import { aboutView } from "./views/about";
import { contactView } from "./views/contact";
import { notFoundView } from "./views/notFound";


// Setup of the router


const routes = {
    '/': homeView,
    '/about': aboutView,
    '/contact': contactView
};



// main content div
const contentDiv = document.querySelector('#content');


export const navigateTo = (url) => {
    history.pushState(null,null, url);
    router();
}



//handle navigation 

export const router = async () => {

    const path = window.location.pathname;

    const view = routes[path] || notFoundView;

    contentDiv.innerHTML = await view();


    setActiveLink(path);

    
}



const setActiveLink = (path) => {

    document.querySelectorAll('nav a').forEach(link=> {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }else {
            link.classList.remove('active')
        }
    })
};




export const initRouter = () => {

    //handles popstate

    window.addEventListener('popstate', router);

    //handle  clicks on links within the app

    document.addEventListener('click', (e)=> {
        if (e.target.matches('nav a')) {
            e.preventDefault();
            navigateTo(e.target.href)
        }
    })

    router();
};