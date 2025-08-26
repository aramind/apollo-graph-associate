const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.tracksAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.tracksAPI.getTrack(id);
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.tracksAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.tracksAPI.getTracksModules(id) || [];
    },
  },
};

module.exports = resolvers;
