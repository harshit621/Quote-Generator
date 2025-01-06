// selecting elements
const btn = document.querySelector("#generate-quote");
const qpara = document.querySelector("#quote");
const author = document.querySelector("#author");

// using api to get the quotes
btn.addEventListener("click", () => {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": "6Vxqb4UBlSLQwNMUAPgR+g==BDCn4YUNahwIKvKQ" }, 
    contentType: "application/json",
    success: function (result) {
        qpara.innerText = `"${result[0].quote}"`;
        author.innerText = `~ ${result[0].author}`;
    },
    // catching a error
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    },
  });
});
