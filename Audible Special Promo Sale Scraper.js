// V.1.6.
(function() {
  
  var slimMarkdown = true;
  
  var storage = {
    set: function( name, object) {
      localStorage.setItem( name, JSON.stringify( object ) );
    },
    get: function( name ) {
      return JSON.parse( localStorage.getItem( name ) );
    },
    remove: function( name ) {
      localStorage.removeItem( name );
    }
  };
  
  storage.name = '2for1-sale';
  // storage.remove( storage.name );
  storage.data = storage.get( storage.name );
  
  String.prototype.trimAll = function(){
    return this.trim().replace(/\s+/g,' ');
  }
  
  // https://github.com/Mikhus/domurl
  !function(t){"use strict";var y=/^[a-z]+:/,d=/[-a-z0-9]+(\.[-a-z0-9])*:\d+/i,v=/\/\/(.*?)(?::(.*?))?@/,r=/^win/i,g=/:$/,m=/^\?/,q=/^#/,w=/(.*\/)/,A=/^\/{2,}/,I=/(^\/?)/,e=/'/g,o=/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,n=/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,i=/%([0-7][0-9a-f])/gi,s=/\+/g,a=/^\w:$/,C=/[^/#?]/;var p,S="undefined"==typeof window&&"undefined"!=typeof global&&"function"==typeof require,b=!S&&t.navigator&&t.navigator.userAgent&&~t.navigator.userAgent.indexOf("MSIE"),x=S?t.require:null,j={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},z={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};function E(){return S?p=p||"file://"+(process.platform.match(r)?"/":"")+x("fs").realpathSync("."):"about:srcdoc"===document.location.href?self.parent.document.location.href:document.location.href}function h(t,r,e){var o,n,i;r=r||E(),S?o=x("url").parse(r):(o=document.createElement("a")).href=r;var a,s,p=(s={path:!0,query:!0,hash:!0},(a=r)&&y.test(a)&&(s.protocol=!0,s.host=!0,d.test(a)&&(s.port=!0),v.test(a)&&(s.user=!0,s.pass=!0)),s);for(n in i=r.match(v)||[],j)p[n]?t[n]=o[j[n]]||"":t[n]="";if(t.protocol=t.protocol.replace(g,""),t.query=t.query.replace(m,""),t.hash=F(t.hash.replace(q,"")),t.user=F(i[1]||""),t.pass=F(i[2]||""),t.port=z[t.protocol]==t.port||0==t.port?"":t.port,!p.protocol&&C.test(r.charAt(0))&&(t.path=r.split("?")[0].split("#")[0]),!p.protocol&&e){var h=new L(E().match(w)[0]),u=h.path.split("/"),c=t.path.split("/"),f=["protocol","user","pass","host","port"],l=f.length;for(u.pop(),n=0;n<l;n++)t[f[n]]=h[f[n]];for(;".."===c[0];)u.pop(),c.shift();t.path=("/"!==r.charAt(0)?u.join("/"):"")+"/"+c.join("/")}t.path=t.path.replace(A,"/"),b&&(t.path=t.path.replace(I,"/")),t.paths(t.paths()),t.query=new U(t.query)}function u(t){return encodeURIComponent(t).replace(e,"%27")}function F(t){return(t=(t=(t=t.replace(s," ")).replace(o,function(t,r,e,o){var n=parseInt(r,16)-224,i=parseInt(e,16)-128;if(0==n&&i<32)return t;var a=(n<<12)+(i<<6)+(parseInt(o,16)-128);return 65535<a?t:String.fromCharCode(a)})).replace(n,function(t,r,e){var o=parseInt(r,16)-192;if(o<2)return t;var n=parseInt(e,16)-128;return String.fromCharCode((o<<6)+n)})).replace(i,function(t,r){return String.fromCharCode(parseInt(r,16))})}function U(t){for(var r=t.split("&"),e=0,o=r.length;e<o;e++){var n=r[e].split("="),i=decodeURIComponent(n[0].replace(s," "));if(i){var a=void 0!==n[1]?F(n[1]):null;void 0===this[i]?this[i]=a:(this[i]instanceof Array||(this[i]=[this[i]]),this[i].push(a))}}}function L(t,r){h(this,t,!r)}U.prototype.toString=function(){var t,r,e="",o=u;for(t in this){var n=this[t];if(!(n instanceof Function||void 0===n))if(n instanceof Array){var i=n.length;if(!i){e+=(e?"&":"")+o(t)+"=";continue}for(r=0;r<i;r++){var a=n[r];void 0!==a&&(e+=e?"&":"",e+=o(t)+(null===a?"":"="+o(a)))}}else e+=e?"&":"",e+=o(t)+(null===n?"":"="+o(n))}return e},L.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},L.prototype.queryLength=function(){var t=0;for(var r in this.query)this.query[r]instanceof Function||t++;return t},L.prototype.isEmptyQuery=function(){return 0===this.queryLength()},L.prototype.paths=function(t){var r,e="",o=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(e="/"),r=t.length;o<r;o++)t[o]=!o&&a.test(t[o])?t[o]:u(t[o]);this.path=e+t.join("/")}for(o=0,r=(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/")).length;o<r;o++)t[o]=F(t[o]);return t},L.prototype.encode=u,L.prototype.decode=F,L.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},L.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&u(this.user)+(this.pass&&":"+u(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+u(this.hash))},t[t.exports?"exports":"Url"]=L}("undefined"!=typeof module&&module.exports?module:window);
  
  
  var get = function( url, callback ) {
    var script = document.createElement('script');
    script.onload = function () {
      callback();
    };
    script.src = url;
    document.head.appendChild(script);
  }
  
  get('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js', function() {
    startFromTheTop();
  });

  function startFromTheTop() {
    
    storage.data = {
      category: [],
      books: {},
    };
    
    var saleSubmenuExists = $('div.bc-color-background-active.in-page-nav-selected-tab-highlight').length;
    var viewAllLinksExists = $('[id^="carousel-PRODUCT"] > div > div > div > div:nth-child(1) > div > a').length > 0;
    var selector = (saleSubmenuExists) ? '#center-4 > div > div > div.bc-box.bc-palette-default > div > div > div > div a.bc-link' : '[id^="carousel-PRODUCT"]';
    
    $(selector).each(function() {
      
      var categoryURL = '';
      var categoryName = '';
      
      // SALE FRONT PAGE STYLE: multiple carousels
      if ( viewAllLinksExists ) {
        // Differentiating the possible "wishlist" carousel row from all others by using the "View all" link that exists in all other rows.
        var viewAllLink = $(this).find('> div > div > div > div:nth-child(1) > div.bc-col.bc-spacing-top-micro.bc-text-right.bc-col-last.bc-col-3 > a');
        if ( viewAllLink.length > 0 ) {
          categoryName = $(this).find('> div > div > div > div:nth-child(1) > div.bc-col > [id^="adbl-carousel-heading-"]').text().trimAll();
          categoryURL = viewAllLink.attr('href');
        }
      }
      // SALE FRONT PAGE STYLE: horizontal sub menu with all categories side by side
      else if ( saleSubmenuExists ) {
        categoryName = $(this).text().trimAll();
        categoryURL = $(this).attr('href');
      }
      
      if ( categoryURL && categoryName ) {
        
        var url = new Url(window.location.origin + categoryURL);
        url.query.pageSize = '50';
        url.query.page = '1';
        
        storage.data.category.push({
          url: url.toString(),
          name: categoryName
        });
        
        storage.data.books[categoryName] = [];
        
      }
      
    });
    
    if ( storage.data.category.length > 0 ) {
      // A recursive function that gets called over and over again until every single required page has been processed
      loadPage();
    }
    else {
      console.log("Error: could not find category urls. Make sure you are in the front page of the sale.")
    }
    
  }
  
  function loadPage( subPages ) {
    
    if ( storage.data.category.length > 0 ) {
      var url;
      if ( subPages ) {
        url = new Url( storage.data.category[0].url );
        url.query.page = subPages[0];
        url.toString();
      }
      else {
        url = storage.data.category[0].url;
      }
      
      var iframe = $('<iframe sandbox="allow-same-origin" style="display: none;" src="'+ url +'"></iframe>');
      iframe.prependTo('body');
      iframe.on("load", function() {
        
        var audible = iframe.contents().find('body');
        iframe[0].contentDocument.defaultView.stop();
        
        if ( !subPages ) {
          // var paginationExists = audible.find('[data-bc-a11y-dynamic-skiplink-display-value="Pagination"]').length;
          var lastPageNumberEl = audible.find('#pagination-a11y-skiplink-target .pageNumberElement[data-value]:last');
          subPages = [];
          if ( lastPageNumberEl.length > 0 ) {
            var lastPageNumber = parseFloat( lastPageNumberEl.data('value') );
            subPages = _.range(1, lastPageNumber+1);
            subPages.shift();
          }
        }
        else {
          subPages.shift();
        }
        
        console.log( '\n\nCATEGORY: ' + storage.data.category[0].name + '\n\n' );
        
        // Get data
        var contentWrapper = audible.find('#product-list-a11y-skiplink-target');
        var titles = contentWrapper.find('.productListItem');
        titles.each(fetchBookDetails);
        
        // Move to next page
        if ( subPages.length > 0 ) {
          
          loadPage( subPages.length > 0 ? subPages : null );
          
        }
        // Move to next category
        else if ( storage.data.category.length > 0 ) {
          
          storage.data.category.shift();
          loadPage();
          
        }
        iframe.remove();
        
      });
      
    }
    // End of line
    else {
      
      delete storage.data.category;
      storage.set( storage.name, storage.data );
      processOutput( storage.data.books );
      
    }
    
    
  }
  
  // Goes through ever row of titles in the current page and fetches relevant data
  function fetchBookDetails() {
    
    var row = $(this);
    
    // Cover and sample
    var leftColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-8 > div > div.bc-col-responsive.bc-col-5 > div > div > div.bc-col-responsive.bc-spacing-top-none.bc-col-9 > div > div.bc-col-responsive.bc-col-4 > div');
    if ( leftColumn.length < 1 ) leftColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-9 > div > div.bc-col-responsive.bc-col-4 > div');
		if ( leftColumn.length < 1 ) leftColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-8 > div > div.bc-col-responsive.bc-col-5 > div');
    // Title, authors, narrators, series, rating
    var middleColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-8 > div > div.bc-col-responsive.bc-col-6 > div');
    if (middleColumn.length < 1) middleColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-9 > div > div.bc-col-responsive.bc-col-7 > div');
    // Sale counter, add to sale selection, more options
    var rightColumn  = row.find('#adbl-buy-box-area');
    
    var book = {};
    
    var cover  = leftColumn.find('[data-bc-hires]');
    book.cover = cover.attr('src');
    
    middleColumn.find('> div > span > ul > div').remove();
    var title  = middleColumn.find('> div > span > ul > li:nth-child(1) > h3 > a');
    book.title = title.length > 0 ? title.text().trimAll() : null;
    
    var authors  = middleColumn.find('li.bc-list-item.authorLabel a');
    book.authors = authors.length > 0 ? makeLinkArray( authors ) : null;
    
    var narrators  = middleColumn.find('li.bc-list-item.narratorLabel a');
    book.narrators = narrators.length > 0 ? makeLinkArray( narrators ) : null;
    
    var series  = middleColumn.find('li.bc-list-item.seriesLabel a');
    
    if ( series.length > 0 ) {
      
      var seriesString = middleColumn.find('li.bc-list-item.seriesLabel').html().trimAll();
      seriesString = seriesString.substring(seriesString.indexOf(':')+1).trim();
      // string = string.match(/<a(.*?)<\/a>,(*,)/g);
      seriesString = $.parseHTML(seriesString);
      var series = [];
      $.each( seriesString, function( index, object ) {
        
        var string = object.textContent.trim().replace(/^\,/,'').trim().replace(/\,$/, "");
        
        var titleRow = (index+1) % 2;
        var numberRow = !titleRow;
        
        if ( titleRow ) {
          series.push({
            name: string,
            page: object.href
          });
        }
        else if ( numberRow ) {
          if ( string.match(/\d/) ) {
            // Trims text from the front ("Book ") and splits numbers separated by commas
            var numbers = string.replace(/^[^0-9]*/g, '').trim().split(',');
            // Numbers are added to the previous item
            var lastItem = series[ series.length-1 ];
            lastItem.bookNumbers  = jQuery.map( numbers, function( n, i ) {
              return parseFloat( n );
            });
          }
        }

      });
      
      book.series = series.length > 0 ? series : null;
      
    }
    else { book.series = null; }
    
    var length = middleColumn.find('li.bc-list-item.runtimeLabel span');
    book.length = length.length > 0 ? length.text().split(':')[1].trimAll() : null;
    
    var releaseDate  = middleColumn.find('li.bc-list-item.releaseDateLabel span');
    book.releaseDate = releaseDate.length > 0 ? releaseDate.text().split(':')[1].trimAll() : null;
    
    var language  = middleColumn.find('li.bc-list-item.languageLabel span');
    book.language = language.length > 0 ? language.text().split(':')[1].trimAll() : null;
    
    var rating  = middleColumn.find('> div > span > ul > li.bc-list-item.ratingsLabel > span.bc-text.bc-pub-offscreen');
    book.rating = rating.length > 0 ? rating.text().trimAll().match(/([0-9]\.[0-9]|[0-9])+/)[0] : null;
    
    var ratings  = middleColumn.find('> div > span > ul > li.bc-list-item.ratingsLabel > span.bc-text.bc-size-small.bc-color-secondary');
    book.ratings = ratings.length > 0 ? ratings.text().trimAll().match(/([0-9]|\,)+/g)[0] : null;
    
    var sample = leftColumn.find('[data-mp3]');
    book.sample = sample.length > 0 ? sample.data('mp3') : null;
    
    book.page  = title.length > 0 ? window.location.origin + title.attr('href').split('?')[0] + '?ipRedirectOverride=true&overrideBaseCountry=true' : null;
    
    console.log( '['+ storage.data.books[ storage.data.category[0].name ].length +']: ' + book.title );
    
    storage.data.books[ storage.data.category[0].name ].push( book );
    book = null;
    
  }
  
  function makeLinkArray( links ) {
    var array = [];
    links.each(function() {
      var url = window.location.origin + $(this).attr('href');
      url = new Url( url );
      var searchNarrator;
      if ( url.query.searchNarrator ) searchNarrator = url.query.searchNarrator;
      url.clearQuery();
      if ( searchNarrator ) url.query.searchNarrator = searchNarrator;
      
      url.query.ipRedirectOverride = true;
      url.query.overrideBaseCountry = true;
      
      array.push({
        name: $(this).text().trimAll(),
        page: url.toString()
      });
    });
    return array;
  }
  
  function slugify(text) {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"

    const newText = text.split('').map(
      (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)))

    return newText
      .toString()                     // Cast to string
      .toLowerCase()                  // Convert the string to lowercase letters
      .trim()                         // Remove whitespace from both sides of a string
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-and-')           // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }
  
  function linkArrayToMarkdown( array, series ) {
    
    var md = [];
    $.each( array, function( key, object ) {
      var bookNumbers = series && object.bookNumbers ? ' book ' + object.bookNumbers.join(',') : '';
      md.push( '[' + object.name + ']('+ object.page +')' + bookNumbers );
    });
    return md.join(', ');
    
  }
  function linkArrayToHTML( array, series ) {
    
    var html = [];
    $.each( array, function( key, object ) {
      var bookNumbers = series && object.bookNumbers ? ' book ' + object.bookNumbers.join(',') : '';
      html.push( '<a target="_blank" href="' + object.page + '">'+ object.name +'</a>' + bookNumbers );
    });
    return html.join(', ');
    
  }
  
  function processOutput( uniqueBoys ) {
    
    var markdown = '';
    var html = '';
    var plaintext = '';
    
    // Simple menu for html
    var navItems = (function() {
      var items = [];
      $.each( storage.data.books, function( categoryName ) {
        items.push(
          '<li class="category-link">' +
            '<a href="#'+ slugify( categoryName ) +'">'+ categoryName +'</a>' +
          '</li>'
        );
      });
      return items.join('');
    }());
    html += '<ul class="top-nav">'+ navItems +'</ul>';
    
    $.each( storage.data.books, function( categoryName, category ) {
      output( categoryName, category );
    });
    
    function output( categoryName, category, unique ) {
      // Category heading
      var newAdditions = (unique ? ' (New additions)' : '');
      markdown += '\n\n### ' + categoryName + newAdditions + '\n\n';
      html += '\n\n<h2 id="'+ slugify( categoryName ) + (unique ? '-unique' : '') +'" class="category-title">'+ categoryName + newAdditions + '</h2> \n';
      plaintext += '\n\n' + categoryName + newAdditions + '\n\n';
      
      // Books
      $.each( category, function( index, book ) {
        
        // MARKDOWN
        /*   title     */  markdown += (index+1) + '. ['+ book.title +']('+ book.page +') \n' ;
        if ( !slimMarkdown ) {
          /* authors   */  markdown += '    - **Authors:** ' + linkArrayToMarkdown( book.authors ) + '\n';
          /* narrators */  markdown += '    - **Narrators:** ' + linkArrayToMarkdown( book.narrators ) + '\n';
          /* series    */  if (book.series) markdown += '    - **Series:** ' + linkArrayToMarkdown(book.series, true) + '\n';
          /* sample    */  if (book.sample) markdown += '    - **Sample:** [play sample](' + book.sample + ') \n';
          /* length    */  markdown += '    - **Length:** ' + book.length + '\n' ;
          /* released  */  markdown += '    - **Released:** ' + book.releaseDate + '\n' ;
          /* language  */  if ( book.language ) markdown += '    - **Language:** ' + book.language + '\n';
        }
        /* rating    */  if ( book.rating ) markdown += '    - **Rating:** ' + book.rating + ' ('+ book.ratings +') \n';
        
        // HTML
        html += '\n\n<div class="book"> \n' +
          '<div class="cover"><a target="_blank" href="' + book.page +'"><img src="' + book.cover +'" alt=""/></a></div> \n' +
          '<div class="book-info"> \n'+
            '<a class="title" target="_blank" href="'+ book.page +'">'+ book.title +'</a> \n' +
            '<div class="authors"><strong>Authors:</strong> ' + linkArrayToHTML( book.authors ) + '</div>'+
            '<div class="narrators"><strong>Narrators:</strong> ' + linkArrayToHTML( book.narrators ) + '</div>'+
            (book.series ? '<div class="series"><strong>Series:</strong> ' + linkArrayToHTML( book.series, true ) + '</div>' : '') +
            (book.sample ? '<div class="sample"><strong>Sample:</strong> <a target="_blank" href="'+ book.sample +'">play sample</a></div>' : '') +
            '<div class="length"><strong>Length:</strong> '+ book.length +'</div> \n' +
            '<div class="release"><strong>Released:</strong> '+ book.releaseDate +'</div> \n' +
            (book.language ? '<div class="language"><strong>Language:</strong> '+ book.language +'</div> \n' : '') +
            (book.rating ? '<div class="rating"><strong>Rating:</strong> '+ book.rating + '<span class="ratings"> ('+ book.ratings +')</span>' +'</div> \n' : '') +
          '</div> \n' +
        '</div> \n';
        
        // PLAINTEXT
        plaintext += book.title + ' → '+ book.page +' \n\n';
        
      });
    }
    
    // HTML styling
    html = '<style>' +
      '.top-nav, .top-nav li {' +
        'margin: 0;' +
        'padding: 0;' +
      '}' +
      '.top-nav li {' +
        'margin-bottom: 8px;' +
      '}' +
      '.top-nav,' +
      '.category-title {' +
        "font-family: 'Helvetica Neue', sans-serif;" +
        'max-width: 600px;' +
        'padding: 0 10px;' +
      '}' +
      '.top-nav,' +
      '.category-title, ' +
      '.book {' +
        "font-family: 'Helvetica Neue', sans-serif;" +
        'max-width: 600px;' +
        'margin: 0 auto;' +
      '}' +
      '.top-nav {' +
        'margin-top: 20px;' +
      '}' +
      '.category-title {' +
        'margin-top: 80px;' +
        'margin-bottom: 13px;' +
      '}' +
      '.category-title:first-child { margin-top: 0; }' +
      '.book {' +
        'border: 1px solid rgba(0,0,0, .08);' +
        'background: rgba(0,0,0, .03);' +
        'display: flex;' +
        'flex-direction: row;' +
        'padding: 20px;' +
        'margin-bottom: 10px;' +
      '}' +
      '.book:first-child {' +
        'margin-top: 10px;' +
      '}' +
      '.book .cover {' +
        'justify-self: center;' +
        'align-self: start;' +
        'padding-right: 20px;' +
      '}' +
      '.book .cover img {' +
        'width: 130px;' +
        'height: auto;' +
      '}' +
      '.book .h3 {' +
        'margin: 0;' +
      '}' +
      '.book .title {' +
        'margin: 0;' +
      '}' +
    '</style> \n\n' + html;
    
    $('body').html('');
    
    var textareaCSS = {
      width: '100%',
      height: 200,
      marginBottom: 30
    };
    
    $('<style> html, body, .scraper-row { height: 100% !important; margin-bottom: 0 !important; } .scraper-row, .scraper-col-wrapper { display: flex; flex-direction: row; align-content: stretch; align-items: stretch; margin: 0 !important; height: 100%; flex-grow: 1; width: 100%; } .scraper-col-wrapper { flex-direction: column; margin-left: 20px !important; text-align: center; padding-top: 20px; } .scraper-col-wrapper:first-child { margin-left: 0px !important; } textarea { margin-bottom: 0px !important; height: unset !important; flex-grow: 1; height: 100%; }</style>').appendTo('body');
    
    var row = $('<div class="scraper-row">').appendTo('body');
    
    var markdownWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>Markdown:</strong>').appendTo( markdownWrapper );
    $('<textarea/>', { text: markdown.trim(), css: textareaCSS }).appendTo( markdownWrapper );
    
    var htmlWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>HTML:</strong>').appendTo( htmlWrapper );
    $('<textarea/>', { text: html.trim(), css: textareaCSS }).appendTo( htmlWrapper );
    
    var plaintextWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>Plain Text:</strong>').appendTo( plaintextWrapper );
    $('<textarea/>', { text: plaintext.trim(), css: textareaCSS }).appendTo( plaintextWrapper );
    
    var jsonWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
    $('<strong>JSON:</strong>').appendTo( jsonWrapper );
    $('<textarea/>', { text: JSON.stringify(storage.data.books), css: textareaCSS }).appendTo( jsonWrapper );
    
    
    get('https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js', function() {
        
      var linkify = function( string, url ) {
        return '=HYPERLINK("'+ url +'";"'+ string.replace(/\"/g,'""') +'")';
      };
      var imagefy = function( url ) {
        return '=IMAGE("'+ url +'")';
      };
      var stringify = function( prop ) {
        return _.map(prop, function( o ) {
          if ( !o ) {
            return '';
          }
          else {
            var bookNumbers = o.bookNumbers ? (' (book ' + o.bookNumbers + ')') : '';
            return o.name + bookNumbers;
          }
        }).join(', ');
      };
      
      var categoryKeys = _.keysIn( storage.data.books );
      var bookKeys = null;
      var csvPrepBooks = [];
      _.each( categoryKeys, function( key, index ) {
        
        if ( index === 0 ) {
          bookKeys = _.keysIn( storage.data.books[ key ][0] );
        }
        
        var emptyRow = { category: '' };
        var categoryObj = { category: key };
        
        _.each( bookKeys, function( key ) {
          emptyRow[ key ] = '';
          categoryObj[ key ] = '';
        });
        
        csvPrepBooks.push( emptyRow );
        csvPrepBooks.push( categoryObj );
        
        var catBooks = storage.data.books[ key ];
        catBooks = _.map( catBooks, function( o ) {
          o.category = key;
          return o;
        });
        
        csvPrepBooks = _.concat( csvPrepBooks, catBooks );
        
      });
      
      var csvBooks = _.map(csvPrepBooks, function( o ) {
        
        if ( o.title ) {
          if ( !o.category ) o.category  = '';
          o.title     = linkify( o.title, o.page );
          o.cover     = imagefy( o.cover );
          o.authors   = stringify( o.authors );
          o.narrators = stringify( o.narrators );
          o.series    = stringify( o.series );
          
        }
        
        return o;
        
      });
      
      csvPrepBooks = null;
      
      var csv = Papa.unparse(csvBooks, {
        quotes: true, 
	      quoteChar: '"', 
      });
      csvBooks = null;
      
      var csvWrapper = $('<div class="scraper-col-wrapper">').appendTo( row );
      $('<strong>CSV (<small>google sheets</small> ):</strong>').appendTo( csvWrapper );
      $('<textarea/>', { text: csv, css: textareaCSS }).appendTo( csvWrapper );
      
      
      get("https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js", function() {
        
        var strongBoys = $('.scraper-col-wrapper > strong');
        
        strongBoys.each(function(i) {
          
          var strongBoy = $(this);
          
          var dl = $('<button>', {
            text: 'download'
          }).insertAfter( strongBoy );
          
          var dataString = dl.next('textarea').val();
          
          dl.on("click", function() {
            
            var headingText = _.camelCase( strongBoy.text() );
            var mimeType = '';
            var extension = '';
            switch ( headingText ) {
              case "markdown":
                mimeType = 'text/markdown;charset=utf-8';
                extension = '.md';
                break;
              case "html":
                mimeType = 'text/html;charset=utf-8';
                extension = '.html';
                dataString = 
                  '<!DOCTYPE html> \n' +
                  '<html lang="en"> \n' +
                  '<head> \n' +
                    '<meta charset="UTF-8"> \n' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n' +
                    '<title>Audible Sale</title> \n' +
                  '</head> \n' +
                  '<body> \n\n' +
                    dataString + '\n\n' + 
                  '</body> \n' +
                  '</html>';
                break;
              case "plainText":
                mimeType = 'text/plain;charset=utf-8';
                extension = '.txt';
                break;
              case "json":
                mimeType = 'application/json;charset=utf-8';
                extension = '.json';
                dataString = JSON.stringify( storage.data.books, null, 2 );
                break;
              case "csv":
              case "csvGoogleSheets":
                mimeType = 'text/csv;charset=utf-8';
                extension = '.csv';
                break;
            }
            
            var blob = new Blob([dataString], {type: mimeType});
            saveAs(blob, "Audible Sale" + extension);
            
          });
          
          
          
        });
        
      });
      
    });
    
  }
  
}());
