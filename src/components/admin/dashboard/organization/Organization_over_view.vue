<template>
  <div class="footer_padding">
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="pa-md-5 pa-lg-5 pa-xl-5">
        <div class="d_play_desktop">
          <div class="d-flex">
            <div class="topic_dashboard_header border_right">Dashboard</div>
            <div class="topic_dashboard_content my-2">รายงานภาพรวมองค์กร</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="topic_dashboard_content my-2 pl-0">รายงานภาพรวมองค์กร</div>
          <div class="topic_dashboard_header">Dashboard</div>
        </div>
        <div class="mt-5">
          <!-- Row 1 -->
          <div class="grid_card">
            <v-card elevation="4" class="main_card">
              <v-card elevation="5" class="header_card">
                <div class="title_text pa-5">รอดำเนินการ</div>
              </v-card>
              <div class="grid_cube header_balance">
                <v-card elevation="4" class="cube_color cube_card_left ma-5">
                  <div class="logo mt-6 margin_left">
                    <img src="@/assets/icon/signature.png">
                  </div>
                  <div class="border_notification">
                    <div class="text-center py-1 notify_size">3</div>
                  </div>
                  <div class="d-flex justify-space-around">
                    <div class="my-2 content_size">เอกสารรอเซ็นต์</div>
                    <div>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                            <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="cube_color cube_card_right ma-5">
                  <div class="logo mt-6 margin_left">
                    <img src="@/assets/icon/audit.png">
                  </div>
                  <div class="border_notification">
                    <div class="text-center py-1 notify_size">3</div>
                  </div>
                  <div class="d-flex justify-space-around">
                    <div class="my-2 content_size">เอกสารรอตรวจสอบ</div>
                    <div>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                            <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="cube_color cube_card_left ma-5">
                  <div class="logo mt-6 margin_left">
                    <img src="@/assets/icon/meeting.png">
                  </div>
                  <div class="border_notification">
                    <div class="text-center py-1 notify_size">3</div>
                  </div>
                  <div class="d-flex justify-space-around">
                    <div class="my-2 content_size">เข้าร่วมประชุม</div>
                    <div>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                            <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="cube_color cube_card_right ma-5">
                  <div class="logo mt-6 margin_left">
                    <img src="@/assets/icon/calendar.png">
                  </div>
                  <div class="border_notification">
                    <div class="text-center py-1 notify_size">3</div>
                  </div>
                  <div class="d-flex justify-space-around">
                    <div class="my-2 content_size_sp">กิจกรรมกำลังดำเนินการ</div>
                    <div>
                      <v-menu bottom left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                            <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>

                        <v-list>
                          <v-list-item v-for="(item, i) in items" :key="i">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-card>
            <v-card elevation="4" class="main_card white_space">
              <v-card elevation="5" class="header_sub_card">
                <div class="title_text pa-5">โครงการกำลังดำเนินการ</div>
              </v-card>
              <div class="grid_full header_sub_balance">
                <v-card elevation="4" class="ma-2 ma-md-5 ma-lg-5 ma-xl-5 mt-0" style="border-radius: 20px;">
                  <div class="grid_content">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/crown.png">
                    </div>
                    <div class="mt-2">
                      <div class="d-flex justify-space-between">
                        <div class="project_content_header">โครงการจัดงานประเพณี ประจำปี 2565</div>
                        <div class="mt-n2">
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </div>
                      <div class="d-flex justify-space-between">
                        <div class="project_content_sub_detail">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="project_content_sub_detail pr-2">สำเร็จแล้ว 50 %</div>
                      </div>
                      <div class="mt-1 progress_flex">
                        <div class="project_content_detail">เริ่มต้น 6 ต.ค 2565 สิ้นสุด 31 ต.ค 2565</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-2 ma-md-5 ma-lg-5 ma-xl-5 mt-0" style="border-radius: 20px;">
                  <div class="grid_content">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/road.png">
                    </div>
                    <div class="mt-2">
                      <div class="d-flex justify-space-between">
                        <div class="project_content_header">โครงการการก่อสร้างปรับปรุงถนนตอนกรีตเสริมเหล็ก พร้อมระบบระบายน้ำ</div>
                        <div class="mt-n2">
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </div>
                      <div class="d-flex justify-space-between">
                        <div class="project_content_sub_detail">ประเภทโครงการ : เพื่อพัฒนาชุมชน</div>
                        <div class="project_content_sub_detail pr-2">สำเร็จแล้ว 65 %</div>
                      </div>
                      <div class="mt-1 progress_flex">
                        <div class="project_content_detail">เริ่มต้น 12 ส.ค 2565 สิ้นสุด 12 ก.พ 2566</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_2" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-2 ma-md-5 ma-lg-5 ma-xl-5 mt-0" style="border-radius: 20px;">
                  <div class="grid_content">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/road.png">
                    </div>
                    <div class="mt-2">
                      <div class="d-flex justify-space-between">
                        <div class="project_content_header">โครงการติดตั้งกล้องวงจรปิดภายในเขตเทศบาล</div>
                        <div class="mt-n2">
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item v-for="(item, i) in items" :key="i">
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </div>
                      <div class="d-flex justify-space-between">
                        <div class="project_content_sub_detail">ประเภทโครงการ : เพื่อพัฒนาชุมชน</div>
                        <div class="project_content_sub_detail pr-2">สำเร็จแล้ว 26 %</div>
                      </div>
                      <div class="mt-1 progress_flex">
                        <div class="project_content_detail">เริ่มต้น 10 ส.ค 2565 สิ้นสุด 10 ส.ค 2566</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_3" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
              <div class="ma-5 mt-2">
                <v-btn elevation="4" large class="white--text" width="100%" style="font-size: 16px; border-radius: 10px;">
                  <div class="more_detail">ดูโครงการเพิ่มเติม</div>
                </v-btn>
              </div>
            </v-card>
          </div>
          <!-- Row 2 -->
          <div class="grid_full mt-10">
            <v-card elevation="4" class="calendar_card">
              <v-card elevation="5" class="header_sub_card">
                <div class="title_text pa-5">ปฎิทิน</div>
                <div class="mt-8 mr-2 ml-2">
                  <v-tabs grow color="#00A7FF" background-color="transparent">
                    <v-tab @click="tab_calendar(0)" style="color: white; font-size: 18px">ปฎิทินการประชุม</v-tab>
                    <v-tab @click="tab_calendar(1)" style="color: white; font-size: 18px">ปฎิทินกิจกรรม</v-tab>
                  </v-tabs>
                </div>
              </v-card>
              <!-- Calendar Events -->
              <div v-if="loading_calendar === true">
                <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
                  <v-skeleton-loader type="article, actions"></v-skeleton-loader>
                </v-sheet>
              </div>
              <div v-else class="ma-7">
                <v-sheet tile height="30%" class="pt-4 d-flex justify-center border_calendar_header">
                  <v-btn icon color="#FFFFFF" class="ma-2" @click="$refs.calendar.prev()" style="background-color: #151B54">
                    <v-icon>mdi-chevron-up</v-icon>
                  </v-btn>
                  <div class="month_style ma-3 ml-7 mr-7">{{value_convert}}</div>
                  <v-btn icon color="#FFFFFF" class="ma-2" @click="$refs.calendar.next()" style="background-color: #151B54">
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </v-sheet>
                <v-sheet height="900" class="pa-3 border_calendar_footer">
                  <v-calendar
                      ref="calendar"
                      v-model="value"
                      :weekdays="weekday"
                      :type="type"
                      :events="events"
                      :event-overlap-mode="mode"
                      :event-overlap-threshold="30"
                      :event-color="getEventColor"
                      @change="getEvents"
                  ></v-calendar>
                </v-sheet>
              </div>
            </v-card>
          </div>
          <!-- Row 3 -->
          <div class="grid_chart mt-10">
            <v-card elevation="4" class="main_card mr-md-5 mr-lg-5 margin_button_tablet">
              <v-card elevation="5" class="header_sub_card">
                <div class="title_text pa-5">การซ่อมบำรุง ประจำปี 2565</div>
              </v-card>
              <div class="grid_three maintenance_top">
                <v-card elevation="4" class="ma-7 ma-md-3 mt-0" style="border-radius: 20px; background-color: #E4F6FF">
                  <div class="text-center pa-3">
                    <div class="py-2 py-md-1 card_content_first" style="color: #151B54">รอดำเนินการ</div>
                    <div class="py-2 py-md-1 card_content_second" style="color: #151B54">10</div>
                    <div class="py-2 py-md-1 card_content_three" style="color: #151B54">0.6%</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-7 ma-md-3 mt-0" style="border-radius: 20px; background-color: #FFED95">
                  <div class="text-center pa-3">
                    <div class="py-2 py-md-1 card_content_first" style="color: #151B54">กำลังดำเนินการ</div>
                    <div class="py-2 py-md-1 card_content_second" style="color: #151B54">5</div>
                    <div class="py-2 py-md-1 card_content_three" style="color: #151B54">0.3%</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-7 ma-md-3 mt-0" style="border-radius: 20px; background-color: #518F59">
                  <div class="text-center pa-3">
                    <div class="py-2 py-md-1 card_content_first" style="color: #FFFFFF">เสร็จสิ้น</div>
                    <div class="py-2 py-md-1 card_content_second" style="color: #FFFFFF">1,520</div>
                    <div class="py-2 py-md-1 card_content_three" style="color: #FFFFFF">99.1%</div>
                  </div>
                </v-card>
              </div>
              <div class="ma-3" style="height: 50vh !important">
                <canvas id="maintenance"></canvas>
              </div>
            </v-card>
            <v-card elevation="4" class="main_card ml-md-4 ml-lg-4">
              <v-card elevation="5" class="header_card">
                <div class="title_text pa-5">การประเมินพนักงาน</div>
              </v-card>
              <div class="grid_full maintenance_sub_top">
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="grid_estimate">
                    <div class="logo_estimate ma-4 mx-auto my-auto">
                      <img src="@/assets/icon/user_report.png">
                    </div>
                    <div class="mt-2">
                      <div class="estimate_flex">
                        <div class="estimate_content_header py-md-3 py-lg-3 py-xl-3">ภาพรวมพนักงานทั้งองค์กร</div>
                        <div class="estimate_content_header score_size mr-3">4 คะแนน</div>
                      </div>
                      <div class="estimate_flex">
                        <div class="project_content_sub_detail maintenance_content_header" style="font-size: 15px !important">ผู้ประเมิน 2,560 คน</div>
                        <v-rating class="show_rating_desktop"
                                  v-model="rating"
                                  color="gray darken-3"
                                  background-color="gray lighten-3"
                                  half-increments
                                  hover
                                  size="64"
                        ></v-rating>
                        <v-rating class="show_rating_tablet"
                                  v-model="rating"
                                  color="gray darken-3"
                                  background-color="gray lighten-3"
                                  half-increments
                                  hover
                                  size="24"
                        ></v-rating>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="d-flex justify-space-between pa-3">
                    <div class="estimate_content_header py-3">สำนักปลัดเทศบาล</div>
                    <v-rating class="show_rating_desktop"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="36"
                    ></v-rating>
                    <v-rating class="show_rating_tablet"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="24"
                    ></v-rating>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="d-flex justify-space-between pa-3">
                    <div class="estimate_content_header py-3">กองคลัง</div>
                    <v-rating class="show_rating_desktop"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="36"
                    ></v-rating>
                    <v-rating class="show_rating_tablet"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="24"
                    ></v-rating>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="d-flex justify-space-between pa-3">
                    <div class="estimate_content_header py-3">กองช่าง</div>
                    <v-rating class="show_rating_desktop"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="36"
                    ></v-rating>
                    <v-rating class="show_rating_tablet"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="24"
                    ></v-rating>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="d-flex justify-space-between pa-3">
                    <div class="estimate_content_header py-3">กองการศึกษา</div>
                    <v-rating class="show_rating_desktop"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="36"
                    ></v-rating>
                    <v-rating class="show_rating_tablet"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="24"
                    ></v-rating>
                  </div>
                </v-card>
                <v-card elevation="4" class="ma-5 mt-0" style="border-radius: 20px;">
                  <div class="d-flex justify-space-between pa-3">
                    <div class="estimate_content_header py-3">กองสาธรณสุข</div>
                    <v-rating class="show_rating_desktop"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="36"
                    ></v-rating>
                    <v-rating class="show_rating_tablet"
                              v-model="rating"
                              color="gray darken-3"
                              background-color="gray lighten-3"
                              half-increments
                              hover
                              size="24"
                    ></v-rating>
                  </div>
                </v-card>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Organization_over_view",
  data () {
    return {
      loading_page: false,
      loading_calendar: false,
      calendar: 0,
      progress_bar: 50,
      progress_bar_2: 65,
      progress_bar_3: 26,
      rating: 4.5,
      items: [
        { title: 'ดูรายละเอียด' },
        { title: 'อัพเดทโครงการ' },
        { title: 'แก้ไขโครงการ' },
        { title: 'แก้ไขข้อมูล' },
        { title: 'แสดงความคิดเห็น' },
      ],
      type: 'month',
      mode: 'stack',
      weekday: [0, 1, 2, 3, 4, 5, 6],
      value: this.minDate(),
      value_convert: '',
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }
  },
  methods: {
    tab_calendar(type) {
      this.calendar = type
      if (type === 0) {
        this.loading_calendar = true
        setTimeout(() => this.loading_calendar = false, 1000)
        this.getEvents()
      }
      else if (type === 1) {
        this.loading_calendar = true
        setTimeout(() => this.loading_calendar = false, 1000)
        this.getEvents()
      }
    },
    minDate() {
      const today = new Date();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      if (month < 10){
        month = '0'+ month
      }
      if (date < 10){
        date = '0'+ date
      }
      const result_date = today.getFullYear()+'-'+month+'-'+date;
      return result_date;
    },
    convert_date() {
      let date_convert = this.value.split('-')
      let year = parseInt(date_convert[0])
      let month = parseInt(date_convert[1])
      // let day = parseInt(date_convert[2])
      let convert_month = this.$store.state.monthList.find((data) => {
        return data.id === month
      })
      let result_convert = convert_month.name + ' ' + (year+543)
      this.value_convert = result_convert
    },
    getEvents () {
      const events = []

      this.convert_date()
      const min = new Date(`${this.value}T00:00:00`)
      const max = new Date(`${this.value}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    getEventColor (event) {
      return event.color
    },
    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
    chart_value() {
      let data = {
        labels: ['ระบบไฟ', 'ระบบน้ำ', 'เทคโนโลยี', 'วัสดุ อุปกรณ์ ครุภัณฑ์', 'อื่นๆ'],
        datasets: [
          {
            label: ['ระบบไฟ', 'ระบบน้ำ', 'เทคโนโลยี', 'วัสดุ อุปกรณ์ ครุภัณฑ์', 'อื่นๆ'],
            data: [45.8, 8.3, 8.3, 8.3, 29.2],
            borderColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#909'],
            backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#909'],
            fill: true
          },
        ]
      }
      let config = {
        type: 'pie',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      }
      const ctx = document.getElementById('maintenance').getContext('2d');
      this.myChartMember = new Chart(ctx, config)
    },
  },
  mounted() {
    this.convert_date()
    this.chart_value()
  },
}
</script>

<style scoped>
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.topic_dashboard_header {
  font-size: 24px;
  color: #000000;
}
.topic_dashboard_content {
  color: #7E7E7E;
  padding-left: 10px;
}
.grid_full {
  display: grid;
  grid-template-columns: 100%;
}
.grid_card {
  display: grid;
  grid-template-columns: 25% 75%;
}
.white_space {
  margin-left: 5%;
}
.margin_left {
  margin-left: 12%;
}
.grid_cube {
  display: grid;
  grid-template-columns: 50% 50%;
  z-index: 2
}
.cube_color {
  background-color: #E4F6FF;
  border-radius: 20px;
}
.grid_three {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  z-index: 2
}
.grid_content {
  display: grid;
  grid-template-columns: 12% 88%;
}
.grid_estimate {
  display: grid;
  grid-template-columns: 15% 85%;
}
.main_card {
  background-color: #FFFFFF;
  border-radius: 20px;
}
.calendar_card {
  background-color: #2B326F;
  border-radius: 20px;
}
.header_card {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%), #4EACDF;
  border-radius: 20px;
  height: 162px;
}
.header_sub_card {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 67.71%), #2E3577;
  border-radius: 20px;
  height: 162px;
}
.title_text {
  color: #FFFFFF;
  font-size: 24px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.logo {
  width: 56px;
}
.logo>img {
  max-width: 100%;
}
.logo_estimate {
  width: 70px;
}
.logo_estimate>img {
  max-width: 100%;
}
.border_notification {
  position: absolute;
  left: 65%;
  right:5px;
  top: 5px;
  bottom: 75px;
  color: #FFFFFF;
  background-color: #151B54;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  border-radius: 50%;
}
.project_content_header {
  font-size: 16px;
  color: #151B54;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.project_content_sub_detail {
  font-size: 14px;
  color: #4D4A4A;
}
.project_content_detail {
  font-size: 12px;
  color: rgba(21, 27, 84, 0.6);
}
.progress_style {
  width: 65%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.more_detail {
  color: #151B54;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: bold;
}
.border_calendar_header {
  border-top-right-radius: 5px !important;
  border-top-left-radius: 5px !important;
}
.border_calendar_footer {
  border-bottom-left-radius: 5px !important;
  border-bottom-right-radius: 5px !important;
}
.month_style {
  font-size: 16px;
  color: #000000;
  font-weight: 400;
}
.grid_chart {
  display: grid;
  grid-template-columns: 50% 50%;
}
.estimate_content_header {
  font-size: 20px;
  color: #151B54;
  font-weight: 500;
}
.notify_size {
  font-weight: 500;
  font-size: 24px;
}
.content_size {
  color: #151B54;
  font-weight: 500;
  font-size: 16px;
}
.content_size_sp {
  color: #151B54;
  font-weight: 500;
  font-size: 14px;
}
.maintenance_top {
  margin-top: -7%;
}
.maintenance_sub_top {
  margin-top: -7%;
}
.header_balance {
  margin-top: -19.5%;
}
.header_sub_balance {
  margin-top: -5%;
}
.card_content_first {
  font-size: 18px;
  font-weight: 500;
}
.card_content_second {
  font-size: 24px;
  font-weight: 500;
}
.card_content_three {
  font-size: 16px;
  font-weight: 500;
}
.score_size {
  font-size: 30px !important;
}
.show_rating_desktop {
  display: block;
}
.show_rating_tablet {
  display: none;
}
.show_rating_mobile {
  display: none;
}
.maintenance_content_header {
  margin-top: 5%;
  margin-bottom: 5%;
}
.cube_card_left {
  margin-right: 0;
}
.cube_card_right {
   margin-left: 0;
}
.margin_button_tablet {
  margin-bottom: 0;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
.progress_flex {
  display: flex;
  justify-content: space-between;
}
.estimate_flex {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 1180px) {
  .show_rating_desktop {
    display: none;
  }
  .show_rating_tablet {
    display: block;
  }
  .maintenance_content_header {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 50% 50% !important;
    z-index: 2;
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right {
    margin-left: 7% !important;
  }
  .grid_estimate {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .logo_estimate {
    width: 48px;
  }
  .logo_estimate>img {
    max-width: 100%;
  }
  .header_balance {
    margin-top: -25%;
  }
  .header_sub_balance {
    margin-top: -10%;
  }
  .estimate_content_header {
    font-size: 16px;
    color: #151B54;
    font-weight: 500;
  }
  .project_content_header {
    font-size: 14px;
    color: #151B54;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project_content_sub_detail {
    font-size: 12px;
    color: #4D4A4A;
  }
  .project_content_detail {
    font-size: 10px;
    color: rgba(21, 27, 84, 0.6);
    padding-bottom: 10px;
  }
  .progress_style {
    width: 50%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .grid_card {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .logo {
    width: 48px;
  }
  .logo>img {
    max-width: 100%;
  }
  .notify_size {
    font-size: 15px;
  }
  .content_size {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 12px;
  }
  .content_size_sp {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 12px;
  }
  .border_notification {
    position: absolute;
    left: 65%;
    right:5%;
    top: 6%;
    bottom: 65%;
    color: #FFFFFF;
    background-color: #151B54;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .maintenance_top {
    margin-top: -18%;
  }
  .maintenance_sub_top {
    margin-top: -15%;
  }
  .card_content_first {
    font-size: 16px;
    font-weight: 500;
  }
  .card_content_second {
    font-size: 20px;
    font-weight: 500;
  }
  .card_content_three {
    font-size: 14px;
    font-weight: 500;
  }
  .score_size {
    margin-top: 2% !important;
    font-size: 24px !important;
  }
}
@media only screen and (max-width: 1024px) {
  .show_rating_desktop {
    display: none;
  }
  .show_rating_tablet {
    display: block;
  }
  .maintenance_content_header {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .grid_estimate {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 50% 50% !important;
    z-index: 2;
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right {
    margin-left: 7% !important;
  }
  .logo_estimate {
    width: 48px;
  }
  .logo_estimate>img {
    max-width: 100%;
  }
  .header_balance {
    margin-top: -25%;
  }
  .header_sub_balance {
    margin-top: -10%;
  }
  .estimate_content_header {
    font-size: 16px;
    color: #151B54;
    font-weight: 500;
  }
  .project_content_header {
    font-size: 14px;
    color: #151B54;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project_content_sub_detail {
    font-size: 12px;
    color: #4D4A4A;
  }
  .project_content_detail {
    font-size: 10px;
    color: rgba(21, 27, 84, 0.6);
    padding-bottom: 10px;
  }
  .progress_style {
    width: 50%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .grid_card {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .logo {
    width: 36px;
  }
  .logo>img {
    max-width: 100%;
  }
  .notify_size {
    font-size: 14px;
  }
  .content_size {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 12px;
  }
  .content_size_sp {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 10px;
  }
  .border_notification {
    position: absolute;
    left: 65%;
    right:5%;
    top: 5%;
    bottom: 65%;
    color: #FFFFFF;
    background-color: #151B54;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .maintenance_top {
    margin-top: -18%;
  }
  .maintenance_sub_top {
    margin-top: -15%;
  }
  .card_content_first {
    font-size: 16px;
    font-weight: 500;
  }
  .card_content_second {
    font-size: 20px;
    font-weight: 500;
  }
  .card_content_three {
    font-size: 14px;
    font-weight: 500;
  }
  .score_size {
    margin-top: 2% !important;
    font-size: 24px !important;
  }
}
@media only screen and (max-width: 820px) {
  .grid_chart {
    display: grid;
    grid-template-columns: 100%;
  }
  .white_space {
    margin-top: 5%;
    margin-left: 0;
  }
  .show_rating_desktop {
    display: none;
  }
  .show_rating_tablet {
    display: block;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 50% 50% !important;
    z-index: 2;
    margin-left: 7% !important;
    margin-right: 7% !important;
  }
  .cube_card_left {
    margin-right: 15% !important;
  }
  .cube_card_right {
     margin-left: 15% !important;
  }
  .maintenance_content_header {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .grid_estimate {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .logo_estimate {
    width: 48px;
  }
  .logo_estimate>img {
    max-width: 100%;
  }
  .header_balance {
    margin-top: -12% !important;
  }
  .header_sub_balance {
    margin-top: -10%;
  }
  .estimate_content_header {
    font-size: 16px;
    color: #151B54;
    font-weight: 500;
  }
  .project_content_header {
    font-size: 14px;
    color: #151B54;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project_content_sub_detail {
    font-size: 12px;
    color: #4D4A4A;
  }
  .project_content_detail {
    font-size: 10px;
    color: rgba(21, 27, 84, 0.6);
    padding-bottom: 10px;
  }
  .progress_style {
    width: 50%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .grid_card {
    display: grid;
    grid-template-columns: 100% !important;
  }
  .logo {
    width: 64px !important;
  }
  .logo>img {
    max-width: 100%;
  }
  .notify_size {
    font-size: 20px !important;
  }
  .content_size {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 16px !important;
  }
  .content_size_sp {
    padding-left: 7px;
    color: #151B54;
    font-weight: 500;
    font-size: 16px !important;
  }
  .border_notification {
    position: absolute;
    left: 70% !important;
    right:10% !important;
    top: 6% !important;
    bottom: 65% !important;
    color: #FFFFFF;
    background-color: #151B54;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
  .maintenance_top {
    margin-top: -10%;
  }
  .maintenance_sub_top {
    margin-top: -10%;
  }
  .card_content_first {
    font-size: 16px;
    font-weight: 500;
  }
  .card_content_second {
    font-size: 20px;
    font-weight: 500;
  }
  .card_content_three {
    font-size: 14px;
    font-weight: 500;
  }
  .score_size {
    margin-top: 2% !important;
    font-size: 24px !important;
  }
  .margin_button_tablet {
    margin-bottom: 7%;
  }
}
@media only screen and (max-width: 500px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
  .header_balance {
    margin-top: -30% !important;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 100% !important;
    z-index: 2;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right {
    margin-left: 7% !important;
  }
  .header_sub_balance {
    margin-top: -25%;
  }
  .grid_content {
    display: grid;
    grid-template-columns: 25% 75%;
  }
  .project_content_header {
    font-size: 12px;
    color: #151B54;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project_content_sub_detail {
    font-size: 10px;
    color: #4D4A4A;
  }
  .project_content_detail {
    font-size: 8px;
    color: rgba(21, 27, 84, 0.6);
    padding-bottom: 10px;
  }
  .progress_flex {
    display: grid;
    grid-template-columns: 100%;
  }
  .progress_style {
    width: 90%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-bottom: 15px;
  }
  .grid_three {
    display: grid;
    grid-template-columns: 100%;
  }
  .maintenance_top {
    margin-top: -20%;
  }
  .estimate_flex {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_estimate {
    display: grid;
    grid-template-columns: 25% 75%;
  }
  .maintenance_sub_top {
    margin-top: -20%;
  }
}
</style>
