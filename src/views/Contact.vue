<template>
  <div class="min-h-screen bg-green-50">

    <section class="bg-green-800 text-white py-20 text-center">
      <h1 class="text-5xl font-bold mb-4">
        Contact Us
      </h1>

      <p class="text-xl">
        We'd love to hear from you.
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-8 py-16">

      <div class="grid md:grid-cols-2 gap-10">

        <!-- Contact Info -->
        <div class="bg-white rounded-xl shadow-lg p-8">

          <h2 class="text-3xl font-bold text-green-800 mb-6">
            Get In Touch
          </h2>

          <div class="space-y-4 text-gray-700">

            <p>
              📧 ahantunyaburanga@gmail.com
            </p>

            <p>
              📞 +250 785 310 468
            </p>

            <p>
              📍 Kagugu, Kigali, Rwanda
            </p>

          </div>

        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">

          <h2 class="text-3xl font-bold text-green-800 mb-6">
            Send a Message
          </h2>

          <form class="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              class="w-full border rounded-lg p-3"
            >

            <input
              type="email"
              placeholder="Your Email"
              class="w-full border rounded-lg p-3"
            >

            <textarea
              rows="5"
              placeholder="Your Message"
              class="w-full border rounded-lg p-3"
            ></textarea>

            <button
              type="submit"
              class="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

  </div>
</template>