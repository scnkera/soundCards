// step 1: get all class = soundCloud 
// step 2: loop through classes 
// step 3: add onClick to each
// step 4: figure out what the id
// step 5: if the card id equals = x
// step 6: play x's associated sound



// step 1: get all class = soundCloud
const allCards = document.getElementsByClassName('sound-card');

// card types
const catCardId = 'cat_button';
const dogCardId = 'dog_button';
const lionCardId = 'lion_button';
const lightningCardId = 'lightning_button';
const rainCardId = 'rain_button';
const tornadoCardId = 'tornado_button';

const audioElements = document.querySelectorAll("audio");
console.log(audioElements)

// function that stops all audio
function stopAllAudio() {
    audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// step 2: loop through classes
for (let card of allCards) {
    // step 3: add onClick to each
    card.onclick = () => {
        stopAllAudio();

        // step 4: figure out what the id
        const cardId = card.id;
        console.log(cardId);

		// step 5: if the card id equals = x
        // step 6: play x's associated sound
        let audioFilePath;
		if (cardId === catCardId) {
			// console.log("cat-audio");
            const catAudio = document.getElementById('cat_audio');
            catAudio.play();
		} else if (cardId === dogCardId) {
            // console.log("dog-audio");
            const dogAudio = document.getElementById('dog_audio');
            dogAudio.play();
		} else if (cardId === lionCardId) {
			// console.log("lion-audio");
            const lionAudio = document.getElementById('lion_audio');
            lionAudio.play();
        } else if (cardId === lightningCardId) {
			// console.log("lightning-audio");
            const lightningAudio = document.getElementById('lightning_audio');
            lightningAudio.play();
        } else if (cardId === rainCardId) {
			// console.log("rain-audio");
            const rainAudio = document.getElementById('rain_audio');
            rainAudio.play();
        } else  if (cardId === tornadoCardId){
			// console.log("tornado-audio");
            const tornadoAudio = document.getElementById('tornado_audio');
            tornadoAudio.play();
        } else {
            console.log("error found")
        }
	};
}