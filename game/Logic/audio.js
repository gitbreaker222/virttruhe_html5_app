function audioplayer(){
}

var audio = new audioplayer;

//TODO create some backgroundmusic records
var bgm = new Howl({
    src: [
        'Data/audio/background/shadow6nothing9 - A cool night out.ogg',
        'Data/audio/background/shadow6nothing9 - A cool night out.m4a'
    ],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
        console.log('Finished!');
    }
});

//TODO create sfx sprites
/*
var sfx = new Howl({
    src: ['sounds.ogg', 'sounds.mp3'],
    sprite: {
        blast: [0, 1000],
        laser: [2000, 3000],
        winner: [4000, 7500]
    }
});

// shoot the laser!
sound.play('laser');
*/