import { createStore } from 'vuex'

export default createStore({
  state: {
    likedNtfs: [],
    nfts: [
      {
        id: 1,
        url: 'https://lh3.googleusercontent.com/aKTdnYMXij4YcRE7eduuIq8ADj8VACs34YXBSwcFinQNAzc0kGvcQ5jsGciD2TxLKyjIXJkdqfwhQ8zRK5o-mFTMXyEd2LOVeQqTa0Q=w600',
        name: '#3336',
        collection: 'Bored Ape Yacht Club',
        createdBy: 'BoredApeYachtClub',
        blockchain: 'Ethereum'
      },
      {
        id: 2,
        url: 'https://lh3.googleusercontent.com/Zau-70Ga57u021g4xxx9UqHyiwwpxuFI-W1q0BWetxhmhm8_rTERCPsCfQled_nxBDIN40U7x1hDX3CvVkMeLe4Pxg=w600',
        name: 'CryptoPunk #8857',
        collection: 'CryptoPunks',
        createdBy: 'C352B5',
        blockchain: 'Ethereum'
      },
      {
        id: 3,
        url: 'https://lh3.googleusercontent.com/N2YJLVhqpQaPNo2BQx413QgBInmDtKV7bMNETPN2eGg54wJoFLmozlZgoRFTCoZB3uy8zbD-9DXcc4Z1039_dNkn9A9uNTvahhn7lQ=w600',
        name: 'The Third Eye - 150/150 Edition',
        collection: 'Dario De Siena Digital',
        createdBy: 'dariodesiena',
        blockchain: 'Ethereum'
      },
      {
        id: 4,
        url: 'https://lh3.googleusercontent.com/bogarzTBPeuO7PlLrzbTQsIWdw-2jJrE8eFi-aEqjuVD7nfIIQeeUOqhThYevuyUQ-cj4gr37O35e-K7Aj-I9Rx7S73uj1GwYaIUUQ=w600',
        name: 'A Note From Forever #8',
        collection: 'A Note From Forever',
        createdBy: 'visualswithsam',
        blockchain: 'Ethereum'
      },
      {
        id: 5,
        url: 'https://lh3.googleusercontent.com/Zv3Uzs1qfarx5ZrCMEO6Qdjcx9CpcUbK0qmzWMlRxt6n5f_FKthb0vlJvkzkcGoOAgEViJtGUkJPQiurju6M0ZOfgVhNuqVfsdkm=w600',
        name: 'Unprecedented',
        collection: 'ZED RUN',
        createdBy: 'Aguxez',
        blockchain: 'Polygon'
      },
      {
        id: 6,
        url: 'https://lh3.googleusercontent.com/4_zDAs48iwxaykDjJXABMsf9ytdJdPc_PanvuYb2pbj7bahfYSFTAn1FQ02f2RXWhYUzjlqfv_qmFgfQq-QIoylfK3mMbnNx3kZt=w600',
        name: 'Fireworks Majesty',
        collection: 'MagikLite',
        createdBy: 'MagikLite',
        blockchain: 'Ethereum'
      }
    ]
  },
  actions: {
    likeNft({ commit }, nftId) {
      commit('addNftToLikedNfts', nftId)
    },
    dislikeNft({ commit }, nftId) {
      commit('deleteNftFromLikedNfts', nftId)
    }
  },
  mutations: {
    addNftToLikedNfts(state, payload) {
      state.likedNtfs.push(payload)
    },
    deleteNftFromLikedNfts(state, payload) {
      state.likedNtfs.splice(state.likedNtfs.indexOf(payload), 1)
    }
  },
  getters: {
    getNfts(state) {
      return state.nfts
    },
    getLikedNfts(state) {
      return state.likedNtfs
    }
  },
  modules: {}
})
