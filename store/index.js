/*
  STATE > ROOT
*/

export const state = () => ({
  debug: false,
  loading: false,
  socials: {
    twitter: {
      url: "https://twitter.com/meshachjackson",
    },
    facebook: {
      url: "https://facebook.com/meshachjacksonmusic",
    },
    youtube: {
      url: "https://youtube.com/meshachjackson",
    },
    soundcloud: {
      url: "https://soundcloud.com/meshachjackson",
    },
    linkedin: {
      url: "https://linkedin.com/in/meshachjackson",
    },
    github: {
      url: "https://github.com/meshachjackson",
    },
    spotify: {
      url:
        "https://open.spotify.com/artist/13Ifw30Y9iDhlpGddvHb5M?si=EojPHo5CTGyhUw6--QwDGA",
    },
    patreon: {
      url: "https://www.patreon.com/meshachjackson",
    },
  },
});

export const getters = {
  // GET_ALERTS: (state) => {
  //   return state.alerts
  // },
};

export const mutations = {
  // ADD_ALERT
  // ADD_ALERT(state, payload) {
  //   return state.alerts.push(payload)
  // },
};

export const actions = {
  // SET_ALERT
  // SET_ALERT({ commit }, payload) {
  //   let alert = {}
  //   alert.message = payload.message ? payload.message : payload
  //   alert.variant = payload.variant ? payload.variant : "success"
  //   commit("ADD_ALERT", alert)
  // },
};
