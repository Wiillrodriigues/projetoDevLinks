function toggleMode() {
  const html = document.documentElement;

  // if (html.classList.contains('light')){
  //     html.classList.remove('light')
  // } else {
  //     html.classList.add('light')
  // }

  html.classList.toggle("light");
}

function toggleEbookList() {
  var ebookList = document.getElementById("ebook-list");
  if (ebookList.style.display === "none") {
    ebookList.style.display = "block";
  } else {
    ebookList.style.display = "none";
  }
}

function downloadEbook(url) {
  window.open(url);
}
