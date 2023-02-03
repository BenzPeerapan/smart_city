<template>
  <div>
    <!-- <Menu/> -->
    <Detail_list_document_cent/>
  </div>
</template>

<script>
// import Menu from "@/view/main_menu/Menu";
import Detail_list_document_cent from "@/components/admin/receive_send_documents/list_of_documents_pending_review/Detail_list_document_cent";
export default {
  name: "DetailListDocumentPendingCent",
  components: {
    Detail_list_document_cent,
    // Menu
  },

}
</script>

<style scoped>

</style>
