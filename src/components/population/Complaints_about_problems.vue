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
          <div class="header_size">ร้องเรียนปัญหา</div>
          <div class="header_sub" style="margin-top: 3%">เพื่อปรับปรุง แก้ไข พื้นที่เทศบาล</div>
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
            <div class="ml-2 mb-1">ชุมชน<span class="red--text">*</span></div>
            <v-select clearable background-color="white" :items="CommunityList" item-text="name" item-value="id" v-model="Community" style="border-radius: 15px" outlined placeholder="กรุณาเลือกชุมชน"></v-select>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">ประเภทปัญหา<span class="red--text">*</span></div>
            <v-select clearable background-color="white" :items="CommunityList" item-text="name" item-value="id" v-model="Community" style="border-radius: 15px" outlined placeholder="กรุณาเลือกหัวข้อปัญหา"></v-select>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">บริเวณใกล้เคียงที่เป็นจุดสังเกตุ<span class="red--text">*</span></div>
            <v-text-field clearable background-color="white" style="border-radius: 15px" outlined placeholder="เช่น ใกล้สถานที่สำคัญใด , อยู่ในซอย ..... ฯลฯ"></v-text-field>
          </div>
          <div class="ma-3 mt-n3 mb-0">
            <div class="ml-2 mb-1">ปัญหาที่ท่านต้องการแจ้ง<span class="red--text">*</span></div>
            <v-textarea clearable background-color="white" :items="CommunityList" item-text="name" item-value="id" v-model="Community" style="border-radius: 15px" outlined
                          placeholder="กรุณากรอกรายละเอียดปัญหาที่เกิดขึ้นเพื่อให้เทศบาลได้ทำการแก้ไขหรือส่งต่อเรื่องไปยังหน่วยงานที่เกี่ยวข้อง"
            ></v-textarea>
          </div>
          <div class="d-flex justify-space-between">
            <div class="title_img py-2">รูปภาพประกอบ <span style="color: #9699A7;font-weight: 400;font-size: 11px;">(ถ้ามี)</span></div>
            <div class="text-right">
              <v-btn elevation="4" color="#4EACDF" style="border-radius: 15px;">
                <v-icon color="white" left>mdi-image-multiple</v-icon> <div style="font-size: 14px;color: white">คลิกเพื่อใส่รูป</div>
              </v-btn>
            </div>
          </div>
          <div class="grid_three">
            <div class="pa-2">
              <img style="width: 72px; height: 86px;" src="@/assets/icon/image-file.png">
              <div class="trash_icon">
                <v-btn icon color="white" style="background-color: #E21B1B">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="pa-2">
              <img style="width: 72px; height: 86px;" src="@/assets/icon/image-file.png">
              <div class="trash_icon">
                <v-btn icon color="white" style="background-color: #E21B1B">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="pa-2">
              <img style="width: 72px; height: 86px;" src="@/assets/icon/image-file.png">
              <div class="trash_icon">
                <v-btn icon color="white" style="background-color: #E21B1B">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="pa-2">
              <img style="width: 72px; height: 86px;" src="@/assets/icon/image-file.png">
              <div class="trash_icon">
                <v-btn icon color="white" style="background-color: #E21B1B">
                  <v-icon>mdi-trash-can-outline</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="pa-2 mt-4 text-center">
            <v-btn elevation="4" class="accept_btn" style="border-radius: 15px">
              <div style="font-size: 14px;color: white">คลิกเพื่อยืนยันการส่งเรื่องให้เทศบาล</div>
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
  name: "Complaints_about_problems",
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

.header_sub {
  font-weight: 500;
  font-size: 13px;
  color: #FFFFFF;
}

.card_problems {
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.header_title {
  font-weight: 700;
  font-size: 16px;
  color: #4D4D4D;
}

.title_img {
  font-weight: 400;
  font-size: 14px;
  color: #4D4D4D;
}
.accept_btn {
  background: linear-gradient(90deg, rgb(50 100 154), rgb(56 112 165), rgb(81 162 210));
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.grid_three {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}
.trash_icon {
  margin-top: -45% !important;
  margin-left: 45% !important;
}
</style>
