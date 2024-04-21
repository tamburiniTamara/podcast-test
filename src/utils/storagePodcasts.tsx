import moment from 'moment';

export function storagePodcasts(podcastId?: string) {
  const keyPrefix = podcastId ? `-${podcastId}` : '';
  const podcastKey = `podcast${keyPrefix}`;
  const timestampKey = `timestamp${keyPrefix}`;
  const localPodcasts = localStorage?.getItem(podcastKey);
  const localTimestamp = localStorage?.getItem(timestampKey);

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
