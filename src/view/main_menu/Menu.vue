<template>
  <div>
    <!-- Desktop -->
    <header class="d_play_desktop" style="margin-bottom: 125px">

      <v-app-bar
          color="#4EACDF"
          dark
          elevation="0"
          style="z-index: 5; position: fixed;"
      >
        <v-app-bar-nav-icon class="mr-5 ml-2">
          <div class="logo_list">
            <div class="logo">
              <img src="@/assets/icon/logo_color.png">
            </div>
          </div>
        </v-app-bar-nav-icon>

        <v-toolbar elevation="0" class="toolbar_width" style="background-color: #4EACDF">
          <v-tabs hide-slider v-model="tabs">
            <v-tab @click="tab_active(0)" :class="{'active' : tabs === 0}" style="color: white;margin-top: 15px;">Dashboard</v-tab>
            <v-tab @click="tab_active(1)" :class="{'active' : tabs === 1}" style="color: white;margin-top: 15px;">จัดการผู้ใช้งาน</v-tab>
            <v-tab @click="tab_active(2)" :class="{'active' : tabs === 2}" style="color: white;margin-top: 15px;">รับ - ส่งเอกสาร</v-tab>
            <v-tab @click="tab_active(3)" :class="{'active' : tabs === 3}" style="color: white;margin-top: 15px;">โครงการ</v-tab>
            <v-tab @click="tab_active(4)" :class="{'active' : tabs === 4}" style="color: white;margin-top: 15px;">การประชุม</v-tab>
