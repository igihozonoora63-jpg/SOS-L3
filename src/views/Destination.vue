<script setup>
import gorilla from '../assets/Gorilla.jpg'
import kivu from '../assets/Kivu.jpg'
import nyungwe from '../assets/Nyungwe.jpg'
import kcc from '../assets/KCC.jpg'
import volcanoes from '../assets/Volcanoes.jpg'
import palace from '../assets/Palace.jpg'

const destinations = [
  {
    name: 'Volcanoes National Park',
    image: volcanoes,
    description: 'Home of the famous mountain gorillas and breathtaking volcanoes.'
  },
  {
    name: 'Lake Kivu',
    image: kivu,
    description: 'Relax on beautiful beaches and enjoy boat rides on one of Africa’s great lakes.'
  },
  {
    name: 'Nyungwe Forest',
    image: nyungwe,
    description: 'Walk among the treetops and discover Rwanda’s rich biodiversity.'
  },
  {
    name: 'Kigali Convention Centre',
    image: kcc,
    description: 'An iconic landmark showcasing Rwanda’s modern development.'
  },
  {
    name: "King's Palace Museum",
    image: palace,
    description: 'Explore Rwanda’s royal history and cultural heritage.'
  },
  {
    name: 'Mountain Gorilla Trekking',
    image: gorilla,
    description: 'A once-in-a-lifetime wildlife experience found nowhere else.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-green-50">

    <!-- Hero Section -->
    <section class="bg-green-800 text-white py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">
        Discover Rwanda
      </h1>

      <p class="text-xl max-w-3xl mx-auto">
        Explore the Land of a Thousand Hills and experience unforgettable adventures.
      </p>
    </section>

    <!-- Destinations -->
    <section class="py-16 px-8">

      <h2 class="text-4xl font-bold text-center text-green-800 mb-12">
        Top Destinations
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="place in destinations"
          :key="place.name"
          class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
        >
          <img
            :src="place.image"
            :alt="place.name"
            class="w-full h-60 object-cover"
          >

          <div class="p-6">
            <h3 class="text-2xl font-bold text-green-800 mb-3">
              {{ place.name }}
            </h3>

            <p class="text-gray-600">
              {{ place.description }}
            </p>

           <router-link to="/Destination"><button
              class="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition"
            >
              Learn More
            </button>
            </router-link>
          </div>
        </div>

      </div>

    </section>

    <!-- Call To Action -->
    <section class="bg-green-800 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">
        Ready for Your Adventure?
      </h2>

      <p class="mb-6">
        Discover Rwanda's beauty, culture, and wildlife today.
      </p>

      <button class="bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300">
        Plan Your Trip
      </button>
    </section>

  </div>
</template>