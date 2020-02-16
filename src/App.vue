<template>
  <div id="app" :lang="getLocale" :class="getClasses">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.2/devicon-colors.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"/>
    <headerComponent/>
    <mainComponent/>
    <footerComponent/>
    <navigateComponent/>
  </div>
</template>
<script>
import headerComponent from '@/components/headerComponent.vue';
import mainComponent from '@/components/mainComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import navigateComponent from '@/components/navigateComponent.vue';

export default {
  name: 'App',
  components: {
    headerComponent,
    mainComponent,
    footerComponent,
    navigateComponent,
  },
  methods: {
    getTheme() { return this.$store.getters.gettheme; },
    getFontSize() { return this.$store.getters.getfontsize; },
  },
  computed: {
    getLocale() { return this.$store.getters.getlanguage; },
    getClasses() { return `${this.getTheme()} ${this.getFontSize()}`; },
  },
};
</script>
