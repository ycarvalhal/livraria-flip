<template>
<section class="cart">
	<div class="cart__area">
		<h1 class="cart__title">Carrinho</h1>

		<p v-show="!products.length">
			<i>Seu carrinho está vazio!</i>
			<router-link to="/" class="cart__empty">Comprar</router-link>
		</p>

		<table class="cart__table table" v-show="products.length">
			<tr class="table__row">
				<th class="table__header">Descrição</th>
				<th class="table__header">Quantidade</th>
				<th class="table__header">Subtotal</th>
				<th class="table__header"></th>
			</tr>

			<tr class="table__row" v-for="product in products">
				<td class="table__cell" data-th="Descrição">{{ product.name }}</td>
				<td class="table__cell" data-th="Quantidade">
            <button class="table__btn" @click="removeOneFromCart(product)">-</button>
            
            {{ product.quantity }}

            <button class="table__btn" @click="addToCart(product)">+</button>
        </td>
				<td class="table__cell" data-th="Subtotal">R$ {{ (product.price * product.quantity).toFixed(2).replace('.', ',') }}</td>
				<td class="table__cell"><button class="table__btn-remove" @click="removeFromCart(product)">X</button></td>
			</tr>

			<tr class="table__row table__row--total">
				<td class="table__cell">TOTAL</td>
				<td class="table__cell"></td>
				<td class="table__cell">R$ {{ total.toFixed(2).replace('.', ',') }}</td>
				<td class="table__cell"></td>
			</tr>
		</table>
	</div>
</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: mapActions([
    'addToCart',
    'removeFromCart',
    'removeOneFromCart'
  ])
}
</script>

<style lang="scss">
.cart {
	width: 90%;
	margin: 0 auto;
	color: #008b8b;
  font-family: 'Dosis', sans-serif;

  &__area {
    text-align: center;
  }

  &__empty {
    text-decoration: none;
    position: relative;
    color: #551a8b;

    &:hover {
      &:before {
        width: 100%;
        transition: .3s ease;
      }
    }

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      display: block;
      width: 0;
      height: 1px;
      left: 0;
      background-color: #551a8b;
      transition: .3s ease;

    }

    &:after {
      content: "";
      display: inline-block;
      margin: auto auto 0 .25em;
      width: 0;
      height: 0;
      border-left: 5px solid #551a8b;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      vertical-align: baseline;
      transition: .3s ease;
    }
  }
}

.table {
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  border: 1px solid;
  border-collapse: collapse;

  &__header {
    display: none;
  }

  &__cell {
    display: block;
  }

  &__row {
    border: 1px solid;
  }

  &__cell:first-child {
    padding-top: .5em;
  }

  &__row--total {
    .table__cell:nth-child(1) {
      border-right: none;
    }

    .table__cell:nth-child(2) {
      border-left: none;
    }
  }

  &__header:first-child, &__cell:first-child {
    @media (min-width: 640px) {
      padding-left: 0;
    }
  }

  &__cell:last-child {
    padding-bottom: .5em;
  }

  &__header:last-child, &__cell:last-child {
    @media (min-width: 640px) {
      padding-right: 0;
      width: 10%;
    }
  }

  &__cell:before {
    content: attr(data-th);
    font-weight: bold;
    width: 6.5em;
    margin: 0 auto;
    display: block;

    @media (min-width: 640px) {
       display: none;
    }
  }

  &__header, &__cell {
    text-align: center;

    @media (min-width: 640px) {
      display: table-cell;
      padding: .25em .5em;
      text-align: center;
      border: 1px solid;
      width: 40%;
    }
  }

  &__header:nth-child(2), &__cell:nth-child(2) {
    @media (min-width: 640px) {
      width: 10%;
    }
  }

  &__header, &__cell {
    margin: .5em 1em;
    
    @media (min-width: 640px) {
      padding: 1em !important;
    }
  }

  &__btn {
    color: #008b8b;
    border: 1px solid #008b8b;
    background-color: #ffffff;
    margin: 0 5%;
    font-size: 16px;
    transition: .3s ease;

    &:hover {
      color: #ffffff;
      border: 1px solid #ffffff;
      background-color: #008b8b;
      cursor: pointer;
      transition: .3s ease;
    }
  }

  &__btn-remove {
    background-color: #f44336;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    font-weight: bold;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: .3s ease;

    &:hover {
      border: 1px solid #f44336;
      background-color: #ffffff;
      color: #f44336;
      transition: .3s ease;
    }
  }
}
</style>