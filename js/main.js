var content = $('.content')

$(".search").change(function(){
    $('.search-wrapper').removeClass('searching');
    var query = $('.search').val();
    $.getJSON("http://www.reddit.com/search.json?q=" + query + '&limit=10', function(data) {
        $.each(data.data.children, function(i,item){
            var title = item.data.title;
            var url = item.data.url;
            var subreddit = item.data.subreddit;
            var author = item.data.author;
            var post = '<li class="post"><a href="'+ url + '" target="_blank">' + title + '</a><br><a class="subreddit" target="_blank" href="http://reddit.com/r/' + subreddit + '">Submitted to r/' + subreddit + ' </a><a class="author" target="_blank" href="http://reddit.com/user/' + author + '">by ' + author + '</a></li>';
            content.append(post);   
        });
    });
});    