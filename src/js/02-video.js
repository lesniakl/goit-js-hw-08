import Player from '@vimeo/player';
import _ from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(() => {
    return;
  });

const timeTracker = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', _(timeTracker, 1000));
