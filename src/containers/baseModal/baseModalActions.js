import { select } from '../../modules/playlist/playlistActions';

export function showPlaylistModal() {
  return {
    type: 'PLAYLIST_MODAL_SHOW',
  };
}

export function hidePlaylistModal() {
  return {
    type: 'PLAYLIST_MODAL_HIDE',
  };
}

export function selectPodcastToAdd(podcast) {
  return (dispatch) => {
    dispatch(select(podcast));
    dispatch(showPlaylistModal());
  };
}
