<template>
  <div>
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <v-card elevation="4" class="main_card">
        <v-card elevation="5" class="header_sub_card">
          <div class="header_flex">
            <div class="title_text pa-5">การให้บริการประชาชน</div>
            <div class="grid_input">
              <div class="ma-1 ma-md-3 ma-lg-3 ma-xl-3">
                <v-select background-color="white" label="เลือกประเภทวันที่" :items="types" item-text="type_date" item-value="id" v-model="type" style="border-radius: 5px;" filled></v-select>
              </div>
              <div class="ma-1 ma-md-3 ma-lg-3 ma-xl-3">
                <v-menu ref="menu_date_start" v-model="menu_date" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field background-color="white" v-model="date" label="วันที่เริ่มต้น" :rules="[v => !!v || 'กรุณากรอกวันที่เริ่มต้น']" append-icon="mdi-calendar-clock" readonly v-bind="attrs" v-on="on" style="border-radius: 5px;" filled></v-text-field>
                  </template>
                  <v-date-picker locale="TH" @change="diffDateTH(dateEN)" v-model="dateEN" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="selectDate()">
                      ตกลง
                    </v-btn>
                    <v-btn text color="primary" @click="menu_date = false">
                      ยกเลิก
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
              <div class="ma-1 ma-md-3 ma-lg-3 ma-xl-3">
                <v-menu ref="menu_date_end" v-model="menu_date_end" :close-on-content-click="false" :return-value.sync="date_end" transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field background-color="white" v-model="date_end" label="วันที่สิ้นสุด" :rules="[v => !!v || 'กรุณากรอกวันที่สิ้นสุด']" append-icon="mdi-calendar-clock" readonly v-bind="attrs" v-on="on" style="border-radius: 5px;" filled></v-text-field>
                  </template>
                  <v-date-picker locale="TH" @change="diffDateTH(dateEN_end)" v-model="dateEN_end" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="selectDateEnd()">
                      ตกลง
                    </v-btn>
                    <v-btn text color="primary" @click="menu_date_end = false">
                      ยกเลิก
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </div>
          </div>
        </v-card>
        <div class="header_balance">
          <div class="grid_cube ma-2 ma-md-5 ma-lg-5 ma-xl-5">
            <div class="pa-2">
              <v-card elevation="4" class="card_cube pa-3">
                <div class="cube_header_content">งานทะเบียนราษฎร</div>
                <div class="d-flex justify-center">
                  <div class="cube_content" style="color: #240A20">17,911</div>
                  <div class="cube_sub_header_content ml-2">คน</div>
                </div>
              </v-card>
            </div>
            <div class="pa-2">
              <v-card elevation="4" class="card_cube pa-3">
                <div class="cube_header_content">งานทะเบียนทั่วไป</div>
                <div class="d-flex justify-center">
                  <div class="cube_content" style="color: #8B42E0">16,981</div>
                  <div class="cube_sub_header_content ml-2">คน</div>
                </div>
              </v-card>
            </div>
            <div class="pa-2">
              <v-card elevation="4" class="card_cube pa-3">
                <div class="cube_header_content">งานบัตรประจำตัวประชาชน</div>
                <div class="d-flex justify-center">
                  <div class="cube_content" style="color: #74A9B9">27,320</div>
                  <div class="cube_sub_header_content ml-2">คน</div>
                </div>
              </v-card>
            </div>
            <div class="pa-2">
              <v-card elevation="4" class="card_cube pa-3">
                <div class="cube_header_content">ข้อมูลอื่น ๆ</div>
                <div class="d-flex justify-center">
                  <div class="cube_content" style="color: #A49492">16,861</div>
                  <div class="cube_sub_header_content ml-2">คน</div>
                </div>
              </v-card>
            </div>
          </div>
          <div class="ma-5 pa-2" style="height: 60vh !important">
            <canvas id="service_population"></canvas>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import {Date_now_TH, minDate} from "@/js/handler";

