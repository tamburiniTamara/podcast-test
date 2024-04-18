import moment from 'moment';

export function storagePodcast(podcastId: string) {
  const localPodcast = localStorage?.getItem(`podcast-${podcastId}`);
  const localTimestamp = localStorage?.getItem(`timestamp-${podcastId}`);
  const hasLocalStoragePodcast =
    localPodcast !== null && localTimestamp !== null;
  const up24hours =
    hasLocalStoragePodcast &&
    moment().diff(moment(localTimestamp), 'hours') > 24;

  if (hasLocalStoragePodcast && !up24hours) {
    return JSON.parse(localPodcast);
  }
  return undefined;
}
