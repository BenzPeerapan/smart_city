<template>
  <div>
    <!-- <Menu/> -->
    <List_document_pending/>
  </div>
</template>

<script>
// import Menu from "@/view/main_menu/Menu";
import List_document_pending from "@/components/admin/receive_send_documents/list_of_documents_pending_review/List_document_pending";
export default {
  name: "ListDocumentPending",
  components: {
    List_document_pending,
    // Menu
  },

}
</script>

<style scoped>

</style>
