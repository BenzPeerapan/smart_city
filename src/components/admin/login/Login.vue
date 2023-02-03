<template>
  <div id="app">
    <div class="login_page">
      <div></div>
      <div>
        <v-card elevation="8" style="padding: 3%; border-radius: 10px; background-color: #FCFCFC">
          <v-form ref="add_form" @submit.prevent="submit_login">
            <div class="logo">
              <img src="@/assets/icon/logo_color.png" alt="">
            </div>
            <v-card-text>
              <div class="header_welcome">
                <div style="font-size: 24px">ยินดีต้อนรับ</div>
                <v-divider color="#A4A4A4" class="divider_custom"/>
                <div style="font-size: 18px">เข้าสู่ระบบ</div>
              </div>
            </v-card-text>
            <v-card-text>
              <div style="font-size: 16px;">ชื่อองค์กร *</div>
              <div style="margin: 15px">
                <v-text-field color="#4EACDF" type="text" v-model="username" label="ชื่อผู้ใช้" hide-details="auto" required style="border-radius: 10px" outlined></v-text-field>
              </div>
              <div style="font-size: 16px;">รหัสผ่าน *</div>
              <div style="margin: 15px; margin-bottom: 0;">
<!--                <v-text-field color="#86bc3a" v-model="password" prepend-inner-icon="mdi-lock-outline" hide-details="auto" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" :type="show ? 'text' : 'password'" name="input-10-1" label="รหัสผ่าน" @click:append="show = !show" required outlined></v-text-field>-->
                <v-text-field color="#4EACDF" type="password" label="รหัสผ่าน" v-model="password" hide-details="auto" required style="border-radius: 10px" outlined></v-text-field>
              </div>
            </v-card-text>
            <div style="padding-left: 5%">
              <v-checkbox color="#4EACDF" v-model="checkbox" label="จำรหัสผ่าน" />
            </div>
            <div class="btn_custom">
              <v-btn color="#4EACDF" elevation="2" large class="white--text mr-3 text_color" type="submit" width="100%" style="margin-right: 13px; font-size: 16px">
                เข้าสู่ระบบ
              </v-btn>
            </div>
          </v-form>
        </v-card>
        <v-dialog v-model="alert_error" max-width="600">
          <v-card>
            <v-card-title>
              คำเตือน
            </v-card-title>

            <v-card-text>
              อีเมลและรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text>
                ตกลง
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-overlay :value="overlay" class="z_index">
          <div style="text-align: center">
            <v-progress-circular
                indeterminate
                size="70"
                width="7"
                color="#86bc3a"
            ></v-progress-circular>
            <div>โปรดรอสักครู่ระบบกำลังประมวลผล...</div>
          </div>
        </v-overlay>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show: false,
      username: null,
      password: null,
      overlay: false,
      alert_error: false,
      checkbox: false,
    }
  },
  methods: {
    submit_login() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.btn_custom {
  padding: 30px;
  padding-top: 15px;
  text-align: center;
}
.text_color {
  color: white;
  font-size: 18px;
}
.login_page {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 35% 25% 35%;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/image/smart_city_bg_login.png');
  background-size: cover;
}
.logo {
  width: 30%;
  margin: auto;
  padding-top: 30px;
}
.logo>img {
  max-width: 100%;
}
.header_welcome {
  text-align: center;
}
.divider_custom {
  margin: 7%;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 23%;
  margin-right: 23%
}
@media only screen and (max-width: 1180px) {
  .login_page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 30% 40% 30%;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 820px) {
  .login_page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 15% 60% 15%;
    justify-content: center;
    align-items: center;
  }
}
@media only screen and (max-width: 500px) and (orientation:portrait) {
  .login_page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    justify-content: center;
    align-items: center;
  }
}
</style>
