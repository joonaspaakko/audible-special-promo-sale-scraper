
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
		if ( storage.data ) {
			storage.oldData = _.cloneDeep( storage.data );
		}
		startFromTheTop();
	});

	function startFromTheTop() {
		
		storage.data = {
			category: [],
			books: {},
		};

		$('[id^="carousel-PRODUCT"]').each(function() {
			// Differentiating the possible "wishlist" carousel row from all others by using the "View all" link that exists in all other rows.
			var viewAllLink = $(this).find('> div > div > div > div:nth-child(1) > div.bc-col.bc-spacing-top-micro.bc-text-right.bc-col-last.bc-col-3 > a');
			if ( viewAllLink.length > 0 ) {
				
				var category = $(this).find('> div > div > div > div:nth-child(1) > div.bc-col > [id^="adbl-carousel-heading-"]').text().trimAll();
				var url = new Url( window.location.origin + viewAllLink.attr('href') );
				url.query.pageSize = '20';
				url.query.page = '1';
				
				storage.data.category.push({
					url: url.toString(),
					name: category
				});
				
				storage.data.books[ category ] = [];
			}
		});
		
		loadPage();
		
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
					var numberEl = $('#pagination-a11y-skiplink-target .pageNumberElement');
					subPages = [];
					if ( numberEl.length > 0 ) {
						numberEl.each(function( index ) {
							var pageNumber = $(this).data('value');
							subPages.push( pageNumber );
						});
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
					
					console.log( 'subPages' );
					console.log( subPages );
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
			
			var uniqueBoys = {};

			if ( storage.oldData ) {
				$.each( storage.data.books, function( categoryName, category ) {
					uniqueBoys[ categoryName ] = _.difference( category, storage.oldData.books[ categoryName ]);
				});
			}
			
			processOutput( uniqueBoys );
			
		}
		
		
	}
	
	// Goes through ever row of titles in the current page and fetches relevant data
	function fetchBookDetails() {
		
		var row = $(this);
		
		// Cover and sample
		var leftColumn   = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-8 > div > div.bc-col-responsive.bc-col-5 > div');
		// Title, authors, narrators, series, rating
		var middleColumn = row.find('> div > div.bc-col-responsive.bc-spacing-top-none.bc-col-8 > div > div.bc-col-responsive.bc-col-6 > div');
		// Sale counter, add to sale selection, more options
		var rightColumn  = row.find('> div > div.bc-col-responsive.bc-col-4');
		
		var book = {};
		
		var cover  = leftColumn.find('> div:nth-child(1) > div > div.bc-trigger.bc-pub-block.bc-trigger-popover > a > img');
		book.cover = cover.attr('src');
		
		var sample = $('[id^="#sample-player-"] > button');
		book.sample = sample.length > 0 ? sample.data('mp3') : null;
		
		middleColumn.find('> div > span > ul > div').remove();
		
		var title  = middleColumn.find('> div > span > ul > li:nth-child(1) > h3 > a');
		book.title = title.length > 0 ? title.text().trimAll() : null;
		book.page  = title.length > 0 ? window.location.origin + title.attr('href').split('?')[0] + '?ipRedirectOverride=true&overrideBaseCountry=true' : null;
		
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
		book.length = length.length > 0 ? length.text().trimAll() : null;
		
		var releaseDate  = middleColumn.find('li.bc-list-item.releaseDateLabel span');
		book.releaseDate = releaseDate.length > 0 ? releaseDate.text().split(':')[1].trimAll() : null;
		
		var language  = middleColumn.find('li.bc-list-item.languageLabel span');
		book.language = language.length > 0 ? language.text().split(':')[1].trimAll() : null;
		
		var rating  = middleColumn.find('> div > span > ul > li.bc-list-item.ratingsLabel > span.bc-text.bc-pub-offscreen');
		book.rating = rating.length > 0 ? rating.text().trimAll().match(/([0-9]\.[0-9]|[0-9])+/)[0] : null;
		
		var ratings  = middleColumn.find('> div > span > ul > li.bc-list-item.ratingsLabel > span.bc-text.bc-size-small.bc-color-secondary');
		book.ratings = ratings.length > 0 ? ratings.text().trimAll().match(/([0-9]|\,)+/g)[0] : null;
		
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
			html.push( '<a href="' + object.page + '">'+ object.name +'</a>' + bookNumbers );
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
		
		if ( _.isEmpty( uniqueBoys) ) {
			$.each( uniqueBoys, function( categoryName, category ) {
				output( categoryName, category, unique );
			});
		}
		
		$.each( storage.data.books, function( categoryName, category ) {
			output( categoryName, category );
		});
		
		function output( categoryName, category, unique ) {
			// Category heading
			markdown += '\n\n### ' + categoryName + '\n';
			html += '\n\n<h2 id="'+ slugify( categoryName ) + (unique ? '-unique' : '') +'" class="category-title">'+ categoryName + (unique ? '(New additions)' : '') +'</h2> \n';
			plaintext += '\n\n' + categoryName + '\n\n';
			
			// Books
			$.each( category, function( index, book ) {
			
				// MARKDOWN
				/*   title     */  markdown += (index+1) + '. ['+ book.title +']('+ book.page +') \n' ;
				if ( !slimMarkdown ) {
					/* authors   */  markdown += '    - **Authors:** ' + linkArrayToMarkdown( book.authors ) + '\n';
					/* narrators */  markdown += '    - **Narrators:** ' + linkArrayToMarkdown( book.narrators ) + '\n';
					/* series    */  if ( book.series ) markdown += '    - **Series:** ' + linkArrayToMarkdown( book.series, true ) + '\n';
					/* length    */  markdown += '    - **Length:** ' + book.length + '\n' ;
					/* released  */  markdown += '    - **Released:** ' + book.releaseDate + '\n' ;
					/* language  */  if ( book.language ) markdown += '    - **Language:** ' + book.language + '\n';
				}
				/* rating    */  if ( book.rating ) markdown += '    - **Rating:** ' + book.rating + ' ('+ book.ratings +') \n';
				
				// if ( slimMarkdown) {
				// 	markdown += (index+1) + '. ['+ book.title +']('+ book.page +')' + (book.rating ? ' - **Rating:** ' + book.rating + ' ('+ book.ratings +')\n' : '\n' ) ;
				// }
				
				// HTML
				html += '\n\n<div class="book"> \n' +
					'<img class="cover" src="'+ book.cover +'" alt=""/> \n' +
					'<div class="book-info"> \n'+
						'<a class="title" href="'+ book.page +'">'+ book.title +'</a> \n' +
						'<div class="authors"><strong>Authors:</strong> ' + linkArrayToHTML( book.authors ) + '</div>'+
						'<div class="narrators"><strong>Narrators:</strong> ' + linkArrayToHTML( book.narrators ) + '</div>'+
						(book.series ? '<div class="series"><strong>Series:</strong> ' + linkArrayToHTML( book.series, true ) + '</div>' : '') +
						'<div class="length"><strong>Length:</strong> '+ book.length +'</div> \n' +
						'<div class="release"><strong>Released:</strong> '+ book.releaseDate +'</div> \n' +
						(book.language ? '<div class="language"><strong>Language:</strong> '+ book.language +'</div> \n' : '') +
						(book.rating ? '<div class="rating"><strong>Rating:</strong> '+ book.rating + '<span class="ratings">'+ book.ratings +'</span>' +'</div> \n' : '') +
					'</div> \n' +
				'</div> \n';
				
				// PLAINTEXT
				plaintext += book.title + ' → '+ book.page +' \n\n';
				
				
			});
		}
		
		// HTML styling
		html += '\n\n<style>' +
			'.top-nav, .top-nav li {' +
			  'margin: 0;' +
			  'padding: 0;' +
			'}' +
			'.top-nav,' +
			'.category-title, ' +
			'.book {' +
			  "font-family: 'Helvetica Neue', sans-serif;" +
			  'max-width: 600px;' +
			  'margin: 0 auto;' +
			'}' +
			'.category-title {' +
			  'margin-top: 80px;' +
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
			'.book img.cover {' +
			  'width: 150px;' +
			  'height: auto;' +
			  'justify-self: center;' +
			  'align-self: start;' +
			  'padding-right: 20px;' +
			'}' +
			'.book .h3 {' +
			  'margin: 0;' +
			'}' +
			'.book .title {' +
			  'margin: 0;' +
			'}' +
		'</style>';
		
		$('body').html('');
		
		var textareaCSS = {
	    width: '100%',
	    height: 200,
	    marginBottom: 30
		};
		$('<strong>Markdown:</strong>').appendTo('body');
		$('<textarea/>', { text: markdown, css: textareaCSS }).appendTo('body');
		$('<br>').appendTo('body');
		$('<strong>HTML:</strong>').appendTo('body');
		$('<textarea/>', { text: html, css: textareaCSS }).appendTo('body');
		$('<br>').appendTo('body');
		$('<strong>Plain Text:</strong>').appendTo('body');
		$('<textarea/>', { text: plaintext, css: textareaCSS }).appendTo('body');
		
	}
	
}());
