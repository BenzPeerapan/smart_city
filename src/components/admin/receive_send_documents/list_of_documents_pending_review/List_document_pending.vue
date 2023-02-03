<template>
    <div class="footer_padding">
      <div v-if="loading_page === true">
        <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="pa-3">
          <v-skeleton-loader type="article, actions"></v-skeleton-loader>
        </v-sheet>
      </div>
      <div v-else>
        <div class="pa-5 display_pc">
          <v-row>
            <v-col cols="12" xl="6" lg="6" md="6">
              <div class="d-flex">
                <div class="topic_setup_document border_right">รายการเอกสารรอตรวจสอบ</div>
                <div class="topic_setup_document_detail my-auto">รับ - ส่งเอกสาร • รายการเอกสารรอตรวจสอบ</div>
              </div>
            </v-col>
          </v-row>
          <v-card class="mt-5 pa-7">
            <v-tabs grow>
              <v-tab :vertical="$vuetify.breakpoint.mobile" @click="page_change(1)" class="text-center tab_topic"><b>เอกสารรอตรวจสอบ</b></v-tab>
              <v-tab :vertical="$vuetify.breakpoint.mobile" @click="page_change(2)" class="text-center tab_topic"><b>เอกสารรอเซ็นต์</b></v-tab>
            </v-tabs>
            <div v-if="type == 1" class="pl-0 pr-0 pa-5">
              <v-card-title class="pl-0 pr-0">
                <v-text-field class="input_Search" v-model="search" outlined label="ค้นหาเอกสาร" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
              </v-card-title>
              <v-data-table :headers="header" :items="data_list" :page.sync="page" :items-per-page="perPage" :search="search" hide-default-footer mobile-breakpoint="0">
                <template v-slot:item="dataDetail">
                  <tr>
                    <td><p>{{dataDetail.item.list_doc}}</p></td>
                    <td><p>{{dataDetail.item.topic}}</p></td>
                    <td><p>{{dataDetail.item.type_doc}}</p></td>
                    <td><p>{{dataDetail.item.type_doc_two}}</p></td>
                    <td class="pa-3">
                      <v-btn small height="42" class="grad-primary-bg white--text mb-1 button_detail" title="ดูรายละเอียด" @click="detail_data_list(dataDetail.item.id)">
                        <v-icon>mdi-file-document-outline</v-icon> &nbsp;รายละเอียด
                      </v-btn>
                    </td>
                  </tr>
                </template>
              </v-data-table>
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
            <div v-else-if="type == 2" class="pl-0 pr-0 pa-5">
              <v-card-title class="pl-0 pr-0">
                <v-text-field class="input_Search" v-model="search_pending" outlined label="ค้นหาเอกสาร" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
              </v-card-title>
              <v-data-table :headers="header_pending" :items="data_list_pending" :page.sync="page_pending" :items-per-page="perPage" :search="search_pending" hide-default-footer mobile-breakpoint="0">
                <template v-slot:item="dataDetail">
                  <tr>
                    <td><p>{{dataDetail.item.list_doc}}</p></td>
                    <td><p>{{dataDetail.item.topic}}</p></td>
                    <td><p>{{dataDetail.item.type_doc}}</p></td>
                    <td><p>{{dataDetail.item.type_doc_two}}</p></td>
                    <td class="pa-3">
                      <v-btn small height="42" class="grad-primary-bg white--text mb-1 button_detail" title="ดูรายละเอียด" @click="data_detail_list_cent(dataDetail.item.id)">
                        <v-icon>mdi-file-document-outline</v-icon> &nbsp;รายละเอียด
                      </v-btn>
                    </td>
                  </tr>
                </template>
              </v-data-table>
              <v-pagination v-model="page_pending" :length="pageCount_pending"></v-pagination>
            </div>
          </v-card>
        </div>
        <div class="display_mobile pt-3">
          <div>
            <div class="topic_setup_document_detail_mobile my-auto">รับ - ส่งเอกสาร • รายการเอกสารรอตรวจสอบ</div>
            <div class="topic_setup_document_mobile">รายการเอกสารรอตรวจสอบ</div>
          </div>
          <div>
            <v-card-title class="pl-0 pr-0" v-if="type == 1">
              <v-text-field class="input_Search_mobile" v-model="search" outlined label="ค้นหาเอกสาร" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
            </v-card-title>
            <v-card-title class="pl-0 pr-0" v-if="type == 2">
              <v-text-field class="input_Search_mobile" v-model="search_pending" outlined label="ค้นหาเอกสาร" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
            </v-card-title>
          </div>
          <div class="pl-3 pr-3">
            <v-row class="border_bottom mb-5">
              <v-col class="text-center topic_tab_mobile_active" cols="6" v-if="type_tab_mobile == 1" @click="page_change_tab_mobile(1)">
                <div class="">เอกสารรอตรวจสอบ</div>
              </v-col>
              <v-col class="text-center topic_tab_mobile_no_active" cols="6" v-if="type_tab_mobile == 2" @click="page_change_tab_mobile(1)">
                <div class="">เอกสารรอตรวจสอบ</div>
              </v-col>

              <v-col class="text-center topic_tab_mobile_active" cols="6" v-if="type_tab_mobile == 2" @click="page_change_tab_mobile(2)">
                <div class="">เอกสารรอเซ็นต์</div>
              </v-col>
              <v-col class="text-center topic_tab_mobile_no_active" cols="6" v-if="type_tab_mobile == 1" @click="page_change_tab_mobile(2)">
                <div class="">เอกสารรอเซ็นต์</div>
              </v-col>
            </v-row>
          </div>
          <div v-if="type_tab_mobile == 1">
            <v-card class="pa-3 mb-2" style="border-radius: 10px;">
              <div class="d-flex">
                <div style="width:80%">
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">เรื่อง</div>
                    <div class="topic_data_list_mobile_value"><p>ให้บุคลากรไปราชการและแต่งตั้งรักษาราชการแทน</p></div>
                  </div>
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">รายการเอกสาร</div>
                    <div class="topic_data_list_mobile_value"><p>คำสั่งเทศบาล</p></div>
                  </div>
                </div>
                <div style="width:20%">
                  <div class="div_notification">
                    ด่วนมาก !
                  </div>
                </div>
              </div>
              <div class="text-right footer_data_list_mobile">
                รับเอกสารเข้า 07 ก.ย 2565 12:51 น.
              </div>
            </v-card>
            <v-card class="pa-3 mb-2" style="border-radius: 10px;">
              <div class="d-flex">
                <div style="width:100%">
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">เรื่อง</div>
                    <div class="topic_data_list_mobile_value"><p>แต่งตั้งรักษาราชการ</p></div>
                  </div>
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">รายการเอกสาร</div>
                    <div class="topic_data_list_mobile_value"><p>คำสั่งเทศบาล</p></div>
                  </div>
                </div>
                <!-- <div style="width:20%">
                  <div class="div_notification">
                    ด่วนมาก !
                  </div>
                </div> -->
              </div>
              <div class="text-right footer_data_list_mobile">
                รับเอกสารเข้า 07 ก.ย 2565 12:51 น.
              </div>
            </v-card>
            <v-card class="pa-3 mb-2" style="border-radius: 10px;">
              <div class="d-flex">
                <div style="width:100%">
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">เรื่อง</div>
                    <div class="topic_data_list_mobile_value"><p>กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</p></div>
                  </div>
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">รายการเอกสาร</div>
                    <div class="topic_data_list_mobile_value"><p>ประกาศเทศบาล</p></div>
                  </div>
                </div>
                <!-- <div style="width:20%">
                  <div class="div_notification">
                    ด่วนมาก !
                  </div>
                </div> -->
              </div>
              <div class="text-right footer_data_list_mobile">
                รับเอกสารเข้า 07 ก.ย 2565 12:51 น.
              </div>
            </v-card>
            <v-pagination class="mt-5" v-model="page" :length="pageCount"></v-pagination>
          </div>
          <div v-else-if="type_tab_mobile == 2">
            <v-card class="pa-3 mb-2" style="border-radius: 10px;">
              <div class="d-flex">
                <div style="width:100%">
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">เรื่อง</div>
                    <div class="topic_data_list_mobile_value"><p>กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร</p></div>
                  </div>
                  <div class="d-flex">
                    <div class="topic_data_list_mobile">รายการเอกสาร</div>
                    <div class="topic_data_list_mobile_value"><p>ประกาศเทศบาล</p></div>
                  </div>
                </div>
                <!-- <div style="width:20%">
                  <div class="div_notification">
                    ด่วนมาก !
                  </div>
                </div> -->
              </div>
              <div class="text-right footer_data_list_mobile">
                รับเอกสารเข้า 07 ก.ย 2565 12:51 น.
              </div>
            </v-card>
            <v-pagination class="mt-5" v-model="page_pending" :length="pageCount_pending"></v-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// import {HTTP} from "@/axios";
