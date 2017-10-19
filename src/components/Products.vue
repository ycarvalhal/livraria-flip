<template>
  <section class="product">
		<div class="product__area" v-for="product in products" track-by="id">
			<div class="product__box">
				<h2 class="product__title">{{ product.name }}</h2>
				<div class="product__content">
					<div class="product__media">
						<img :src="product.photo.url" class="product__photo" :class="{ 'product__photo--horizontal': product.photo.orientation === 'horizontal' }">
					</div>

					<div class="product__info">
						<p class="product__description">{{ product.description }}</p> <span v-show="product.description.length > 55">...</span>
						<p class="product__price">R$ {{ product.price.toFixed(2).replace('.', ',') }}</p>
					</div>
				</div>

				<button class="product__btn" @click="addToCart(product)">Adicionar ao carrinho</button>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>

<style lang="scss">
.product {
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	max-width: 1300px;
	font-family: 'Dosis', sans-serif;

	&__area {
		width: calc(30% - 2px);
		text-align: center;
		border: 1px solid #008b8b;
		color: #008b8b;
		min-width: 350px;
		margin-bottom: 5%;
		margin-right: auto;

		&:nth-child(3n) {
			margin-right: 0;
		}
	
		@media only screen and (max-width: 1380px) {
			width: 49%;

			&:nth-child(3n) {
				margin-right: auto;
			}
		}

		@media only screen and (max-width: 950px) {
			width: 100%;
		}

		@media only screen and (max-width: 500px) {
			min-width: initial;
		}

	}

	&__box {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
	}

	&__title {
		margin: 0;
		font-size: 22px;
		margin-top: 5%;
		padding: 0 2%;
		text-transform: uppercase;
		font-family: 'Dosis', sans-serif;
	}

	&__content {
		display: flex;
		margin: 5% auto;
		align-items: center;
		width: 95%;
		height: auto;
		text-align: left;

		@media only screen and (max-width: 500px) {
			flex-wrap: wrap;
		}
	}

	&__media, &__info {
		width: 50%;

		@media only screen and (max-width: 500px) {
			width: 95%;
			margin: 5% auto;
			text-align: center;
		}
	}

	&__photo {
		width: 100%;
		display: block;
		max-width: 90px;
		max-height: 120px;
		margin: 0 auto;

		&--horizontal {
			max-width: 120px;
			max-height: 90px;
		}
	}

	&__description {
		margin-bottom: 0%;
		letter-spacing: 2px;
		font-size: 12px;
		overflow: hidden;
		height: 40px;

		&--active {
			&:after {
				content: '...';
			}
		}
	}

	&__price {
		font-weight: bold;
		font-size: 15px;
	}

	&__btn {
		font-family: 'Dosis', sans-serif;
		width: 100%;
		border: 0;
		padding: 10px 0;
		background: #008b8b;
		border-top: 1px solid #008b8b;
		border-bottom: 1px solid #008b8b;
		margin-bottom: -1px;
		color: white;
		font-size: 12px;
		text-transform: uppercase;
		font-weight: bold;
		cursor: pointer;
		transition: .3s all;

		&:hover {
			background-color: white;
			color: #008b8b;
			transition: all .3s all;
		}
	}
}
</style>