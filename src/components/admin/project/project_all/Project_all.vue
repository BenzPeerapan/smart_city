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
                <div class="topic_project_all border_right">โครงการทั้งหมด</div>
                <div class="topic_project_all_detail my-auto">โครงการทั้งหมด</div>
              </div>
            </div>
            <div class="display_mobile">
              <div class="topic_project_detail_mobile my-auto">โครงการทั้งหมด</div>
              <div class="topic_project_mobile">โครงการทั้งหมด</div>
            </div>
          </v-col>
        </v-row>
        <div class="display_mobile">
          <div v-if="type_tab_mobile == 1">
            <v-row>
              <v-col cols="10">
                <div class="mb-2">
                  <v-text-field class="input_Search_project" outlined label="ค้นหาโครงการ" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                </div>
                <div class="mb-2" v-if="menu_hidden == true">
                  <v-autocomplete class="auto_complete_class" label="ประเภทโครงการ" outlined auto-select-first hide-details></v-autocomplete>
                </div>
                <div class="mb-2" v-if="menu_hidden == true">
                  <v-autocomplete class="auto_complete_class" label="โครงการของฝ่าย" outlined auto-select-first hide-details></v-autocomplete>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="pt-3" @click="change_menu_hidden(menu_hidden)">
                  <img width="95%" src="@/assets/icon/filter_group.png">
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="type_tab_mobile == 2">
            <v-row>
              <v-col cols="10">
                <div class="mb-2">
                  <v-text-field class="input_Search_project" outlined label="ค้นหาโครงการ" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                </div>
                <div class="mb-2" v-if="menu_hidden == true">
                  <v-autocomplete class="auto_complete_class" label="ประเภทโครงการ" outlined auto-select-first hide-details></v-autocomplete>
                </div>
                <div class="mb-2" v-if="menu_hidden == true">
                  <v-autocomplete class="auto_complete_class" label="โครงการของฝ่าย" outlined auto-select-first hide-details></v-autocomplete>
                </div>
              </v-col>
              <v-col cols="2">
                <div class="pt-3" @click="change_menu_hidden(menu_hidden)">
                  <img width="95%" src="@/assets/icon/filter_group.png">
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
        <v-card class="mt-5 pa-7 display_pc" style="border-radius: 10px !important;">
          <v-tabs grow>
            <v-tab :vertical="$vuetify.breakpoint.mobile" @click="page_change(1)" class="text-center tab_topic"><b>โครงการกำลังดำเนินการ</b></v-tab>
            <v-tab :vertical="$vuetify.breakpoint.mobile" @click="page_change(2)" class="text-center tab_topic"><b>โครงการที่เสร็จสิ้นแล้ว</b></v-tab>
          </v-tabs>
          <div v-if="type == 1">
            <v-row class="mt-2">
              <v-col cols="12" xl="8" lg="6" md="4" sm="4">
                <div>
                  <v-text-field class="input_Search_project" outlined label="ค้นหาโครงการ" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                <v-autocomplete class="auto_complete_class" label="ประเภทโครงการ" outlined auto-select-first hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                <v-autocomplete class="auto_complete_class" label="โครงการของฝ่าย" outlined auto-select-first hide-details></v-autocomplete>
              </v-col>
            </v-row>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                <v-col cols="2" xl="1" lg="1">
                  <div class="logo ma-4 mx-auto">
                    <img src="@/assets/icon/crown.png">
                  </div>
                </v-col>
                <v-col cols="10" xl="11" lg="11">
                  <v-row class="my-auto">
                    <v-col cols="12" xl="8" lg="8" md="6" sm="6">
                      <div class="text_topic">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                      <div class="text_topic_type">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                      <div class="text_topic_date">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="6" sm="6">
                      <div class="text-right">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                              <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item class="click_detail" @click="detail_project(1)">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div>
                        <div class="text-right success_bar">สำเร็จแล้ว {{progress_bar}} %</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                <v-col cols="2" xl="1" lg="1">
                  <div class="logo ma-4 mx-auto">
                    <img src="@/assets/icon/road.png">
                  </div>
                </v-col>
                <v-col cols="10" xl="11" lg="11">
                  <v-row class="my-auto">
                    <v-col cols="12" xl="8" lg="8" md="6" sm="6">
                      <div class="text_topic">โครงการการก่อสร้างปรับปรุงถนนตอนกรีตเสริมเหล็ก พร้อมระบบระบายน้ำ</div>
                      <div class="text_topic_type">ประเภทโครงการ : เพื่อพัฒนาชุมชน</div>
                      <div class="text_topic_date">เริ่มต้น 12 ส.ค 2565   สิ้นสุด  12 ก.พ 2566</div>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="6" sm="6">
                      <div class="text-right">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                              <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item class="click_detail" @click="detail_project(1)">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div>
                        <div class="text-right success_bar">สำเร็จแล้ว {{progress_bar_2}} %</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_2" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                <v-col cols="2" xl="1" lg="1">
                  <div class="logo ma-4 mx-auto">
                    <img src="@/assets/icon/road.png">
                  </div>
                </v-col>
                <v-col cols="10" xl="11" lg="11">
                  <v-row class="my-auto">
                    <v-col cols="12" xl="8" lg="8" md="6" sm="6">
                      <div class="text_topic">โครงการติดตั้งกล้องวงจรปิดภายในเขตเทศบาล</div>
                      <div class="text_topic_type">ประเภทโครงการ : เพื่อพัฒนาชุมชน</div>
                      <div class="text_topic_date">เริ่มต้น 10 ส.ค 2565   สิ้นสุด  10 ส.ค 2566 </div>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="6" sm="6">
                      <div class="text-right">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                              <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item class="click_detail" @click="detail_project(1)">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div>
                        <div class="text-right success_bar">สำเร็จแล้ว {{progress_bar_3}} %</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_3" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                <v-col cols="2" xl="1" lg="1">
                  <div class="logo ma-4 mx-auto">
                    <img src="@/assets/icon/organization.png">
                  </div>
                </v-col>
                <v-col cols="10" xl="11" lg="11">
                  <v-row class="my-auto">
                    <v-col cols="12" xl="8" lg="8" md="6" sm="6">
                      <div class="text_topic">โครงการพัฒนาระบบสำหรับองค์กร Smart Conext </div>
                      <div class="text_topic_type">ประเภทโครงการ : เพื่อพัฒนาองค์กร</div>
                      <div class="text_topic_date">เริ่มต้น 17 ต.ค 2565   สิ้นสุด  17 ต.ค 2566 </div>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="6" sm="6">
                      <div class="text-right">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                              <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item class="click_detail" @click="detail_project(1)">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div>
                        <div class="text-right success_bar">สำเร็จแล้ว {{progress_bar_4}} %</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_4" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                <v-col cols="2" xl="1" lg="1">
                  <div class="logo ma-4 mx-auto">
                    <img src="@/assets/icon/organization.png">
                  </div>
                </v-col>
                <v-col cols="10" xl="11" lg="11">
                  <v-row class="my-auto">
                    <v-col cols="12" xl="8" lg="8" md="6" sm="6">
                      <div class="text_topic">โครงการเพื่อพัฒนาสุขภาพคนในองค์กร </div>
                      <div class="text_topic_type">ประเภทโครงการ : เพื่อพัฒนาองค์กร</div>
                      <div class="text_topic_date">เริ่มต้น 17 ต.ค 2565   สิ้นสุด  17 ต.ค 2566</div>
                    </v-col>
                    <v-col cols="12" xl="4" lg="4" md="6" sm="6">
                      <div class="text-right">
                        <v-menu bottom left>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn dark icon v-bind="attrs" v-on="on" class="my-1">
                              <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list-item class="click_detail" @click="detail_project(1)">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="click_detail">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                            </v-list-item>
                            <v-list-item class="click_detail">
                              <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                      <div>
                        <div class="text-right success_bar">สำเร็จแล้ว {{progress_bar_4}} %</div>
                        <v-progress-linear class="mr-2 progress_style" v-model="progress_bar_4" color="#37AE46" height="15"></v-progress-linear>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
            <div class="mt-10">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </div>
          <div v-else-if="type == 2">
            <v-row class="mt-2">
              <v-col cols="12" xl="8" lg="6" md="4" sm="4">
                <div>
                  <v-text-field class="input_Search_project" outlined label="ค้นหาโครงการ" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                <v-autocomplete class="auto_complete_class" label="ประเภทโครงการ" outlined auto-select-first hide-details></v-autocomplete>
              </v-col>
              <v-col cols="12" xl="2" lg="3" md="4" sm="4">
                <v-autocomplete class="auto_complete_class" label="โครงการของฝ่าย" outlined auto-select-first hide-details></v-autocomplete>
              </v-col>
            </v-row>
          </div>
        </v-card>
        <div class="display_mobile">
          <div class="pl-3 pr-3">
            <v-row class="border_bottom_project mb-5">
              <v-col class="text-center topic_tab_mobile_active_project" cols="6" v-if="type_tab_mobile == 1" @click="page_change_tab_mobile(1)">
                <div class="">โครงการกำลังดำเนินการ</div>
              </v-col>
              <v-col class="text-center topic_tab_mobile_no_active_project" cols="6" v-if="type_tab_mobile == 2" @click="page_change_tab_mobile(1)">
                <div class="">โครงการกำลังดำเนินการ</div>
              </v-col>

              <v-col class="text-center topic_tab_mobile_active_project" cols="6" v-if="type_tab_mobile == 2" @click="page_change_tab_mobile(2)">
                <div class="">โครงการที่เสร็จสิ้นแล้ว</div>
              </v-col>
              <v-col class="text-center topic_tab_mobile_no_active_project" cols="6" v-if="type_tab_mobile == 1" @click="page_change_tab_mobile(2)">
                <div class="">โครงการที่เสร็จสิ้นแล้ว</div>
              </v-col>
            </v-row>
          </div>
          <div v-if="type_tab_mobile == 1">
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                  <v-col cols="3">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/crown.png">
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="my-auto">
                      <v-col cols="10">
                        <div class="text_topic_mobile">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                        <div class="text_topic_type_mobile">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="text_topic_date_mobile">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                      </v-col>
                      <v-col cols="2">
                        <div>
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on" class="my-1 mt-0 pr-3">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item class="click_detail" @click="detail_project(1)">
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div>
                  <div class="text-right success_bar_mobile">สำเร็จแล้ว {{progress_bar}} %</div>
                  <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                </div>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                  <v-col cols="3">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/road.png">
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="my-auto">
                      <v-col cols="10">
                        <div class="text_topic_mobile">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                        <div class="text_topic_type_mobile">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="text_topic_date_mobile">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                      </v-col>
                      <v-col cols="2">
                        <div>
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on" class="my-1 mt-0 pr-3">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item class="click_detail" @click="detail_project(1)">
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div>
                  <div class="text-right success_bar_mobile">สำเร็จแล้ว {{progress_bar}} %</div>
                  <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                </div>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                  <v-col cols="3">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/road.png">
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="my-auto">
                      <v-col cols="10">
                        <div class="text_topic_mobile">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                        <div class="text_topic_type_mobile">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="text_topic_date_mobile">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                      </v-col>
                      <v-col cols="2">
                        <div>
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on" class="my-1 mt-0 pr-3">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item class="click_detail" @click="detail_project(1)">
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div>
                  <div class="text-right success_bar_mobile">สำเร็จแล้ว {{progress_bar}} %</div>
                  <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                </div>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                  <v-col cols="3">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/organization.png">
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="my-auto">
                      <v-col cols="10">
                        <div class="text_topic_mobile">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                        <div class="text_topic_type_mobile">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="text_topic_date_mobile">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                      </v-col>
                      <v-col cols="2">
                        <div>
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on" class="my-1 mt-0 pr-3">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item class="click_detail" @click="detail_project(1)">
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div>
                  <div class="text-right success_bar_mobile">สำเร็จแล้ว {{progress_bar}} %</div>
                  <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                </div>
            </v-card>
            <v-card class="my-2 pa-3 v_card_content">
              <v-row>
                  <v-col cols="3">
                    <div class="logo ma-4 mx-auto">
                      <img src="@/assets/icon/organization.png">
                    </div>
                  </v-col>
                  <v-col cols="9">
                    <v-row class="my-auto">
                      <v-col cols="10">
                        <div class="text_topic_mobile">โครงการจัดงานประเพณี  ประจำปี 2565</div>
                        <div class="text_topic_type_mobile">ประเภทโครงการ : เพื่อบำรุงวัฒนธรรม</div>
                        <div class="text_topic_date_mobile">เริ่มต้น 6 ต.ค 2565   สิ้นสุด  31 ต.ค 2565</div>
                      </v-col>
                      <v-col cols="2">
                        <div>
                          <v-menu bottom left>
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn dark icon v-bind="attrs" v-on="on" class="my-1 mt-0 pr-3">
                                <v-icon color="#8d8d8d">mdi-dots-vertical</v-icon>
                              </v-btn>
                            </template>

                            <v-list>
                              <v-list-item class="click_detail" @click="detail_project(1)">
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-magnify</v-icon> ดูรายละเอียด</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-tray-arrow-down</v-icon> บันทึกความก้าวหน้า</v-list-item-title>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-title class="font_icon_list"><v-icon>mdi-cog-outline</v-icon> ตั้งค่าโครงการ</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <div>
                  <div class="text-right success_bar_mobile">สำเร็จแล้ว {{progress_bar}} %</div>
                  <v-progress-linear class="mr-2 progress_style" v-model="progress_bar" color="#37AE46" height="15"></v-progress-linear>
                </div>
            </v-card>
            <div class="mt-10">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </div>
          <div v-else-if="type_tab_mobile == 2">
            โครงการที่เสร็จสิ้นแล้ว
          </div>
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
      }
    }
  },
  name: "Project_all",
  data() {
    return {
      type_tab_mobile: 1,
      loading_page: false,
      type: 1,
      search: null,
      search_pending: null,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      progress_bar: 50,
      progress_bar_2: 65,
      progress_bar_3: 26,
      progress_bar_4: 85,
      page: 1,
      pageCount: 3,
      menu_hidden: false,
    }
  },
  methods: {
    page_change_tab_mobile(type) {
      this.type_tab_mobile = type

      if(this.type_tab_mobile == 1) {
        this.search = null
      } else {
        this.search_pending = null
      }
    },
    change_menu_hidden(val) {
      if(val == false) {
        this.menu_hidden = true
      } else if(val == true){
        this.menu_hidden = false
      }
    },
    page_change(type) {
      this.type = type

      if(this.type == 1) {
        this.search = null
      } else {
        this.search_pending = null
      }
    },
    detail_project(id) {
      this.$router.push('/projectoverall/' + id)
    }
  },
  mounted() {},
}
</script>

