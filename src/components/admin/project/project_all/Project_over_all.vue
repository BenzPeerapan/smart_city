<template>
  <div class="footer_padding">
    <div v-if="loading_page === true">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
        <v-skeleton-loader type="article, actions"></v-skeleton-loader>
      </v-sheet>
    </div>
    <div v-else>
      <div class="pa-3 mt-3">
        <div class="d_play_desktop">
          <div class="d-flex">
            <div class="topic_project_header border_right">รายงานภาพรวมโครงการ</div>
            <div class="topic_project_content_link my-2" @click="main_page">โครงการทั้งหมด</div>
            <div class="topic_project_content my-2"> > </div>
            <div class="topic_project_content my-2">โครงการพัฒนาระบบสำหรับองค์กร Smart Conext</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="d-flex">
            <div class="topic_project_content_link my-2 pl-0" @click="main_page" style="font-size: 10px !important">โครงการทั้งหมด</div>
            <div class="topic_project_content my-2" style="font-size: 10px !important"> > </div>
            <div class="topic_project_content my-2" style="font-size: 10px !important">โครงการพัฒนาระบบสำหรับองค์กร Smart Conext</div>
          </div>
          <div class="topic_profile_header" style="font-size: 14px; !important">รายงานภาพรวมโครงการ</div>
        </div>
        <!-- Row 1 -->
        <div class="grid_card_full mt-5">
          <v-card elevation="4" class="main_card">
            <v-card elevation="4" class="header_sub_card">
              <div class="grid_progress">
                <div class="title_text pa-5">ข้อมูลโครงการ</div>
                <div class="pa-2 my-auto">
                  <div class="sub_title_header pa-2 text-right">สำเร็จแล้ว 85%</div>
                  <div class="mr-2">
                    <v-progress-linear class="progress_style" v-model="progress_bar" background-color="#FFFFFF" color="#37AE46" height="11"></v-progress-linear>
                  </div>
                </div>
              </div>
            </v-card>
            <div class="grid_content my-3">
              <div class="pa-5">
                <div class="logo mx-auto">
                  <img src="@/assets/icon/organization.png">
                </div>
              </div>
              <div class="my-5 pa-3">
                <div class="header_content_project"><b>ชื่อโครงการ : โครงการพัฒนาระบบสำหรับองค์กร Smart Conext</b></div>
                <div class="grid_sub_content my-2">
                  <div class="grid_content_flex">
                    <div class="sub_content">รหัสโครงการ : สส.1520/01</div>
                    <div class="sub_content">ประเภทโครงการ : เพื่อพัฒนาองค์กร</div>
                  </div>
                </div>
                <div class="sub_content my-2">
                  วัตถุประสงค์โดยย่อ : เพื่อพัฒนาองค์กรให้ดำเนินไปตามกิจกรรมของรัฐบาลแผนปฏิบัติการและการขับเคลื่อนการพัฒนาเมืองอัจฉริยะให้สอดคล้องกับทิศทางการพัฒนาประเทศตามแนวทางการขับเคลื่อน
                  ประเทศไทย 4.0 และยุทธศาสตร์ชาติ 20 ปี
                </div>
                <div class="sub_content my-2">
                  ระยะเวลาโครงการ : เริ่มต้น 17 ตุลาคม 2565 สิ้นสุด 17 ตุลาคม 2566 (12 เดือน)
                </div>
                <div class="sub_content my-2">
                  งบประมาณโครงการ 45x,xxx.xx บาท
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <!-- Row 2 -->
        <div class="grid_card_full mt-7">
          <v-card elevation="4" class="main_card">
            <v-card elevation="4" class="header_sub_card">
              <div class="title_text pa-5">ผู้เกี่ยวข้อง</div>
            </v-card>
            <div class="pa-5">
              <div class="grid_content_title my-3">
                <div class="">
                  <div class="header_content_project"><b>ผู้รับผิดชอบโครงการ</b></div>
                  <div class="grid_sub_content_detail my-2 pa-3 pl-5">
                    <div class="sub_content">รหัสโครงการ : สส.1520/01</div>
                    <div class="sub_content">ประเภทโครงการ : เพื่อพัฒนาองค์กร</div>
                  </div>
                </div>
                <div class="">
                  <div class="header_content_project"><b>ผู้รับผิดชอบโครงการ</b></div>
                  <div class="pa-3 pl-5">
                    <div class="">1. นาย จณัตว์ อัศวรักษ</div>
                    <div class="">2. นาง เมนิลา วีริยะโสภณ</div>
                    <div class="">3. นาย ฐิติพัศ เกียรติบวร</div>
                    <div class="">4. นาย ทัตเทพ ก้องวัฒนะ</div>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <div class="header_content_project"><b>จัดซื้อจัดจ้าง ผู้ดำเนินการโครงการ</b></div>
                <div class="pa-3 pl-5">
                  <div class="">บริษัท ซอฟแวร์ จำกัด</div>
                  <div class="">นาย กาลณิช ภักดีศิริ    ผู้ประสานงาน</div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <!-- Row 3 -->
        <div class="grid_card_full mt-7">
          <v-card elevation="4" class="main_card">
            <v-card elevation="4" class="header_sub_card">
              <div class="title_text pa-5">ขั้นตอนการทำงาน</div>
            </v-card>
            <div class="pa-2 pa-md-7 pa-lg-7 pa-xl-7">
              <div class="time_line_status">
                <div class="line_status"></div>
              </div>
              <!-- #STEP1 -->
              <v-card elevation="4" class="main_card mt-7">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">1.จัดทำหนังสือข้อเสนอโครงการ</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">หนังสือแจ้งการประชุมเสนอโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">10 ต.ค 2565 13.50 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/doc.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">บันทึกการประชุมนำเสนอโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.docx</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">22 ต.ค 2565 10.30 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP2 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">2.การประชุมเสนอโครงการ</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">หนังสือแจ้งการประชุมเสนอโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">10 ต.ค 2565 13.50 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/ppt.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">สื่อนำเสนอโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pptx</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">18 ต.ค 2565 14.11 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/doc.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">บันทึกการประชุมนำเสนอโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.docx</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">22 ต.ค 2565 10.30 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP3 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">3.การอนุมัติจัดตั้งโครงการ</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">เอกสารลงนามอนุมัติโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">24 ต.ค 2565 15.08 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP4 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">4.จัดซื้อจัดจ้าง</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">หนังสือประกาศจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">29 ต.ค 2565 16.28 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP5 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">5.การประชุม การจัดซื้อจัดจ้าง</div>
                    <div class="time_line_content_detail">วันที่ 31 ต.ค 2565 เวลา 09.00 - 11.00 น. ณ ห้องประชุมกล้วยไม้ 4</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">หนังสือแจ้งการประชุมจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">29 ต.ค 2565 17.05 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">หนังสือแจ้งการประชุมจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">29 ต.ค 2565 17.05 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/doc.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">บันทึกการประชุมจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.docx </div>
                            <div class="document_detail_size" style="color: #4D4A4A;">1 พ.ย 2565 11.30 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP6 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">6.การอนุมัติการจัดซื้อจัดจ้าง</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">เอกสารอนุมัติการจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">12 พ.ย 2565 10.28 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP7 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">7.เซ็นสัญญาผู้รับจ้าง</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">สัญญาโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 พ.ย 2565 10.28 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">CM-12 โครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 พ.ย 2565 10.29 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP8 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">8.ดำเนินการ ส่งงานงวดที่ 1</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo my-auto mx-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2 mx-auto">
                            <div class="document_detail_size" style="color: #151B54;">รายงานงวดที่ 1.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.19 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/image-file_gray.png">
                          </div>
                          <div class="pa-2 mx-auto">
                            <div class="document_detail_size" style="color: #151B54;">สำเนาสมุดบัญชี.jpg</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/image-file_folder.png">
                          </div>
                          <div class="pa-2 mx-auto">
                            <div class="document_detail_size" style="color: #151B54;">อัลบั้ม : ผลการดำเนินการ งวดที่ 1</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/hyperlink.png">
                          </div>
                          <div class="pa-2 mx-auto">
                            <div class="document_detail_size" style="color: #151B54;">www.smartconnext.com</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP9 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">9.อนุมัติการเบิกเงิน งวดที่ 1</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">เอกสารอนุมัติการเบิกเงินงวดที่ 1.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">31 ม.ค 2566 10.14 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">ใบเสร็จรับเงิน จากผู้รับจ้างงวดที่ 1.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">1 มี.ค 2566 13.54 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP10 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">10.ดำเนินการ ส่งงานงวดที่ 2</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">รายงานงวดที่ 1.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.19 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/image-file_gray.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">สำเนาสมุดบัญชี.jpg</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/image-file_gray.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">อัลบั้ม : ผลการดำเนินการ งวดที่ 1</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP11 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/checked.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">11.อนุมัติการเบิกเงิน งวดที่ 2</div>
                    <v-divider class="my-2"/>
                    <div class="grid_document pa-4 pl-0 pt-0">
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">เอกสารอนุมัติการเบิกเงินงวดที่ 2.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">28 เม.ย 2566 14.21 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/pdf.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">ใบเสร็จรับเงิน จากผู้รับจ้างงวดที่ 2.pdf</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">31 มี.ค 2566 16.54 น.</div>
                          </div>
                        </div>
                      </div>
                      <div class="my-2">
                        <div class="document_flex">
                          <div class="document_logo mx-auto my-auto">
                            <img src="@/assets/icon/image-file_gray.png">
                          </div>
                          <div class="pa-2">
                            <div class="document_detail_size" style="color: #151B54;">อัลบั้ม : ผลการดำเนินการ งวดที่ 1</div>
                            <div class="document_detail_size" style="color: #4D4A4A;">20 ม.ค 2566 15.20 น.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-card>
              <!-- #STEP12 -->
              <v-card elevation="4" class="main_card mt-14">
                <div class="py-4" style="position: relative">
                  <div class="check_status">
                    <div class="log_status">
                      <img src="@/assets/icon/waiting.png"/>
                    </div>
                  </div>
                  <div class="margin_left">
                    <div class="time_line_content_title">12.ปิดโครงการ</div>
                    <div class="time_line_content_detail">กำลังดำเนินการ</div>
                  </div>
                </div>
              </v-card>
            </div>
          </v-card>
        </div>
        <!-- Row 4 -->
        <div class="grid_card_full mt-7">
          <v-card elevation="4" class="main_card">
            <v-card elevation="4" class="header_sub_table">
              <div class="header_table_title">
                <div class="title_text pa-5">ขั้นตอนการทำงาน</div>
                <div class="title_text title_table pa-sm-5 pa-md-5 pa-lg-5 pa-xl-5">งบประมาณทั้งโครงการ 45x,xxx.xx บาท</div>
              </div>
            </v-card>
            <div class="pa-5">
              <v-data-table :headers="header" :items="data_list" :items-per-page="per_page" hide-default-footer mobile-breakpoint="0">
                <template v-slot:item="dataDetail">
                  <tr>
                    <td>
                      <div class="text-left">{{dataDetail.item.report_list}}</div>
                    </td>
                    <td>
                      <div class="text-center">{{dataDetail.item.budget_confirm}}</div>
                    </td>
                    <td>
                      <div class="text-center">{{dataDetail.item.spend}}</div>
                    </td>
                    <td>
                      <div class="text-center">{{dataDetail.item.remaining}}</div>
                    </td>
                  </tr>
                </template>
                <template v-slot:body.append>
                  <tr>
                    <td>
                      <div class="text-center"><b>รวม</b></div>
                    </td>
                    <td>
                      <div class="text-center"><b>45x,xxx.xx</b></div>
                    </td>
                    <td>
                      <div class="text-center"><b>45x,xxx.xx</b></div>
                    </td>
                    <td>
                      <div class="text-center"><b>4,359.00</b></div>
                    </td>
                  </tr>
                </template>
              </v-data-table>
              <v-divider/>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
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
  name: "Project_over_all",
  data() {
    return {
      loading_page: false,
      progress_bar: 85,
      per_page: -1,
      header: [
        {
          text: 'รายการ',
          align: 'center',
          value: 'report_list',
          fixed: true,
          width: '550px',
        },
        {
          text: 'งบที่อนุมัติ',
          align: 'center',
          value: 'budget_confirm',
          fixed: true,
          width: '150px',
        },
        {
          text: 'จ่ายจริง',
          align: 'center',
          value: 'spend',
          fixed: true,
          width: '150px',
        },
        {
          text: 'ล็อตสินค้า',
          align: 'center',
          value: 'remaining',
          fixed: true,
          width: '150px',
        },
      ],
      data_list: [
        {
          id: 1,
          report_list: '1. ค่าจ้าง',
          budget_confirm: '35,000.00',
          spend: '35,000.00',
          remaining: '0.00',
        },
        {
          id: 2,
          report_list: '2. ค่าใช้จ่ายเทคโนโลยีและนวัตกรรม',
          budget_confirm: '39x,xxx.00',
          spend: '39x,xxx.00',
          remaining: '0.00',
        },
        {
          id: 3,
          report_list: '3. ค่าวัสดุสิ้นเปลืองและอุปกรณ์',
          budget_confirm: '20,000.00',
          spend: '15,641.00',
          remaining: '4,359.00',
        }
      ],
    }
  },
  methods: {
    main_page () {
      this.$router.push('/projectall')
    },
  }
}
</script>

