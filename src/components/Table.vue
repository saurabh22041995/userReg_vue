<template>
    <div class="table" v-if="!showAddUserState">
        <table>
            <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Company</th>
                <th>Designation</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            <tr v-for="detail in allDetails" :key="detail.id">
                <td>{{ detail.firstName + " " + detail.lastName }}</td>
                <td>{{ detail.gender }}</td>
                <td>{{ dateFormat(detail.dob) }}</td>
                <td>{{ detail.companyName }}</td>
                <td>{{ detail.designation }}</td>
                <td>{{ detail.mobileNumber }}</td>
                <td>{{ detail.Address }}</td>
                <td>
                    <i class="fa fa-edit icon-action" style="font-size:30px;color:teal" @click="editDetail(detail.id)"></i>
                    <i class="fa fa-trash-o icon-action" style="font-size:30px;color:teal" @click="confirmDelete(detail.id)"></i>
                </td>
            </tr>
            </table>
    </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['allDetails', 'showAddUserState', 'editDetail', 'confirmDelete'],
  methods: {
    dateFormat: (date) => {
      return moment(date).format('DD, MMM YYYY')
    }
  }
}
</script>
