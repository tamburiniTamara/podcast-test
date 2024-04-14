export function podcastsMatcher(podcast, searchString) {
  const { title, author } = podcast;
  const lowerCaseSearchString = searchString.toLowerCase();
  return (
    title.toLowerCase().includes(lowerCaseSearchString) ||
    author.toLowerCase().includes(lowerCaseSearchString)
  );
}
