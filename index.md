## Projects

You can use the [editor on GitHub](https://github.com/Pbeeltje/.github.io/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

###Python
[Character Generator](#Chargen)

###JavaScript
[Timekeeper](#Timekeeper)

### Character Generator
<a name="Chargen"></a>
This Program generates characters for a boardgame. First the program asks how many Sets and characters per set you want. 

A character consists of a Name, an Occupation, a Quirk and some Stats (ie Strength, Agility). Names are generated from parts of names stored in arrays. The program then randomly picks an occupation with the appropriate trade-goods from a table in an excel file, along with a Quirk and a random piece of equipment. Stats are rolled randomly, one stat will be dependant on the occupation. 

All these characters and Sets are then put into a docx file. The filename of the docx is stamped with the time of generation so they don't get overwritten (example: DCCgen 17 May  19.47.30.docx).

![Docx Example](exampledoc.jpg)


At one time this project was pretty clean! it's become a bit more jumbled over time as I added more features.

```markdown




```

### Timekeeper
<a name="Timekeeper"></a>
This project is basically a manual clock. I made it as a tool for a boardgame where 'game-time'is seperate from 'real-time'.
It comes in handy because sometime's a minute of game-time might be cause for 20 minutes of discussion in real time. The opposite also often occurs where hours or days pass in seconds.

Besides tracking time, whenever any period longer than 2 hours passes the program rolls two six-sides die to determine the weather.

[Try it out](timekeeper.html)


