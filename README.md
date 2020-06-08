# Audible Special Promo Sale Scraper

Generates [markdown](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/phone-reddit-post-example.png), [html](https://codepen.io/joonaspaakko/full/KKVdWwV) and [plain text](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/plaintext-output-example.md) list of all the sale items.

## A word of warning

Use at your own risk. I have good intentions, but you shouldn't go copy pasting scripts into your browser's console all willy nilly.

Just as a heads up, Firefox will give you this warning message when you try to paste things into the console. You should probably heed the warning.

> Firefox warning message → Scam Warning: Take care when pasting things you don’t understand. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below (no need to press enter) to allow pasting.

## Usage

0. Go to the sale page.
	- As an example, here's the current _(June 2020)_ US sale page: [https://www.audible.com/special-promo/2for1](https://www.audible.com/special-promo/2for1).
	- The script won't work if you navigate to one of the sub pages of the sale. It has to be the first page of the sale.
1. Copy the script into your clipboard from here `(Ctrl+C)`: [Audible Special Promo Sale Scraper.js](https://raw.githubusercontent.com/joonaspaakko/audible-special-promo-sale-scraper/master/Audible%20Special%20Promo%20Sale%20Scraper.js)
2. Open your browsers developer tools console. The easy way is to right click anywhere on a website, choose `Inspect element` from the context menu and then click the `Console` tab.
3. Paste `(Ctrl+V)` the script into the console and press enter.

You should pretty must right away start seeing stuff happening in the console. When the script is done, it will replace the contents of the page with 3 text boxes with the different outputs. You can refresh the page to load the normal Audible sale page again.

If you're posting on reddit, you will probably want the Markdown output. Just make sure to click the `Markdown editor` button in the top right of the post editor.

Here's a video where I paste the script into the console and let it do it's thing: https://youtu.be/5ioVQhsMbNY - It's not an incredibly step by step video, but if you're not sure where to paste the code, this should help to confirm the right place and give you an idea of what to expect from the script.

## Examples

**Markdown**

An example of what the markdown output looks like in [a reddit post (mobile)](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/phone-reddit-post-example.png).

> There's also a variable at the top called `slimMarkdown`. Making it `false` will give you a beefier output, but there's a good chance it won't fit within the character limit of a reddit post at least. [Beefy markdown example](full-markdown-output-example.md)

**HTML**

[example in Codepen](https://codepen.io/joonaspaakko/full/KKVdWwV)

**Plain text

Plain text is similar to the slimmed down markdown output, though even a little big slimmer. It's just the title and the url. [Example file](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/plaintext-output-example.md).

## Browser support

Tested in Firefox and Chrome. Should work in other modern browsers too: Safari, Edge

## Audible region support?

The script was written specifically for the US 2for1 sale and as such I'm not even certain if it will work in any other sale, let alone a similar sale on a different region. There is a possibility it might.
