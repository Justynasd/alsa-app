<script lang="ts" setup>
const localePath = useLocalePath();
// const { locale, locales } = useI18n();
// const switchLocalePath = useSwitchLocalePath();
// const availableLocales = computed(() => {
//   return locales.value.filter((i) => i.code !== locale.value);
// });
</script>

<template>
  <div class="grid-container">
    <div class="grid-rows">
      <!-- <h2>Kontaktai</h2> -->
      <p>Žalgirio g. 131, LT-08217 Vilnius</p>
      <p>Tel. nr.: <a>+370 650 92099</a></p>
      <p>El. paštas: <a>info@alsa.lt</a></p>
    </div>
    <div>
      <NuxtImg
        src="https://maps.googleapis.com/maps/api/staticmap?center=54.705894337486754,25.27500567845598&zoom=13&size=400x200&markers=color:red%7Clabel:A%7C54.70602789728053,%2025.27445589843602&key=AIzaSyB33KxZK5XS66anT1AmdH2EDTz1YDnJDKE"
        @click="localePath('contacts')"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 1em; */
  /* background-color: #8fd89f; */
  /* padding: 10px; */
  text-align: center;
  padding: 2em 0;
  font-size: 1em;
}
.grid-rows {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  /* grid-gap: 1em; */
  /* background-color: #8fd89f; */
  /* padding: 10px; */
  text-align: center;
  padding: 2em 0;
  font-size: 1em;
}
</style>
