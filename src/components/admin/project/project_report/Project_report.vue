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
            <div class="topic_dashboard_header border_right">รายงานโครงการ</div>
            <div class="topic_dashboard_content my-2">รายงานโครงการ</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="topic_dashboard_content my-2 pl-0">รายงานโครงการ</div>
          <div class="topic_dashboard_header">รายงานโครงการ</div>
        </div>
        <div class="mt-5">
          <!-- Row 1 -->
          <div class="grid_card_project_report">
            <v-card elevation="4" class="main_card mr-2">
              <v-card elevation="5" class="header_card_project_report">
                <div class="title_text pa-5">จำนวนโครงการทั้งหมด</div>
              </v-card>
              <div class="grid_cube_project_report header_balance_project_report">
                <v-card elevation="4" class="cube_color_project_report_ongoing cube_card_left ma-5 pa-5">
                  <div class="d-flex" style="justify-content: center;">
                    <div class="logo_project_report my-auto">
                      <img src="@/assets/icon/time_sand.png">
                    </div>
                    <div class="text-center pl-5">
                      <div class="ongoing_projects">
                        โครงการที่กำลังดำเนินการ
                      </div>
                      <div class="ongoing_projects">
                        จำนวน 3 โครงการ
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="cube_color_project_report_success cube_card_left ma-5 pa-5">
                  <div class="d-flex" style="justify-content: center;">
                    <div class="logo_project_report my-auto">
                      <img src="@/assets/icon/success_flag.png">
                    </div>
                    <div class="text-center pl-5">
                      <div class="ongoing_projects">
                        โครงการที่เสร็จสิ้นแล้ว
                      </div>
                      <div class="ongoing_projects">
                        จำนวน 3 โครงการ
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
            </v-card>
            <v-card style="border-radius: 10px !important;" class="ml-2 display_pc">
              <v-card-title class="document_list_header_project" style="padding: 10px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
                <div class="document_list_topic">งบประมาณโครงการทั้งหมด  ปี 2565</div>
              </v-card-title>
              <div class="ma-3">
                <div style="width: 100%; height: 40px; position: absolute; top: 55%; left: 0; margin-top: -20px; line-height:19px; text-align: center; z-index: 999999999999999;font-size: 14px;font-weight: 500;">
                  <div style="color:#000000;">งบประมาณโครงการทั้งหมด</div>
                  <div style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);font-size:16px;color:#151B54;">90,160,000</div>
                  <div style="color:#000000;">บาท</div>
                </div>
                <canvas id="issue_population" style="height:300px;width:100%;"></canvas>
              </div>
            </v-card>

            <v-card style="border-radius: 10px !important;" class="display_mobile mt-5">
              <v-card-title class="document_list_header_project" style="padding: 10px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
                <div class="document_list_topic">งบประมาณโครงการทั้งหมด  ปี 2565</div>
              </v-card-title>
              <div class="ma-3">
                <div style="width: 100%; height: 40px; position: absolute; top: 65%; left: 0; margin-top: -20px; line-height:19px; text-align: center; z-index: 999999999999999;font-size: 11px;font-weight: 500;">
                  <div style="color:#000000;">งบประมาณโครงการทั้งหมด</div>
                  <div style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);font-size:14px;color:#151B54;">90,160,000</div>
                  <div style="color:#000000;">บาท</div>
                </div>
                <canvas id="issue_population_mobile" style="height:300px;width:100%;"></canvas>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the plugin to all charts:
Chart.register(ChartDataLabels);

export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Project_report",
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
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
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
    chart_horizon() {
      let data = {
        labels: [['โครงการเพื่อพัฒนาชุมชน'], ['โครงการเพื่อบำรุงวัฒนธรรม'], ['โครงการเพื่อพัฒนาองค์กร']],
        datasets: [
          {
            data: [22540, 22540, 45080],
            backgroundColor: [
              "#a8a4ce",
              "#7a86b6",
              "#495c83",
            ],
            borderColor: [
              "#a8a4ce",
              "#7a86b6",
              "#495c83",
            ],
            datalabels: {
              labels: {
                index: {
                  align: 'end',
                  anchor: 'end',
                  color: ["#a8a4ce", "#7a86b6", "#495c83"],
                  font: {size: 16},
                  offset: 8,
                },
              }
            }
          },
        ]
      }
      let config = {
        type: 'doughnut',
        data: data,
        options: {
          cutout: 100,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: 'white',
              labels: {
                title: null,
              },
              font: {
                weight: 'bold',
              },
              formatter: function(value, context) {
                return context.dataset.data[context.dataIndex] + ' บาท' + '\n' + context.chart.data.labels[context.dataIndex] ;
              },
            },
            legend: {
              display: false
            }
          },

          // Core options
          aspectRatio: 3 / 2,
          cutoutPercentage: 8,
          layout: {
            padding: 16
          },
          elements: {
            line: {
              fill: false,
              tension: 0.4
            },
          },
        }
      }
      const ctx = document.getElementById('issue_population').getContext('2d');
      this.myChartHorizon = new Chart(ctx, config)
    },
    chart_horizon_mobile() {
      let data = {
        labels: [['โครงการเพื่อพัฒนาชุมชน' + ' ' + '22,540' + ' บาท'], ['โครงการเพื่อบำรุงวัฒนธรรม' + ' ' + '22,540' + ' บาท'], ['โครงการเพื่อพัฒนาองค์กร' + ' ' + '45,080' + ' บาท']],
        datasets: [{
          label: 'My First Dataset',
          data: [22540, 22540, 45080],
          backgroundColor: [
            "#a8a4ce",
            "#7a86b6",
            "#495c83",
          ],
          borderColor: [
            "#a8a4ce",
            "#7a86b6",
            "#495c83",
          ],
          hoverOffset: 4
        }]
      }
      let config = {
        type: 'doughnut',
        data: data,
        options: {
          cutout: 70,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: 'white',
              labels: {
                title: null,
              },
              font: {
                weight: 'bold',
              },
              formatter: function(value, context) {
                return context.dataset.data[context.dataIndex] + ' บาท' + '\n' + context.chart.data.labels[context.dataIndex] ;
              },
            },
            legend: {
              display: true
            }
          },

          // Core options
          aspectRatio: 3 / 2,
          cutoutPercentage: 8,
          layout: {
            padding: 16
          },
          elements: {
            line: {
              fill: false,
              tension: 0.4
            },
          },
        }
      }
      const ctx = document.getElementById('issue_population_mobile').getContext('2d');
      this.myChartHorizon = new Chart(ctx, config)
    },
  },
  mounted() {
    // this.convert_date()
    this.chart_horizon(),
    this.chart_horizon_mobile()
  },
}
</script>

