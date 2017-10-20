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
        url: 'https://img.travessa.com.br/livro/BA/33/33395d21-73e4-475e-8ea2-3d5edf099155.jpg',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Marketing 4.0 - do Tradicional ao Digital',
      description: 'Este livro comprova mais uma vez por que Philip Kotler é considerado o pai do marketing moderno. Em seu livro anterior, ele explicou a transição do marketing orientado ao produto (1.0) para o focado no consumidor (2.0) e então para o centrado no ser humano (3.0), em que produtos, serviços e culturas empresariais devem adotar e refletir valores humanos para serem bem-sucedidos.',
      price: 32.90,
      photo: {
        url: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9738865&qld=90&l=430&a=-1',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Harry Potter e A Câmara Secreta - Capa Dura',
      description: 'Depois de férias aborrecidas na casa dos tios trouxas, está na hora de Harry Potter voltar a estudar. Coisas acontecem, no entanto, para dificultar o regresso de Harry. Persistente e astuto, o herói não se deixa intimidar pelos obstáculos e, com a ajuda dos fiéis amigos Weasley, começa o ano letivo na Escola de Magia e Bruxaria de Hogwarts. As novidades não são poucas. Novos colegas, novos professores, muitas e boas descobertas e um grande e perigosos desafio. Alguém ou alguma coisa ameaça a segurança e a tranquilidade dos membros de Hogwarts.',
      price: 24.90,
      photo: {
        url: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9738751&qld=90&l=430&a=-1',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Como Se Tornar o Pior Aluno da Escola - Edição Especial Limitada',
      description: 'Danilo Gentili foi o pior aluno da escola. Em seu histórico escolar acumulou 78 assinaturas no livro negro, 12 suspensões e 1 expulsão. A partir dessa incrível experiência publicou o livro "Como se tornar o pior aluno da escola", um curso intensivo para aquele que quer se tornar o estudante nota 0 exemplar. Sua história inspirou a criação do filme que estreia em outubro nos cinemas, com partição de Carlos Villagrán (o Kiko, do Chaves) e de Fábio Porchat. Esta edição especial da obra é o livro usado pelos personagens no filme, elaborado em processo artesanal pelo próprio Danilo Gentili. Edição limita e exclusiva para colecionadores!',
      price: 29.30,
      photo: {
        url: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9866001&qld=90&l=430&a=-1',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'A Bússola de Ouro',
      description: 'Lyra Belacqua e seu daemon, Pantalaimon, vivem felizes e soltos entre os catedráticos da Faculdade Jordan, em Oxford. Até que rumores invadem a cidade – são boatos sobre os Papões, sequestradores de crianças que estão espalhando o medo pelo país. Quando seu melhor amigo, Roger, desaparece, Lyra entra em uma perigosa jornada para reencontrá-lo. O que ela não desconfia é que muitas outras forças influenciam seu destino e que sua aventura a levará às terras congeladas do Norte, onde feiticeiras e ursos de armadura se preparam para uma guerra. Embora tenha a ajuda do aletiômetro – um poderoso instrumento que responde a qualquer pergunta –, nada a prepara para os mistérios e a crueldade que encontra durante a viagem. E, mesmo que ainda não saiba, Lyra tem uma profecia a cumprir, e as consequências afetarão muitos mundos além do dela.',
      price: 31.40,
      photo: {
        url: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9736220&qld=90&l=430&a=-1',
        orientation: 'vertical',
      }
    },
    {
      id: uuid.v4(),
      name: 'Star Wars - Legado De Sangue',
      description: 'Quando a Aliança Rebelde derrubou o Império, a princesa Leia acreditava que um longo período de paz iria começar. Mas o que se seguiram foram décadas de brigas sem fim e rixas partidárias no senado da Nova República. Leia, agora uma senadora influente, está perdendo a fé na política enquanto assiste seus colegas no senado, desesperados por mudanças, tomarem medidas que podem destruir o governo igualitário recém-criado. A última princesa de Alderaan torna-se a única esperança da democracia em seu momento mais frágil, mas o passado e o futuro com o lado sombrio da Força a perseguem. O treinamento Jedi de seu filho Ben a preocupa, especialmente depois que ele e Luke param de lhe mandar mensagens, e um dos maiores segredos da família pode vir à tona e colocar em cheque sua credibilidade. Situada pouco antes do Episódio VII: O Despertar da Força, esta obra da aclamada escritora Claudia Gray apresenta o surgimento da primeira ordem e do clima que impera na galáxia nos novos filmes, além de aprofundar os conflitos de sua protagonista, a princesa Leia.',
      price: 31.40,
      photo: {
        url: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=9861827&qld=90&l=430&a=-1',
        orientation: 'vertical',
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