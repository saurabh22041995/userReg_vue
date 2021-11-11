<template>
  <div class="home">
    <h1 v-if="!showAddUserState">Registered Users</h1>
    <button @click="showAddUser" v-if="!showAddUserState">
      Add User
    </button>
    <Table :allDetails="formDetails" :showAddUserState="showAddUserState" :editDetail="editDetail" :confirmDelete="confirmDelete"/>
    <Form :showAddUserState="showAddUserState" :showAddUser="showAddUser" :formData="formData" :handleChange="handleChange" :addFormData="addFormData" :isEdit="isEdit" :editFormData="editFormData" :isValid="isValid" :isMob="isMob"/>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
import Form from '@/components/Form.vue'
import { mapMutations, mapState } from 'vuex'
import { SetItem } from '../Common/helperFunc'
import formDetail from '../form.json'

export default {
  name: 'Home',
  components: {
    Table,
    Form
  },
  methods: {
    ...mapMutations(['showAddUser', 'deleteDetail', 'editDetail', 'editFormData']),
    handleChange (e) {
      this.$store.commit('handleChange', e.target)
    },
    addFormData (e) {
      this.$store.commit('addFormData', e)
    },
    confirmDelete (id) {
      if (confirm('Do you really want to delete!')) {
        this.$store.commit('deleteDetail', id)
      }
    }
  },
  computed: {
    ...mapState(['showAddUserState', 'formData', 'formDetails', 'isEdit', 'isValid', 'isMob'])
  },
  mounted () {
    this.$store.commit('updateFormDetails', formDetail)
    SetItem('formData', this.formDetails)
  }
}
</script>
