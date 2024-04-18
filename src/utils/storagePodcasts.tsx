import moment from 'moment';

export function storagePodcasts() {
  const localPodcasts = localStorage?.getItem(`podcast}`);
  const localTimestamp = localStorage?.getItem(`timestamp`);
  const hasLocalStoragePodcast =
    localPodcasts !== null && localTimestamp !== null;
  const up24hours =
    hasLocalStoragePodcast &&
    moment().diff(moment(localTimestamp), 'hours') > 24;

  if (hasLocalStoragePodcast && !up24hours) {
    return JSON.parse(localPodcasts);
  }
  return undefined;
}
