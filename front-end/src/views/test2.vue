<template>


    <div class="w-full relative shadow-2xl rounded   overflow-hidden">
        <a href="javascript:history.back()"
            class="w-12 h-12 bg-white/50 hover:bg-white duration-150 fixed top-10 left-10 z-50 rounded-full flex items-center justify-center  animate-pulse"><i
                class='bx text-5xl bx-left-arrow-alt'></i></a>

        <div class="top h-64 w-full bg-blue-600 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt="" class="bg w-full h-full object-cover object-center absolute z-0">
            <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
                <i class='bx bxs-user-circle text-9xl'></i>

                <h1 class="text-2xl font-semibold"> smiya</h1>
                <h4 class="text-sm font-semibold">Joined Since : 2024</h4>
            </div>
        </div>
        <div class="grid grid-cols-12 bg-white text-black">

            <div
                class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4   md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

                <div>
                    <h3 class="md:text-2xl text-lg font-semibold text-center pb-1">Liked Movies</h3>
                    <div class="h-[1px] bg-[#EEBB07]"></div>
                    <div class="grid grid-cols-2 gap-x-2 gap-y-3 p-2 pt-5">
                        <img src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt=""
                            class="">
                        <img src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt=""
                            class="">
                        <img src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt=""
                            class="">
                    </div>
                </div>

            </div>

            <div
                class="col-span-12 md:border-solid md:border-l md:border-[#EEBB07] md:border-opacity-25 h-full pb-12 md:col-span-10">
                <div class="px-4 pt-4">




                    <h3 class="md:text-2xl text-lg font-semibold text-center pb-1">Personal Information</h3>
                    <div class="h-[1px] bg-[#EEBB07]"></div>
                    <form action="">
                        <div class="grid grid-cols-2 gap-x-3 w-[80%] mx-auto  md:gap-x-5 gap-y-7  mb-12 mt-6">
                            <div class="form-item w-full relative">
                                <label class="md:text-xl text-md">Full Name</label>
                                <div class="relative">
                                    <input id="NameInput" type="text" value=" smiya u kniya"
                                        class="w-full text-black bg-white appearance-none text-opacity-50 rounded shadow py-2 px-2 pr-8 focus:outline-none focus:shadow-outline focus:border-blue-200">

                                </div>
                            </div>

                            <div class="form-item w-full relative">
                                <label class="md:text-xl text-md">Email</label>
                                <div class="relative">
                                    <input id="emailInput" type="text" value="asmaabarj5@gmail.com"
                                        class="w-full text-black bg-white appearance-none text-opacity-50 rounded shadow py-2 px-2 pr-8 focus:outline-none focus:shadow-outline focus:border-blue-200">

                                </div>
                            </div>





                        </div>
                        <div class="w-[90%]   flex justify-end"><button
                                class=" inline-flex items-center justify-center lg:px-7 lg:py-3 px-3 py-1 text-sm font-semibold text-white transition-all duration-200 bg-[#E21818] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Update</button>
                        </div>
                    </form>
                    <h3 class="md:text-2xl text-lg font-semibold text-center pb-1">Update Password</h3>
                    <div class="h-[1px] bg-[#EEBB07]"></div>
                    <form action="">
                        <div
                            class=" w-[80%] mx-auto grid grid-cols-2 text-black  gap-x-3  md:gap-x-5 gap-y-7   mb-12 mt-6">
                            <div class="form-item w-full col-span-2">
                                <label class="md:text-xl text-md  text-white ">Old Password</label>
                                <input type="text" value=""
                                    class="w-full appearance-none  text-opacity-50 rounded shadow py-2 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 ">
                            </div>
                            <div class="form-item w-full">
                                <label class="md:text-xl text-md text-white ">New Password</label>
                                <input type="text" value=""
                                    class="w-full appearance-none  text-opacity-50 rounded shadow py-2 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 ">
                            </div>


                            <div class="form-item w-full">
                                <label class="md:text-xl text-md text-white ">Confirme Password</label>
                                <input type="text" value=""
                                    class="w-full appearance-none  text-opacity-50 rounded shadow py-2 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 ">
                            </div>

                        </div>
                        <div class="w-full  pr-[122px] flex justify-end"><button
                                class=" inline-flex items-center justify-center lg:px-7 lg:py-3 px-3 py-1 text-sm font-semibold text-white transition-all duration-200 bg-[#E21818] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Reset</button>
                        </div>
                    </form>






                </div>
            </div>

        </div>

    </div>


</template>
