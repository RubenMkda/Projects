// FUNCTION ANONIMA AUTOEJECUTABLE

// let ruben = 2;
// let ruben2 = 2;

// (function (a, b) {
//   console.log(a + b);
// })(ruben, ruben2);

// (function () {
//   console.log("mi segunda IIFE");
// })();

// -----------------------------------------------

(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    console.log(xhr);

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("¡Exito!");
      //   console.log(xhr.responseText);
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("¡Error!");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });

  xhr.open("GET", "https://jsonplaceholder.typicode.com/user");

  xhr.send();
})();
