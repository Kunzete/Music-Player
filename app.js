console.log("This is my Music Player"); 

// Initializing Variables
let gif = document.getElementById("gif");
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById("masterPlay");
let masterForward = document.getElementById("masterForward");
let masterBackward = document.getElementById("masterBackward");
let myProgressBar = document.getElementById("myProgressBar");
let songItem = Array.from(document.getElementsByClassName("songContainer"));
let masterSongName = document.getElementById("songName");
let masterSongImg = document.getElementsByClassName("img");
let masterSong = document.getElementById("Current");
let Volume = document.getElementById("myVolumeBar");
let LoopButton = document.getElementById("LoopButton");
let songs = [
    {songName: "Moon Deity - Neon-Blade", filePath: "Songs/0.mp3", coverPath: "Cover/0.jpg"},
    {songName: "After dark x Sweeter Weather", filePath: "Songs/1.mp3", coverPath: "Cover/1.jpg"},
    {songName: "Life in rio - Phonk", filePath: "Songs/2.mp3", coverPath: "Cover/2.jpg"},
    {songName: "Death is no more - Phonk", filePath: "Songs/3.mp3", coverPath: "Cover/3.jpg"},
    {songName: "Murder in my mind - Kordhell", filePath: "Songs/4.mp3", coverPath: "Cover/4.jpg"},
    {songName: "Poor Phonk", filePath: "Songs/5.mp3", coverPath: "Cover/5.jpg"},
    {songName: "Tuca Donka - Phonk", filePath: "Songs/6.mp3", coverPath: "Cover/6.jpg"},
    {songName: "Sleepwalker - Phonk", filePath: "Songs/7.mp3", coverPath: "Cover/7.jpg"},
    {songName: "Kerosene - Crystal Castle", filePath: "Songs/8.mp3", coverPath: "Cover/8.jpg"},
    {songName: "Empathy - Crystal Castle", filePath: "Songs/9.mp3", coverPath: "Cover/9.jpg"},
    {songName: "Lost down soul x Lost soul", filePath: "Songs/10.mp3", coverPath: "Cover/10.jpg"},
    {songName: "Acido Super Slowed", filePath: "Songs/ACIDO SUPER SLOWED.mp3", coverPath: "Cover/Acido.jpeg"},
    {songName: "Afusic - Pal Pal", filePath: "Songs/Afusic - Pal Pal with Talwiinder  (Official Visualiser) Prod. AliSoomroMusic - AFUSIC.mp3", coverPath: "Cover/Pal Pal.jpeg"},
    {songName: "All The Stars - Perfection", filePath: "Songs/all the stars (slowed to perfection).mp3", coverPath: "Cover/All The Stars.png"},
    {songName: "Passo Bem Solto", filePath: "Songs/ATLXS - PASSO BEM SOLTO (Slowed).mp3", coverPath: "Cover/Passo Bem Solto.png"},
    {songName: "Dare ( Super Slowed )", filePath: "Songs/DARE  (SUPER SLOWED).mp3", coverPath: "Cover/Dare.jpeg"},
    {songName: "Farazi Dobro - Vecer", filePath: "Songs/Farazi  Dobro - Vecer  (Slowed + Reverb) - Echoes of Entertainment.mp3", coverPath: "Cover/Farazi Dobro.jpg"},
    {songName: "Fiesta Dedo Maga", filePath: "Songs/Fiesta+Dedo+Maga+(slowed+and+reverb)+#slowedandrever+#slowedandreverb+#slowedreverb+#slowedsongs.m4a", coverPath: "Cover/Fiesta Dedo Maga.jpg"},
    {songName: "Funk De Beleza ( Slowed )", filePath: "Songs/Fun De Beleza ( Slowed ).mp3", coverPath: "Cover/Funk De Beleza.jpg"},
    {songName: "Funk Da Montanha ( Super Slowed )", filePath: "Songs/𝙁𝙐𝙉𝙆 𝘿𝘼 𝙈𝙊𝙉𝙏𝘼𝙉𝙃𝘼 (𝙎𝙐𝙋𝙀𝙍 𝙎𝙇𝙊𝙒𝙀𝘿) - 𝙎𝙑𝙀𝙫𝙤.mp3", coverPath: "Cover/Funk De MonTanha.jpeg"},
    {songName: "Government Hooker - Lady Gaga", filePath: "Songs/Government Hooker - Lady Gaga [Edit Audio] (D00nik Remix) - HanEditx.mp3", coverPath: "Cover/Government Hooker.jpg"},
    {songName: "I Like The Way You Kiss Me", filePath: "Songs/I like the way.m4a", coverPath: "Cover/I Like the way you kiss me.png"},
    {songName: "Smezir_2 ( Slowed )", filePath: "Songs/ilyhiryu - smezir_2 (Slowed) - void.mp3", coverPath: "Cover/Smezir_2.jpg"},
    {songName: "Kuloso - Oxlade", filePath: "Songs/Kuloso.mp3", coverPath: "Cover/Kuloso.jpg"},
    {songName: "Montagem Tomado ( Slowed )", filePath: "Songs/MONTAGEM TOMADA SLOWED - The Vibe Guide.mp3", coverPath: "Cover/Montagem Tomado.jpeg"},
    {songName: "My Type Phonk", filePath: "Songs/My Type Phonk.mp3", coverPath: "Cover/My Type.jpeg"},
    {songName: "Nunca Muda ( Slowed )", filePath: "Songs/NUNCA MUDA (SLOWED) - SLOWERB.mp3", coverPath: "Cover/Nunca Muda.jpg"},
    {songName: "Risada Chuck 01", filePath: "Songs/RISADA CHUCK 01 - -Prey.mp3", coverPath: "Cover/Risada.jpeg"},
    {songName: "Under Your Spell - Snow Strippers", filePath: "Songs/under your spell - snow strippers [edit audio] - ENcore EditZz.mp3", coverPath: "Cover/Under your spell.jpeg"},
    {songName: "Vidrado Em Voce - TikTok Version", filePath: "Songs/Vidrado+Em+Voce+(tiktok+version)+-++dj+guuga+&+mc+livinho+[edit+audio].m4a", coverPath: "Cover/Vidrado Em Voce.jpeg"},
    {songName: "Years and Years - Breathe ( Spedup )", filePath: "Songs/Years & Years - Breathe (sped up) - Kn1ght.mp3", coverPath: "Cover/Breathe.jpeg"},
];

