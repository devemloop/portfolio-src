/* eslint-disable */
<template>
  <div class="config">
    <h2 class="page-title">
      <div class="icon normal config color"></div>
      <span>{{getTitle}}</span>
    </h2>
    <div class="page-content config">
      <div class="form">
        <div class="form-group" v-for="(select, index, key) in items"
        :key="key">
          <label :for="select.name">{{$t(select.name)}}</label>
          <div class="select__wrapper">
            <select
              :id="select.name.split('.')[1]"
              :name="$t(select.name).split(' ').join('')"
              class="select__wrapper_input input--action-input"
              @input="setConfig(select.name.split('.')[1])"
            >
              <option
                :selected="localStorage.getItem(
                  $t(select.name.split('.')[1])
                  .split(' ').join('').toLowerCase()) === option.value"
                :value="option.value"
                v-for="(option, index, key) in select.options"
                :key="key"
              >{{option.name}}
              </option>
            </select>
          </div>
        </div>
        <div class="form-group borderless">
          <div class="button acent big" id="resetConfig" @click="restoreConfig">
            {{$t('controls.reset')}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n';

const storage = window.localStorage;

export default {
  data() {
    return {
      items: [],
      context: 'config',
      localStorage: storage,
    };
  },
  mounted() {
    this.items = i18n.messages[i18n.locale][this.context];
  },
  methods: {
    restoreConfig() {
      window.location.reload();
      this.$store.commit('setlanguage', 'es_CO');
      this.$store.commit('settheme', 'default');
      this.$store.commit('setfontsize', 'normal');
    },
    setConfig(id) {
      const el = document.getElementById(id);
      el.addEventListener('change', () => {
        this.$store.commit(`set${id}`, el.value);
      });
      window.location.reload();
    },
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
