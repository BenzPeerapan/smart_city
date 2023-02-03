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
      <div class="grid_full ma-3">
        <v-card elevation="4" class="main_card">
          <div class="title_text pa-5 pb-0">สถิติการร้องเรียนปัญหา</div>
          <div class="grid_issue header_balance">
            <div class="ma-5">
              <v-card elevation="4" class="issue_card ma-3 pa-2 text-center" style="background-color: #E4F6FF">
                <div class="card_content_header" style="color: #151B54">ทั้งหมด</div>
                <div class="d-flex justify-center">
                  <div class="card_content" style="color: #151B54">162,801</div>
                  <div class="card_content_header ml-3 my-5" style="color: #151B54">เรื่อง</div>
                </div>
              </v-card>
              <div class="grid_half">
                <v-card elevation="4" class="issue_card ma-3 pa-2 text-center" style="background-color: #FF6179">
                  <div class="card_content_header" style="color: #151B54">รอรับเรื่อง</div>
                  <div class="card_sub_content" style="color: #151B54">1,000</div>
                  <div class="card_content_header" style="color: #151B54">1 %</div>
                </v-card>
                <v-card elevation="4" class="issue_card ma-3 pa-2 text-center" style="background-color: #FFED95">
                  <div class="card_content_header" style="color: #151B54">ดำเนินการ</div>
                  <div class="card_sub_content" style="color: #151B54">12,717</div>
                  <div class="card_content_header" style="color: #151B54">8 %</div>
                </v-card>
              </div>
              <v-card elevation="4" class="issue_card ma-3 pa-2 text-center" style="background-color: #5C68D7">
                <div class="card_content_header" style="color: #FFFFFF">ส่งต่อ</div>
                <div class="card_content_header" style="color: #FFFFFF">หน่วยงานที่รับผิดชอบ</div>
                <div class="card_sub_content" style="color: #FFFFFF">43,968</div>
                <div class="card_content_header" style="color: #FFFFFF">27 %</div>
              </v-card>
              <v-card elevation="4" class="issue_card ma-3 pa-2 text-center" style="background-color: #518F59">
                <div class="card_content_header" style="color: #FFFFFF">เสร็จสิ้น</div>
                <div class="d-flex justify-center">
                  <div class="card_content" style="color: #FFFFFF">99,822</div>
                  <div class="card_content_header ml-3 my-5" style="color: #FFFFFF">เรื่อง</div>
                </div>
                <div class="card_content_header" style="color: #FFFFFF">61 %</div>
              </v-card>
            </div>
            <div class="ma-6 mt-0">
              <div class="card_chart_content pa-6 pl-0">ประเภทการร้องเรียน</div>
              <div style="height: 60vh !important">
                <canvas id="issue_population"></canvas>
              </div>
            </div>
          </div>
        </v-card>
        <v-card elevation="4" class="main_card mt-5">
          <div class="title_sub_text pa-5">การร้องเรียน</div>
          <div class="grid_card pa-1">
            <div class="mx-auto pa-1 logo_complaints">
              <img src="@/assets/image/image_test1.png">
            </div>
            <div class="">
              <div class="d-flex justify-space-between">
                <div class="complaint_title">8 ต.ค 65 13:56น.</div>
                <div class="tag_red pa-1">
                  <div class="red--text" style="font-weight: 700;font-size: 8px;">รอรับเรื่อง</div>
                </div>
              </div>
              <div class="complaint_content mt-1 mb-1" style="color: #000000;">
                พบน้ำซึมเข้ามาในสวนสาธารณะติดแม่น้ำอาจเกิดจากผนัง-กั้นน้ำแตกราว อยากให้ดำเนินการตรวจสอบโดยด่วน
              </div>
              <div class="complaint_status" style="color: #000000;"><b>ชุมชน : ชุมชนดีใจ</b></div>
              <div class="complaint_status" style="color: #000000;"><b>จุดสังเกตุ : สวนสาธารณะชุมชนดีใจ บริเวณหลังห้องน้ำ กำแพงติดแม่น้ำ</b></div>
              <div class="tag_blue text-center ma-1 ml-0 pa-1 pl-0" style="width: 15%;">
                <div class="white--text" style="font-weight: 700;font-size: 8px;">คลอง</div>
              </div>
            </div>
          </div>
          <div class="grid_card pa-1">
            <div class="mx-auto pa-1 logo_complaints">
              <img src="@/assets/image/image_test2.png">
            </div>
            <div class="">
              <div class="d-flex justify-space-between">
                <div class="complaint_title">8 ต.ค 65 10:41น.</div>
                <div class="tag_warning pa-1">
                  <div style="color: #EEC634;font-weight: 700;font-size: 8px;">ดำเนินการ</div>
                </div>
              </div>
              <div class="complaint_content mt-1 mb-1" style="color: #000000;">
                ไฟสัญญาณจราจรเสีย
              </div>
              <div class="complaint_status" style="color: #000000;"><b>ชุมชน : ชุมชนดีใจ</b></div>
              <div class="complaint_status" style="color: #000000;"><b>จุดสังเกตุ : แยกสะพานดีใจ</b></div>
              <div class="tag_orange text-center ma-1 ml-0 pa-1 pl-0" style="width: 15%;">
                <div class="white--text" style="font-weight: 700;font-size: 8px;">จราจร</div>
              </div>
            </div>
          </div>
          <div class="ma-2 pa-3">
            <v-pagination v-model="page" length="3"></v-pagination>
          </div>
        </v-card>
      </div>
    </div>
  </v-app>
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
  name: "Complaints_statistics",
  data () {
    return {
      loading_page: false,
      page: 1,
    }
  },
  methods: {
    chart_horizon() {
      let data = {
        labels: ['อื่นๆ (25.4%)', 'ถนน (19.5%)', 'น้ำท่วม (8.1%)', 'ทางเท้า (7.9%)', 'แสงสว่าง (5.8%)', 'ความสะอาด (4.7%)', 'ความปลอดภัย (4.5%)', 'ท่อระบายน้ำ (3.8%)', 'สายไฟ (3.5%)', 'สะพาน (3.5%)', 'กีดขวาง (3.4%)', 'จราจร (3.1%)', 'คลอง (2.5%)', 'ต้นไม้ (1.9%)', 'เสียงรบกวน (1.4%)', 'สัตว์จรจัด (0.6%)', 'การเดินทาง (0.1%)', 'คนจรจัด(0.1%)'],
        datasets: [
          {
            data: [50000, 38564, 19120, 17910, 5380, 4702, 4504, 3580, 3502, 3410, 3120, 2530, 1490, 1450, 660, 160, 120, 120],
            borderColor: ['#2B326F'],
            // borderColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#909'],
            backgroundColor: ['#2B326F'],
            // backgroundColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#909'],
            fill: true
          },
        ]
      }
      let config = {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false
            },
          }
        },
      }
      const ctx = document.getElementById('issue_population').getContext('2d');
      this.myChartHorizon = new Chart(ctx, config)
    },
  },
  mounted () {
    this.chart_horizon()
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
.grid_full {
  display: grid;
  grid-template-columns: 100%;
}
.main_card {
  background-color: #FFFFFF;
  border-radius: 20px;
}
.title_text {
  color: #4D4D4D;
  font-weight: 700;
  font-size: 16px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.title_sub_text {
  color: #151B54;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 16px;
}
.issue_card {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.card_content_header {
  font-weight: 500;
  font-size: 14px;
}
.card_content {
  font-weight: 500;
  font-size: 34px;
}
.card_sub_content {
  font-weight: 500;
  font-size: 30px;
}
.header_balance {
  margin-top: -6%;
}
.grid_issue {
  display: grid;
  grid-template-columns: 100%;
}
.grid_half {
  display: grid;
  grid-template-columns: 50% 50%;
}
.card_chart_content {
  color: #151B54;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 500;
  font-size: 16px;
}
.grid_card {
  display: grid;
  grid-template-columns: 30% 70%;
}
.logo_complaints {
  width: 89px;
}
.logo_complaints>img {
  max-width: 100%;
}
.complaint_title {
  color: #151B54;
  font-weight: 500;
  font-size: 13px;
}
.complaint_content {
  font-weight: 300;
  font-size: 10px;
}
.complaint_status {
  font-weight: 500;
  font-size: 9px;
}
.tag_red {
  border: 1px solid #E60023;
  border-radius: 10px;
}
.tag_warning {
  border: 1px solid #EEC634;
  border-radius: 10px;
}
.tag_blue {
  background: #2B326F;
  border: 1px solid #2B326F;
  border-radius: 10px;
}
.tag_orange {
  background: #FD8F16;
  border: 1px solid #FD8F16;
  border-radius: 10px;
}
</style>