<style scoped>
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.topic_project_all {
  color: #000000 !important;
  font-size: 24px !important;
}

.topic_project_all_detail {
  color: #9699A7 !important;
  font-size: 16px !important;
  padding-left: 10px;
}
.input_Search_project {
  background-color: #ECF4F9;
  border-radius: 10px;
}
.auto_complete_class {
  border-radius: 10px;
}
.v_card_content {
  border-radius: 20px !important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;
}
.logo {
    width: 64px !important;
  }
  .logo>img {
    max-width: 100%;
  }
.text_topic {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #151B54;
  font-weight: 500;
  font-size: 16px;
}
.text_topic_type {
  color: #4D4A4A;
  font-size: 14px;
  font-weight: 500;
}
.text_topic_date {
  color: rgba(21, 27, 84, 0.6);
  font-size: 12px;
  font-weight: 500;
}
.text_topic_mobile {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #151B54;
  font-weight: 500;
  font-size: 12px;
}
.text_topic_type_mobile {
  color: #4D4A4A;
  font-size: 10px;
  font-weight: 500;
}
.text_topic_date_mobile {
  color: rgba(21, 27, 84, 0.6);
  font-size: 12px;
  font-weight: 500;
}
.font_icon_list {
  color: #4D4A4A;
  font-size: 10px !important;
  font-weight: 500;
}
.progress_style {
  /* width: 65%; */
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.success_bar {
  color: #151B54;
  font-size: 12px;
  font-weight: 500;
}
.success_bar_mobile {
  color: #151B54;
  font-size: 10px;
  font-weight: 500;
}
.click_detail {
  cursor: pointer;
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
  .border_bottom_project {
    border-bottom: 1px solid #F0F0F0;
  }
}
.topic_project_detail_mobile {
  color: #9699A7 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.topic_project_mobile {
  color: #000000 !important;
  font-size: 18px !important;
  font-weight: 400 !important;
}
.topic_tab_mobile_active_project {
    border-bottom: 4px solid #4EACDF;
    color: #4EACDF;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
}
.topic_tab_mobile_no_active_project {
    /* border-bottom: 4px solid #4EACDF; */
    color: #000000 !important;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
}
</style>
