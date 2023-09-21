<template>
  <div class="about">
    <p>This is an about page</p>

    <HelloWorldVue />
  </div>
</template>

<script>
import HelloWorldVue from "@/components/HelloWorld.vue";

export default {
  name: "about",
  components: { HelloWorldVue },
};
</script>
