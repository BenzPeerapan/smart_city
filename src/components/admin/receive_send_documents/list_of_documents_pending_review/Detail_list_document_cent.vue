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
          <v-col cols="12">
            <div class="display_pc">
              <div class="d-flex">
                <div class="topic_setup_document border_right">ข้อมูลเอกสาร</div>
                <div class="topic_setup_document_detail my-auto">รับ - ส่งเอกสาร • รายการเอกสารรอตรวจสอบ • เอกสารรอเซ็นต์</div>
              </div>
            </div>
            <div class="display_mobile">
              <div class="topic_setup_document_detail_mobile my-auto">รับ - ส่งเอกสาร • รายการเอกสารรอตรวจสอบ • เอกสารรอเซ็นต์</div>
              <div class="topic_setup_document_mobile">ข้อมูลเอกสาร</div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-col cols="12" xl="5" lg="5" md="6" sm="12">
            <v-card style="border-radius: 10px !important;">
              <v-card-title class="document_list_header display_pc" style="padding: 10px;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
                <div class="document_list_topic">ขั้นตอนการดำเนินการ</div>
              </v-card-title>
              <v-card-title class="document_list_header_mobile display_mobile" style="padding: 10px;">
                <div class="document_list_topic_mobile">ขั้นตอนการดำเนินการ</div>
              </v-card-title>
              <div class="pa-5">
                <v-timeline align-top dense>
                  <v-timeline-item color="amber" small fill-dot>
                    <v-row class="pt-1">
                      <v-col class="pl-0" cols="12">
                        <div class="topic_timeline">
                          รับหนังสือราชการจากภายใน (วันที่ 1 ตุลาคม 2565)
                        </div>
                        <div class="detail_timeline pt-2">
                          โดย  ชื่อพนักงาน ตำแหน่ง เจ้าหน้าที่ธุรการ สำนักปลัด
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item color="green" small fill-dot>
                    <v-row class="pt-1">
                      <v-col class="pl-0" cols="12">
                        <div class="topic_timeline">
                          เสนอหัวหน้าหน่วยงาน เพื่อบันทึกให้ความเห็น (วันที่ 2 ตุลาคม 2565)
                        </div>
                        <div class="detail_timeline pt-2">
                          โดย  ชื่อพนักงาน ตำแหน่ง เจ้าหน้าที่ธุรการ สำนักปลัด
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item color="blue" small fill-dot>
                    <v-row class="pt-1">
                      <v-col class="pl-0" cols="12">
                        <div class="topic_timeline">
                          หัวหน้าหน่วยงาน บันทึกให้ความเห็น (วันที่ 2 ตุลาคม 2565)
                        </div>
                        <div class="detail_timeline pt-2">
                          โดย  ชื่อพนักงาน ตำแหน่ง หัวหน้าฝ่าย.... สำนักปลัด
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item color="amber" small fill-dot>
                    <v-row class="pt-1">
                      <v-col class="pl-0" cols="12">
                        <div class="topic_timeline">
                          เสนอผู้บริหารพิจารณาสั่งการ (วันที่ 2 ตุลาคม 2565)
                        </div>
                        <div class="detail_timeline pt-2">
                          โดย  ชื่อพนักงาน ตำแหน่ง เจ้าหน้าที่ธุรการ สำนักปลัด
                        </div>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                  <v-timeline-item color="green" small fill-dot>
                    <v-row class="pt-1">
                      <v-col class="pl-0" cols="12">
                        <div class="topic_timeline">
                          รอผู้บริหารพิจารณาสั่งการ
                        </div>
                        <div class="detail_timeline pt-2">
                          ดาวน์โหลดเอกสาร
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col class="pl-0" cols="12" xl="6" lg="6" md="12" sm="6">
                        <v-card class="pa-3" style="border-radius: 5px;">
                          <div class="d-flex">
                            <v-img max-height="70" max-width="50" :lazy-src="img_pdf" :src="img_pdf"></v-img>
                            <div class="pl-2">
                              <div>
                                ประกาศเทศบาล.pdf
                              </div>
                              <div>
                                Adobe Acrobat Document
                              </div>
                              <div>
                                142 KB
                              </div>
                            </div>
                          </div>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-timeline-item>
                </v-timeline>
                <div class="pa-3 pl-0 pr-0 text-center">
                  <v-btn x-large color="" class="button_color_add_document_save" elevation="2">
                    เซ็นต์เอกสาร
                  </v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" xl="7" lg="7" md="6" sm="12">
            <v-card style="border-radius: 10px !important;background-color:#FCFCFC;">
              <div class="example_topic display_pc">
                ตัวอย่างเอกสาร
              </div>
              <div class="example_topic_mobile display_mobile">
                ตัวอย่างเอกสาร
              </div>
              <div class="pl-7 pr-7 pb-7">
                <v-img :lazy-src="img_example" :src="img_example"></v-img>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import img_example from "@/assets/image/1221162_page-0001 1.png";
import img_pdf from "@/assets/image/pdf-icon-png-2056.png";
export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "Detail_list_document_cent",
  data() {
    return {
      img_pdf: img_pdf,
      img_example: img_example,
      loading_page: false,
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
.topic_setup_document {
  color: #000000 !important;
  font-size: 24px !important;
}

.topic_setup_document_detail {
  color: #9699A7 !important;
  font-size: 16px !important;
  padding-left: 10px;
}
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.document_list_header {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 86.36%),linear-gradient(0deg, #4EACDF, #4EACDF);
  /* background-color: #4EACDF !important; */
  border-radius: 10px !important;
  border: 1px solid #4EACDF !important;
}
.document_list_topic {
  color: #FFFFFF !important;
  font-size: 18px !important;
}
.test_svnsikn {
  padding-top: 24px;
  position: relative;
}
.example_topic {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center !important;
  font-size: 18px !important;
  color: #000000 !important;
  font-weight: 500 !important;
}
.v-timeline {
  padding: 0px !important;
}
.v-application .amber {
    background-color: #FFFFFF !important;
    border-color: #EEC634 !important;
    border: 3px solid;
}
.topic_timeline {
  color: #000000 !important;
  font-size: 16px !important;
  font-weight: 500 !important;
}
.detail_timeline {
  color: #9699A7 !important;
  font-weight: 600 !important;
  font-size: 14px !important;
}
.v-application .green {
    background-color: #FFFFFF !important;
    border-color: #5FC38B !important;
    border: 3px solid;
}
.v-application .blue {
    background-color: #FFFFFF !important;
    border-color: #1F9EE9 !important;
    border: 3px solid;
}
.button_color_add_document_save {
  background-color: #37AE46 !important;
  color: #fff !important;
  border-radius: 10px !important;
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

  .v-application--is-ltr .v-timeline--dense:not(.v-timeline--reverse)::before {
    left: calc(11px - 0px);
    right: initial;
  }

  .v-timeline--dense .v-timeline-item__body {
    max-width: calc(80% - 0px);
  }

  .v-timeline-item__divider {
    position: relative;
    min-width: 20%;
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .example_topic_mobile {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    text-align: left !important;
    font-size: 18px !important;
    color: #000000 !important;
    font-weight: 500 !important;
  }
}
</style>
