<script setup>
</script>

<template>
  <div class="w-full bg-[#EEBB07] h-12 flex items-center">
    <nav class="w-[94%] pr-20 mx-auto flex justify-between">
      <img alt="You care logo" class="logo" src="@/assets/YoucareLogo.png" width="125" height="125" />
      <div class="flex gap-x-6">
        <router-link to="/link" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">Login</router-link>
        <router-link to="/link" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">Login</router-link>
        <router-link to="/link" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">Login</router-link>
      </div>

    </nav>
  </div>
  <div  class="flex justify-center items-center mt-52">
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

          <input aria-describedby="passwordHelp" name="password"v-model="password"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="*******" />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
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

        localStorage.setItem('token', token);

        if (response.data.user.role === 'benevole') {
          router.push("/benevole");
        }
        if (response.data.user.role === 'organisateur') {
          router.push("/organisateur");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    },
  },
};

</script>
