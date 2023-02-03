<template>
  <div class="footer_padding">
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="pa-3 mt-3">
        <div class="d_play_desktop">
          <div class="d-flex">
            <div class="topic_profile_header border_right">จัดการข้อมูลส่วนตัว</div>
            <div class="topic_profile_content my-2">ข้อมูลส่วนตัว</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="topic_profile_content pl-0 my-2" style="font-size: 10px !important">ข้อมูลส่วนตัว</div>
          <div class="topic_profile_header" style="font-size: 14px; !important">จัดการข้อมูลส่วนตัว</div>
        </div>
        <div class="grid_card_half mt-2">
          <div class="ma-md-2 ma-lg-2 ma-xl-2">
            <v-card elevation="4" class="card_profile_content ma-md-5 ma-lg-5 ma-xl-5">
              <div class="logo_profile mx-auto">
                <img src="@/assets/icon/user_image_filled2.png">
              </div>
              <div class="title_name text-center my-3"><b>Max Smith</b></div>
              <v-divider class="ma-10 mt-5"/>
              <div class="ma-10">
                <div class="header_title"><b>สังกัดกอง/สำนัก</b></div>
                <div class="pa-3">
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">สังกัดกอง/สำนัก</div>
                    <div class="content_detail" style="color: #000000;">กองสาธารณสุขและสิ่งแวดล้อม</div>
                  </div>
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">ตำแหน่งประเภท</div>
                    <div class="content_detail" style="color: #000000;">อำนวยการท้องถิ่น</div>
                  </div>
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">ชื่อตำแหน่งในสายงาน</div>
                    <div class="content_detail" style="color: #000000;">นักบริหารงานสาธารณสุขและสิ่งแวดล้อม</div>
                  </div>
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">ระดับ</div>
                    <div class="content_detail" style="color: #000000;">ระดับต้น</div>
                  </div>
                </div>
              </div>
              <div class="ma-10">
                <div class="header_title"><b>ช่องทางติดต่อ</b></div>
                <div class="pa-3">
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">อีเมลติดต่อ</div>
                    <div class="content_detail" style="color: #000000;">email.email@gmail.com</div>
                  </div>
                  <div class="grid_content_detail my-3">
                    <div class="content_detail" style="color: #585B6B;">เบอร์โทรศัพท์</div>
                    <div class="content_detail" style="color: #000000;">089 650 7953</div>
                  </div>
                </div>
              </div>
            </v-card>
          </div>
          <div class="ma-md-2 ma-lg-2 ma-xl-2">
            <v-card elevation="4" class="card_profile_sub_content ma-md-5 ma-lg-5 ma-xl-5 mt-5">
              <v-card elevation="0" class="card_sub_content pa-5">
                <div class="content_edit_title">แก้ไขข้อมูลส่วนตัว</div>
              </v-card>
              <div class="ma-md-5 ma-lg-5 ma-xl-5 mt-10">
                <div class="edit_profile_image mx-auto my-auto" style="position: relative">
                  <img src="@/assets/icon/user_image_filled2.png" />
                  <div class="edit_pen_icon">
                    <v-btn icon class="btn_edit" style="background-color: #FD8F16">
                      <v-icon color="white">mdi-pencil</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
              <div class="ma-5">
                <div class="mt-6">
                  <div class="grid_full">
                    <div class="content_detail ml-5" style="color: #000000;">ชื่อ-นามสกุล</div>
                    <div class="pa-5">
                      <v-text-field color="#4EACDF" type="text" v-model="username" hide-details="auto" required style="border-radius: 10px" outlined placeholder="ชื่อ-นามสกุล"></v-text-field>
                    </div>
                  </div>
                  <div class="grid_half">
                    <div class="">
                      <div class="content_detail ml-5" style="color: #000000;">ชื่อ-นามสกุล</div>
                      <div class="pa-5">
                        <v-text-field color="#4EACDF" type="text" v-model="email" hide-details="auto" required style="border-radius: 10px" outlined placeholder="อีเมลติดต่อ"></v-text-field>
                      </div>
                    </div>
                    <div class="">
                      <div class="content_detail ml-5" style="color: #000000;">เบอร์โทรศัพท์</div>
                      <div class="pa-5">
                        <v-text-field color="#4EACDF" type="text" v-model="tel" hide-details="auto" required style="border-radius: 10px" outlined placeholder="เบอร์โทรศัพท์"></v-text-field>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pa-3 mt-md-16 mt-lg-16 mt-xl-16 text-center">
                  <v-btn elevation="4" color="#37AE46" class="btn_width" style="border-radius: 5px">
                    <div style="font-size: 16px;color: white;font-weight: 400;">บันทึก</div>
                  </v-btn>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  name: "profile_manage",
  data() {
    return {
      loading_page: false,
      username: 'Max Smith',
      email: 'email.email@gmail.com',
      tel: '0896507953',
    }
  },
}
</script>

<style scoped>
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.topic_profile_header {
  font-size: 24px;
  color: #000000;
}
.topic_profile_content {
  color: #7E7E7E;
  padding-left: 10px;
}
.grid_card_half {
  display: grid;
  grid-template-columns: 40% 60%;
}
.card_profile_content {
  background: #FCFCFC;
  border: 1px solid #F0F0F0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-top: 18% !important;
}
.card_profile_sub_content {
  background: #FCFCFC;
  border: 1px solid #F0F0F0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.card_sub_content {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), #4EACDF;
  border: 1px solid #4EACDF;
  border-radius: 10px;
}
.logo_profile {
  width: 200px;
  margin-top: -16%;
}

.logo_profile>img {
  max-width: 100%;
}
.title_name {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
}
.header_title {
  color: #000000;
  font-weight: 600;
  font-size: 16px;
}
.grid_content_detail {
  display: grid;
  grid-template-columns: 40% 60%;
}
.content_detail {
  font-weight: 400;
  font-size: 16px;
}
.content_edit_title {
  color: #FFFFFF;
  font-weight: 600;
  font-size: 24px;
}
.edit_profile_image {
  width: 200px;
}
.edit_profile_image>img {
  max-width: 100%;
}
.edit_pen_icon {
  position: absolute;
  top: 6%;
  bottom: 0;
  left: 0;
  right: -5%;
  text-align: right;
}
.grid_full {
  display: grid;
  grid-template-columns: 100%;
}
.grid_half {
  display: grid;
  grid-template-columns: 50% 50%;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
.btn_edit {
  width: 50px;
  height: 50px;
}
.btn_width {
  width: 25%;
}
@media only screen and (max-width: 1180px) {
  .grid_content_detail {
    display: grid;
    grid-template-columns: 100%;
  }
}
@media only screen and (max-width: 820px) {
  .grid_card_half {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_content_detail {
    display: grid;
    grid-template-columns: 40% 60%;
  }
}
@media only screen and (max-width: 500px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
  .logo_profile {
    width: 70px;
    margin-top: -12%;
  }
  .grid_content_detail {
    display: grid;
    grid-template-columns: 100%;
  }
  .content_edit_title {
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
  }
  .edit_profile_image {
    width: 70px;
  }
  .btn_edit {
    width: 26px;
    height: 26px;
  }
  .edit_pen_icon {
    position: absolute;
    top: 2%;
    bottom: 0;
    left: 0;
    right: -12%;
    text-align: right;
  }
  .grid_half {
    display: grid;
    grid-template-columns: 100%;
  }
  .btn_width {
    width: 70%;
  }
}
</style>
