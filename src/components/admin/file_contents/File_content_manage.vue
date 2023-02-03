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
            <div class="topic_file_content_header border_right">สารบัญไฟล์</div>
            <div class="topic_file_content my-2">สารบัญไฟล์</div>
          </div>
        </div>
        <div class="d_play_mobile">
          <div class="topic_file_content pl-0 my-2" style="font-size: 10px !important">สารบัญไฟล์</div>
          <div class="topic_file_content_header" style="font-size: 14px; !important">สารบัญไฟล์</div>
        </div>
        <div class="mt-2 pa-md-3 pa-lg-3 pa-xl-3">
          <div class="header_file_contents">
            <v-card elevation="4" class="file_content_card ma-1 ma-md-5 ma-lg-5 ma-xl-5 pa-3">
              <div class="grid_file_content py-5">
                <div class="logo_file_main mx-auto my-auto">
                  <img src="@/assets/icon/folders.png"/>
                </div>
                <div class="pa-3 text-center">
                  <div class="file_content_header_size">ไฟลทั้งหมด</div>
                  <div class="file_content_detail_size">143,750</div>
                </div>
              </div>
            </v-card>
            <div class="">
              <div class="header_file_sub_content">
                <!-- #1 -->
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/paper.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">หนังสือราชการ</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">5,710</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/pdf.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์ pdf </div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">15,140</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/doc.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์ word</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">1,710</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/xls.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์ excel</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">410</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/ppt.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์ PPT</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">78</div>
                  </div>
                </v-card>
                <!-- #2 -->
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/image-file_gray.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์รูปภาพ</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">120,410 </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/image-file_folder.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">อัลบั้ม</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">164</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/mov_image.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์วีดีโอ</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">538</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/hyperlink.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ลิ้งค์</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">145</div>
                  </div>
                </v-card>
                <v-card elevation="4" class="file_content_card ma-5 pa-3" style="position: relative">
                  <div class="image_absolute">
                    <div class="logo_sub_image">
                      <img src="@/assets/icon/zip_image.png"/>
                    </div>
                  </div>
                  <div class="file_content_detail">
                    <div class="text-right">ไฟล์ Zip</div>
                  </div>
                  <div class="file_content_number">
                    <div class="text-right">115</div>
                  </div>
                </v-card>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <v-card elevation="4" class="file_content_card ma-0 ma-md-5 ma-lg-5 ma-xl-5 pa-3">
              <div class="grid_filter">
                <!-- Desktop -->
                <div class="text-center my-1 d_play_desktop">
                  <v-menu offset-y transition="slide-x-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="btn_color_filter pa-6 white--text" rounded="rounded" v-bind="attrs" v-on="on">
                        <v-icon>mdi-filter-outline</v-icon><div class="text_filter">ตัวกรอง</div>
                      </v-btn>
                    </template>
                    <v-list class="grid_menu_list">
                      <v-list class="ma-2 pa-2">
                        <v-list-item-title class="header_filter_title">วันที่อัปโหลด</v-list-item-title>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="วันนี้">วันนี้</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="สัปดาห์นี้">สัปดาห์นี้</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="เดือนนี้">เดือนนี้</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ปีนี้">ปีนี้</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ทั้งหมด">ทั้งหมด</v-list-item-title>
                        </v-list-item>
                      </v-list>
                      <v-list class="ma-2 pa-2">
                        <v-list-item-title class="header_filter_title">ประเภทเอกสาร</v-list-item-title>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หนังสือภายนอก">หนังสือภายนอก</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หนังสือภายใน">หนังสือภายใน</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หนังสือประทับตรา">หนังสือประทับตรา</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หนังสือสั่งการ">หนังสือสั่งการ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หนังสือประชาสัมพันธ์">หนังสือประชาสัมพันธ์</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="หลักฐานในราชการ">หลักฐานในราชการ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="อื่นๆ">อื่นๆ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ทั้งหมด">ทั้งหมด</v-list-item-title>
                        </v-list-item>
                      </v-list>
                      <v-list class="ma-2 pa-2">
                        <v-list-item-title class="header_filter_title">ประเภทไฟล์</v-list-item-title>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์สร้างจากระบบ">ไฟล์สร้างจากระบบ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ PDF">ไฟล์ PDF</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ word">ไฟล์ word</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ Excel">ไฟล์ Excel</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ Power point">ไฟล์ Power point</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ รูปภาพ">ไฟล์ รูปภาพ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="อัลบั้มรูป">อัลบั้มรูป</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์วีดีโอ">ไฟล์วีดีโอ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ลิ้งค์">ลิ้งค์</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ไฟล์ Zip">ไฟล์ Zip</v-list-item-title>
                        </v-list-item>
                      </v-list>
                      <v-list class="ma-2 pa-2">
                        <v-list-item-title class="header_filter_title" title="เกี่ยวข้องกับฝ่าย">เกี่ยวข้องกับฝ่าย</v-list-item-title>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="สำนักปลัด">สำนักปลัด</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="กองคลัง">กองคลัง</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="กองช่าง">กองช่าง</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="กองการศึกษา">กองการศึกษา</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="กองสาธรณสุข">กองสาธรณสุข</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ประชาชน">ประชาชน</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="อื่นๆ">อื่นๆ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ทั้งหมด">ทั้งหมด</v-list-item-title>
                        </v-list-item>
                      </v-list>
                      <v-list class="ma-2 pa-2">
                        <v-list-item-title class="header_filter_title">จัดเรียงตาม</v-list-item-title>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ชื่อไฟล์ ก - ฮ">ชื่อไฟล์ ก - ฮ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="ชื่อไฟล์ ฮ - ก">ชื่อไฟล์ ฮ - ก</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="เอกสาร ใหม่ - เก่า">เอกสาร ใหม่ - เก่า</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title class="filter_main_color" title="เอกสาร เก่า - ใหม่">เอกสาร เก่า - ใหม่</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-list>
                  </v-menu>
                </div>
                <!-- Mobile -->
                <div class="text-center my-1 d_play_mobile">
                  <v-menu transition="slide-x-transition" :close-on-content-click="false" v-model="menu">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="btn_color_filter pa-6 white--text" rounded="rounded" v-bind="attrs" v-on="on">
                        <v-icon>mdi-filter-outline</v-icon><div class="text_filter">ตัวกรอง</div>
                      </v-btn>
                    </template>
                    <v-toolbar color="#4EACDF" dark>
                      <v-toolbar-title>ตัวกรอง</v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon @click="menu = false">mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-list class="pa-3">

                      <v-list-group
                          v-for="item in items_menu"
                          :key="item.title"
                          v-model="item.active"
                          no-action
                      >
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                          </v-list-item-content>
                        </template>

                        <v-list-item
                            v-for="child in item.items"
                            :key="child.title"
                        >
                          <v-list-item-content class="text-left">
                            <v-list-item-title @click="get_data_from_filter(child.title)" class="filter_main_color" v-text="child.title"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-group>
                    </v-list>
                  </v-menu>
                </div>
                <div class="btn_width">
                  <v-text-field class="search_input_style" v-model="search" background-color="#ECF4F9" prepend-inner-icon="mdi-magnify" label="ค้นหาเอกสาร" single-line outlined hide-details></v-text-field>
                </div>
              </div>
              <div class="mt-16">
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/pdf.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">เอกสารอนุมัติการจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 12 พ.ย 2565 10.28 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 150 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/pdf.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">หนังสือแจ้งการประชุมจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.pdf</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 29 ต.ค 2565 17.05 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 40 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/doc.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">บันทึกการประชุมจัดซื้อจัดจ้างโครงการพัฒนาระบบสำหรับองค์กร Smart Conext.docx</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 1 พ.ย 2565 11.30 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 99 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/image-file_gray.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">สำเนาสมุดบัญชี.jpg</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 20 ม.ค 2566 15.20 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 150 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/image-file_folder.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">อัลบั้ม : ผลการดำเนินการ งวดที่ 1</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 20 ม.ค 2566 15.20 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 470 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/hyperlink.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">www.smartconnext.com</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 20 ม.ค 2566 15.20 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 104 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/pdf.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">เอกสารอนุมัติการเบิกเงินงวดที่ 2.pdf</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 28 เม.ย 2566 14.21 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 470 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <v-card elevation="4" class="card_file_container mt-2 ma-1 ma-md-4 ma-lg-4 ma-xl-4">
                  <div class="grid_document_file">
                    <div class="logo_file_image mx-auto my-md-auto my-lg-auto my-xl-auto">
                      <img src="@/assets/icon/pdf.png"/>
                    </div>
                    <div class="pa-5">
                      <div class="d-flex justify-space-between">
                        <div class="content_title_file py-2">ใบเสร็จรับเงิน จากผู้รับจ้างงวดที่ 2.pdf</div>
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
                      <div class="footer_name">
                        <div class="footer_name">
                          <div class="footer_save_name ma-2 mt-0 ml-0">ผู้บันทึกไฟล์ <v-icon class="py-1" size="16" color="#4D4A4A">mdi-account-outline</v-icon> ณัฐธยาน์ มัญชุพร</div>
                          <div class="footer_save_name ma-2 ml-0 ml-md-2 ml-lg-2 ml-xl-2 mt-0">เมื่อ 31 มี.ค 2566 16.54 น.</div>
                        </div>
                        <div class="footer_save_name text-right"><v-icon size="20" color="#0e5c81">mdi-eye-outline</v-icon> การดู 5 ครั้ง</div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
              <div class="text-center mt-3">
                <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
              </div>
            </v-card>
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
      },
    },
  },
  name: "File_content_manage",
  data() {
    return {
      loading_page: false,
      search: '',
      menu: false,
      page: 1,
      items: [
        { title: 'ดูตัวอย่าง' },
        { title: 'ดาวน์โหลด' },
        { title: 'แสดงความคิดเห็น' },
        { title: 'ลบไฟล์' },
      ],
      items_menu: [
        {
          action: 'mdi-ticket',
          items: [
              { title: 'วันนี้' },
              { title: 'สัปดาห์นี้' },
              { title: 'เดือนนี้' },
              { title: 'ปีนี้' },
              { title: 'ทั้งหมด' },
          ],
          title: 'วันที่อัปโหลด',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'หนังสือภายนอก' },
            { title: 'หนังสือภายใน' },
            { title: 'หนังสือประทับตรา' },
            { title: 'หนังสือสั่งการ' },
            { title: 'หนังสือประชาสัมพันธ์' },
            { title: 'หลักฐานในราชการ' },
            { title: 'อื่นๆ' },
            { title: 'ทั้งหมด' },
          ],
          title: 'ประเภทเอกสาร',
        },
        {
          action: 'mdi-school',
          items: [
            { title: 'ไฟล์สร้างจากระบบ' },
            { title: 'ไฟล์ PDF' },
            { title: 'ไฟล์ word' },
            { title: 'ไฟล์ Excel' },
            { title: 'ไฟล์ Power point' },
            { title: 'ไฟล์ รูปภาพ' },
            { title: 'อัลบั้มรูป' },
            { title: 'ไฟล์วีดีโอ' },
            { title: 'ลิ้งค์' },
            { title: 'ไฟล์ Zip' },
          ],
          title: 'ประเภทไฟล์',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [
            { title: 'สำนักปลัด' },
            { title: 'กองคลัง' },
            { title: 'กองช่าง' },
            { title: 'กองการศึกษา' },
            { title: 'กองสาธรณสุข' },
            { title: 'ประชาชน' },
            { title: 'อื่นๆ ' },
            { title: 'ทั้งหมด' },
          ],
          title: 'เกี่ยวข้องกับฝ่าย',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [
            { title: 'ชื่อไฟล์ ก - ฮ' },
            { title: 'ชื่อไฟล์ ฮ - ก' },
            { title: 'เอกสาร ใหม่ - เก่า' },
            { title: 'เอกสาร เก่า - ใหม่' },
          ],
          title: 'จัดเรียงตาม',
        },
      ],
    }
  },
  methods: {
    get_data_from_filter(key_name) {
      this.menu = false
      console.log(key_name)
    },
  },
}
</script>

