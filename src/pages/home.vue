<template>
  <div class="home">
    <h2 class="page-title">
      <div class="icon normal home color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <h3 class="page-content home">
      <ul class="list">
        <li class="list-item" v-for="(item, index, key) in items" :key="key">
          <h2 class="list-item--span_title">{{$t(`${context}[${index}]['name']`)}}</h2>
          <div class="list-item--span_content">{{$t(`${context}[${index}]['content']`)}}</div>
        </li>
      </ul>
    </h3>
  </div>
</template>

<script>
import i18n from '../i18n';

export default {
  data() {
    return {
      items: [],
      context: 'home',
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
