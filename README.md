
<!-- omit in toc -->
# Audible Special Promo Sale Scraper

Generates a list of all sale items in: `markdown` that looks [like this on a reddit post](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/phone-reddit-post-example.png), `html` that looks [like this](https://codepen.io/joonaspaakko/full/KKVdWwV) when rendered, and `plain text` that looks [like this](https://github.com/joonaspaakko/audible-special-promo-sale-scraper/blob/master/plaintext-output-example.md). 

Now also has a `csv` output that you can import to Google sheets: Current sale [Fall Harvest Sale (audible.com) 17/09/2020](https://docs.google.com/spreadsheets/d/1BQ52GkvjvJCcR53EGLtvdiaaLEd0ni-wgKHiKAnFqQE/edit?usp=sharing).

____

- [A word of warning](#a-word-of-warning)
- [Usage](#usage)
- [Browser support](#browser-support)
- [Regional support?](#regional-support)
- [Format info](#format-info)
  - [Markdown](#markdown)
  - [HTML](#html)
  - [Plain Text](#plain-text)
  - [JSON](#json)
  - [CSV](#csv)
- [Output Example](#output-example)

____


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


## Browser support

Tested in Firefox and Chrome. Should work in other modern browsers too: Safari, Edge

## Regional support?

The script was written specifically for the US 2for1 sale and as such I'm not even certain if it will work in any other sale, let alone a similar sale on a different region. There is a possibility it might.


## Format info 

### Markdown
There's a variable called `slimMarkdown` at the very top of the script. Change this to  `var slimMarkdown = true;` and you'll get the title wrapped in a link to the Audible store page and rating below that. If you want anything slimmer, you're going to have to edit the script. There should be only 2 occurences of `slimMarkdown` so it should be easy to find where to edit it.

You can use online Markdown editors to preview or convert it to another format. At the very least you should be able copy the text from the preview and paste it to your email client and retain the styling.

**Online Markdown editors:**

- [Dillinger](https://dillinger.io/) - Has built in export for `html` and `PDF`
- [Editor.md](https://pandao.github.io/editor.md/en.html)

> Desktop and some mobile markdown applications may have similar or more extensive export options

### HTML
When you download the `HTML` it gets a basic html wrapper around making it so you could just upload it as is to a website and share the link. For other use cases, you'll probably want to copy it from the textarea. 

**There are also 3rd party services where you can put the `HTML` and share a link:**

- [codepen](http://codepen.io/) - Requires an account and I also couldn't save my large wishlist unfortunately
- [jsfiddle](http://jsfiddle.net) 
- [Github pages](https://pages.github.com/) - A pretty good way to host a simple site. It's not hard to upload your website or single html file in this case, but it is quite the long process, and may be hard to understand if you're not familiar with how github works.

Here's my wishlist [in jsfiddle](https://jsfiddle.net/m1nvxjpw/show/).

### Plain Text
This is forcefully slimmed down to just the `title → link to audible` because plain text is very plain...

### JSON
This is the advanced format of the bunch, which all of the outputs as the base. Downloaded file is indented (poorly) and the JSON in the textarea is in single line.

### CSV
The CSV format is pretty typical, but it does use a couple formulas that I have only tested to be working in Google Sheets. 

Here's [my whole wishlist in goole sheets](https://docs.google.com/spreadsheets/d/1ZyLL6ThekMHN7MMJ4uoMNgoM7VxmKolxP5ZvMvgBzVs/edit?usp=sharing). 

**I have edited it a little after import:**

1. I converted all cells to text to get rid of some wonky weird text alignment (a little more about that below under "how to import csv to Google Sheets")
    1. Click on the top left corner to select all cells
    2. Choose text formatting from the `Format` menu (It's somewhere in there)
2. Made all rows taller to make the cover image bigger
    1. Click on the top left corner to select all cells
    2. Drag one of the rows to be taller (the image fits itself in the available space)
3. General width adjustment of each col
4. Clipped the text contents of cols `J` and `K`
    1. Click on both cols...
    2. And choose Clip from the `Format` menu (It's somewhere in there) 
5. I edited the header row
    1. Made the text bold
    2. Changed text color
    3. Changed background color
6. and lastly I froze the header row from the `View` menu

- **[How to import csv to Google Sheets](https://support.google.com/docs/answer/40608?co=GENIE.Platform%3DDesktop&hl=en)**
    - You'll likely want to use the import option: **Replace spreadsheet**
    - And you will want it to convert numbers, dates and formulas to make sure formulas work right. 
      - This does align some numbers and dates differently, but you should be able to fix that by converting all cells to text afterwards.
      - That said, spreadsheet applications converting what was originally text into numbers is notorious for dropping out changing the formatting in a way that you probably don't want. I didn't see anything weird happening in this case.

## Output Example

Here's the HTML output of my wishlist: [in jsfiddle](https://jsfiddle.net/m1nvxjpw/show/).

I had trouble putting this anywhere because my wishlist is kinda large. I'm a terrible wishlist user. I pretty much put in anything that is vaguely intersting (or not even), like if the cover looks cool or something... In the wishlist you go!

![](preview-img.png)