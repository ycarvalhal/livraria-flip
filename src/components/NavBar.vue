<template>
<header class="header">
  <nav class="nav">
    <router-link to="/"  class="nav__link nav__link--back" :class="{ 'nav__link--active': $route.path === '/cart' }">
      <img class="nav__media"  src="../assets/previous.svg">
    </router-link>	

    <router-link to="/"  class="nav__link nav__link--title">
      <h1 class="nav__title">Livraria Flip</h1>
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
  width: 100%;
  margin: 0 auto;
  font-family: 'Dosis', sans-serif;
  position: fixed;
  top: 0;
  height: 65px;
  background-color: #ffffff;

  &__link {
    text-decoration: none;
  }
}

.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #008b8b;

  &__title {
    width: 200px;
    margin: 0 auto;
    color: #008b8b;
  }

  &__link {
    width: 25px;
    text-align: center;
    position: relative;

    &--back {
      display: none;
      margin-right: auto;
      margin-left: 20px;
    }

    &--cart {
      margin-left: auto;
      margin-right: 20px;
    }

    &--title {
      width: 100%;
      display: block;
      position: absolute;
      text-decoration: none;
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