<template>
  <header class="header" id="header">
    <div class="header-info">
      <div class="header-info--item name">
        <div class="title">Edwin Marroquin</div>
      </div>
      <div class="header-info--item item subtitle">FrontEnd Developer</div>
      <div class="header-info--item item">
        <a class="header-info--item_link" href="tel:3142670224">
          <div class="icon small bell color animated infinite swing fast"></div>
          <span>{{$t('header.call')}}</span>
        </a>
      </div>
      <div class="header-info--item item">
        <a
          class="header-info--item_link"
          href="mailto:marrokin2@gmail.com?subject=Saludo DevEm&amp;body=Hola, queremos saludarte"
        >
          <div class="icon small mail color animated infinite pulse faster"></div>
          <span>{{$t('header.contact')}}</span>
        </a>
      </div>
    </div>
    <div class="header-image">
      <img class="header-image--img" src="@/assets/img/profile.png" alt="edwin marroquin" />
      <img class="header-image--logo"
      :src="[require(`@/assets/img/devem_${getlayoutStyle}.png`)]" alt="edwin marroquin" />
      <span class="header-image--info">@devemloop</span>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    getlayoutStyle() {
      const theme = this.$store.getters.gettheme;
      let style = 'light';
      if (theme === 'light') {
        style = 'dark';
      } else if (theme === 'dark') {
        style = 'light';
      }
      return style;
    },
  },
};
</script>
