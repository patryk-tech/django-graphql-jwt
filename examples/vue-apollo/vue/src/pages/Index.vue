<template>
  <q-page class="flex flex-center">
    {{ hello }}
  </q-page>
</template>

<script>
import { hello } from 'src/js/apollo-queries/home.js';

export default {
  name: 'PageIndex',
  apollo: {
    hello,
  },
};
</script>