<style scoped>
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.topic_project_header {
  font-size: 24px;
  color: #000000;
}
.topic_project_content {
  color: #7E7E7E;
  padding-left: 10px;
}
.topic_project_content_link {
  color: #4EACDF;
  padding-left: 10px;
  cursor: pointer;
}
.grid_card_full {
  display: grid;
  grid-template-columns: 100%;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
.main_card {
  background-color: #FFFFFF;
  border-radius: 20px;
}
.header_sub_card {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 67.71%), #2E3577;
  border-radius: 20px;
  height: 75px;
}
.header_sub_table {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 67.71%), #2E3577;
  border-radius: 20px;
  height: 75px;
}
.title_text {
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 500;
}
.sub_title_header {
  font-weight: 500;
  font-size: 12px;
  color: #FFFFFF;
}
.progress_style {
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.grid_progress {
  display: grid;
  grid-template-columns: 70% 30%;
}
.grid_content {
  display: grid;
  grid-template-columns: 10% 90%;
}
.logo {
  width: 75px;
}
.logo>img {
  max-width: 100%;
}
.document_logo {
  width: 35px;
}
.document_logo>img {
  max-width: 35px;
}
.log_status {
  width: 50px;
}
.log_status>img {
  max-width: 100%;
}
.header_content_project {
  color: #000000;
  font-weight: 500;
  font-size: 16px;
}
.sub_content {
  font-weight: 500;
  font-size: 14px;
  color: #4D4A4A;
}
.grid_sub_content {
  display: grid;
  grid-template-columns: 30%;
}
.grid_content_flex {
  display: flex;
  justify-content: space-between;
}
.grid_content_title {
  display: grid;
  grid-template-columns: 50% 50%;
}
.grid_sub_content_detail {
  display: grid;
  grid-template-columns: 50% 50%;
}
.time_line_content_title {
  color: #000000;
  font-weight: 600;
  font-size: 18px;
}
.time_line_content_detail {
  color: #4D4A4A;
  font-weight: 500;
  font-size: 12px;
}
.grid_document {
  display: flex;
}
.document_flex {
  display: flex;
  justify-content: space-between;
  word-wrap: break-word;
}
.document_detail_size {
  font-weight: 500;
  font-size: 10px;
}
.margin_left {
  margin-left: 7%;
}
.check_status {
  position: absolute;
  top: -15%;
  bottom: 0;
  left: 2%;
  right: 0;
}
.time_line_status {
  position: absolute;
  top: 7%;
  bottom: 0;
  left: 4.8%;
  right: 0;
}
.line_status {
  border-left: 5px solid rgba(121, 118, 118, 0.5);
  height: 97%;
}
.header_table_title {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 1180px) {
  .grid_sub_content {
    display: grid;
    grid-template-columns: 60%;
  }
  .time_line_status {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 6.4%;
    right: 0;
  }
  .line_status {
    border-left: 5px solid rgba(121, 118, 118, 0.5);
    height: 97%;
  }
}
@media only screen and (max-width: 1024px) {
  .grid_content {
    display: grid;
    grid-template-columns: 15% 85%;
  }
  .grid_sub_content_detail {
    display: grid;
    grid-template-columns: 100%;
  }
  .margin_left {
    margin-left: 10%;
  }
  .grid_sub_content {
    display: grid;
    grid-template-columns: 60%;
  }
  .time_line_status {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 7%;
    right: 0;
  }
  .line_status {
    border-left: 5px solid rgba(121, 118, 118, 0.5);
    height: 97%;
  }
}
@media only screen and (max-width: 820px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
  .grid_content {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .grid_sub_content {
    display: grid;
    grid-template-columns: 80%;
  }
  .time_line_status {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 6%;
    right: 0;
  }
  .line_status {
    border-left: 5px solid rgba(121, 118, 118, 0.5);
    height: 97%;
  }
}
@media only screen and (max-width: 768px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
  .grid_content {
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .grid_sub_content {
    display: grid;
    grid-template-columns: 80%;
  }
  .time_line_status {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 6.3%;
    right: 0;
  }
  .line_status {
    border-left: 5px solid rgba(121, 118, 118, 0.5);
    height: 97%;
  }
  .grid_progress {
    display: grid;
    grid-template-columns: 55% 45%;
  }
}
@media only screen and (max-width: 500px) {
  .grid_document {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_sub_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_content_flex {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_content_title {
    display: grid;
    grid-template-columns: 100%;
  }
  .time_line_content_title {
    color: #000000;
    font-weight: 600;
    font-size: 12px;
  }
  .time_line_content_detail {
    color: #4D4A4A;
    font-weight: 500;
    font-size: 9px;
  }
  .margin_left {
    margin-left: 24%;
  }
  .document_logo {
    width: 25px;
  }
  .document_logo>img {
    max-width: 25px;
  }
  .log_status {
    width: 40px;
  }
  .log_status>img {
    max-width: 100%;
  }
  .check_status {
    position: absolute;
    top: -7%;
    bottom: 0;
    left: 6%;
    right: 0;
  }
  .time_line_status {
    position: absolute;
    top: 7%;
    bottom: 0;
    left: 14%;
    right: 0;
  }
  .line_status {
    border-left: 5px solid rgba(121, 118, 118, 0.5);
    height: 99%;
  }
  .header_table_title {
    display: grid;
    grid-template-columns: 100%;
  }
  .title_text {
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 400;
  }
  .header_sub_table {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 25.04%, rgba(0, 0, 0, 0.2) 67.71%), #2E3577;
    border-radius: 20px;
    height: 125px;
  }
  .title_table {
    padding-left: 6%;
  }
}
</style>
