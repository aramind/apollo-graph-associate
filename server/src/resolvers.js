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

  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.tracksAPI.incrementTrackViews(id);

        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          success: false,
          message: error.extensions.response.body,
          track: null,
        };
      }
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.tracksAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.tracksAPI.getTracksModules(id);
    },
  },
};

module.exports = resolvers;
