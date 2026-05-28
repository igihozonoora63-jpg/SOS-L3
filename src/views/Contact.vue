<template>
    <h1 class="font-bold text-center text-green-600 text-3xl mt-10">Contact Us</h1>

    <!-- Message Form -->
     <div class="flext items-start justify-start gap-10 p-10 relative z-10">
       <form class="w-full max-w-lg mx-auto bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-10 text-gray-600 shadow-xl">
         <input type="text" placeholder="Your Email" class="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
        <input type="text" placeholder="Your Name" class="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500">
        <textarea type="text" placeholder="Message..." class="w-full mb-4 pc-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:fing-green-500"></textarea>
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Send Message</button>
        </form>
     </div>
</template>