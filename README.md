# Audible Special Promo Sale Scraper

Generates a list of all sale items in: `markdown` that looks [like this on a reddit post](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/phone-reddit-post-example.png), `html` that looks [like this](https://codepen.io/joonaspaakko/full/KKVdWwV) when rendered, and `plain text` that looks [like this](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/plaintext-output-example.md)

## A word of warning

Use at your own risk. I have good intentions, but you shouldn't go copy pasting scripts into your browser's console all willy nilly. Just as a heads up, Firefox will give you this warning message when you try to paste things into the console. You should probably heed the warning:

> Firefox warning message in the console → Scam Warning: Take care when pasting things you don’t understand. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below (no need to press enter) to allow pasting.

## Usage

> You don't need to know how to code or read any code to use this script. It would be preferrable, as stated above, but the only thing you need to know is how to copy & paste.

1. **Copy the script** `(Ctrl+C)` into your clipboard from here: [Audible Special Promo Sale Scraper.js](https://raw.githubusercontent.com/joonaspaakko/audible-special-promo-sale-scraper/master/Audible%20Special%20Promo%20Sale%20Scraper.js)
2. **Go to the sale page.**
	- As an example, here's the current _(June 2020)_ US sale page: [https://www.audible.com/special-promo/2for1](https://www.audible.com/special-promo/2for1).
	- The script won't work if you navigate to one of the sub pages of the sale. It has to be the first page of the sale.
3. **Open your browser's developer tools console.** The easy way is to right click anywhere on a website, choose `Inspect element` from the context menu and then click the `Console` tab.
4. **Paste the script** `(Ctrl+V)` into the console and press enter. This [video](https://youtu.be/5ioVQhsMbNY) shows where the code should be pasted.

The console will just about immediately log each book it finds in the console so you got some idea where it's at. When the script is done scraping, it will replace the contents of the page with 3 text boxes with the different outputs. You can refresh the page to load the normal Audible sale page again.

___

### What else?

If you're posting on Reddit, you will probably want the Markdown output. Just make sure to click the `Markdown editor` button in the top right of the post editor before pasting the code in. If you want to preview the markdown code, you should check out this [online Markdown editor](https://pandao.github.io/editor.md/en.html). 

**Note:** you can't switch back to the default fancypants editor on reddit or the markdown will get mangled. However, if rich text is more your thing, you can get around that with the formatting staying fairly intact by copying the text from the online markdown editor's preview and paste that into Reddit instead.

## Special features - Isolating new additions ( v.1.2. )

If you run the script at least once before and once after the sale items change, new additions are detected and they are added to the front of the list. **Check the example below.** But you can only do it once. When you run the script after a change, that's when the comparison happens and the list is overwritten, meaning any following attempts to run the script will just output a clean list, until the sale changes again.

If you failed to get the new additions for whatever reason, you can still use an online comparison tools [like this one](http://barc.wi.mit.edu/cgi-bin/barc/tools/compare.cgi). With tools like this you can figure out if anything changed between the two outputs. This particular tool will show unique lines in each list input in the center.

> Important:
> - You need to run the script in the same browser for this to work.
> - If you clear the browser cache, the old list will likely get wiped.
> - If you run the script on a different sale, or the output is just wrong, you may have to run the script again to clear the old list from the memory.

```markdown
### Mysteries & Thrillers (New additions)
1. [Book 2](#)
  - **Rating:** 4.5 (999)

### Mysteries & Thrillers

1. [Book 1](#)
  - **Rating:** 4.5 (999)
2. [Book 2](#)
  - **Rating:** 4.5 (999)
3. [Book 3](#)
  - **Rating:** 4.5 (999)
```

## Output Examples

### Markdown

An example of what the markdown output looks like in [a reddit post (mobile)](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/phone-reddit-post-example.png).

> There's also a variable at the top called `slimMarkdown`. Making it `false` will give you a beefier output, but there's a good chance it won't fit within the character limit of a Reddit post at least. [Beefy markdown example](full-markdown-output-example.md)

### HTML

[Example in Codepen](https://codepen.io/joonaspaakko/full/KKVdWwV). Codepen is free, but you do need an account. The [full page view](https://blog.codepen.io/documentation/full-page-view/) is probably how you want to send the link to anyone.

### Plain text

Plain text is similar to the slimmed down markdown output, though even a little big slimmer. It's just the title and the url. [Example file](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/plaintext-output-example.md).

## Browser support

Tested in Firefox and Chrome. Should work in other modern browsers too: Safari, Edge

## Regional support?

The script was written specifically for the US 2for1 sale and as such I'm not even certain if it will work in any other sale, let alone a similar sale on a different region. There is a possibility it might.
