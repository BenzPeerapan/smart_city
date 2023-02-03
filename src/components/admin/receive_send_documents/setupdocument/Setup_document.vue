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
              <div class="d-flex">
                <div class="topic_setup_document border_right">จัดการชนิดเอกสาร</div>
                <div class="topic_setup_document_detail my-auto">รับ - ส่งเอกสาร • ตั้งค่าเอกสาร • จัดการชนิดเอกสาร</div>
              </div>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6">
              <div class="text-right">
                <v-btn x-large color="" class="button_color_add_document" elevation="2" @click="dialog_add = true">
                  <v-icon>mdi-plus</v-icon>
                  เพิ่มชนิดเอกสาร
                </v-btn>
              </div>
            </v-col>
          </v-row>
          <v-card class="mt-5" style="border-radius: 10px !important;">
            <v-card-title class="document_list_header" style="padding: 10px;">
              <v-row>
                <v-col cols="12" xl="8" lg="8" md="8" class="my-auto">
                  <div class="document_list_topic">รายการชนิดเอกสาร</div>
                </v-col>
                <v-col cols="12" xl="4" lg="4" md="4">
                  <div>
                    <v-text-field style="background-color: #fff;" outlined label="ค้นหาชนิดเอกสาร" prepend-inner-icon="mdi-magnify" hide-details></v-text-field>
                  </div>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="mt-5">
              <v-data-table :headers="header" :items="data_list" :page.sync="page" :items-per-page="perPage" hide-default-footer mobile-breakpoint="0">
                <template v-slot:item="dataDetail">
                  <tr>
                    <td>{{dataDetail.item.type_doc}}</td>
                    <td>{{dataDetail.item.type_doc_two}}</td>
                    <td>
                      <v-switch color="#86bc3a" v-model="dataDetail.item.status"></v-switch>
                    </td>
                    <td>
                      <v-btn small height="42" class="grad-warning-bg white--text mr-1 mb-1" title="แก้ไข (Edit)" @click="dialog_edit = true">
                        <v-icon>mdi-pencil</v-icon> &nbsp;แก้ไข
                      </v-btn>
                      <v-btn small height="42" class="grad-danger-bg white--text mb-1" title="ลบ (Delete)">
                        <v-icon>mdi-trash-can-outline</v-icon> &nbsp;ลบ
                      </v-btn>
                    </td>
                  </tr>
                </template>
              </v-data-table>
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </v-card-text>
          </v-card>
          <!-- เพิ่มข้อมูล -->
          <v-dialog v-model="dialog_add" persistent max-width="572">
            <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn>
            </template> -->
            <v-card>
              <div class="d-flex justify-space-between">
                <v-btn icon class="ma-4"></v-btn>
                <v-card-title class="add_modal_topic">
                  เพิ่มชนิดเอกสาร
                </v-card-title>
                <v-btn icon class="ma-4" @click="dialog_add = false">
                  <v-icon color="grey">mdi-close</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <div class="pa-3 pl-0 pr-0">
                  <div class="label_form mb-3">ชื่อชนิดเอกสาร</div>
                  <v-text-field outlined label="ชื่อชนิดเอกสาร" prepend-inner-icon="" hide-details></v-text-field>
                </div>
                <div class="pa-3 pl-0 pr-0">
                  <div class="label_form mb-3">ประเภทเอกสาร</div>
                  <v-autocomplete :items="list_type_doc" outlined label="ประเภทเอกสาร" prepend-inner-icon="" hide-details></v-autocomplete>
                </div>
                <div class="pa-3 pl-0 pr-0 text-center">
                  <v-btn x-large color="" class="button_color_add_document_save" elevation="2">
                    บันทึก
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
          <!-- แก้ไขข้อมูล -->
          <v-dialog v-model="dialog_edit" persistent max-width="572">
            <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Open Dialog
              </v-btn>
            </template> -->
            <v-card>
              <div class="d-flex justify-space-between">
                <v-btn icon class="ma-4"></v-btn>
                <v-card-title class="add_modal_topic">
                  แก้ไขชนิดเอกสาร
                </v-card-title>
                <v-btn icon class="ma-4" @click="dialog_edit = false">
                  <v-icon color="grey">mdi-close</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <div class="pa-3 pl-0 pr-0">
                  <div class="label_form mb-3">ชื่อชนิดเอกสาร</div>
                  <v-text-field outlined label="ชื่อชนิดเอกสาร" prepend-inner-icon="" hide-details></v-text-field>
                </div>
                <div class="pa-3 pl-0 pr-0">
                  <div class="label_form mb-3">ประเภทเอกสาร</div>
                  <v-autocomplete :items="list_type_doc" outlined label="ประเภทเอกสาร" prepend-inner-icon="" hide-details></v-autocomplete>
                </div>
                <div class="pa-3 pl-0 pr-0 text-center">
                  <v-btn x-large color="" class="button_color_add_document_edit" elevation="2">
                    แก้ไข
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
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
  name: "Setup_document",
  data() {
    return {
      dialog_add: false,
      dialog_edit: false,
      loading_page: false,
      perPage: 10,
      page: 1,
      data_list: [],
      header: [
        {
          // name: 'อันดับ (No.)',
          text: "ชนิดเอกสาร",
          value: "customer_code",
          align: "left",
          fixed: true,
          width: '220px',
        },
        {
          // name:  'ชื่อลูกค้า (Customer name)',
          text: "ประเภทเอกสาร",
          value: "customer_name",
          fixed: true,
          align: "left",
          width: '200px',
        },
        {
          // name:  'ยอดสั่งซื้อ (Order amount)',
          text: "สถานะ",
          value: "company_name",
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
    async get_data() {
      let test = [
        {
            id: 1,
            type_doc: 'คำสั่ง',
            type_doc_two: 'หนังสือสั่งการ',
            status: true,
          },
          {
            id: 2,
            type_doc: 'ประกาศ',
            type_doc_two: 'หนังสือประชาสัมพันธ์',
            status: true,
          },
          {
            id: 3,
            type_doc: 'หนังสือรับรอง',
            type_doc_two: 'หนังสือที่เจ้าหน้าที่ทำขึ้นหรือรับไว้เป็นหลักฐานในราชการ',
            status: true,
          },
          {
            id: 4,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 5,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 6,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 7,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 8,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 9,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 10,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 11,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 12,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 13,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
          {
            id: 14,
            type_doc: 'บันทึกข้อความ',
            type_doc_two: 'หนังสือภายใน',
            status: true,
          },
      ]
      
      this.data_list = test.map((item) => {
        return {
          details: {},
          ...item
        }
      })
      // console.log(this.data_list.length)
    }
  },
  watch: {

  },
  computed: {
      totalRecords() {
        return this.data_list.length
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
  },
  mounted() {
    this.get_data()
  }
};
</script>

<style scoped>
.button_color_add_document {
  background-color: #009EF7 !important;
  color: #fff;
  border-radius: 10px !important;
}

.button_color_add_document_save {
  background-color: #37AE46 !important;
  color: #fff;
  border-radius: 10px !important;
}

.button_color_add_document_edit {
  background-color: #FD8F16 !important;
  color: #fff;
  border-radius: 10px !important;
}

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
  background-color: #4EACDF !important;
  border-radius: 10px !important;
  border: 1px solid #4EACDF !important;
}
.document_list_topic {
  color: #FFFFFF !important;
  font-size: 24px !important;
}
.add_modal_topic {
  color: #000000 !important;
  font-size: 24px !important;
  font-weight: 600;
}
.label_form {
  color: #4C4C4C !important;
  font-size: 18px !important;
  font-weight: 600;
}
</style>
