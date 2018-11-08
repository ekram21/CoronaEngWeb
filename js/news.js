const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');

const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

firebase.database().ref(`News/${key}`).once('value').then(snap => {
    let article = snap.val();

    let date = article.date.split('.');
    let paragraphs = article.description.split('###para###');
    
    $('#articleContainer').append(`<div class="newsHeading">${article.title}</div>`);
    $('#articleContainer').append(`<h5>${months[Number(date[1])]} ${date[0]}, ${date[2]}</h5>`);
    $('#articleContainer').append(`<img class="news-image" src="${article.imgURL}" alt="drone">`);
    
    paragraphs.forEach(para => $('#articleContainer').append(`<p>${para}</p>`));
    
    $('#articleContainer').append('<div class="article-footer">For more information, please contact us.</div>');
});

firebase.database().ref('News').once('value').then(snap => {
    let articles = snap.val();

    for (let articleID in articles) {
        let article = articles[articleID];
        let date = article.date.split('.');
        // console.log(article);
        $('#recent-news').append(
            `<div class="recent-news-entry">
                <a href="/news.html?key=${articleID}"><i class="fas fa-bolt"></i> ${article.title}</a><br>
                <small>${months[Number(date[1])]} ${date[0]}, ${date[2]}</small>
            </div>`
        );
    }
})