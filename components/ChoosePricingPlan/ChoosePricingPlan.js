import Image from "next/image";
import React from "react";
import client1 from "../../public/assets/images/client/01.jpg";
import client2 from "../../public/assets/images/client/02.jpg";
import client3 from "../../public/assets/images/client/03.jpg";
import client4 from "../../public/assets/images/client/04.jpg";
import client5 from "../../public/assets/images/client/05.jpg";
import client6 from "../../public/assets/images/client/06.jpg";
import blog1 from "../../public/assets/images/blog/01.jpg";
import blog2 from "../../public/assets/images/blog/02.jpg";
import blog3 from "../../public/assets/images/blog/03.jpg";


const ChoosePricingPlan = () => {
  return (
    <div class="relative md:py-24 py-16">
      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Choose Pricing Plan
          </h3>

          <p class="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
            <div class="p-6 py-8">
              <h6 class="font-bold uppercase mb-5 text-indigo-600">Starter</h6>

              <div class="flex mb-5">
                <span class="text-xl font-semibold">$</span>
                <span class="price text-4xl font-semibold mb-0">39</span>
                <span class="text-xl font-semibold self-end mb-1">/mo</span>
              </div>

              <ul class="list-none text-slate-400">
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Full Access
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Source Files
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Free Appointments
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Enhanced Security
                </li>
              </ul>
              <a
                href=""
                class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
              >
                Get Started
              </a>
            </div>
          </div>

          <div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
            <div class="p-6 py-8 md:pl-10">
              <h6 class="font-bold uppercase mb-5 text-indigo-600">Business</h6>

              <div class="flex mb-5">
                <span class="text-xl font-semibold">$</span>
                <span class="price text-4xl font-semibold mb-0">49</span>
                <span class="text-xl font-semibold self-end mb-1">/mo</span>
              </div>

              <ul class="list-none text-slate-400">
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Full Access
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Source Files
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Free Appointments
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Enhanced Security
                </li>
              </ul>
              <a
                href=""
                class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
              >
                Try it Now
              </a>
            </div>
          </div>

          <div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
            <div class="p-6 py-8 md:pl-10">
              <h6 class="font-bold uppercase mb-5 text-indigo-600">
                Professional
              </h6>

              <div class="flex mb-5">
                <span class="text-xl font-semibold">$</span>
                <span class="price text-4xl font-semibold mb-0">59</span>
                <span class="text-xl font-semibold self-end mb-1">/mo</span>
              </div>

              <ul class="list-none text-slate-400">
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Full Access
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Source Files
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Free Appointments
                </li>
                <li class="mb-1 flex">
                  <i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
                  Enhanced Security
                </li>
              </ul>
              <a
                href=""
                class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
              >
                Try it Now
              </a>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}

      <div class="container md:mt-24 mt-16">
        <div class="grid grid-cols-1 pb-8 text-center">
          <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What Our Users Say
          </h3>

          <p class="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
        </div>
        {/* <!--end grid--> */}

        <div class="grid grid-cols-1 mt-8">
          <div class="tiny-three-item">
            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    It seems that only fragments of the original text remain in
                    the Lorem Ipsum texts used today.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client1}
                    alt="Client Image"
                  />
                  <h6 class="mt-2 font-semibold">Calvin Carlo</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    The most well-known dummy text is the Lorem Ipsum, which is
                    said to have originated in the 16th century.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client2}
                    alt="Client Image 02"
                    width={500}
                    height={300}
                    class="h-14 w-14 rounded-full shadow-md mx-auto"
                  />
                  <h6 class="mt-2 font-semibold">Christa Smith</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    One disadvantage of Lorum Ipsum is that in Latin certain
                    letters appear more frequently than others.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client3}
                    class="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 class="mt-2 font-semibold">Jemina CLone</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    Thus, Lorem Ipsum has only limited suitability as a visual
                    filler for German texts.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client4}
                    alt="Client 03"
                    width={300}
                    height={200}
                  />
                  <h6 class="mt-2 font-semibold">Smith Vodka</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    There is now an abundance of readable dummy texts. These are
                    usually used when a text is required.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client5}
                    class="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div class="tiny-slide text-center">
              <div class="customer-testi">
                <div class="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                  <i class="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p class="text-slate-400">
                    According to most sources, Lorum Ipsum can be traced back to
                    a text composed by Cicero.
                  </p>
                  <ul class="list-none mb-0 text-amber-400 mt-3">
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                    <li class="inline">
                      <i class="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <div class="text-center mt-5">
                  <Image
                    src={client6}
                    class="h-14 w-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 class="mt-2 font-semibold">Cristino Murfi</h6>
                  <span class="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}

      <div class="container md:mt-24 mt-16">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
          <div class="md:col-span-6">
            <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">
              Blogs
            </h6>
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Reads Our Latest <br /> News & Blog
            </h3>
          </div>

          <div class="md:col-span-6">
            <p class="text-slate-400 max-w-xl">
              Start working with Techwind that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>
        {/* <!--end grid--> */}

        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <Image src={blog1} alt="" />

            <div class="content p-6">
              <a
                href="blog-detail.html"
                class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Design your apps in your own way
              </a>
              <p class="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div class="mt-4">
                <a
                  href="blog-detail.html"
                  class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i class="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <Image src={blog2} alt="" />

            <div class="content p-6">
              <a
                href="blog-detail.html"
                class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                How apps is changing the IT world
              </a>
              <p class="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div class="mt-4">
                <a
                  href="blog-detail.html"
                  class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i class="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <Image src={blog3} alt="" />

            <div class="content p-6">
              <a
                href="blog-detail.html"
                class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Smartest Applications for Business
              </a>
              <p class="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>

              <div class="mt-4">
                <a
                  href="blog-detail.html"
                  class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i class="uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end grid--> */}
      </div>
      {/* <!--end container--> */}
    </div>
  );
};

export default ChoosePricingPlan;
