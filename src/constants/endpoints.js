export default function apiEndpoints(id, name) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    register: `${holidaze}/auth/register`,
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues?sort=created`,
    singleVenue: `${holidaze}/venues/${id}?_bookings=true&_owner=true`,
    updateVenue: `${holidaze}/venues/${id}`,
    profile: `${holidaze}/profiles/${name}?_bookings=true`,
    profileVenues: `${holidaze}/profiles/${name}/venues?_bookings=true`,
    registerAsManager: `${holidaze}/profiles/${name}`,
    updateAvatar: `${holidaze}/profiles/${name}/media`,
    makeBooking: `${holidaze}/bookings`,
    deleteBooking: `${holidaze}/bookings/${id}`,
  };
  return endpoints;
}
