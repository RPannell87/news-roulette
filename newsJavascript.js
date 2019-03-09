var usPoliticsArray = [
	"https://www.bbc.com/news/world/us_and_canada",
	"https://www.reuters.com/news/us",
	"https://slate.com/news-and-politics",
	"https://www.cnn.com/us",
	"https://www.foxnews.com/us",
	"https://www.msnbc.com",
	"https://www.nbcnews.com/politics",
	"https://www.aljazeera.com/topics/regions/us-canada.html",
	"https://www.nytimes.com/section/us",
	"https://abcnews.go.com/Politics",
	"https://www.washingtonpost.com/politics/",
	"https://www.bloomberg.com/politics",
	"http://time.com/section/politics/",
	"https://www.buzzfeednews.com/section/politics",
	"https://www.economist.com/united-states/",
	"https://www.npr.org/sections/politics/",
	"https://www.politico.com",
	"https://www.theguardian.com/us-news",
	"https://www.washingtontimes.com/news/politics/",
	"https://www.theamericanconservative.com/web-categories/politics/",
	"https://www.huffpost.com/news/politics",
	"https://www.newyorker.com/news",
	"https://www.usatoday.com/washington/",
	"https://www.theatlantic.com/politics/",
	"https://www.bostonherald.com/news/politics/",
  "http://www.cnn.com/us"
];
function randomUSLink() {
  var randomNumber = Math.floor(Math.random() * usPoliticsArray.length);
  var newUrl = usPoliticsArray[randomNumber];
  var newUSLink = window.open(newUrl, '_blank');
  newUSLink.focus();
  location.href = newUSLink;
}
/*function randomUSLink() {
        var i = parseInt(Math.random() * usPoliticsArray.length);
        location.href = usPoliticsArray[i];
    }  This code works but I dont fully understand it.
*/
