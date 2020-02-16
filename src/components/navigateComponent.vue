<template>
  <nav class="nav" id="nav">
    <ul class="nav-items" id="routes">
      <router-link
        tag="li"
        class="nav-items--item"
        active-class="active"
        exact-active-class
        v-for="(item, index, key) in items"
        :key="key"
        :to="$t(`${context}[${index}]['path']`)"
      >
        <div class="nav-items--item_link">
          <i
            :class="[ 'icon small', $t(`${context}[${index}]['icon']`),
            '/'+$t(`${context}[${index}]['path']`) === $route.path ? 'color' : 'acent',
            getlayoutStyle
            ]"
          ></i>
          <span class="span">{{$t(`${context}[${index}]['label']`)}}</span>
        </div>
      </router-link>
    </ul>
  </nav>
</template>

<script>

import i18n from '../i18n';

export default {
  data() {
    return {
      items: [],
      context: 'menu',
    };
  },
  mounted() {
    this.items = i18n.messages[i18n.locale][this.context];
  },
  computed: {
    getlayoutStyle() {
      const theme = this.$store.getters.gettheme;
      let style = 'default';
      if (theme === 'light') {
        style = 'default';
      } else if (theme === 'dark') {
        style = 'light';
      }
      return style;
    },
  },
  methods: {
  },
};
</script>
