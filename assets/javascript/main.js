$("#search").on("click", function(event) {
    // search-word
    // records-number
    // start-year
    // end-year
    
    event.preventDefault();

    var searchTerm = $("#search-word").val().trim(),
        startDate = $("#start-year").val() + "0101",
        endDate = $("#end-year").val() + "1231",
        recordNumber = $("#records-number").val();

    console.log("term: " + searchTerm);
    console.log("start date: " + startDate);
    console.log("end date: " + endDate);
    console.log("Number of records: " + recordNumber);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=6S1J4b2VrRM7q4chFf9BPvcHEcq7fjGg";

    console.log("URL:" + queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var msg = `<article><h2>${response.response.docs[0].headline.main}</h2>`;
        msg += `<p>${response.response.docs[0].snippet}</p>`;
        msg += `<p><a href="${response.response.docs[0].web_url}">Click here for more info</a></article>`;
        $("#articles").append(msg);


      // console.log("Article 1 Abstract:" + response.response.docs[1].abstract);
      // console.log("Article 7 Snippet:" + response.response.docs[1].snippet);
      // console.log("Article 5 Byline:" + response.response.docs[5].byline.original);
        
    });
  });