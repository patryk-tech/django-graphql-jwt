<template>
  <div>
    <h5>Login</h5>
    <q-form
      @reset="onReset"
      @submit="onSubmit"
    >
      <q-input
        outlined
        v-model="username"
        label="Username"
      />
      <q-input
        outlined
        v-model="password"
        label="Password"
        type="password"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat />
      </div>
    </q-form>
    <div>
      Token: {{ token }}
    </div>
  </div>
</template>

<script>
import { tokenAuth } from 'src/js/apollo-queries/home';

export default {
  data() {
    return {
      username: null,
      password: null,
      token: null,
    };
  },
  methods: {
    onReset() {
      this.username = null;
      this.password = null;
    },
    async onSubmit() {
      await this.$apollo.mutate({
        mutation: tokenAuth,
        variables: {
          username: this.username,
          password: this.password,
        },
      })
        .then((data) => {
          this.token = (data.data.tokenAuth.token);
          return this.token;
        });
    },
  },
};
</script>
