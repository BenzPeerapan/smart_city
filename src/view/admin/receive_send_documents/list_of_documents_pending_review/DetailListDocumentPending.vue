<template>
  <div>
    <!-- <Menu/> -->
    <Detail_list_document/>
  </div>
</template>

<script>
// import Menu from "@/view/main_menu/Menu";
import Detail_list_document from "@/components/admin/receive_send_documents/list_of_documents_pending_review/Detail_list_document";
export default {
  name: "DetailListDocumentPending",
  components: {
    Detail_list_document,
    // Menu
  },

}
</script>

<style scoped>

</style>
