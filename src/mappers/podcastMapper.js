export function formatPodcastObject(podcast) {
  return {
    id: podcast?.id?.attributes['im:id'] ?? '',
    title: podcast['im:name']?.label ?? 'No title',
    image: podcast['im:image'][2]?.label ?? '',
    author: podcast['im:artist']?.label ?? 'No author',
    description: podcast.summary?.label ?? 'No desciption'
  };
}
