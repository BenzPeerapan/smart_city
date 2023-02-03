<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Sarabun&display=swap");

html,
body,
#app {
  font-family: 'Sarabun', sans-serif;
  font-size: 16px;

}
.v-text-field input::-webkit-outer-spin-button,
.v-text-field input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  margin: 0;
}
.v-text-field[type=number] {
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
}
.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,
.v-text-field label,
.v-text-field input,
.v-data-footer,
.v-data-footer__select .v-select__selections .v-select__selection--comma,
.v-list-item__title,
.v-card__subtitle, .v-card__text,
.v-btn.v-size--default {
  font-size: 18px !important;
}
.v-list .v-list-item--active {
  background-color: rgba(134,166,58,0.09) !important;
}
//.v-list .v-list-item--active .v-list-item__title {
//  color: #89b84b !important;
//}

a{
  text-decoration:none;
}
.footer_padding {
  padding-bottom: 0 !important;
}
.primary_color {
  color: #8cc63e;
}
.grad-primary-bg {
  background-image: linear-gradient(to right, #33b04a, #3fb455, #6abe78);
}
.grad-success-bg {
  background-image: linear-gradient(to right, #8cc63e, #86bc3a, #80b538);
}
.grad-sub_success-bg {
  background-image: linear-gradient(to right, #8cc63e, #96c65b, #aac681);
}
.grad-warning-bg {
  background-image: linear-gradient(to right, #F9A400, #ffab2f, #ffc373);
}
.grad-cancel-bg {
  background-image: linear-gradient(to right, #ac6100, #a06525, #cd8c54);
}
.grad-danger-bg {
  background-image: linear-gradient(to right, #eb5c5d, #ed6869, #ef7b7c);
}
.grad-danger-bg-outlined {
  background-color: white;
  border: red solid  1px;
  transition: 0.1s;
}
.grad-danger-bg-outlined:hover {
  background-color: #ff9696;
  transition: 0.1s;
}
.grad-bg-outlined {
  background-color: white !important;
  border: #bcbcbc solid  1px;
  transition: 0.1s;
}
.grad-bg-outlined:hover {
  background-image: linear-gradient(to right, #8cc63e, #96c65b, #aac681) !important;
  border: #96c65b solid  1px;
  color: white !important;
  transition: 0.1s;
}
.grad-bg-active {
  background-image: linear-gradient(to right, #8cc63e, #96c65b, #aac681) !important;
  border: #96c65b solid  1px;
  color: white !important;
  transition: 0.1s;
}
.grad-main-bg {
  background-image: linear-gradient(to right, #2b81d6, #418cc8, #65a1e3);
}
.grad-second-bg {
  background-image: linear-gradient(to right, #65a1e3, #7caeee, #8dbffa);
}
.grad-grey-bg {
  background-image: linear-gradient(to right, #6e6e6e, #868686, #9b9b9b);
}
.grid_tab {
  display: grid;
  grid-template-columns: 100%;
  padding: 15px;
}
.alert {
  margin: 0;
  position: fixed !important;
  z-index: 9999;
  top: 15px;
  right: 5px;
}
.z_index {
  z-index: 1000000 !important;
}
.bg_red_tag {
  background-color: red;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  padding: 6px;
}
.bg_warning_tag {
  background-color: #F9A400;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  padding: 6px;
}
.bg_success_tag {
  background-color: #8CC63E;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  padding: 6px;
}
.bg_refund_tag {
  background-color: #2F2F2E;
  color: white;
  border-radius: 25px;
  font-size: 14px;
  padding: 6px;
}
@media only screen and (max-width: 500px) {
  .bg_red_tag {
    background-color: red;
    color: white;
    border-radius: 25px;
    font-size: 10px;
    padding: 6px;
  }
  .bg_warning_tag {
    background-color: #F9A400;
    color: white;
    border-radius: 25px;
    font-size: 10px;
    padding: 6px;
  }
  .bg_success_tag {
    background-color: #8CC63E;
    color: white;
    border-radius: 25px;
    font-size: 10px;
    padding: 6px;
  }
  .bg_refund_tag {
    background-color: #2F2F2E;
    color: white;
    border-radius: 25px;
    font-size: 10px;
    padding: 6px;
  }
  .footer_padding {
    padding-bottom: 15% !important;
  }
}
.v-picker__title {
    color: #FFFFFF;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 16px;
    display: none !important;
}
</style>