<!--            <v-tab @click="tab_active(5)" :class="{'active' : tabs === 5}" style="color: white;margin-top: 15px;">การประเมิน</v-tab>-->
<!--            <v-tab @click="tab_active(6)" :class="{'active' : tabs === 6}" style="color: white;margin-top: 15px;">คลัง</v-tab>-->
            <v-tab @click="tab_active(5)" :class="{'active' : tabs === 5}" style="color: white;margin-top: 15px;">สารบัญไฟล์</v-tab>
            <v-tab @click="tab_active(6)" :class="{'active' : tabs === 6}" style="color: white;margin-top: 15px;display: none;">ข้อมูลส่วนตัว</v-tab>
          </v-tabs>
        </v-toolbar>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <div class="logo_bell">
            <img src="@/assets/icon/bell.png">
            <div class="notify">
              <div class="text-center py-1 notify_size">3</div>
            </div>
          </div>
        </v-btn>

        <div class="text-right pl-5">
          <div class="user_size">ชื่อผู้ใช้</div>
          <div class="user_size">ตำแหน่ง</div>
        </div>

        <div class="logo_user pl-3 pt-1 mx-auto cursor_pointer" @click="profile_page">
          <img src="@/assets/icon/user_image_png.png">
        </div>

      </v-app-bar>
      <v-app-bar color="#FFFFFF" class="mt-14 pa-2" style="z-index: 4; height: 75px; position: fixed;">
        <v-toolbar elevation="0">
          <template>
            <v-tabs-items v-model="tabs">
              <!-- #1 -->
              <v-tab-item>
                <section class="d-flex">
                  <router-link class="ma-2" to="/" exact :class="{'router-link-active': $route.path == '/'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/'}">รายงานภาพรวมองค์กร</div>
                  </router-link>
                  <router-link class="ma-2" to="/populationreport" :class="{'router-link-active': $route.path == '/populationreport'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/populationreport'}">รายงานการให้บริการประชาชน</div>
                  </router-link>
                </section>
              </v-tab-item>
              <!-- #2 -->
              <v-tab-item>
                <section class="d-flex">
                  <div class="ma-2">
                    <div class="pa-3 cursor_pointer card">รายงานภาพรวมองค์กร</div>
                  </div>
                  <div class="ma-2">
                    <div class="pa-3 cursor_pointer card">รายงานการให้บริการประชาชน</div>
                  </div>
                </section>
              </v-tab-item>
              <!-- #3 -->
              <v-tab-item>
                <section class="d-flex">
                  <v-menu transition="slide-y-transition" rounded offset-y>
                    <template v-slot:activator="{on, attrs}">
                      <div class="ma-2" v-bind="attrs" v-on="on" :class="{'router-link-active': $route.path == '/setupdocument'}">
                        <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/setupdocument'}">ตั้งค่าเอกสาร</div>
                      </div>
                    </template>
                    <v-list class="grid_menu_list">
                      <v-list class="pa-2 ma-4">
                        <v-list-item-title class="header_filter_title">วันที่อัปโหลด</v-list-item-title>
                        <v-list-item>
                          <router-link to="/setupdocument" class="ma-4 card_menu_list" :class="{'router-link-active': $route.path == '/setupdocument'}">
                            <v-list-item-title class="pa-3 filter_main_color" :class="{'color-active': $route.path == '/setupdocument'}">
                              <div class="d-flex">
                                <div class="logo_menu_list mx-auto my-auto mr-2">
                                  <img src="@/assets/icon/books.png">
                                </div>
                                <div class="py-1 menu_font_size">จัดการชนิดเอกสาร</div>
                              </div>
                            </v-list-item-title>
                          </router-link>
                          <div class="ma-4 card_menu_list">
                            <v-list-item-title class="pa-3 filter_main_color">
                              <div class="d-flex">
                                <div class="logo_menu_list mx-auto my-auto mr-2">
                                  <img src="@/assets/icon/urgency.png">
                                </div>
                                <div class="py-1 menu_font_size">จัดการความเร่งด่วน</div>
                              </div>
                            </v-list-item-title>
                          </div>
                          <div class="ma-4 card_menu_list">
                            <v-list-item-title class="pa-3 filter_main_color">
                              <div class="d-flex">
                                <div class="logo_menu_list mx-auto my-auto mr-2">
                                  <img src="@/assets/icon/top-secret.png">
                                </div>
                                <div class="py-1 menu_font_size">จัดการชั้นของหนังสือลับ</div>
                              </div>
                            </v-list-item-title>
                          </div>
                        </v-list-item>
                      </v-list>
                      <v-list class="pa-2 ma-4 mt-0">
                        <v-list-item-title class="header_filter_title">จัดการเอกสาร</v-list-item-title>
                        <v-list-item>
                          <div class="ma-4 card_menu_list">
                            <v-list-item-title class="pa-3 filter_main_color">
                              <div class="d-flex">
                                <div class="logo_menu_list mx-auto my-auto mr-2">
                                  <img src="@/assets/icon/folder_document.png">
                                </div>
                                <div class="py-1 menu_font_size">จัดการรูปแบบเอกสาร</div>
                              </div>
                            </v-list-item-title>
                          </div>
                          <div class="ma-4 card_menu_list">
                            <v-list-item-title class="pa-3 filter_main_color">
                              <div class="d-flex">
                                <div class="logo_menu_list mx-auto my-auto mr-2">
                                  <img src="@/assets/icon/examination.png">
                                </div>
                                <div class="py-1 menu_font_size">จัดการลำดับการตรวจสอบเอกสาร</div>
                              </div>
                            </v-list-item-title>
                          </div>
                        </v-list-item>
                      </v-list>
                    </v-list>
                  </v-menu>
                  <div class="ma-2">
                    <div class="pa-3 cursor_pointer card">การรับเข้า - ส่งออกเอกสาร</div>
                  </div>
                  <router-link class="ma-2" to="/listdocumentpeding" :class="{'router-link-active': $route.path == '/listdocumentpeding' || $route.path == '/detaillistdocumentpeding/' + this.$route.params.id || $route.path == '/detaillistdocumentpedingcent/' + this.$route.params.id}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/listdocumentpeding' || $route.path == '/detaillistdocumentpeding/' + this.$route.params.id || $route.path == '/detaillistdocumentpedingcent/' + this.$route.params.id }">รายการเอกสารรอตรวจสอบ</div>
                  </router-link>
                </section>
              </v-tab-item>
              <!-- #4 -->
              <v-tab-item>
                <section class="d-flex">
                  <router-link class="ma-2" to="/projectall" :class="{'router-link-active': $route.path == '/projectall'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/projectall'}">โครงการทั้งหมด</div>
                  </router-link>
                  <div class="ma-2">
                    <div class="pa-3 cursor_pointer card">สร้างโครงการใหม่</div>
                  </div>
                  <router-link class="ma-2" to="/projectreport" :class="{'router-link-active': $route.path == '/projectreport'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/projectreport'}">รายงานโครงการ</div>
                  </router-link>
                  <div class="ma-2">
                    <div class="pa-3 cursor_pointer card">ตั้งค่าการจัดตั้งโครงการ</div>
                  </div>
                </section>
              </v-tab-item>
              <!-- #5 -->
              <v-tab-item>
                <section class="d-flex">
                  <router-link class="ma-2" to="/meetinglist" :class="{'router-link-active': $route.path == '/meetinglist' || $route.path == '/meetingdetail'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/meetinglist' || $route.path == '/meetingdetail'}">รายการการประชุม</div>
                  </router-link>
                  <router-link class="ma-2" to="/activityachedule" :class="{'router-link-active': $route.path == '/activityachedule' || $route.path == '/activityacheduledetail'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/activityachedule' || $route.path == '/activityacheduledetail'}">ตารางกิจกรรม</div>
                  </router-link>
                </section>
              </v-tab-item>
              <!-- #6 -->
