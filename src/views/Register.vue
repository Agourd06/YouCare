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
  <div class="flex justify-center items-center mt-10">
    <div class="w-full max-w-xs">
      <form @submit.prevent="register" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="identity-input mb-4">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
            UserName</label>
          <input id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text" name="name" placeholder="userName" aria-describedby="nameHelp" v-model="name" />
          <span class="text-xs text-red-700" id="nameHelp"></span>
        </div>
        <div class="identity-input mb-4">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">
            Email</label>
          <input id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Email" name="email" aria-describedby="emailHelp" v-model="email" />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <div class="password-input mb-6">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">Password</label>

          <input aria-describedby="passwordHelp" v-model="password"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" name="password" placeholder="*******" />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>
        <div class="password-input mb-6">
          <label for="identity" class="block text-gray-700 text-sm font-bold mb-2">Role</label>

          <select aria-describedby="roleHelp" v-model="role" name="role"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="role" type="role">
            <option value="" disabled>None</option>
            <option value="benevole">benevole</option>
            <option value="organisateur">organisateur</option>
          </select>

          <span class="text-xs text-red-700" id="roleHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-[#EEBB07] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-[#EEBB07] hover:text-[#EEBB07]/70" href="#">
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
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      role: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        });
console.log(response);
        if (response.status === 200) {
          router.push("/login");
          redire
        } else {
          console.error("Registration failed:", response.statusText);
          router.push("/login"); 

        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    },
  },
};
</script>
