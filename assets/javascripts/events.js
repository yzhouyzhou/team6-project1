$("events-display").text("Things To Do!")
function eventsDisplay(){
 
    var events = $(this).attr("data-name");
    var queryURL = "https://cors-anywhere.herokuapp.com/" + "http://api.eventful.com/json/events/search?app_key=QXvwcxm7wz44KSFD&location=chicago&date=This+Week"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
       console.log(response) 
    })
}
eventsDisplay();

// function show_alert()
// {
//   var app_key = document.getElementById("app_key");
//   var oArgs = {
//             app_key: app_key.value ,
//             id: "20218701",
//             page_size: 25 ,
//   };
//   EVDB.API.call("/events/get", oArgs, function(oData) {
//     console.log("your myObject is " + JSON.stringify(oData));
// });
// }

// function show_alert2()
// {
//    var app_key = document.getElementById("app_key");
//    var where   = document.getElementById("where");
//    var query   = document.getElementById("query");
//    var oArgs = {
//       app_key: app_key.value ,
//       q: query.value,
//       where: where.value,
//       "date": "2019061100-2019062000",
//       "include": "tags,categories",
//       page_size: 5,
//       sort_order: "popularity",
//    };
//    EVDB.API.call("/events/search", oArgs, function(oData) {
//       console.log("your myObject is " + JSON.stringify(oData));
//     });
// }