<template>
    <navbar />
    <div class="w-full  h-12 flex items-center mt-12 justify-center">
        <h1 class="text-3xl font-bold">Reservations</h1>

    </div>
    <div v-if="flashMessage"
        class="p-4 mb-4 text-sm  fixed right-10 top-16 text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
        role="alert">
        {{ flashMessage }}
    </div>
    <div v-if="isFetching">
        <div class="h-[80vh] flex items-center justify-center">

            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
        <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-5 w-[90%] mx-auto mt-5">
            <div v-for="reservation in reservations" :key="reservations.id">
                <div
                    class="me-4 block bg-gray-900 rounded-lg shadow-secondary-1 bg-surface-dark text-white text-surface">
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight">
                            {{ reservation.statut }}
                        </h5>
                        <div class="flex justify-between pr-20">
                            <p class="mb-4 text-base">
                                {{ reservation.user.name }}
                            </p>
                            <p class="mb-4 text-base">
                                {{ reservation.user.email }}
                            </p>
                        </div>

                        <button type="button" @click="AcceptReservation(reservation.id, 'accepted')"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init data-twe-ripple-color="light">
                            Accepte
                        </button>
                        <button type="button" @click="AcceptReservation(reservation.id, 'refused')"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            data-twe-ripple-init data-twe-ripple-color="light">
                            Decline
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import navbar from '../../components/navbarOrg.vue';
import axios from 'axios';
import router from '@/router';

export default {
    components: {
        navbar: navbar
    },
    data() {
        return {
            reservations: [],
            isFetching: false,
            fetchError: null
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

            axios.get('http://127.0.0.1:8000/api/dataReservations', config)
                .then(response => {
                    console.log('Data:', response.data);
                    this.reservations = response.data.reservations;
                    this.isFetching = false;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    this.fetchError = error;
                    this.isFetching = false;
                });

        },
        async AcceptReservation(idReservation, newStatut) {
    try {
        const token = localStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const ReservationStatut = {
            statut: newStatut,
        };
        this.isFetching = true;

        const response = await axios.put(`http://127.0.0.1:8000/api/updateStatut/${idReservation}`, ReservationStatut, config);

        if (response.status === 200) {
            const index = this.reservations.findIndex(reservation => reservation.id === idReservation);
            this.reservations[index].statut = newStatut;

            this.flashMessage = 'Reservation Treated';
            setTimeout(() => {
                this.flashMessage = null;
            }, 3000);
        } else {
            console.error("Store Event failed:", response.statusText);
        }
    } catch (error) {
        console.error("Error during Storing:", error);
    } finally {
        this.isFetching = false;
    }
},


    }
};
</script>
