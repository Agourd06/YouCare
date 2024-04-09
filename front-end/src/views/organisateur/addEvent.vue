<template>
    <section class="min-h-screen">
       <navbar />
        <div class="max-w-4xl mx-auto font-[sans-serif] mt-12 text-[#333] p-6">
            <div class="text-center mb-16">
                <a href="javascript:void(0)"><img src="@/assets/YoucareLogo.png" alt="logo" class='w-52 inline-block' />
                </a>
                <h4 class="text-base font-semibold mt-3">Create New Event Here !!</h4>
            </div>
            <form @submit.prevent="storeEvent">
                <div class="grid sm:grid-cols-2 gap-y-7 gap-x-12">
                    <div>
                        <label class="text-sm mb-2 block">Title</label>
                        <input name="title" type="text" v-model="title"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter title" />
                    </div>
                    <div>
                        <label class="text-sm mb-2 block">Type</label>
                        <input name="type" type="text" v-model="type"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter type" />
                    </div>
                    <div>
                        <label class="text-sm mb-2 block">Date</label>
                        <input name="date" type="date" v-model="date"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter email" />
                    </div>
                    <div>
                        <label class="text-sm mb-2 block">Localisation</label>
                        <input name="localisation" type="text" v-model="localisation"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter mobile number" />
                    </div>
                    <div>
                        <label class="text-sm mb-2 block">competence</label>
                        <input name="competence" type="text" v-model="competence"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter password" />
                    </div>
                    <div>
                        <label class="text-sm mb-2 block">description</label>
                        <textarea name="description" v-model="description"
                            class="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#EEBB07]"
                            placeholder="Enter confirm password"></textarea>
                    </div>
                </div>
                <div class="!mt-10">
                    <button type="submit"
                        class="min-w-[150px] py-3 px-4 text-sm font-semibold rounded text-white bg-[#EEBB07] hover:bg-[#EEBB07]/70 focus:outline-none">
                        New Event
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import router from '@/router';
import navbar from '../../components/navbarOrg.vue';

export default {
    components: {
        navbar: navbar
    },
    name: "Update",
    data() {
        return {
            title: "",
            type: "",
            date: "",
            localisation: "",
            competence: "",
            description: "",
        };
    },
    methods: {
        async storeEvent() {
            try {
                const token = localStorage.getItem('token');

                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const eventData = {
                    title: this.title,
                    type: this.type,
                    date: this.date,
                    localisation: this.localisation,
                    competence: this.competence,
                    description: this.description,
                };

                const response = await axios.post("http://127.0.0.1:8000/api/storeEvent", eventData, config);

                console.log(response);

                if (response.status === 200) {
                    router.push("/organisateur");
                } else {
                    console.error("Store Event failed:", response.statusText);
                    router.push("/newEvent");
                }
            } catch (error) {
                console.error("Error during Storing:", error);
            }
        },

    },
};
</script>
