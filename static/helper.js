today = new Date();
 dd = String(today.getDate()).padStart(2, '0');
 mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
 yyyy = today.getFullYear();

today = 'Что день '+dd + '/' + mm + '/' + yyyy + ' готовит?';
header = $("#main-header")
header.html(today)
console.log(today);

$("#main-header").click(function(){
      console.log("Получение getJSON из 2го сервера")
      url = "https://sf-pyw.mosyag.in/m04/api/forecasts";
      $.getJSON(url, function(data) {
        console.log(data)
        paragraphs=data["prophecies"]
        fill_divs(paragraphs)
        });

      function fill_divs(paragraphs){
        $.each(paragraphs, function(i, d) {
          p = $("#p-" + i)
          p.html("<p>" + d + "</p>")
          });
        }
    })