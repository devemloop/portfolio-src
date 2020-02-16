<template>
  <div class="no-found">
    <h2 class="page-title">
      <div class="icon error normal color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content error">
      <span class="message">{{$t('general.message404')}}</span>
    </div>
  </div>
</template>
<script>
import i18n from '../i18n';

export default {
  data() {
    return {
      items: [],
      context: 'error',
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
