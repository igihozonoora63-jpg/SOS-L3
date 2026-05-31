<template>
  <div>
    <section class="py-16 bg-white">

      <h4 class="font-bold text-4xl mb-10 text-center text-green-800">
        Gallery
      </h4>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
          <video
            src="/src/assets/EDIT.mp4"
            controls
            class="w-full h-48 object-cover rounded-lg mb-4">
          </video>

          <h2 class="text-2xl font-bold mb-2">
            Kigali Convention Center
          </h2>

          <p>
            A modern architectural marvel in the heart of Kigali.
          </p>
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
          <video
            src="/src/assets/KIGALIEDIT.mp4"
            controls
            class="w-full h-48 object-cover rounded-lg mb-4">
          </video>

          <h2 class="text-2xl font-bold mb-2">
            Nyungwe Canopy Walk
          </h2>

          <p>
            Experience the breathtaking views of Nyungwe Forest from above.
          </p>
        </div>

      </div>

    </section>
  </div>
</template>