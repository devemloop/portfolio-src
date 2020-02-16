<template>
  <div class="skills">
    <h2 class="page-title">
      <div class="icon normal skills color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content skills">
      <ul class="list">
        <li class="list-item" v-for="(item, index, key) in items" :key="key">
          <div class="list-item--icon">
            <i :class="[$t(`${context}[${index}]['icon']`)]"></i>
          </div>
          <span class="list-item--span">{{$t(`${context}[${index}]['skill']`)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import i18n from '../i18n';

export default {
  data() {
    return {
      items: [],
      context: 'skills',
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
