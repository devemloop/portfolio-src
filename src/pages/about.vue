<template>
  <div class="no-found">
    <h2 class="page-title">
      <div class="icon about normal color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content about">
      <ul class="list">
        <li class="list-item" v-for="(item, index, key) in items" :key="key">
          <h2 class="list-item--span_title" v-if="item.name">
            {{$t(`${context}[${index}]['name']`)}}
          </h2>
          <div class="list-item--span_content" v-if="item.content">
            {{$t(`${context}[${index}]['content']`)}}
          </div>
          <ul v-if="item.list" class="list-item--subitems">
            <li v-for="(sub, subindex, key) in item.list" :key="key">
              <h3 class="list-item--subitems_title">
                {{$t(`${context}[${index}]['list'][${subindex}]['name']`)}}
              </h3>
              <p class="list-item--subitems_content">
                {{$t(`${context}[${index}]['list'][${subindex}]['content']`)}}
              </p>
            </li>
          </ul>
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
      context: 'about',
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
