<template>


    <!--Container-->
    <div class="container shadow-lg mx-auto bg-white  md:mt-18 px-4 pt-6">
        <div class=" my-4 w-full ">

            <div class="flex flex-col">
                <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                    <div class="w-full text-center font-bold text-2xl ">
                        <h1
                            class="bg-gradient-to-r from-[#E21818] via-[#00235B] to-[#E21818] inline-block text-transparent bg-clip-text">
                            Found Your Desire</h1>
                    </div>
                    <form class="" action="/client" method="GET">


                        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div class="relative  w-full flex  items-end justify-between rounded-md">
                                <svg class="absolute left-2 md:top-[55%] top-1/3 block h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8" class=""></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" class="">
                                    </line>
                                </svg>
                                <input type="name" name="filterTitle"
                                    class="h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4  pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    placeholder="Search by Title" />
                            </div>

                            <div class="flex flex-col">
                                <label for="manufacturer" class="text-sm font-medium text-stone-600">categories</label>

                                <select id="manufacturer" name="filterCategorie"
                                    class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    <option value="{{ null }}">None</option>
                                    <option value="">aaaaa</option>
                                </select>
                            </div>


                            <div class="flex flex-col">
                                <label for="status" class="text-sm font-medium text-stone-600">Prices</label>

                                <select id="status" name="filterPrice"
                                    class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    <option value="{{ null }}">None</option>
                                    <option value="100/500">100 $ - 500 $</option>
                                    <option value="500/1000">500 $ - 1000 $</option>
                                    <option value="1000/1500">1000 $ - 1500 $</option>
                                    <option value="1500/2000">1500 $ - 2000 $</option>
                                </select>
                            </div>
                        </div>

                        <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                            <a href="/client"
                                class="rounded-lg bg-gray-200 md:px-8 px-5 py-2 text-center font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</a>
                            <button type="submit"
                                class="rounded-lg bg-black px-8 py-2 text-center font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>




        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-4 w-full py-8 px-1">
            <div class="relative mx-auto w-full">
                <div href="#"
                    class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                    <div class="shadow p-4 rounded-lg bg-white">
                        <div class="flex  justify-center relative rounded-lg overflow-hidden h-52">
                            <img src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt=""
                                class="w-full">
                            <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                                <div class="absolute inset-0 bg-black opacity-10"></div>
                            </div>




                        </div>

                        <div class="mt-4">
                            <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                                Evento
                            </h2>

                        </div>

                        <div class="grid grid-cols-1  gap-4 mt-8">

                            <p class="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                                <i class='bx bx-category-alt text-4xl'></i>
                                <span class="mt-2 text-2xl xl:mt-0 ml-2">
                                    Development

                                </span>
                            </p>

                        </div>

                        <div class="grid grid-cols-1 mt-8 gap-10 w-full">

                            <div>
                                <form action="/reserve" method="POST">

                                    
                                    
                                    <div class="flex justify-center">

                                        <div class="relative inline-flex  group h-12">
                                            <div
                                                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#E21818] via-[#00235B] to-[#E21818] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                            </div>
                                            <a href="/test" title="Get quote now"
                                                
                                                class="relative inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                                role="button">Get a set now
                                        </a>
                                        </div>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div id="eventDat{{ $event->id }}"
                class="h-screen fixed top-0 right-0 left-0 bottom-0 bg-black/20 hidden z-50">
                <div class="flex h-screen items-center justify-center px-10">

                    <div class="w-full sm:w-1/2  bg-white shadow-xl rounded-3xl">
                        <div class=" flex justify-center w-full mb-3">
                            <div
                                class="flex bg-white w-full justify-center px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                                <p class="flex items-center w-full justify-center text-4xl font-medium text-gray-800">
                                    <i class='bx bx-chair text-4xl'></i>
                                    10 left
                                </p>


                            </div>
                        </div>
                        <div class="mt-10 flex flex-col items-center mb-5 ">
                            <img src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg"
                                class="rounded-full h-40 w-40" alt="" />
                            <div class="text-center text-lg font-semibold">
                                <h2>Evento</h2>
                            </div>
                        </div>
                        <div class="flex justify-center px-5 ">
                            <div class="border-b-2 border-gray-500 w-full"></div>
                        </div>
                        <div class="flex justify-center text-center p-5">
                            <p>"lorem akasznecejcgzub zjchzuc chzuciuz izc"</p>
                        </div>
                        <div class="flex justify-center gap-4 p-5">
                            <button onclick="toggleModal('eventData')"
                                class="py-3 bg-indigo-500 font-semibold text-white w-1/4 rounded-xl hover:bg-indigo-600">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full flex justify-center py-4 pr-5">
            <div class="flex justify-center gap-4">
            </div>
        </div>

    </div>


</template>
