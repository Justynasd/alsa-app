<script lang="ts" setup>
const localePath = useLocalePath();
// const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// const availableLocales = computed(() => {
//   return locales.value.filter((i) => i.code !== locale.value);
// });
</script>

<template>
  <div class="grid-container">
    <!-- LOGOTIPAS VIETOJE HOME PAGE -->
    <!-- <NuxtLink :to="localePath('index')">{{ $t('home') }}</NuxtLink> -->
    <div class="logo">
      <NuxtLink to="/"
        ><nuxt-img src="alsa-logo.png" sizes="sm:100px"
      /></NuxtLink>
    </div>

    <div class="container">
      <div>
        <NuxtLink class="nav-link link-one" :to="localePath('about')">{{
          $t('about')
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink class="nav-link link-one" :to="localePath('glassUnits')">{{
          $t('glassUnits')
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink class="nav-link link-one" :to="localePath('glassProducts')">{{
          $t('glassProducts')
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink class="nav-link link-one" :to="localePath('career')">{{
          $t('career')
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink class="nav-link link-one" :to="localePath('contacts')">{{
          $t('contacts')
        }}</NuxtLink>
      </div>
      <div>
        <NuxtLink
          class="nav-link link-one nav-lang"
          :to="switchLocalePath('en')"
          >EN</NuxtLink
        >
        <NuxtLink
          class="nav-link link-one nav-lang"
          :to="switchLocalePath('lt')"
          >LT</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: right;
  margin-top: 0px;
  padding: 0;
  margin: 1em 0;
}

.logo {
  max-height: 36px;
  margin-top: 0px;
  padding: 0;
  margin: 7px 0;
}

.grid-container {
  display: grid;
  /* grid-template-columns: 1fr, 6fr;
  grid-template-columns: repeat(7, 1fr); */
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1em;
  /*background-color: #8fd89f;
  text-align: center;
  padding: 2em 0; */
}

/* .nav-lang { */
/* text-align: center;
  align-items: center; */
/* padding-right: 0.5em; */
/* padding-left: 0.5em; */
/* } */

.nav-link {
  font-size: 1.2em;
  font-family: 'Roboto';
  text-decoration: none;
  text-transform: uppercase;
  padding-right: 1em;
  padding-left: 1em;
}
.link-one {
  color: #42b983;
  /* color: #53d9d1; */
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
}

.link-one:hover {
  color: #111;
  transition: color 1s cubic-bezier(0.33, 1, 0.68, 1);
}

/* .link-one:hover:not(.active) {
  background-color: #04aa6d;
}

.active {
  background-color: #111;
} */
</style>
