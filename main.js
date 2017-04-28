var nextBgUrl;

$(document).ready(function() {
    preloadNextBackground();
    updateScreen();
    $("#getNewQuote").on("click", updateScreen);
});

function updateScreen() {
    updateQuote();
    updateBackground();
    preloadNextBackground();
}

function updateQuote() {
    $.ajax({
        url: "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en",
        jsonp: "jsonp",
        dataType: "jsonp",
        success: function(json) {
            var quote = json.quoteText;
            var author = json.quoteAuthor;
            $("#quote").html(quote);
            $("#author").html(author);
            setTweet('"' + quote + '" ' + author)
        }
    });
}

function setTweet(content){
    var tweetUrl = "https://twitter.com/intent/tweet?hashtags=quoteofhteday&text=" +  encodeURIComponent(content);
    $("#tweetQuote").attr('href', tweetUrl);
}

function updateBackground() {
    var imgUrl = "url(" + nextBgUrl + ")";
    $("body").css("background-image", imgUrl);
}

function preloadNextBackground() {
    var index = Math.floor(Math.random() * backgroundImageUrls.length);
    var imgUrl = 'images/' + backgroundImageUrls[index];
    var img = new Image();
    img.src = imgUrl;
    nextBgUrl = imgUrl;
}

var backgroundImageUrls = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg"
];
