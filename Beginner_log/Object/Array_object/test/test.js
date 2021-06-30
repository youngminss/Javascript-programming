var markup = ["<ul>"];
for (var i = 0; i < 10; i++) {
  markup.push(`<li id=id${i + 1}>id${i + 1}</li>`);
}
markup.push("</ul>");

markup = markup.join("");
document.body.innerHTML = markup;
