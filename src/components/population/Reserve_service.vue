<template>
  <v-app>
    <header style="padding-bottom: 90px">
      <v-app-bar
          color="#4EACDF"
          dark
          elevation="0"
          style="z-index: 5; position: fixed;"
          height="75px"
      >
        <v-app-bar-nav-icon class="ma-3 ml-0 mr-5">
          <div class="logo_list">
            <div class="logo">
              <img src="@/assets/icon/logo_color.png" alt="">
            </div>
          </div>
        </v-app-bar-nav-icon>

        <div>
          <div class="header_size">จองคิวใช้บริการ</div>
        </div>

      </v-app-bar>
    </header>
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="ma-3">
        <v-card elevation="4" class="card_problems pa-3">
          <div class="header_title">กรุณากรอกแบบฟอร์มเพื่อดำเนินการ</div>
          <div class="ma-3 mb-0">
            <div class="ml-2 mb-1">ท่านต้องการจองใช้บริการ<span class="red--text">*</span></div>
            <v-select clearable background-color="white" :items="CommunityList" item-text="name" item-value="id" v-model="Community" style="border-radius: 15px" outlined placeholder="กรุณาเลือกการใช้บริการของท่าน"></v-select>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">วันที่<span class="red--text">*</span></div>
            <v-select clearable background-color="white" :items="CommunityList" item-text="name" item-value="id" v-model="Community" style="border-radius: 15px" outlined placeholder="กรุณาเลือกวันและช่วงเวลาในการใช้บริการ"></v-select>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">ชื่อ-สกุล ผู้รับบริการ<span class="red--text">*</span></div>
            <v-text-field clearable background-color="white" style="border-radius: 15px" outlined placeholder="กรุณากรอกชื่อและนามสกุล"></v-text-field>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">หมายเลขบัตรประชาชน<span class="red--text">*</span></div>
            <v-text-field clearable background-color="white" style="border-radius: 15px" outlined placeholder="กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก"></v-text-field>
          </div>
          <div class="pa-2 mt-4 text-center">
            <v-btn elevation="4" class="accept_btn" style="border-radius: 15px">
              <div style="font-size: 14px;color: white">คลิกเพื่อยืนยันการจองคิว</div>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Reserve_service",
  data() {
    return {
      loading_page: false,
      Community: null,
      CommunityList: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
        {id: 3, name: 'C'},
        {id: 4, name: 'D'},
      ],
    }
  }
}
</script>

<style scoped>
.logo_list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.logo_list>.logo {
  padding-top: 25px;
  width: 56px;
}
.logo_list>.logo>img {
  max-width: 100%;
}
.header_size {
  font-weight: 700;
  font-size: 22px;
  color: #FFFFFF;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}
.header_title {
  font-weight: 700;
  font-size: 16px;
  color: #4D4D4D;
}
.card_problems {
  background-color: #F0F0F0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.accept_btn {
  width: 100%;
  background: linear-gradient(90deg, rgb(50 100 154), rgb(56 112 165), rgb(81 162 210));
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
</style>
