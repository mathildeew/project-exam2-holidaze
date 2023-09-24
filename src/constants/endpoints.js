export default function apiEndpoints(id, name) {
  const holidaze = `https://api.noroff.dev/api/v1/holidaze`;
  const endpoints = {
    register: `${holidaze}/auth/register`,
    login: `${holidaze}/auth/login`,
    venues: `${holidaze}/venues?sort=created`,
    singleVenue: `${holidaze}/venues/${id}?_bookings=true&_owner=true`,
    updateVenue: `${holidaze}/venues/${id}`,
    deleteVenue: `${holidaze}/venues/${id}`,
    profile: `${holidaze}/profiles/${name}?_bookings=true`,
    updateAvatar: `${holidaze}/profiles/${name}/media`,
    makeBooking: `${holidaze}/bookings`,
    deleteBooking: `${holidaze}/bookings/${id}`,
  };
  console.log();
  return endpoints;
}
