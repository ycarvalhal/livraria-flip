<template>
<section class="cart">
	<div class="cart__area">
		<h1 class="cart__title">Carrinho</h1>

		<p v-show="!products.length">
			<i>Seu carrinho está vazio!</i>
			<router-link to="/" class="cart__empty">Comprar</router-link>
		</p>

		<table class="cart__table table" v-show="products.length">
			<tr class="table__header">
				<th>Descrição</th>
				<th>Quantidade</th>
				<th>Subtotal</th>
				<th></th>
			</tr>

			<tr class="table__content" v-for="product in products">
				<td data-th="Descrição">{{ product.name }}</td>
				<td data-th="Quantidade">{{ product.quantity }}</td>
				<td data-th="Subtotal">R$ {{ (product.price * product.quantity).toFixed(2).replace('.', ',') }}</td>
				<td><button class="table__btn" @click="removeFromCart(product)">X</button></td>
			</tr>

			<tr class="table__total">
				<td>TOTAL</td>
				<td></td>
				<td>R$ {{ total.toFixed(2).replace('.', ',') }}</td>
				<td></td>
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
    'removeFromCart'
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

  &__table {
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
  }

  &__table th {
    display: none;
  }

  &__table td {
    display: block;
  }

  &__table tr {
    border: 1px solid;
  }

  &__table td:first-child {
    padding-top: .5em;

    
  }

  &__table th:first-child, &__table td:first-child {
    @media (min-width: 640px) {
      padding-left: 0;
    }
  }

  &__table td:last-child {
    padding-bottom: .5em;
  }

  &__table th:last-child, &__table td:last-child {
    @media (min-width: 640px) {
      padding-right: 0;
      width: 10%;
    }
  }

  &__table td:before {
    content: attr(data-th);
    font-weight: bold;
    width: 6.5em;
    margin: 0 auto;
    display: block;

    @media (min-width: 640px) {
       display: none;
    }
  }

  &__table th, &__table td {
    text-align: center;

    @media (min-width: 640px) {
      display: table-cell;
      padding: .25em .5em;
      text-align: center;
      border: 1px solid;
      width: 40%;
    }
  }

  &__table th:nth-child(2), &__table td:nth-child(2) {
    @media (min-width: 640px) {
      width: 10%;
    }
  }

  &__table .table__total td:nth-child(1) {
    border-right: none;
  }

  &__table .table__total td:nth-child(2) {
    border-left: none;
  }

  &__table th, &__table td {
    margin: .5em 1em;
    
    @media (min-width: 640px) {
      padding: 1em !important;
    }
  }

  .table__btn {
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
</style>