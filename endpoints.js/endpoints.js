export default function apiEndpoints(id, name) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    register: `${holidaze}/auth/register`,
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues`,
    singleVenue: `${holidaze}/venues/${id}?_bookings=true&_owner=true`,
    profile: `${holidaze}/profiles/${name}`,
    profileVenues: `${holidaze}/profiles/${name}/venues`,
    updateAvatar: `${holidaze}/profiles/${name}/media`,
    makeBooking: `${holidaze}/bookings`,
  };
  return endpoints;
}
