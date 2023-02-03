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
                  รายละเอียดกิจกรรม
                </div>
                <div class="topic_setup_document_detail my-auto">การประชุม •  ตารางกิจกรรม</div>
              </div>
            </div>
            <div class="display_mobile">
              <div class="meeting_detail_mobile my-auto">การประชุม •  ตารางกิจกรรม</div>
              <div class="meeting_detail_topic_mobile">รายละเอียดกิจกรรม</div>
            </div>
          </v-col>
        </v-row>
        <v-card class="mt-5" style="border-radius: 10px !important;">
          <v-card-title class="meetingdetail_header display_pc" style="padding: 10px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
            <div class="document_list_topic_detaildoc">ข้อมูลกิจกรรม</div>
          </v-card-title>
          <v-card-title class="meetingdetail_header_mobile display_mobile" style="padding: 20px;">
            <div class="document_list_topic_detaildoc_mobile">ข้อมูลกิจกรรม</div>
          </v-card-title>
          <div class="pl_pr_10_activity_detail">
            <v-row>
              <v-col class="display_pc" cols="12" xl="9" lg="9" md="9" sm="6">
                <div class="data_meeting_topic_date">วันอังคารที่ 5 ธันวาคม 2565 เวลา  17.00 - 19.00 น.</div>
                <div class="data_meeting_topic_name">กิจกรรม พิธีวางพานพุ่มและถวายบังคมเนื่องในวันคล้ายวันพระบรมราชสมภพพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร วันชาติ และวันพ่อแห่งชาติ</div>
                <div class="data_meeting_topic_location">สถานที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
              </v-col>
              <v-col class="display_mobile" cols="12" xl="9" lg="9" md="9" sm="6">
                <div class="data_meeting_topic_date_mobile">วันอังคารที่ 5 ธันวาคม 2565 เวลา  17.00 - 19.00 น.</div>
                <div class="data_meeting_topic_name_mobile">กิจกรรม พิธีวางพานพุ่มและถวายบังคมเนื่องในวันคล้ายวันพระบรมราชสมภพพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร วันชาติ และวันพ่อแห่งชาติ</div>
                <div class="data_meeting_topic_location_mobile">สถานที่ <a href="">หอประชุมใหญ่เทศบาล...</a></div>
              </v-col>
              <v-col cols="12" xl="3" lg="3" md="3" sm="6">
                <v-card>
                  <div class="d-flex pa-5" style="justify-content: center;">
                    <div><v-img :lazy-src="img_icon_carlendar" :src="img_icon_carlendar"></v-img></div>
                    <div class="Seethemeetingdocumentation my-auto">ดูกำหนดการ</div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="data_meeting_topic_date display_pc mb-5">การแต่งกาย</div>
                <div class="data_meeting_topic_date_mobile display_mobile mb-5">การแต่งกาย</div>
                <div class="d-flex">
                  <v-icon color="blue darken-4">mdi-tshirt-v</v-icon>
                  <div class="pl-5 topic_uniform topic_uniform_mobile">พิธีวางพานพุ่มดอกไม้และพิธีถวายบังคม</div>
                </div>
                <ul class="pl-16 ul_font">
                  <li>ข้าราชการพลเรือน/พนักงานรัฐ : เครื่องแบบปกติขาว</li>
                  <li>ชุดสุภาพโทนสีเหลือง</li>
                  <li>นักศึกษาสวมชุดนักศึกษาถูกระเบียบ</li>
                </ul>
                <div class="d-flex">
                  <v-icon color="blue darken-4">mdi-tshirt-v</v-icon>
                  <div class="pl-5 topic_uniform topic_uniform_mobile">กิจกรรมจิตอาสา</div>
                </div>
                <ul class="pl-16 ul_font">
                  <li>สวมเสื้อสีเหลือง</li>
                </ul>
              </v-col>
            </v-row>
          </div>
        </v-card>
        <v-card class="mt-8" style="border-radius: 10px !important;">
          <v-card-title class="meetingdetail_header display_pc" style="padding: 10px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
            <div class="document_list_topic_detaildoc">เอกสารขอเชิญเข้าร่วมกิจกรรม</div>
          </v-card-title>
          <v-card-title class="meetingdetail_header_mobile display_mobile" style="padding: 20px;">
            <div class="document_list_topic_detaildoc_mobile">เอกสารขอเชิญเข้าร่วมกิจกรรม</div>
          </v-card-title>
          <div class="pa-10">
            <v-img :lazy-src="img_example" :src="img_example"></v-img>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import img_icon_carlendar from "@/assets/image/carlendar.png";
import img_example from "@/assets/image/activity_detail.png";
export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      }
    }
  },
  name: "Activity_details",
  data() {
    return {
      img_icon_carlendar: img_icon_carlendar,
      img_example: img_example,
      loading_page: false,
    }
  },
  methods: {},
  mounted() {},
}
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
.meetingdetail_header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%),linear-gradient(0deg, #4EACDF, #4EACDF);
  /* background-color: #4EACDF !important; */
  border-radius: 10px !important;
  border: 1px solid #4EACDF !important;
}
.data_meeting_topic_date {
  font-weight: 600 !important;
  font-size: 20px !important;
  color: #000000 !important;
}
.data_meeting_topic_name {
  color: #484A5F !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}
.data_meeting_topic_location {
  color: #9699A7 !important;
  font-weight: 600 !important;
  font-size: 18px !important;
}
.Seethemeetingdocumentation {
  color: #484A5F !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  padding-left: 10px;
}
.document_list_topic_detaildoc {
  color: #FFFFFF !important;
  font-size: 18px !important;
}
.topic_uniform {
  color: #151B54;
  font-weight: 600;
  font-size: 16px;
}
.ul_font {
  color: #9699A7;
  font-size: 14px;
  font-weight: 600;
}
@media screen and (min-width: 571px)  {
  .display_pc {
    display: block !important;
  }

  .display_mobile {
    display: none !important;
  }
  .pl_pr_10_activity_detail {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
}
@media screen and (max-width: 570px) {
  .display_pc {
    display: none !important;
  }

  .display_mobile {
    display: block !important;
  }
  .pl_pr_10_activity_detail {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-top: 0px;
  }
  .topic_uniform_mobile {
    color: #151B54;
    font-weight: 600;
    font-size: 14px;
  }
  .ul_font {
    color: #9699A7;
    font-size: 12px;
    font-weight: 600;
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
.meetingdetail_header_mobile {
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%),linear-gradient(0deg, #4EACDF, #4EACDF); */
  /* background-color: #4EACDF !important; */
  border-radius: 10px !important;
  /* border: 1px solid #4EACDF !important; */
}
.document_list_topic_detaildoc_mobile {
  color: #000000 !important;
  font-size: 18px !important;
  font-weight: 400;
}
.data_meeting_topic_date_mobile {
  font-weight: 600 !important;
  font-size: 16px !important;
  color: #000000 !important;
}
.data_meeting_topic_name_mobile {
  color: #484A5F !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}
.data_meeting_topic_location_mobile {
  color: #9699A7 !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}
</style>
