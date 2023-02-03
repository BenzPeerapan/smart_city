<template>
  <div class="footer_padding">
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="pa-md-5 pa-lg-5 pa-xl-5 mt-5">
        <div class="d_play_desktop">
          <div class="d-flex">
            <div class="topic_dashboard_header border_right">Dashboard</div>
            <div class="topic_dashboard_content my-2">รายงานการให้บริการประชาชน</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="topic_dashboard_content my-2 pl-0">รายงานการให้บริการประชาชน</div>
          <div class="topic_dashboard_header">Dashboard</div>
        </div>
        <div class="mt-5">
          <!-- ROW 1 -->
          <div class="grid_full">
            <v-card elevation="4" class="main_card">
              <v-card elevation="5" class="header_card">
                <div class="title_text pa-5 pb-0">การร้องเรียนปัญหาของประชาชน</div>
              </v-card>
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
                <div class="ma-6">
                  <v-card class="card_chart_horizon ma-md-2 ma-lg-2 ma-xl-2">
                    <div class="card_chart_content pa-6">ประเภทการร้องเรียน</div>
                    <div class="ma-md-3 ma-lg-3 ma-xl-3 mt-0 pa-1 pa-md-2 pa-lg-2 pa-xl-2" style="height: 60vh !important">
                      <canvas id="issue_population"></canvas>
                    </div>
                  </v-card>
                </div>
              </div>
            </v-card>
          </div>
          <!-- ROW 2 -->
          <div class="grid_full mt-10">
            <Service_chart/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import Service_chart from "@/components/admin/dashboard/service_report/Service_chart";

export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Population_service_report",
  components: {
    Service_chart
  },
  data() {
    return {
      loading_page: false,
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
            }
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
.main_card {
  background-color: #FFFFFF;
  border-radius: 20px;
}
.header_card {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%), #4EACDF;
  border-radius: 20px;
  height: 162px;
}
.title_text {
  color: #FFFFFF;
  font-size: 24px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.issue_card {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.card_content_header {
  font-weight: 500;
  font-size: 18px;
}
.card_content {
  font-weight: 500;
  font-size: 40px;
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
  grid-template-columns: 30% 70%;
}
.grid_half {
  display: grid;
  grid-template-columns: 50% 50%;
}
.card_chart_horizon {
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.card_chart_content {
  color: #151B54;
  font-weight: 500;
  font-size: 18px;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
@media only screen and (max-width: 1180px) {
  .grid_issue {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .header_balance {
    margin-top: -10%;
  }
  .card_content_header {
    font-weight: 500;
    font-size: 14px;
  }
  .card_content {
    font-weight: 500;
    font-size: 30px;
  }
  .card_sub_content {
    font-weight: 500;
    font-size: 20px;
  }
}
@media only screen and (max-width: 1024px) {
  .grid_issue {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .header_balance {
    margin-top: -10%;
  }
  .card_content_header {
    font-weight: 500;
    font-size: 14px;
  }
  .card_content {
    font-weight: 500;
    font-size: 30px;
  }
  .card_sub_content {
    font-weight: 500;
    font-size: 20px;
  }
}
@media only screen and (max-width: 820px) {
  .grid_issue {
    display: grid;
    grid-template-columns: 100%;
  }
  .header_balance {
    margin-top: -15%;
  }
  .card_content_header {
    font-weight: 500;
    font-size: 14px;
  }
  .card_content {
    font-weight: 500;
    font-size: 30px;
  }
  .card_sub_content {
    font-weight: 500;
    font-size: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .grid_issue {
    display: grid;
    grid-template-columns: 100%;
  }
  .header_balance {
    margin-top: -15%;
  }
  .card_content_header {
    font-weight: 500;
    font-size: 14px;
  }
  .card_content {
    font-weight: 500;
    font-size: 30px;
  }
  .card_sub_content {
    font-weight: 500;
    font-size: 20px;
  }
}
@media only screen and (max-width: 500px) {
  .grid_issue {
    display: grid;
    grid-template-columns: 100%;
  }
  .header_balance {
    margin-top: -23%;
  }
  .card_content_header {
    font-weight: 500;
    font-size: 14px;
  }
  .card_content {
    font-weight: 500;
    font-size: 30px;
  }
  .card_sub_content {
    font-weight: 500;
    font-size: 20px;
  }
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
}
</style>
