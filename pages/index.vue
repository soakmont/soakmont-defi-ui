<template>
  <div class="container-fluid d-flex">
    <div class="row m-auto">
      <div class="col">
        <div class="card text-center">
          <h4>WELCOME TO <b>SOAKMONT</b></h4>
          <p>Let's get started</p>
          <nuxt-link to="/about" class="btn btn-primary mb-2">
            About Soakmont
          </nuxt-link>
          <p>or</p>
          <nuxt-link to="/staking" class="btn btn-primary"> Staking </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Home - Soakmont DeFI Platform",
});
</script>
