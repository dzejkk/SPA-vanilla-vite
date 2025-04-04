export function renderFooter() {
  const footerContainer = document.querySelector("#footer");

  footerContainer.innerHTML = `

      <div class="container">
      <p>&copy; ${new Date().getFullYear()}VAnilla JS SPA. All rights reserved</p>

    </div>
    
    `;
}
