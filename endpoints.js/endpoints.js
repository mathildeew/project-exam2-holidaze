export default function apiEndpoints(id, name) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    register: `${holidaze}/auth/register`,
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues`,
    singleVenue: `${holidaze}/venues/${id}`,
    profile: `${holidaze}/profiles/${name}`,
    updateAvatar: `${holidaze}/profiles/${name}/media`,
  };
  return endpoints;
}
