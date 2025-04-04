export const renderHeader = () => {

    const headerContainer = document.querySelector("#header");

    headerContainer.innerHTML = `
    <div class="container">
      <div class="logo">
        <h1>Vanilla SPA</h1>
      </div>
      <nav>
        <a href="/" data-link>Home</a>
        <a href="/about" data-link>About</a>
        <a href="/contact" data-link>Contact</a>
      </nav>
    </div>
  `;
};



