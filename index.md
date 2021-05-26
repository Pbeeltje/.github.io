## Projects
Below are some of the coding projects I've been working on:

### Python
[Character Generator](#Chargen)

### JavaScript
[Timekeeper](#Timekeeper)

### Character Generator
<a name="Chargen"></a>
This Program generates characters for a boardgame. First the program asks how many Sets and characters per set you want. 

A character consists of a Name, an Occupation, a Quirk and some Stats (ie Strength, Agility). Names are generated from parts of names stored in arrays. The program then randomly picks an occupation with the appropriate trade-goods from a table in an excel file, along with a Quirk and a random piece of equipment. Stats are rolled randomly, one stat will be dependant on the occupation. 

This little function counts the number of rows that are filled in in the excell sheet. This makes it so you can keep adding new things to the sheet without having to change any code.
```markdown
def rowCounter(sheet):
    count = 0
    x = 1
    while True:
        cell = 'A'+ str(x)
        if sheet[cell].value is not None:
            count += 1
            x+=1
        else: break
    return count
```

All these characters and Sets are then put into a docx file. The filename of the docx is stamped with the time of generation so they don't get overwritten:
```markdown
dateTimeObj = datetime.now() #timestamp to make a unique document name
timestampStr = dateTimeObj.strftime("%d %b  %H.%M.%S")
docname = 'DCCgen ' + timestampStr +'.docx' 
document.save(docname)
```
*(example: DCCgen 17 May  19.47.30.docx)*

<a href="exampledoc.jpg" target="blank"><img src="exampledoc.jpg"></a>

At one time this project was pretty clean! it's become a bit more jumbled over time as I added more features.

### Timekeeper
<a name="Timekeeper"></a>
This project is basically a manual clock. I made it as a tool for a boardgame where 'game-time'is seperate from 'real-time'.
It comes in handy because sometime's a minute of game-time might be cause for 20 minutes of discussion in real time. The opposite also often occurs where hours or days pass in seconds.

Besides tracking time, whenever any period longer than 2 hours passes the program rolls two six-sides die to determine the weather.

<a href="timekeeper.html" target="blank">Try it out</a>


