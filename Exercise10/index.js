const createAndAppendParagraph = (content) => {
  const root = document.getElementById("root");
  const paragraph = document.createElement("p");
  paragraph.innerText = content;
  root.appendChild(paragraph);
};

const main = () => {
  const postsString = window.sessionStorage.getItem("posts");

  if (postsString) {
    const posts = JSON.parse(postsString);
    posts.map(({ title }) => {
      createAndAppendParagraph(title);
    });
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        posts.map(({ title }) => {
          createAndAppendParagraph(title);
        });
        window.sessionStorage.setItem("posts", JSON.stringify(posts));
      })
      .catch(() => {
        createAndAppendParagraph("Errore nel fetch");
      });
  }
};

main();
