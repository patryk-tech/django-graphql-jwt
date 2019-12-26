<template>
  <q-page class="flex flex-center q-gutter-md">
    <section>
      {{ hello }}
    </section>
    <section>
      <login />
    </section>
  </q-page>
</template>

<script>
import { hello } from 'src/js/apollo-queries/home.js';

export default {
  name: 'PageIndex',
  apollo: {
    hello,
  },
  components: {
    Login: () => import('components/Login'),
  },
};
</script>
