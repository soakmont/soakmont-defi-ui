<template>
  <NuxtLayout name="base">
    <NuxtPage />
  </NuxtLayout>
  <div id="global-loader">
    <div class="loader-holder">
      <img class="icon" src="/icon.png" alt="Soakmont Gold Icon" />
      <img
        class="icon"
        src="@/assets/img/processing.gif"
        alt="Soakmont Gold Icon"
      />
    </div>
  </div>
</template>

<script>
if (process.client) {
  window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  });
}
</script>
