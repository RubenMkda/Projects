function getUrl() {
  event.preventDefault();
  let URL_, URL_RGX, NewUrl;
  URL_ = document.getElementById("URL").value;
  URL_RGX = /(www\.youtube\.com\/watch\?v=)+[a-zA-Z0-9._]+/;
  URL_ = URL_.match(URL_RGX)[0];
  NewUrl = URL_.split(/(www\.youtube\.com\/watch\?v=)/);
  document.getElementById(
    "iframe"
  ).src = `https://www.youtube.com/embed/${NewUrl[2]}`;
}
