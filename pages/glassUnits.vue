<script setup>
// import Grid from '~~/components/TheGrid.vue';
// import { ref } from 'vue';

const searchQuery = ref('');
const gridColumns = [
  'name',
  'thickness',
  'heatTransfer',
  'lightTransmission',
  'lightReflection',
  'solarFactor',
];

const gridData = [
  { name: 'Vienos kameros stiklo paketas' },
  {
    name: '4 - 16Ar - 4 Low e',
    thickness: '24',
    heatTransfer: '1,12',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: '4 - 10Kr - 4 Low e*',
    thickness: '18',
    heatTransfer: '1,04',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
    thickness: '36',
    heatTransfer: '0,49',
    lightTransmission: '74',
    lightReflection: '14/14',
    solarFactor: '53',
  },
  {
    name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
    thickness: '44',
    heatTransfer: '0,58',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
    thickness: '52',
    heatTransfer: '0,52',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
    thickness: '58',
    heatTransfer: '0,30',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
  {
    name: 'Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
    thickness: '68',
    heatTransfer: '0,39',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
];

const gridDataSun = [
  { name: 'SUN Vienos kameros stiklo paketas' },
  {
    name: '4 - 16Ar - 4 Low e',
    thickness: '24',
    heatTransfer: '1,12',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: '4 - 10Kr - 4 Low e*',
    thickness: '18',
    heatTransfer: '1,04',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
    thickness: '36',
    heatTransfer: '0,49',
    lightTransmission: '74',
    lightReflection: '14/14',
    solarFactor: '53',
  },
  {
    name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
    thickness: '44',
    heatTransfer: '0,58',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'SUN Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
    thickness: '52',
    heatTransfer: '0,52',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'SUN Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
    thickness: '58',
    heatTransfer: '0,30',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
  {
    name: 'SUN Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
    thickness: '68',
    heatTransfer: '0,39',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
];

const gridDataStandart = [
  { name: 'STANDART Vienos kameros stiklo paketas' },
  {
    name: '4 - 16Ar - 4 Low e',
    thickness: '24',
    heatTransfer: '1,12',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: '4 - 10Kr - 4 Low e*',
    thickness: '18',
    heatTransfer: '1,04',
    lightTransmission: '82',
    lightReflection: '12/13',
    solarFactor: '65',
  },
  {
    name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 12Kr - 4 - 12Kr - 4 Low e 1.1*',
    thickness: '36',
    heatTransfer: '0,49',
    lightTransmission: '74',
    lightReflection: '14/14',
    solarFactor: '53',
  },
  {
    name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 16Ar - 4 - 16Ar - 4 Low e 1.1',
    thickness: '44',
    heatTransfer: '0,58',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'STANDART Dviejų kamerų stiklo paketas 4 Low e 1.1 - 20Ar - 4 - 20Ar - 4 Low e 1.1',
    thickness: '52',
    heatTransfer: '0,52',
    lightTransmission: '75',
    lightReflection: '16/16',
    solarFactor: '54',
  },
  {
    name: 'STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 14Kr - 4 - 14Kr - 4 Low e II - 14Kr - 4 Low e 1.1*',
    thickness: '58',
    heatTransfer: '0,30',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
  {
    name: 'STANDART Trijų kamerų stiklo paketas 4 Low e 1.1 - 18Ar - 4 - 14Ar - 4 Low e II - 18Ar - 4 Low e 1.1',
    thickness: '68',
    heatTransfer: '0,39',
    lightTransmission: '68',
    lightReflection: '19/19',
    solarFactor: '48',
  },
];

// {
//   {
//     $t('gridName');
//   }
// }
// {
//   {
//     $t('gridThickness');
//   }
// }
// {
//   {
//     $t('gridHeatTransfer');
//   }
// }
// {
//   {
//     $t('gridLightTransmission');
//   }
// }
// {
//   {
//     $t('gridLightReflection');
//   }
// }
// {
//   {
//     $t('gridSolarFactor');
//   }
// }
</script>

<template>
  <div>
    {{ $t('glassUnitsDesc') }}
  </div>

  <div class="grid-list-row">
    <div>
      <button @click="doSearch('standart')" class="logo">
        <nuxt-img src="standart_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('heat')" class="logo">
        <nuxt-img src="heat_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('sun')" class="logo">
        <nuxt-img src="sun_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('hammer')" class="logo">
        <nuxt-img src="hammer_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('mute')" class="logo">
        <nuxt-img src="mute_48.png" sizes="sm:48px" />
      </button>
    </div>
    <div>
      <button @click="doSearch('decor')" class="logo">
        <nuxt-img src="decor_48.png" sizes="sm:48px" />
      </button>
    </div>
  </div>

  <form id="search">Search <input name="query" v-model="searchQuery" /></form>
  <TheGrid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
  </TheGrid>
</template>

<style scoped>
.grid-list-row {
  /* position: relative; */
  display: flex;
  /* flex-wrap: wrap; */
  /* flex-direction: row; */
  margin-bottom: 2em;
  overflow-wrap: break-word;
  align-items: center;
}
</style>