export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Service_chart",
  data() {
    return {
      loading_page: false,
      menu_date: false,
      menu_date_end: false,
      start_date: this.min_date(),
      date: this.date_th_now(),
      date_end: this.date_th_now(),
      dateEN: '',
      dateEN_end: '',
      type: 1,
      types: [
        {id: 1, type_date: 'วัน'},
        {id: 2, type_date: 'เดือน'},
        {id: 3, type_date: 'ปี'},
      ]
    }
  },
  methods: {
    min_date: function () {
      return minDate()
    },
    date_th_now: function () {
      return Date_now_TH()
    },
    async selectDate() {
      this.$refs.menu_date_start.save(this.date)
      this.menu_date = false
    },
    async selectDateEnd() {
      this.$refs.menu_date_end.save(this.date_end)
      this.menu_date_end = false
    },
    diffDateTH(value) {
      const diff = value.split('-')
      const day = diff[2]
      const month = diff[1]
      const year = parseInt(diff[0])+ 543
      const final_date = day+'-'+month+'-'+year
      return this.date = final_date
    },
    chart_population() {
      let data = {
        labels: ['18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565','18-10-2565',],
        datasets: [
          {
            data: [50000, 38564, 19120, 17910, 5380, 4702, 4504, 3580, 3502, 3410, 3120, 2530, 1490, 1450, 660, 160, 120, 120, 222, 222, 222, 222, 222, 222, 222, 222, 222],
            borderColor: ['#3366cc'],
            backgroundColor: ['#3366cc'],
            fill: false,
          },
          {
            data: [3213, 32132, 22232, 5232, 1112, 332, 4504, 1213, 23502, 3410, 3120, 2530, 1490, 1450, 660, 160, 120, 120, 222, 222, 222, 222, 222, 222, 222, 222, 222],
            borderColor: ['#dc3912'],
            backgroundColor: ['#dc3912'],
            fill: false,
          },
          {
            data: [13213, 2132, 2222, 5232, 1112, 3232, 41504, 1213, 23502, 34120, 31220, 25330, 1490, 1450, 660, 160, 120, 120, 222, 222, 222, 222, 222, 222, 222, 222, 222],
            borderColor: ['#ff9900'],
            backgroundColor: ['#ff9900'],
            fill: false,
          },
        ],
      }
      let config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          }
        },
      }
      const ctx = document.getElementById('service_population').getContext('2d');
      this.myChartPopulation = new Chart(ctx, config)
    },
  },
  mounted() {
    this.chart_population()
  }
}
</script>

<style scoped>
.main_card {
  background-color: #FFFFFF;
  border-radius: 20px;
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
.header_flex {
  display: flex;
  justify-content: space-between;
}
.grid_input {
  display: grid;
  grid-template-columns: 30% 35% 35%;
}
.grid_cube {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.card_cube {
  background-color: #FFFFFF;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.cube_header_content {
  color: #24091F;
  font-weight: 500;
  font-size: 18px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
.header_balance {
  margin-top: -4%;
}
.cube_content {
  font-weight: 500;
  font-size: 40px;
}
.cube_sub_header_content {
  color: #24091F;
  font-weight: 500;
  font-size: 16px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding-top: 7%;
}
@media only screen and (max-width: 1180px) {
  .title_text {
    color: #FFFFFF;
    font-size: 18px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .header_balance {
    margin-top: -8%;
  }
  .cube_content {
    font-weight: 500;
    font-size: 28px;
  }
  .cube_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .cube_sub_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 8%;
  }
}
@media only screen and (max-width: 1024px) {
  .title_text {
    color: #FFFFFF;
    font-size: 18px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .header_balance {
    margin-top: -8%;
  }
  .cube_content {
    font-weight: 500;
    font-size: 28px;
  }
  .cube_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .cube_sub_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 8%;
  }
}
@media only screen and (max-width: 820px) {
  .header_flex {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .title_text {
    color: #FFFFFF;
    font-size: 18px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .header_balance {
    margin-top: -5%;
  }
  .cube_content {
    font-weight: 500;
    font-size: 28px;
  }
  .cube_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .cube_sub_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 8%;
  }
}
@media only screen and (max-width: 768px) {
  .header_flex {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .title_text {
    color: #FFFFFF;
    font-size: 18px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .header_balance {
    margin-top: -5%;
  }
  .cube_content {
    font-weight: 500;
    font-size: 28px;
  }
  .cube_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .cube_sub_header_content {
    color: #24091F;
    font-weight: 500;
    font-size: 14px;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    padding-top: 8%;
  }
}
@media only screen and (max-width: 500px) {
  .header_sub_card {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 67.71%), #2E3577;
    border-radius: 20px;
    height: 362px;
  }
  .grid_input {
    display: grid;
    grid-template-columns: 100%;
  }
  .header_balance {
    margin-top: -14%;
  }
  .grid_cube {
    display: grid;
    grid-template-columns: 100%;
  }
}
</style>
