<template>
  <div class="home">
    <button @click="showAddUser" v-if="!showAddUserState">
      Add User
    </button>
    <Table :allDetails="formDetails" :showAddUserState="showAddUserState" :deleteDetail="deleteDetail" :editDetail="editDetail"/>
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
