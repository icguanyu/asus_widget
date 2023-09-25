<template>
  <div class="about">
    <p>This is an about page</p>
    <a href="https://asus-chat-hyyvhv2yda-de.a.run.app/#/?country=TW">Link</a>
    <br />
    <a
      href="https://asus-chat-hyyvhv2yda-de.a.run.app/#/?country=TW"
      target="_blank"
      >Blank</a
    >
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
