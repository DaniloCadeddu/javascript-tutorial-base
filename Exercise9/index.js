const main = () => {
  const root = document.getElementById("root");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      posts.map(({ title }) => {
        const paragraph = document.createElement("p");
        paragraph.innerText = title;
        root.appendChild(paragraph);
      });
    })
    .catch(() => {
      const paragraph = document.createElement("p");
      paragraph.innerText = "Errore nel fetch";
      root.appendChild(paragraph);
    });
};

main();
