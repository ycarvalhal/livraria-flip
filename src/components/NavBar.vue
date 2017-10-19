<template>
<header class="header">
  <router-link to="/"  class="header__link">
    <h1 class="header__title">Livraria Flip</h1>
  </router-link>

  <nav class="nav">
    <router-link to="/"  class="nav__link nav__link--back" :class="{ 'nav__link--active': $route.path === '/cart' }">
      <img class="nav__media"  src="../assets/previous.svg">
    </router-link>	

    <router-link class="nav__link nav__link--cart" to='/cart'>
      <img class="nav__media"  src="../assets/shopping-cart.svg">
      <span class="cart" :class="{ 'cart--active':  itemsInCart > 0}">
        <span class="cart__count">{{ itemsInCart }}</span>
      </span>
    </router-link>
  </nav>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    itemsInCart(){
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  width: 90%;
  margin: 2% auto 2%;
  max-width: 1300px;
  font-family: 'Dosis', sans-serif;

  &__link {
    text-decoration: none;
  }

  &__title {
    margin: 0;
    color: #008b8b;
    font-size: 27px;
    line-height: 25px;
    position: absolute;
    left: 0;
    right: 0;

    @media only screen and (min-width: 450px) {
      font-size: 40px;
    }
  }
}

.nav {
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #008b8b;

  &__link {
    width: 25px;
    text-align: center;
    position: relative;

    &--back {
      display: none;
      margin-right: auto;
    }

    &--cart {
      margin-left: auto;
    }

  }

  &__media {
    width: 100%;
    display: block;
  }

  .cart {
    display: block;
    width: 15px; 
    height: 15px;
    position: absolute;
    color: #ffffff;
    background: #f44336;
    border-radius: 100%;
    top: -5px;
    right: -10px;
    display: none;

    &--active {
      display: block;
    }

    &__count {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 10px;
    }
  }
}

.nav__link--back.nav__link--active {
  display: block;
}
</style>