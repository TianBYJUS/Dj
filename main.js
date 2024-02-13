MapacheD = 0
MapacheDY= 0
MapacheDX = 0
MapacheI = 0
MapacheIY = 0
MapacheIX = 0
PureCapsaicin = ""

function setup () {AlconPeregrino = createCanvas (425, 310)
AlconPeregrino.position (469, 295)
Caiman = createCapture (VIDEO)
Caiman.hide ()
MantarayaP = ml5.poseNet (Caiman, Frailesillo)
MantarayaP.on ("pose", gsvkunhglkuhjsdaisoliadfddidf)}

function gsvkunhglkuhjsdaisoliadfddidf (ruiseñor) {if (ruiseñor.length > 0){console.log (ruiseñor)
MapacheD = ruiseñor[0].pose.keypoints[10].score
MapacheI = ruiseñor[0].pose.keypoints[9].score
MapacheDX = ruiseñor[0].pose.rightWrist.x
MapacheDY = ruiseñor[0].pose.rightWrist.y}}

function Frailesillo () {console.log ("wasjasdajasdabuadabrrraaaajasdwaaauauauasa")}

function preload () {PureCapsaicin = loadSound ("Cancion.mp3")}

function draw () {image (Caiman, 0, 0, 425, 310)
if (MapacheD > 0.1){
fill("Red")
stroke("Orange")
circle(MapacheDX, MapacheDY, 10)
if (MapacheDY > 0 && MapacheDY < 62 ) {document.getElementById("IwI").innerHTML = "Velocidad = 3x"
PureCapsaicin.rate(3)}
else if (MapacheDY > 62 && MapacheDY < 124) {document.getElementById("IwI").innerHTML = "Velocidad = 2x"
PureCapsaicin.rate(2)}
else if (MapacheDY > 124 && MapacheDY < 186) {document.getElementById("IwI").innerHTML = "Velocidad = 1x"
PureCapsaicin.rate(1)}
else if (MapacheDY > 186 && MapacheDY < 248) {document.getElementById("IwI").innerHTML = "Velocidad = 0.5x"
PureCapsaicin.rate(0.5)}
else if (MapacheDY > 248 && MapacheDY < 310) {document.getElementById("IwI").innerHTML = "Velocidad = 0.25x"
PureCapsaicin.rate(0.25)}
else if ((MapacheDY = 62) || (MapacheDY = 124) || (MapacheDY = 186) || (MapacheDY = 248) || (MapacheDY = 310)) {document.getElementById("IwI").innerHTML = "Velocidad = 4x"
PureCapsaicin.rate(4)}}
if (MapacheI > 0.1){
fill("Orange")
stroke("Red")
circle(MapacheIX, MapacheIY, 10)
Delfin = Number (MapacheIY)
Rana = Math.floor (Delfin)
Dugongo = Rana/310
Xenopus = Dugongo.toFixed (2)
PureCapsaicin.setVolume (Xenopus)
document.getElementById("XwX").innerHTML = "Volumen = "+ Xenopus}}

function Reproducir () {PureCapsaicin.stop ()
PureCapsaicin.play ()}

function Detener () {PureCapsaicin.stop ()}