export default {
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  name: "List_document_pending",
  data() {
    return {
      type: 1,
      loading_page: false,
      search: null,
      search_pending: null,
      perPage: 10,
      page: 1,
      page_pending: 1,
      data_list: [],
      type_tab_mobile: 1,
      data_list_pending: [],
      header: [
        {
          // name: 'อันดับ (No.)',
          text: "รายการเอกสาร",
          value: "list_doc",
          align: "left",
          fixed: true,
          width: '220px',
        },
        {
          // name:  'ชื่อลูกค้า (Customer name)',
          text: "เรื่อง",
          value: "topic",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "ชนิดเอกสาร",
          value: "type_doc",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "ประเภทเอกสาร",
          value: "type_doc_two",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "จัดการ",
          value: "company_name",
          fixed: true,
          align: "left",
          width: '200px',
        },
      ],
      header_pending: [
        {
          // name: 'อันดับ (No.)',
          text: "รายการเอกสาร",
          value: "list_doc",
          align: "left",
          fixed: true,
          width: '220px',
        },
        {
          // name:  'ชื่อลูกค้า (Customer name)',
          text: "เรื่อง",
          value: "topic",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "ชนิดเอกสาร",
          value: "type_doc",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "ประเภทเอกสาร",
          value: "type_doc_two",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "จัดการ",
          value: "company_name",
          fixed: true,
          align: "left",
          width: '200px',
        },
      ],
      list_type_doc: [],
    };
  },
  methods: {
    page_change(type) {
      this.type = type

      if(this.type == 1) {
        this.get_data()
        this.search = null
      } else {
        this.get_data_pending()
        this.search_pending = null
      }
    },
    page_change_tab_mobile(type) {
      this.type_tab_mobile = type

      if(this.type_tab_mobile == 1) {
        this.get_data()
        this.search = null
      } else {
        this.get_data_pending()
        this.search_pending = null
      }
    },
    async get_data() {
      let test = [
        {
          id: 1,
          list_doc: 'คำสั่งเทศบาล',
          topic: 'ให้บุคลากรไปราชการและแต่งตั้งรักษาราชการแทน',
          type_doc: 'คำสั่ง',
          type_doc_two: 'หนังสือสั่งการ',
        },
        {
          id: 2,
          list_doc: 'คำสั่งเทศบาล',
          topic: 'แต่งตั้งรักษาราชการ',
          type_doc: 'คำสั่ง',
          type_doc_two: 'หนังสือสั่งการ',
        },
        {
          id: 3,
          list_doc: 'ประกาศเทศบาล',
          topic: 'กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร',
          type_doc: 'ประกาศ',
          type_doc_two: 'หนังสือประชาสัมพันธ์',
        },
      ]
      this.data_list = []
      this.data_list = test.map((item) => {
        return {
          details: {},
          ...item
        }
      })
      // console.log(this.data_list.length)
    },
    async get_data_pending() {
      let test = [
        {
          id: 1,
          list_doc: 'คำสั่งเทศบาล',
          topic: 'ให้บุคลากรไปราชการและแต่งตั้งรักษาราชการแทน',
          type_doc: 'คำสั่ง',
          type_doc_two: 'หนังสือสั่งการ',
        },
        {
          id: 2,
          list_doc: 'คำสั่งเทศบาล',
          topic: 'แต่งตั้งรักษาราชการ',
          type_doc: 'คำสั่ง',
          type_doc_two: 'หนังสือสั่งการ',
        },
        {
          id: 3,
          list_doc: 'ประกาศเทศบาล',
          topic: 'กำหนดสถานที่ หลักเกณฑ์และวิธีการปิดประกาศเกี่ยวกับการเลือกตั้งสมาชิกสภาผู้แทนราษฎร',
          type_doc: 'ประกาศ',
          type_doc_two: 'หนังสือประชาสัมพันธ์',
        },
      ]
      this.data_list_pending = []
      this.data_list_pending = test.map((item) => {
        return {
          details: {},
          ...item
        }
      })
      // console.log(this.data_list.length)
    },
    detail_data_list(id) {
      this.$router.push('/detaillistdocumentpeding/' + id)
    },
    data_detail_list_cent(id) {
      this.$router.push('/detaillistdocumentpedingcent/' + id)
    }
  },
  watch: {

  },
  computed: {
      totalRecords() {
        return this.data_list.length
      },
      totalRecords_pending() {
        return this.data_list_pending.length
      },
      pageCount() {
        let totalRecords = this.totalRecords / this.perPage
        let totalRecords_tostr = totalRecords.toString()
        let split_data = totalRecords_tostr.split('.')
        if(totalRecords_tostr > split_data[0]) {
          return parseInt(split_data[0]) + parseInt(1)
        } else {
          return parseInt(totalRecords)
        }
      },
      pageCount_pending() {
        let totalRecords = this.totalRecords_pending / this.perPage
        let totalRecords_tostr = totalRecords.toString()
        let split_data = totalRecords_tostr.split('.')
        if(totalRecords_tostr > split_data[0]) {
          return parseInt(split_data[0]) + parseInt(1)
        } else {
          return parseInt(totalRecords)
        }
      },
  },
  mounted() {
    this.get_data()
  }
};
</script>

