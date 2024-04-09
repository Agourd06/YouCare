<template>
    <section class="min-h-screen">

        <navbar />

        <div class="w-full  h-12 flex items-center mt-12 justify-center">
            <h1 class="text-3xl font-bold">All Events</h1>

        </div>

        <div v-if="flashMessage"
            class="p-4 mb-4 text-sm  fixed right-10 top-16 text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
            role="alert">
            {{ flashMessage }}
        </div>
        <div>
            <div v-if="isFetching">
                <div class="h-[80vh] flex items-center justify-center">

                    <div role="status">
                        <svg aria-hidden="true"
                            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                </div>
            </div>
            <div v-else-if="fetchError">
                Error fetching data: {{ fetchError.message }}
            </div>
            <div v-else>


                <div class="grid grid-cols-2 gap-5 my-7 w-[90%] mx-auto">
                    <div v-for="event in events" :key="event.id">
                        <div class=" bg-gray-800  ">
                            <div class="ml-3 md:mt-0 md:ml-6 sm:ml-3 pr-1">
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <div
                                            class="text-gray-100 mt-2 mb-4 uppercase tracking-wide text-md md:text-lg text-600 font-bold cardheading cardtitle">
                                            {{ event.title }}
                                        </div>
                                        <div
                                            class="text-gray-100 mb-4 uppercase tracking-wide text-md md:text-lg text-600 font-bold cardheading">
                                            <i class="material-icons">
                                                {{ event.type }}
                                            </i>
                                            <small
                                                class="text-gray-200 mb-1 text-md md:text-lg uppercase tracking-wide text-400 cardheading">
                                                {{ event.date }}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="block mt-1 mr-6 text-md md:text-lg md:w-3/4 lg:w-3/4 leading-tight font-semibold text-gray-200 hover:underline">
                                    {{ event.localisation }}
                                </div>
                                <p class="mb-2 mt-2 mr-6 text-sm md:text-md text-gray-300 md:w-3/4 lg:w-3/4 ">
                                    {{ event.description }}
                                </p>
                                <div class="w-full flex justify-center items-end md:justify-end h-12 mb-2">
                                    <a @click="reserveEvent(event.id)"
                                        class="flex items-center justify-center cursor-pointer h-8 bg-transparent uppercase hover:bg-red-500 text-gray-100 font-semibold hover:text-black w-full text-xs md:text-md border-2 border-red-500 hover:border-transparent mb-2 mr-4">
                                        Reserve
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import navbar from '../../components/navbarBen.vue';
import axios from 'axios';
import router from '@/router';


export default {
    components: {
        navbar: navbar
    },
    data() {
        return {
            events: [],
            isFetching: false,
            fetchError: null,
            flashMessage: null

        };
    },
    mounted() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents() {
            const token = localStorage.getItem('token');

            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            this.isFetching = true;

            axios.get('http://127.0.0.1:8000/api/dataEvents', config)
                .then(response => {
                    console.log('Data:', response.data);
                    this.events = response.data.events;
                    this.isFetching = false;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.fetchError = error;
                    this.isFetching = false;
                });

        },

        async reserveEvent(eventId) {
            try {
                const token = localStorage.getItem('token');
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };

                const response = await axios.post(`http://127.0.0.1:8000/api/storeReservation/${eventId}`, null, config);

                if (response.status === 200) {
                    this.flashMessage = 'Reservation Passed Wait For Confirmation';
                    setTimeout(() => {
                        this.flashMessage = null;
                    }, 3000);
                } else {
                    this.flashMessage = 'Reservation failed';
                    setTimeout(() => {
                        this.flashMessage = null;
                    }, 3000);
                }
            } catch (error) {
                console.error("Error storing event:", error);
                if (error.response && error.response.status === 401) {
                    router.push("/benevole");
                } else {
                    console.error("Other error occurred:", error);
                }
            }
        }




    }
};
</script>
