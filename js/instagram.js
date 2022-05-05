$(function() {
    $.get('https://zapier.com/engine/rss/12451417/nodescornerposts', function (data) {
        console.log(data);
        $(data).find("item").each(function () { // or "item" or whatever suits your feed
            var el = $(this);
            var title = el.find("title").text();
            var link = el.find("link").text();
            var image = el.find("enclosure").attr('url');
            var description = el.find("description").text();
            var content = '<div class="portfolio-flex-item portfolio-item"> <a href="' + encodeURI(link) + '" title="click for more information on this article" class="portfolio-link" data-toggle="modal"> <div class="caption"> <div class="caption-content"><i class="fa fa-search-plus fa-3x"></i></div></div><img src="'+encodeURI(image) + '" id="' + title.replace('Caption: ','') + '" class="img-responsive" alt="' + title.replace('Caption: ','') + '"></a></div>';
            $('#articles .portfolio-flex-row').append(content);
        });
    });
});

// ref: https://www.jazio.eu/development/frontpage/display-instagram-feeds-in-your-jekyll-website/