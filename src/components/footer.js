export function renderFooter() {
  const footerContainer = document.querySelector("#footer");
  const date = new Date();
  const formattedDate = date.toLocaleString("de-DE");


  
  footerContainer.innerHTML = `

      <div class="container">
        <p>&copy; ${formattedDate} Vanilla JS SPA. All rights reserved</p>
      </div>
     
    `;
}
