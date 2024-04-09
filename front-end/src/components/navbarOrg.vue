<template>
    <div class="w-full  fixed top-0 z-50 bg-[#EEBB07] h-12 flex items-center">
        <nav class="w-[94%] pr-20 mx-auto flex justify-between">
            <img alt="You care logo" class="logo" src="@/assets/YoucareLogo.png" width="125" height="125" />
            <div class="flex gap-x-6">
                <router-link to="/organisateur" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">My Event</router-link>
                <router-link to="/newEvent" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">New Event</router-link>
                <router-link to="/reservationBoard" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">Reservations</router-link>

                <router-link to="/logout" class="block ml-4 mt-4
            lg:inline-block lg:mt-0 text-[#4B4B4B]
            hover:text-white">Logout</router-link>
            </div>

        </nav>
    </div>
</template>