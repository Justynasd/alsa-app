<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="home-image">
    <div class="row justify-content-center align-self-center">
      <h2 class="intro">
        {{ $t('intro') }}
        <NuxtLink :to="localePath('glassUnits')">{{ $t('more') }}</NuxtLink>
      </h2>
    </div>
  </div>
</template>

<style scoped>
.intro {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: 0 0 20px 0;
  padding: 0;
  /* color: #7e7a91; */
  color: #53d9d1;
  margin-bottom: 40px;
  font-size: 42px;
  font-weight: 700;
}
.align-self-center {
  align-self: center !important;
}
.justify-content-center {
  justify-content: center !important;
}
.row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.home-text {
  /* font-family: 'Montserrat', sans-serif; */
  font-size: 3em;
  font-weight: 600;
  vertical-align: middle;
  /* text-transform: uppercase; */
  /* letter-spacing: 1px; */
  /* display: inline-block; */
  /* padding: 10px 32px; */
  /* border-radius: 4px; */
  /* transition: 0.5s; */
  /* color: #fff; */
  /* background: #1bb1dc; */
  /* color: #fff; */
}
.home-image {
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),    url('/img/home2.jpg'); */
  background: url('/img/home2.jpg') center top no-repeat;
  /* height: 100%; */
  height: 40vh;
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  background-size: cover;
  display: flex !important;
  /* position: relative; */

  /* margin-top: 80px;
    width: 100%;
    height: 80vh;
    position: relative;
    background: #f5f8fd url(../img/SFinWhite.png) center top no-repeat;
    background-size: cover; */
}
</style>
