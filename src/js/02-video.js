import player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const Player = new Vimeo.Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const onPlay = function(data){
      localStorage.setItem(CURRENT_TIME, data.seconds);
};
Player.on('timeupdate', throttle(onPlay, 1000));

const playedTime = localStorage.getItem(CURRENT_TIME);

Player.setCurrentTime(Number(playedTime)).then(function (seconds) {
  seconds = Number(playedTime);
});




