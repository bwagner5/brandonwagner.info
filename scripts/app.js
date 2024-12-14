// Function to load a Markdown file and render it
function loadMarkdown(filename) {
    fetch(`markdown/${filename}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdown file not found");
        }
        return response.text();
      })
      .then((markdown) => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);
        document.getElementById("content").innerHTML = html;
      })
      .catch((error) => {
        document.getElementById("content").innerHTML = `<p>Error: ${error.message}</p>`;
      });
  }
  