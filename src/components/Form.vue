<template>
    <div v-if="showAddUserState" class="Reg-container">
        <h1 class="Reg-form">Registraion Form</h1>
        <div class="form-main">
            <form>
                <div>
                    <ul v-if="isValid || isMob">
                        <li v-if="isValid">* All fields are required!</li>
                        <li v-if="isMob">Mobile number should be of 10 digits.</li>
                    </ul>
                </div>
                <div class="form-input">
                    <input type="text" placeholder="First Name" name="firstName" :value="formData.firstName" @input="handleChange" required/>
                    <input type="text" placeholder="Last Name" name="lastName" :value="formData.lastName" @input="handleChange" required/>
                </div>
                <div class="form-input-2">
                    <input type="text" placeholder="Company Name" name="companyName" :value="formData.companyName" @input="handleChange" required/>
                    <input type="text" placeholder="Designation" name="designation" :value="formData.designation" @input="handleChange" required/>
                    <input type="number" placeholder="Mobile Number" name="mobileNumber" :value="formData.mobileNumber" @input="handleChange" required/>
                    <input type="text" placeholder="Address" name="Address" :value="formData.Address" @input="handleChange" required/>
                </div>
                <button class="cancel" @click="showAddUser">Cancel</button>
                <button v-if="!isEdit" class="submit" @click="addFormData">Add User</button>
                <button v-if="isEdit" class="submit" @click="editFormData">Edit User</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  props: ['showAddUserState', 'showAddUser', 'handleChange', 'formData', 'addFormData', 'isEdit', 'editFormData', 'isValid', 'isMob']
}
</script>
