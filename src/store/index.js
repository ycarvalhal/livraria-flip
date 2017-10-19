import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import uuid from 'uuid'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(p => p.id === id)

    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  [types.REMOVE_FROM_CART] (state, productId) {
    state.added = state.added.filter(p => p.id !== productId)
  },
  [types.REMOVE_ONE_FROM_CART] (state, productId) {
    const record = state.added.find(product => product.id === productId);
    
    if (record.quantity > 1) {
      record.quantity--;
    } else {
      state.added = state.added.filter(p => p.id !== productId);
    }
    
  }
}

const state = {
  added: [],
  all: [
    {
      id: uuid.v4(),
      name: 'Entre Quatro Paredes',
      description: 'Grace é a esposa perfeita. Ela abriu mão do emprego para se dedicar ao marido e à casa. Agora prepara jantares maravilhosos, cuida do jardim, costura e pinta quadros fantásticos. Grace mal tem tempo de sentir falta de sua antiga vida.',
      price: 24.40,
      photo: {
        url: 'http://fakeimg.pl/90x120/',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Livro dois',
      description: 'Descrição do livro',
      price: 399,
      photo: {
        url: 'http://fakeimg.pl/90x120/',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Livro três',
      description: 'Descrição do livro',
      price: 399,
      photo: {
        url: 'http://fakeimg.pl/120x90/',
        orientation: 'horizontal',
      }
    },
    {
      id: uuid.v4(),
      name: 'Livro quatro',
      description: 'Descrição do livro',
      price: 399,
      photo: {
        url: 'http://fakeimg.pl/90x120/',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Livro cinco',
      description: 'Descrição do livro',
      price: 399,
      photo: {
        url: 'http://fakeimg.pl/90x120/',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Livro seis',
      description: 'Descrição do livro',
      price: 399,
      photo: {
        url: 'http://fakeimg.pl/120x90/',
        orientation: 'horizontal',
      }
    }
  ]
}

const getters = {
  allProducts: state => state.all,
  getNumberOfProducts: state => (state.all) ? state.all.length : 0,
  cartProducts: state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.all.find(p => p.id === id)
      return {
        name: product.name,
        price: product.price,
        id: product.id,
        quantity
      }
    })
  }
}

const actions = {
  addToCart({ commit }, product){
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  },
  removeFromCart({ commit }, product){
    commit(types.REMOVE_FROM_CART, product.id)
  },
  removeOneFromCart({ commit }, product){
    commit(types.REMOVE_ONE_FROM_CART, product.id)
  }
}

export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
})