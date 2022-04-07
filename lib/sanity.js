import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "mf6k7d49",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skuV6tq7EjkrQezcgy7mpGvDmyD60Zu587u96el9WiCHXbQewF0bEJzxOoWm4rAX3lqeyPMuJeeMiXuDHIafVkGsqKr71nUx1uV1Pq5uBLnr7ljoEs572NPe7SbuzVH7B07awbGvJXKrF6YogFzfYDiZim1Fv0SH2eYkrvUjHkmzNQ2Pxql8",
  useCdn: "false",
});