<!--              <v-tab-item>-->
<!--                <section class="d-flex">-->
<!--                  <div class="ma-2">-->
<!--                    <div class="pa-3 cursor_pointer card">รายงานภาพรวมองค์กร</div>-->
<!--                  </div>-->
<!--                  <div class="ma-2">-->
<!--                    <div class="pa-3 cursor_pointer card">รายงานการให้บริการประชาชน</div>-->
<!--                  </div>-->
<!--                </section>-->
<!--              </v-tab-item>-->
              <!-- #7 -->
<!--              <v-tab-item>-->
<!--                <section class="d-flex">-->
<!--                  <div class="ma-2">-->
<!--                    <div class="pa-3 cursor_pointer card">รายงานภาพรวมองค์กร</div>-->
<!--                  </div>-->
<!--                  <div class="ma-2">-->
<!--                    <div class="pa-3 cursor_pointer card">รายงานการให้บริการประชาชน</div>-->
<!--                  </div>-->
<!--                </section>-->
<!--              </v-tab-item>-->
              <!-- #8 (ไม่มี) -->
              <v-tab-item></v-tab-item>
              <!-- #9 -->
              <v-tab-item>
                <section class="d-flex">
                  <div class="ma-2" :class="{'router-link-active': $route.path == '/profilemanage'}">
                    <div class="pa-3 cursor_pointer card" :class="{'color-active': $route.path == '/profilemanage'}">จัดการข้อมูลส่วนตัว</div>
                  </div>
                </section>
              </v-tab-item>
            </v-tabs-items>
          </template>
        </v-toolbar>

      </v-app-bar>

    </header>
    <!-- Mobile -->
    <header class="d_play_mobile" style="margin-bottom: 110px">
      <v-app-bar class="header_mobile">
        <v-app-bar-nav-icon class="mx-auto">
          <div class="logo_list_mobile">
            <div class="logo_mobile">
              <img src="@/assets/icon/logo_color.png">
            </div>
          </div>
        </v-app-bar-nav-icon>

        <div class="header_search">
          <v-btn icon>
            <v-icon color="white">mdi-magnify</v-icon>
          </v-btn>
        </div>

      </v-app-bar>
    </header>
    <footer class="bottom_navigation_all d_play_mobile">
      <v-bottom-navigation absolute height="52" style="border-top: 1px solid #F0F0F0">
        <v-btn>
          <span class="footer_name">หน้าแรก</span>
          <v-icon size="20">mdi-home-outline</v-icon>
        </v-btn>
        <v-btn>
          <span class="footer_name">แจ้งเตือน</span>
          <v-icon size="20">mdi-bell-outline</v-icon>
        </v-btn>
        <v-btn>
          <span class="footer_name">ข้อมูลส่วนตัว</span>
          <v-icon size="20">mdi-account-outline</v-icon>
        </v-btn>
        <v-btn>
          <span class="footer_name">เมนู</span>
          <v-icon size="20">mdi-menu</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      tabs: this.$store.state.state_tabs,
      items: [
        'Dashboard', 'จัดการผู้ใช้งาน', 'รับ - ส่งเอกสาร', 'โครงการ', 'การประชุม', 'การประเมิน', 'คลัง',
      ],
    }
  },
  methods: {
    tab_active(tabs) {
      this.tabs = tabs
      if (tabs === 5) {
        this.$router.push('/filecontentmanage')
      }
    },
    profile_page() {
      this.tab_active(6)
      this.$router.push('/profilemanage')
    },
  },
  watch: {
    tabs: function() {
      this.$store.commit('temp_tabs', {
        tabs: this.tabs
      })
    },
  }
}
</script>