<style scoped>
/* canvas {
  border: 1px dotted red;
} */
.chart-container {
  position: relative;
  margin: auto;
  height: 50% !important;
  width: 50% !important;
}
.ongoing_projects {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
}
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
.grid_card_project_report {
  display: grid;
  grid-template-columns: 25% 75%;
}
.white_space {
  margin-left: 5%;
}
.margin_left_project_report {
  margin-left: 12%;
}
.grid_cube_project_report {
  display: grid;
  grid-template-columns: 100%;
  z-index: 2
}
.cube_color_project_report_ongoing {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 31.12%, rgba(0, 0, 0, 0.2) 100%), #FD8F16;
  border: 1px solid #FD8F16;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.cube_color_project_report_success {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30.71%, rgba(0, 0, 0, 0.2) 100%), #37AE46;
  border: 1px solid #37AE46;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
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
.header_card_project_report {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%), #2E3577;
  border-radius: 20px;
  height: 162px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
.logo_project_report {
  width: 56px;
}
.logo_project_report>img {
  max-width: 100%;
}
.logo_estimate {
  width: 70px;
}
.logo_estimate>img {
  max-width: 100%;
}
.border_notification_project_report {
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
.header_balance_project_report {
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
.cube_card_right_project_report_project_report {
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
  .grid_cube_project_report {
    display: grid;
    /* grid-template-columns: 50% 50% !important; */
    grid-template-columns: 100%;
    z-index: 2;
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right_project_report {
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
  .header_balance_project_report {
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
  .grid_card_project_report {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .logo_project_report {
    width: 48px;
  }
  .logo_project_report>img {
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
  .border_notification_project_report {
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
  .grid_cube_project_report {
    display: grid;
    /* grid-template-columns: 50% 50% !important; */
    grid-template-columns: 100%;
    z-index: 2;
    margin-left: 2% !important;
    margin-right: 2% !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right_project_report {
    margin-left: 7% !important;
  }
  .logo_estimate {
    width: 48px;
  }
  .logo_estimate>img {
    max-width: 100%;
  }
  .header_balance_project_report {
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
  .grid_card_project_report {
    display: grid;
    grid-template-columns: 35% 65%;
  }
  .logo_project_report {
    width: 36px;
  }
  .logo_project_report>img {
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
  .border_notification_project_report {
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
  .grid_cube_project_report {
    display: grid;
    /* grid-template-columns: 50% 50% !important; */
    grid-template-columns: 100%;
    z-index: 2;
    margin-left: 7% !important;
    margin-right: 7% !important;
  }
  .cube_card_left {
    margin-right: 15% !important;
  }
  .cube_card_right_project_report {
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
  .header_balance_project_report {
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
  .grid_card_project_report {
    display: grid;
    grid-template-columns: 100% !important;
  }
  .logo_project_report {
    width: 64px !important;
  }
  .logo_project_report>img {
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
  .border_notification_project_report {
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
  .header_balance_project_report {
    margin-top: -30% !important;
  }
  .grid_cube_project_report {
    display: grid;
    grid-template-columns: 100% !important;
    z-index: 2;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .cube_card_left {
    margin-right: 7% !important;
  }
  .cube_card_right_project_report {
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
.display_pc {
  display: block;
}

.display_mobile {
  display: none;
}

@media screen and (min-width: 571px)  {
  .display_pc {
    display: block !important;
  }

  .display_mobile {
    display: none !important;
  }
}
@media screen and (max-width: 570px) {
  .display_pc {
    display: none !important;
  }

  .display_mobile {
    display: block !important;
  }

  .mr-2 {
    margin-right: 0px !important;
  }
}
.document_list_topic {
  color: #FFFFFF !important;
  font-size: 18px !important;
}
.document_list_header_project {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%),linear-gradient(0deg, #4EACDF, #4EACDF);
  /* background-color: #4EACDF !important; */
  border-radius: 10px !important;
  border: 1px solid #4EACDF !important;
}
</style>
