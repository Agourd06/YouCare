<script setup>
</script>

<template>
 
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-xs">
      <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="identity-input mb-4">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
            Email</label>
          <input id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Email" aria-describedby="emailHelp" name="email" v-model="email" />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <div class="password-input mb-6">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">Password</label>

          <input aria-describedby="passwordHelp" name="password" v-model="password"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="*******" />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-[#eebb07] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
         
        </div>
      </form>
      <div class="text-center w-full">
       Dont't Have Account ? <router-link to="/register" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-[#eebb07]">register here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        });

        const token = response.data.authorisation.token;
        const role = response.data.user.role;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        if (role === 'benevole') {
          router.push("/benevole");
        }
        if (role === 'organisateur') {
          router.push("/organisateur");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};

</script>