<style scoped>
.active {
  color: black !important;
  background-color: #FFFFFF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.logo_list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.logo_list>.logo {
  padding: 1px;
  padding-top: 22px;
  width: 56px;
}

.logo_list>.logo>img {
  max-width: 100%;
}

.logo_list_mobile {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.logo_list_mobile>.logo_mobile {
  padding-top: 25px;
  width: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.logo_list_mobile>.logo_mobile>img {
  max-width: 100%;
}

.logo_bell {
  width: 24px;
  height: 24px;
}

.logo_bell>img {
  max-width: 100%;
}

.logo_user {
  width: 46px;
}

.logo_user>img {
  max-width: 46px;
}

.cursor_pointer {
  cursor: pointer;
}

.card {
  color: #9699A7;
  font-size: 16px !important;
}

.card:hover {
  color: #4EACDF;
  font-size: 16px !important;
  background-color: #F4F6FA;
  border-radius: 10px;
}

.router-link-active {
  font-size: 16px !important;
  background-color: #F4F6FA;
  border-radius: 10px;
}

.color-active {
  color: #4EACDF !important;
}

.notify {
  position: absolute;
  top: -30%;
  bottom: 35%;
  left: 40%;
  right: 15%;
  border-radius: 50%;
  background-color: #E60023;
}

.notify_size {
  font-weight: 500;
  font-size: 12px;
}

.user_size {
  font-weight: 600;
  font-size: 14px;
}
.bottom_navigation_all {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 5;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
.footer_name {
  color: #9699A7;
  font-weight: 400;
  font-size: 10px;
}
.header_mobile {
  position: fixed;
  z-index: 5;
  background-color: #4EACDF !important;
  padding-top: 10%;
  padding-bottom: 20%;
  border-bottom-right-radius: 50px !important;
  border-bottom-left-radius: 50px !important;
}
.header_search {
  position: absolute;
  top: 25%;
  bottom: 0;
  left: 0;
  right: 5%;
  text-align: right !important;
}
.toolbar_width {
  width: 100% !important;
}
.grid_menu_list {
  display: grid;
  grid-template-columns: 100%;
}
.header_filter_title {
  color: #585B6B;
  font-weight: 600;
  font-size: 14px;
}
.filter_main_color {
  font-weight: 400;
  font-size: 14px;
  color: #9699A7;
  cursor: pointer;
}
.filter_main_color:hover {
  font-weight: 400;
  font-size: 14px;
  color: #4EACDF;
  cursor: pointer;
}
.card_menu_list {
  color: #9699A7;
  font-weight: 400;
  font-size: 14px !important;
}

.card_menu_list:hover {
  color: #4EACDF;
  font-weight: 400;
  font-size: 14px !important;
  background-color: #F4F6FA;
  border-radius: 10px;
}
.menu_font_size {
  color: #9699A7;
  font-weight: 400;
  font-size: 14px;
}
.logo_menu_list {
  width: 18px;
}
.logo_menu_list>img {
  max-width: 100%;
}
@media only screen and (max-width: 1180px) {
  .toolbar_width {
    width: 50% !important;
  }
}
@media only screen and (max-width: 820px) {
  .logo_menu_list {
    width: 14px;
  }
  .logo_menu_list>img {
    max-width: 100%;
  }
  .card_menu_list {
    color: #9699A7;
    font-weight: 400;
    font-size: 12px !important;
  }

  .card_menu_list:hover {
    color: #4EACDF;
    font-weight: 400;
    font-size: 12px !important;
    background-color: #F4F6FA;
    border-radius: 10px;
  }
  .menu_font_size {
    color: #9699A7;
    font-weight: 400;
    font-size: 12px;
  }
}
@media only screen and (max-width: 500px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
}
</style>
