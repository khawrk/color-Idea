const colors = `aliceblue
antiquewhite
aqua
aquamarine
azure
beige
bisque
black
blanchedalmond
blue
blueviolet
brown
burlywood
cadetblue
chartreuse
chocolate
coral
cornflowerblue
cornsilk
crimson
cyan
darkblue
darkcyan
darkgoldenrod
darkgray
darkgreen
darkgrey
darkkhaki
darkmagenta
darkolivegreen
darkorange
darkorchid
darkred
darksalmon
darkseagreen
darkslateblue
darkslategray
darkslategrey
darkturquoise
darkviolet
deeppink
deepskyblue
dimgray
dimgrey
dodgerblue
firebrick
floralwhite
forestgreen
fuchsia
gainsboro
ghostwhite
gold
goldenrod
gray
green
greenyellow
grey
honeydew
hotpink
indianred
indigo
ivory
khaki
lavender
lavenderblush
lawngreen
lemonchiffon
lightblue
lightcoral
lightcyan
lightgoldenrodyellow
lightgray
lightgreen
lightgrey
lightpink
lightsalmon
lightseagreen
lightskyblue
lightslategray
lightslategrey
lightsteelblue
lightyellow
lime
limegreen
linen
magenta
maroon
mediumaquamarine
mediumblue
mediumorchid
mediumpurple
mediumseagreen
mediumslateblue
mediumspringgreen
mediumturquoise
mediumvioletred
midnightblue
mintcream
mistyrose
moccasin
navajowhite
navy
oldlace
olive
olivedrab
orange
orangered
orchid
palegoldenrod
palegreen
paleturquoise
palevioletred
papayawhip
peachpuff
peru
pink
plum
powderblue
purple
red
rosybrown
royalblue
saddlebrown
salmon
sandybrown
seagreen
seashell
sienna
silver
skyblue
slateblue
slategray
slategrey
snow
springgreen
steelblue
tan
teal
thistle
tomato
turquoise
violet
wheat
white
whitesmoke
yellow
yellowgreen`
const colorInUse = colors.split("\n");

const btnBg = document.getElementById('btnBg');
const color = document.querySelector(".bgcolor")
const btnDiv = document.getElementById('btnDiv')
const div = document.querySelector('.exampleDiv')
const divText = document.querySelector('.divcolor')
const btnText = document.getElementById('btntext')
const textColor = document.querySelector('.textcolor')
const footerText = document.querySelector('#khawrk')

btnBg.addEventListener('click', function () {
    //get random number between 0-3 for color index
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorInUse[randomNumber];
    color.textContent = colorInUse[randomNumber];
})

btnDiv.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    div.style.backgroundColor = colorInUse[randomNumber]
    divText.textContent = colorInUse[randomNumber]
})

btnText.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.color = colorInUse[randomNumber]
    textColor.textContent = colorInUse[randomNumber]
    footerText.style.color = colorInUse[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colorInUse.length);
}
