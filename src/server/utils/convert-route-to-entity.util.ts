const mapping: Record<string, string> = {
  platforms: 'platform',
  providers: 'provider',
  searches: 'search',
  'share-links': 'share_link',
  songs: 'song',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