<style scoped>
.tab_topic {
  color: #000000 !important;
  font-weight: 400 !important;
  font-size: 20px !important;
}
.topic_setup_document {
  color: #000000 !important;
  font-size: 24px !important;
}

.topic_setup_document_mobile {
  color: #000000 !important;
  font-size: 18px !important;
  font-weight: 400 !important;
}

.topic_setup_document_detail {
  color: #9699A7 !important;
  font-size: 16px !important;
  padding-left: 10px;
}

.topic_setup_document_detail_mobile {
  color: #9699A7 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
}
.border_right {
  border-right: 1px solid #9699A7;
  padding-right: 10px;
}
.button_detail {
  background: #4EACDF !important;
  border: 1px solid #4EACDF !important;
  border-radius: 10px !important;
}
.input_Search {
  background-color: #F5F8FA;
  border-radius: 10px;
}

.input_Search_mobile {
  background-color: #FCFCFC;
  border: 1px solid #F0F0F0;
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

.border_bottom {
  border-bottom: 1px solid #F0F0F0;
}

.topic_tab_mobile_active {
    border-bottom: 4px solid #4EACDF;
    color: #4EACDF;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
}
.topic_tab_mobile_no_active {
    /* border-bottom: 4px solid #4EACDF; */
    color: #000000 !important;
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
}

.div_notification {
  color: #E60023;
  font-size: 10px;
  font-weight: 600;
  border-radius: 5px;
  border: 3px solid #E60023;
  text-align: center;
  padding: 5px;
}
.topic_data_list_mobile {
  margin-right: 10px;
  color: #9699A7;
  font-weight: 400;
  font-size: 12px;
}

.topic_data_list_mobile_value {
  /* margin-right: 15px; */
  color: #414141;
  font-weight: 400;
  font-size: 12px;
  padding-right: 5px;
}

.footer_data_list_mobile {
  color: #414141 !important;
  font-size: 12px !important;
  font-weight: 400 !important;
}
</style>
