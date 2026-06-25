const API_KEY = '33fd915fd86647a79137b56501a83c48';
const API_URL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33fd915fd86647a79137b56501a83c48";

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('오류 발생');
    }
    return response.json();
  })

  .then(data => {
    const article = data.articles[0];
    if (!article) {
      throw new Error("오류 발생");
    }
    
    const titleTag = document.getElementById('title1');
    titleTag.textContent = article.title;

    const metaTag = document.getElementById('datename');
    const formattedDate = new Date(article.publishedAt);
    const authorName = article.author 
    metaTag.textContent = `${formattedDate} · ${authorName}`;

    const summaryTag = document.getElementById('content1');
    summaryTag.textContent = article.description;

    const imageTag = document.getElementById('image1');
    if (article.urlToImage) {
      imageTag.src = article.urlToImage;
      imageTag.style.display = "block";
    }

    const bodyTag = document.getElementById('content2');
    bodyTag.innerHTML = `<p>${article.content}</p>` ;
  })

  .catch(error => {
    console.error("오류 발생", error);
  })