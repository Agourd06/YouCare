<template>

    <div class=" lg:px-16 px-5 pb-16 pt-8">
        <a href="/test1"><i class='bx bx-arrow-back text-3xl hover:animate-ping duration-300'
                style='color:#272525'></i></a>
        <div class="lg:p-8 p-4 relative bg-white shadow ">

            <a href="/test" title="Get quote now"
                class="absolute lg:right-16 right-1 lg:top-10 top-0 inline-flex items-center justify-center lg:px-6 lg:py-4 px-3 py-1 text-sm font-semibold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Add Rating
            </a>

   <!------------------------------- pop-up ------------------------->
   <div id="" class="hidden bg-black/30 fixed top-0 bottom-0 right-0 left-0 flex  items-center justify-center">
                <div class=" flex flex-col bg-black/50 w-[60%] mx-auto py-5 rounded-lg">
                    <div class="flex flex-col w-[80%] mx-auto">
                        <label for="status" class="text-sm font-medium text-white">Note</label>

                        <select id="status" name="filterPrice"
                            class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                            <option value="{{ null }}">None</option>
                            <option value="100/500">100 $ - 500 $</option>
                            <option value="500/1000">500 $ - 1000 $</option>
                            <option value="1000/1500">1000 $ - 1500 $</option>
                            <option value="1500/2000">1500 $ - 2000 $</option>
                        </select>
                    </div>
                    <div class="relative w-[80%] mx-auto mt-7 min-w-[200px]  rounded-full ">

                        <form action="/comment" method="POST">
                            <textarea name="content"
                                class="peer h-full pl-15  min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-white/90 rounded-xl pt-10 pb-1.5 font-sans text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#00235B] focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="">
                        </textarea>
                            <label
                                class="after:content[''] pt-4 px-4 pointer-events-none text-gray-800 absolute left-0 -top-1.5 flex h-full w-[97%] select-none text-sm md:text-[20px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#00235B] after:rounded-full after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 md:peer-focus:text-[15px] peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-[#00235B] peer-focus:after:scale-x-100 peer-focus:after:border-[#00235B] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Add Your Comment Here ...
                            </label>
                            <button
                                class="!absolute right-1 bottom-3  z-10 select-none rounded-xl bg-[#00235B] md:py-3 md:px-8 py-1 px-4 text-center align-middle font-sans md:text-sm  text-xs font-bold uppercase text-white shadow-md shadow-[#00235B]/20 transition-all hover:shadow-lg hover:shadow-[#00235B]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                                type="submit" data-ripple-light="true">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <!------------------------------------ pop-up ---------------------------------->


            <div class=" text-center border-b pb-12">
                <h1 class="lg:text-4xl text-2xl font-medium text-gray-700"> Evento
                    <span class="font-light lg:text-sm text-xs text-gray-500">2000/12/06 16:50</span>
                </h1>
                <div class="lg:flex gap-4  justify-center items-center">
                    <p class=" text-gray-600 mt-3 text-xs lg:text-md font-bold">RepoGitHub : </p>
                    <a href="https://www.youtube.com/watch?v=wmYsGNr-Gv8&list=RDTHVbtGqEO1o&index=11"
                        class="font-light text-xs lg:text-md text-gray-600 mt-3">
                        etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg</a>
                </div>

                <div class="flex mt-8 flex-wrap gap-4 justify-center items-center">
                    <p class="text-gray-500 text-4xl font-bold"> Media
                    </p>
                </div>
            </div>


            <div class="grid grid-cols-2 md:grid-cols-3 gap-1">

                <img class="h-full  rounded-lg"
                    src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt="">
                <img class="h-full  rounded-lg"
                    src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt="">
                <img class="h-full  rounded-lg"
                    src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt="">
                <img class="h-full  rounded-lg"
                    src="https://etudestech.com/wp-content/uploads/2023/05/midjourney-scaled.jpeg" alt="">


            </div>

            <div class="mt-12 flex flex-col justify-center items-center">
                <h3 class="text-gray-500 text-4xl font-bold mb-4">Description</h3>
                <p class="text-gray-600 text-center font-normal text-md lg:px-16">
                    A skilled bricoleur, Ryan, known by Melbourne roots and now based in Brooklyn as Nick Murphy,
                    engages in the art of crafting, assembling, and recording all aspects of their music. This hands-on
                    approach infuses their work with a distinct, intimate ambiance, complemented by a robust and
                    rhythmic structure. Much like a bricoleur, Ryan is an artisan of considerable range, weaving
                    together various elements to create a unique and compelling artistic tapestry.</p>
            </div>
         

            <div class="w-full flex justify-center mt-10">
                <h3 class="text-gray-500 text-4xl font-bold mb-4">Rating</h3>
            </div>
            <div class=" bg-gray-100 rounded-lg pt-2  ">

                <div class="text-[#E21818] px-4 flex gap-2 items-center"><i class='bx bxs-user-circle text-6xl'></i>
                    <h2 class="text-xl font-bold">My Name</h2>
                </div>
                <div class=" px-4 lg:flex lg:justify-between">
                    <div class="lg:pl-16 pl-1 pr-5 pb-4 ">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis recusandae
                            omnis eaque, deleniti nobis quis amet? In nihil quam, nulla, cumque laboriosam magni
                            nesciunt sapiente non nam placeat perspiciatis. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quod corporis quasi maxime excepturi quos tenetur,
                            illum delectus, aliquam ab dolores vero perferendis doloremque reprehenderit
                            accusamus! Corporis aspernatur aliquam aliquid earum.</p>
                    </div>
                    <div class="flex px-4">

                        <button type="button"
                            class="text-white h-20 flex flex-col items-center gap-1 hover:text-white border border-[#E21818] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 group">
                            <i class='bx bxs-star  text-xl text-[#eebb07]'></i><span
                                class="text-black">100</span></button>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
