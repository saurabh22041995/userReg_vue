import { createStore } from 'vuex'
import { SetItem, GetItem, FormValidation } from '../Common/helperFunc'

export default createStore({
  state: {
    formDetails: [],
    showAddUserState: false,
    formData: {
      firstName: '',
      lastName: '',
      companyName: '',
      designation: '',
      mobileNumber: '',
      Address: ''
    },
    isEdit: false,
    isValid: false,
    isMob: false
  },
  mutations: {
    showAddUser: (state) => {
      state.showAddUserState = !state.showAddUserState
      state.isEdit = false
      state.isValid = false
      state.isMob = false
      const keys = Object.keys(state.formData)
      for (let i = 0; i < keys.length; i++) {
        const element = keys[i]
        state.formData[element] = ''
      }
      state.formDetails = GetItem('formData')
    },
    handleChange: (state, event) => {
      state.formData[event.name] = event.value
    },
    addFormData: (state, e) => {
      e.preventDefault()
      const valid = FormValidation(state.formData)
      if (valid.isValid) {
        state.formData.id = state.formDetails.length + 1
        state.formDetails.push(state.formData)
        SetItem('formData', state.formDetails)
        state.showAddUserState = false
        state.isValid = false
      } else {
        if (valid.key === 'mobileNumber') {
          state.isValid = false
          state.isMob = true
        } else {
          state.isMob = false
          state.isValid = true
        }
      }
    },
    updateFormDetails: (state, formDetails) => {
      state.formDetails = formDetails
    },
    deleteDetail: (state, id) => {
      const index = state.formDetails.findIndex(ele => ele.id === id)
      state.formDetails.splice(index, 1)
    },
    editDetail: (state, id) => {
      const index = state.formDetails.findIndex(ele => ele.id === id)
      state.formData = state.formDetails[index]
      state.showAddUserState = true
      state.isEdit = true
    },
    editFormData: (state, e) => {
      e.preventDefault()
      const valid = FormValidation(state.formData)
      if (valid.isValid) {
        const filterIndex = state.formDetails.findIndex(ele => ele.id === state.formData.id)
        state.formDetails.splice(filterIndex, 1, state.formData)
        state.isEdit = false
        state.showAddUserState = false
      } else {
        if (valid.key === 'mobileNumber') {
          state.isValid = false
          state.isMob = true
        } else {
          state.isMob = false
          state.isValid = true
        }
      }
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})