<style scoped>
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.topic_file_content_header {
  font-size: 24px;
  color: #000000;
}
.topic_file_content {
  color: #7E7E7E;
  padding-left: 10px;
}
.d_play_desktop {
  display: block;
}
.d_play_mobile {
  display: none;
}
.header_file_contents {
  display: grid;
  grid-template-columns: 30% 70%;
}
.header_file_sub_content {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
}
.grid_file_content {
  display: grid;
  grid-template-columns: 35% 65%;
}
.logo_file_main {
  width: 122px;
}
.logo_file_main>img {
  max-width: 100%;
}
.file_content_header_size {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}
.file_content_detail_size {
  font-weight: 600;
  font-size: 45px;
  color: #000000;
}
.file_content_card {
  background-color: #FFFFFF;
  border-radius: 20px;
}
.logo_sub_image {
  width: 46px;
}
.logo_sub_image>img {
  max-width: 100%;
}
.image_absolute {
  position: absolute;
  top: -30%;
  bottom: 0;
  left: 10%;
  right: 0;
}
.file_content_detail {
  color: #000000;
  font-weight: 400;
  font-size: 14px;
}
.file_content_number {
  color: #000000;
  font-weight: 400;
  font-size: 24px;
}
.grid_filter {
  display: flex;
  justify-content: space-between;
}
.btn_color_filter {
  background: linear-gradient(90deg, rgb(50 100 154), rgb(56 112 165), rgb(81 162 210));
  border-radius: 10px;
}
.text_filter {
  font-weight: 400;
  font-size: 14px;
}
.search_input_style {
  border-radius: 10px;
  border-color: transparent !important;
}
.btn_width {
  width: 30%;
}
.grid_menu_list {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
}
.header_filter_title {
  color: #151B54;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid rgba(21, 27, 84, 0.25);
}
.filter_main_color {
  font-weight: 500;
  font-size: 16px;
  color: #9699A7;
  cursor: pointer;
}
.filter_main_color:hover {
  font-weight: 500;
  font-size: 16px;
  color: #151B54;
  cursor: pointer;
}
.card_file_container {
  background-color: #FFFFFF;
  border-radius: 10px;
}
.grid_document_file {
  display: grid;
  grid-template-columns: 5% 95%;
}
.logo_file_image {
  width: 51px;
}
.logo_file_image>img {
  max-width: 100%;
}
.content_title_file {
  color: #000000;
  font-weight: 400;
  font-size: 18px;
}
.footer_name {
  display: flex;
  justify-content: space-between;
}
.footer_save_name {
  color: #4D4A4A;
  font-weight: 500;
  font-size: 12px;
}
@media only screen and (max-width: 1180px) {
  .header_file_contents {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_file_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_document_file {
    display: grid;
    grid-template-columns: 10% 90%;
  }
}
@media only screen and (max-width: 1024px) {
  .header_file_contents {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_file_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_document_file {
    display: grid;
    grid-template-columns: 10% 90%;
  }
  .header_file_sub_content {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
}
@media only screen and (max-width: 820px) {
  .header_file_contents {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_file_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_document_file {
    display: grid;
    grid-template-columns: 15% 85%;
  }
  .header_file_sub_content {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    margin-top: 5%;
  }
  .logo_file_image {
    width: 50px;
    margin-top: 2rem;
    padding-left: 0.5rem;
  }
  .logo_file_image>img {
    max-width: 50px;
  }
}
@media only screen and (max-width: 500px) {
  .d_play_desktop {
    display: none;
  }
  .d_play_mobile {
    display: block;
  }
  .header_file_contents {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_file_content {
    display: grid;
    grid-template-columns: 100%;
  }
  .grid_document_file {
    display: grid;
    grid-template-columns: 15% 85%;
  }
  .header_file_sub_content {
    display: grid;
    grid-template-columns: 100%;
    margin-top: 7%;
  }
  .grid_filter {
    display: grid;
    grid-template-columns: 100%;
  }
  .btn_width {
    width: 100%;
    margin-top: 5%;
  }
  .content_title_file {
    color: #000000;
    font-weight: 400;
    font-size: 12px;
  }
  .footer_name {
    display: grid;
    grid-template-columns: 100%;
  }
  .footer_save_name {
    color: #4D4A4A;
    font-weight: 500;
    font-size: 8px;
  }
  .logo_file_image {
    width: 37px;
    margin-top: 2rem;
    padding-left: 0.5rem;
  }
  .logo_file_image>img {
    max-width: 37px;
  }
  .btn_color_filter {
    background: linear-gradient(90deg, rgb(50 100 154), rgb(56 112 165), rgb(81 162 210));
    border-radius: 10px;
    width: 100%;
  }
}
</style>
