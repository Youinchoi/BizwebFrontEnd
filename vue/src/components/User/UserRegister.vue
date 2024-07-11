<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">회원가입</h1>
              </div>
              <form class="user" @submit.prevent="registerUser">
                <div class="form-group row">
                  <div class="col-sm-15 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      v-model="uname"
                      placeholder="User Name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control form-control-user"
                      v-model="uemail"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div class="col-sm-4">
                    <button
                      type="button"
                      class="btn btn-secondary btn-user btn-block"
                      @click="checkEmailDuplicate"
                    >
                      Check Duplicate
                    </button>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12 mb-3 mb-sm-0">
                    <input
                      type="tel"
                      class="form-control form-control-user"
                      v-model="utel"
                      @input="validateTel"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      v-model="upassword"
                      placeholder="Password"
                      required
                      :class="{ 'is-invalid': upassword && !isPasswordValid }"
                    />
                    <div class="invalid-feedback">
                      Password must be 8-16 characters long and include at least one letter, one number, and one special character.
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      v-model="repeatPassword"
                      placeholder="Repeat Password"
                      required
                      :class="{ 'is-invalid': repeatPassword && upassword !== repeatPassword }"
                    />
                    <div class="invalid-feedback">
                      Passwords do not match.
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-user btn-block">Register Account</button>
                <hr />
                <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
              </form>
              <hr />
              <div class="text-center">
                <router-link to="/user-login" class="small">Already have an account? Login!</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserRegister',
  data() {
    return {
      uname: '',
      uemail: '',
      utel: '',
      upassword: '',
      repeatPassword: '',
      isPasswordValid: true
    };
  },
  computed: {
    passwordMatchMessage() {
      if (!this.upassword && !this.repeatPassword) {
        return '';
      }
      return this.upassword === this.repeatPassword
        ? 'Passwords match!'
        : 'Passwords do not match!';
    },
    passwordMatchClass() {
      return this.upassword === this.repeatPassword ? 'text-success' : 'text-danger';
    }
  },
  methods: {
    async checkEmailDuplicate() {
      try {
        const response = await axios.post('/api/user/check-email', { uemail: this.uemail });
        if (response.data) {
          alert('This email is already in use.');
        } else {
          alert('This email is available.');
        }
      } catch (error) {
        alert('Error checking email: ' + error.message);
      }
    },
    validateTel() {
      this.utel = this.utel.replace(/[^0-9]/g, '');
    },
    async registerUser() {
      if (this.upassword !== this.repeatPassword) {
        alert('Passwords do not match.');
        return;
      }
      if (!this.isPasswordValid) {
        alert('Password must be 8-16 characters long and include at least one letter, one number, and one special character.');
        return;
      }
      try {
        const currentDate = new Date().toISOString();
        const response = await axios.post('/api/user/register', {
          uname: this.uname,
          uemail: this.uemail,
          utel: this.utel,
          upassword: this.upassword,
          utype: '1',
          ustatus: '1',
          udate: currentDate
        });
        if (response.status === 200) {
          alert('Registration successful!');
          this.$router.push({ name: 'UserLogin' });
        } else {
          alert('Registration failed: ' + response.data);
        }
      } catch (error) {
        alert('Registration failed: ' + error.message);
      }
    }
  },
  watch: {
    upassword(value) {
      this.isPasswordValid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/.test(value);
    }
  }
};
</script>

<style scoped>
@import '../../assets/startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css';
@import '../../assets/startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css';

.text-success {
  color: #28a745 !important;
}
.text-danger {
  color: #dc3545 !important;
}
.is-invalid {
  border-color: #dc3545 !important;
}
.invalid-feedback {
  color: #dc3545;
  font-size: 80%;
}
</style>
