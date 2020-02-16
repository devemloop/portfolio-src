<template>
  <div class="friends">
    <h2 class="page-title">
      <div class="icon normal friends color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content friends">
      <ul class="list">
        <li class="list-item" v-for="(item, index, key) in items" :key="key">
          <div class="list-item--icon">
            <img :src="require(`@/assets/img/friends/${item.image}`)" />
          </div>
          <span class="list-item--span">
            <span class="name">{{$t(`${context}[${index}]['name']`)}}</span>
            <span class="job">{{$t(`${context}[${index}]['job']`)}}</span>
            <a
              :href="['mailto:' + $t(`${context}[${index}]['email']`)]"
              class="email"
            >{{$t(`${context}[${index}]['email']`)}}</a>
            <a
              :href="['tel:' + $t(`${context}[${index}]['phone']`)]"
              class="phone"
            >{{$t(`${context}[${index}]['phone']`)}}</a>
          </span>
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
      context: 'friends',
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