// Function to reset all play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    });
    gif.style.visibility = "visible";
};

// Update song list in the UI
songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerHTML = songs[i].songName;
});

// Play/Pause functionality
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        masterSongName.innerText = songs[songIndex].songName; 
        masterSongImg[0].src = songs[songIndex].coverPath;
        masterSong.style.opacity = 1;
        gif.style.visibility = "visible";
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.visibility = "hidden";
    }
});

// Update progress bar as the song plays
audioElement.addEventListener("timeupdate", () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Volume changer
Volume.addEventListener("change", () => {
    audioElement.volume = Volume.value / 100;
    const volumeIcon = document.getElementById("volume-icon");
    if (Volume.value > 50) {
        volumeIcon.classList.remove("fa-volume-xmark", "fa-volume-low");
        volumeIcon.classList.add("fa-volume-high");
    } else if (Volume.value > 0) {
        volumeIcon.classList.remove("fa-volume-high", "fa-volume-xmark");
        volumeIcon.classList.add("fa-volume-low");
    } else {
        audioElement.muted = true;
        volumeIcon.classList.remove("fa-volume-high", "fa-volume-low");
        volumeIcon.classList.add("fa-volume-xmark");
    }
});

// Mute/Unmute functionality
document.getElementById("volume-icon").addEventListener("click", () => {
    audioElement.muted = !audioElement.muted;
    const volumeIcon = document.getElementById("volume-icon");
    if (audioElement.muted) {
        volumeIcon.classList.replace("fa-volume-high", "fa-volume-xmark");
        volumeIcon.classList.replace("fa-volume-low", "fa-volume-xmark");
    } else {
        audioElement.volume = Volume.value / 100;
        volumeIcon.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

// AutoPlay Next
audioElement.addEventListener("ended", () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to the start
    playSong(songIndex); // Call the playSong function to play the next song
});

// Change Duration
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Play selected song
Array.from(document.getElementsByClassName("songPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id); // Get the song index from the clicked element
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        playSong(songIndex);
    });
});

// Function to play a song
function playSong(index) {
    audioElement.src = songs[index].filePath; // Set the audio source
    audioElement.currentTime = 0; // Reset the current time
    audioElement.play(); // Play the audio
    masterSongName.innerText = songs[index].songName;
    masterSongImg[0].src = songs[index].coverPath;
    gif.style.visibility = "visible";
    masterSong.style.opacity = 1;
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
}

// Forward and Backward functionality
masterForward.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to the start
    playSong(songIndex);
});

masterBackward.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop back to the end
    playSong(songIndex);
});

// Loop functionality
LoopButton.addEventListener("click", () => {
    audioElement.loop = !audioElement.loop;
    const loopIcon = document.getElementById("LoopButton");
    loopIcon.src = audioElement.loop ? `loopOne.svg` : `loopDefault.svg`;
});

// Keybindings for play/pause and mute
window.addEventListener("keypress", (e) => {
    if (e.code === 'Space') {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            masterSongName.innerText = songs[songIndex].songName; 
            masterSongImg[0].src = songs[songIndex].coverPath;
            masterSong.style.opacity = 1;
            gif.style.visibility = "visible";
        } else {
            audioElement.pause();
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            gif.style.visibility = "hidden";
        }
    } else if (e.key === 'm') {
        audioElement.muted = !audioElement.muted;
        const volumeIcon = document.getElementById("volume-icon");
        if (audioElement.muted) {
            volumeIcon.classList.replace("fa-volume-high", "fa-volume-xmark");
            volumeIcon.classList.replace("fa-volume-low", "fa-volume-xmark");
        } else {
            audioElement.volume = Volume.value / 100;
            volumeIcon.classList.replace("fa-volume-xmark", "fa-volume-high");
        }
    } else if (e.key === 'l') {
        audioElement.loop = !audioElement.loop;
        const loopIcon = document.getElementById("LoopButton");
        loopIcon.src = audioElement.loop ? `loopOne.svg` : `loopDefault.svg`;
    }
});
