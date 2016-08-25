import { select } from '../../modules/playlist/playlistActions';

export function showPlaylistModal() {
  return {
    type: 'PLAYLIST_MODAL_SHOW',
  };
}


export function showSearchModal() {
  return {
    type: 'SEARCH_MODAL_SHOW',
  };
}

export function showLoadModal() {
  return {
    type: 'LOAD_MODAL_SHOW',
  };
}

export function hideModal() {
  return {
    type: 'MODAL_HIDE',
  };
}

export function selectPodcastToAdd(podcast) {
  return (dispatch) => {
    dispatch(select(podcast));
    dispatch(showPlaylistModal());
  };
}
