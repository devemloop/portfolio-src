<template>
  <div class="social">
    <h2 class="page-title">
      <div class="icon normal network color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content social">
      <div class="list">
        <a
          class="list-item"
          v-for="(item, index, key) in items"
          :key="key"
          :href="[$t(`${context}[${index}]['url']`)]"
          target="_new"
        >
          <div class="list-item--icon">
            <i :class="[$t(`${context}[${index}]['icon']`)]"></i>
          </div>
          <span class="list-item--span">
            <span>{{$t(`${context}[${index}]['name']`)}}</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from '../i18n';

export default {
  data() {
    return {
      items: [],
      context: 'network',
    };
  },
  mounted() {
    this.items = i18n.messages[i18n.locale][this.context];
  },
  computed: {
    getTitle() {
      const path = this.$route.path.split('/')[1];
      const context = 'menu';
      const titles = i18n.messages[i18n.locale][context];
      const title = titles.find((t) => (t.path === path ? t : null));
      return title.label;
    },
  },
};
</script>
