<template>
  <div class="footer_padding">
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="pa-5">
        <v-row>
          <v-col cols="12" xl="6" lg="6" md="6">
            <div class="display_pc">
              <div class="d-flex">
                <div class="topic_setup_document border_right">
                  รายการการประชุม
                </div>
                <div class="topic_setup_document_detail my-auto">การประชุม</div>
              </div>
            </div>
            <div class="display_mobile">
              <div class="meeting_detail_mobile my-auto">การประชุม</div>
              <div class="meeting_detail_topic_mobile">รายการการประชุม</div>
            </div>
          </v-col>
        </v-row>
        <v-card class="mt-5 display_pc" style="border-radius: 10px !important">
          <v-card-title class="document_list_header_meeting display_pc" style="padding: 10px">
            <v-row class="pa-5">
              <v-col cols="12" xl="8" lg="8" md="8" class="my-auto">
                <div class="document_list_topic">รายการการประชุม</div>
              </v-col>
              <v-col cols="12" xl="4" lg="4" md="4">
                <div>
                  <v-text-field style="background-color: #F5F8FA" outlined label="ค้นหาการประชุม" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                </div>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-title style="padding: 10px">
            <v-row class="pa-5 pt-0">
              <v-col cols="12" xl="4" lg="5" md="6">
                <v-card height="350" style="border-radius: 10px;">
                  <v-date-picker header-date-format="" locale="TH" v-model="picker" full-width></v-date-picker>
                </v-card>
              </v-col>
              <v-col cols="12" xl="8" lg="7" md="6">
                <div>
                  <div class="pl-5 topic_date mb-3">
                    3 ตุลาคม 2565  
                  </div>
                  <div class="pl-10 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #7137E9;"></div>
                    <div class="pl-7">
                      <div class="time_detail_topic_date">เวลา  10.00 - 11.30 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร.pdf</div>
                          <div class="time_detail_file_date">1 ต.ค. 2565  13.50 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pl-10 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #FFC602;"></div>
                    <div class="pl-7">
                      <div class="time_detail_topic_date">เวลา  14.00 - 15.00 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ติดแผ่นป้ายเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ติดแผ่นป้ายเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร.pdf</div>
                          <div class="time_detail_file_date">30 ก.ย. 2565  09.00 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="pl-5 topic_date mb-3">
                    6 ตุลาคม 2565 
                  </div>
                  <div class="pl-10 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #55C98A;"></div>
                    <div class="pl-7">
                      <div class="time_detail_topic_date">เวลา  09.00 - 11.30 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ปิดประกาศ</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ปิดประกาศ.pdf</div>
                          <div class="time_detail_file_date">1 ต.ค. 2565  13.50 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
        <v-row class="display_mobile">
          <v-col cols="12" xl="4" lg="4" md="12" sm="12">
            <v-card height="350" style="border-radius: 10px;">
              <v-date-picker header-date-format="" locale="TH" v-model="picker" full-width></v-date-picker>
            </v-card>
          </v-col>
          <v-col cols="12" xl="8" lg="8" md="12" sm="12">
            <v-card>
              <div style="padding: 5px;">
                  <div class="pl-5 pt-3 topic_date mb-3">
                    3 ตุลาคม 2565  
                  </div>
                  <div class="pl-5 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #7137E9;"></div>
                    <div class="pl-7 pr-7">
                      <div class="time_detail_topic_date">เวลา  10.00 - 11.30 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร.pdf</div>
                          <div class="time_detail_file_date">1 ต.ค. 2565  13.50 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pl-5 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #FFC602;"></div>
                    <div class="pl-7 pr-7">
                      <div class="time_detail_topic_date">เวลา  14.00 - 15.00 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ติดแผ่นป้ายเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ติดแผ่นป้ายเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร.pdf</div>
                          <div class="time_detail_file_date">30 ก.ย. 2565  09.00 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="padding: 5px;">
                  <div class="pl-5 pt-3 topic_date mb-3">
                    6 ตุลาคม 2565 
                  </div>
                  <div class="pl-5 d-flex my-1">
                    <div class="timeline_meeting" style="background-color: #55C98A;"></div>
                    <div class="pl-7 pr-7">
                      <div class="time_detail_topic_date">เวลา  09.00 - 11.30 น.</div>
                      <div class="time_detail_totpic">หัวข้อ กำหนดสถานที่ปิดประกาศ</div>
                      <div class="time_detail_location">ห้องประชุม ที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
                      <div class="d-flex mt-1">
                        <div class="mr-2 my-auto">
                          <v-img max-height="" max-width="" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                        </div>
                        <div>
                          <div class="time_detail_file_name">ขอเชิญเข้าร่วมประชุม เรื่อง กำหนดสถานที่ปิดประกาศ.pdf</div>
                          <div class="time_detail_file_date">1 ต.ค. 2565  13.50 น.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import img_pdf from "@/assets/image/pdf 1.png";
export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Meeting_list",
  data() {
    return {
      img_pdf: img_pdf,
      loading_page: false,
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    };
  },
  methods: {},
  mounted() {
    
  }
};
</script>

<style scoped>
.topic_setup_document {
  color: #000000 !important;
  font-size: 24px !important;
}

.topic_setup_document_detail {
  color: #9699a7 !important;
  font-size: 16px !important;
  padding-left: 10px;
}
.document_list_header_meeting {
  border-radius: 10px !important;
}
.document_list_topic {
  color: #000000 !important;
  font-size: 20px !important;
}

.v-picker__title {
    color: #FFFFFF;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 16px;
    /* display: none !important; */
}

.topic_date {
  color: #484A5F !important;
  font-size: 20px !important;
  font-weight: 600 !important;
}

.timeline_meeting {
  /* border-left: 2px solid #7137E9; */
  /* padding-left: 10px; */
  width: 5px;
  border-radius: 5px;
}

.time_detail_topic_date {
  color: #484A5F !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}
.time_detail_totpic {
  color: #6A6462 !important;
  font-weight: 600 !important;
  font-size: 16px !important;
}
.time_detail_location {
  color: #B2B3BE !important;
  font-size: 16px !important;
  font-weight: 600 !;
}
.time_detail_file_name {
  color: #151B54 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
}
.time_detail_file_date {
  color: #4D4A4A !important;
  font-size: 12px !important;
  font-weight: 500 !important;
}
.v-picker {
  height: 100% !important;
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
}

.meeting_detail_mobile {
  color: #9699A7 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.meeting_detail_topic_mobile {
  color: #000000 !important;
  font-size: 18px !important;
  font-weight: 400 !important;
}
</style>
