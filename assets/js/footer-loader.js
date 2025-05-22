// Faz uma requisição HTTP para buscar o conteúdo do arquivo footer.html
fetch("assets/html/footer.html")
  // Quando a resposta chegar, converte o conteúdo da resposta para texto (HTML bruto)
  .then((response) => response.text())
  // Depois de convertido, pega esse texto e insere dentro do elemento com id="footer-placeholder"
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
