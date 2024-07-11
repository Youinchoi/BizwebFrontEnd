<template>
    <div id="app">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-1">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-2">Welcome</h1>
                    </div>
                    <hr>
                    <div class="text-center">
                      <router-link class="small" to="/user-login">Login</router-link>
                    </div>
                    <div class="text-center">
                      <router-link class="small" to="/user-register">Register</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WelcomeHome'
  };
  </script>
  
  <style scoped>
  @import '../../assets/startbootstrap-sb-admin-2-gh-pages/css/sb-admin-2.min.css';
  @import '../../assets/startbootstrap-sb-admin-2-gh-pages/vendor/fontawesome-free/css/all.min.css';
  </style>