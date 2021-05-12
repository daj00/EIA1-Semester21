var drumMachine: string[] = ["A.mp3", "C.mp3", "F.mp3", "G.mp3", "hihat.mp3", "kick.mp3", "laugh1.mp3", "laugh2.mp3", "snare.mp3"]

window.addEventListener("load", function () {
    document.querySelector("#lOben").addEventListener("click", function () { playSample(drumMachine[0]) })
    document.querySelector("#mOben").addEventListener("click", function () { playSample(drumMachine[1]) })
    document.querySelector("#rOben").addEventListener("click", function () { playSample(drumMachine[2]) })
    document.querySelector("#lMitte").addEventListener("click", function () { playSample(drumMachine[3]) })
    document.querySelector("#mMitte").addEventListener("click", function () { playSample(drumMachine[4]) })
    document.querySelector("#rMitte").addEventListener("click", function () { playSample(drumMachine[5]) })
    document.querySelector("#lUnten").addEventListener("click", function () { playSample(drumMachine[6]) })
    document.querySelector("#mUnten").addEventListener("click", function () { playSample(drumMachine[7]) })
    document.querySelector("#rUnten").addEventListener("click", function () { playSample(drumMachine[8]) })
})
function playSample(sample: string): void {
    var sound: HTMLAudioElement = new Audio(sample); sound.play();
}

window.addEventListener("load", function () {
    document.querySelector("#playButton").addEventListener("click", function () { beat() })
})

function beat() {
    //for (let i= 0; i < 4; i++) {   //Versuch einer Schleife. 
    setTimeout(function () {
        playSample(drumMachine[5]);
    }, 500)

    setTimeout(function () {
        playSample(drumMachine[4]);
    }, 1000)

    setTimeout(function () {
        playSample(drumMachine[8]);
    }, 1500)

    setTimeout(function () {
        playSample(drumMachine[4]);
    }, 2000)
}
