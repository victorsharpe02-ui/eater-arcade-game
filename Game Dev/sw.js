
    

const CACHE_NAME = 'germ-game';

const GAME_ASSETS_TOCACHE = [ 
    "mechanics/gameplaymobile.html",
    "mechanics/gameplaymobile.css",
"intro-screen/homepgmobile.html",
"intro-screen/homepgmobile.css",
"mechanics/gamemobile.html",
"mechanics/gamemobile.css",
"mechanics/gameplay.html",
"mechanics/realgame.html",
"mechanics/germGameappIcon.png",
"mechanics/ScaledGameHomePage.png",
"intro-screen/gameSoundFin.mp3",
"mechanics/Chomp Sound Effects.mp3",
"mechanics/Gulp  Sound Effect.mp3"

];

self.addEventListener('install', (event)=> {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) =>{
    return cache.addAll(GAME_ASSETS_TOCACHE)
    })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
 return response || fetch(event.request);
    })
    );
});