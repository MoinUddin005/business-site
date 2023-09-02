import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BusinessExpert = () => {
    return (
        <div class="relative md:py-24 py-16">
            <div class="container">
                <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div class="md:col-span-5">
                        <div class="relative">
                            <Image src="assets/images/business/about01.jpg" class="rounded-md" alt=""/>

                            <div class="absolute bottom-24 right-0">
                                <Image src="assets/images/business/about02.jpg" class="rounded-md shadow-md w-48 h-48" alt=""/>
                                <div class="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk"
                                        class="lightbox h-14 w-14 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                        <i class="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--end col--> */}

                    <div class="md:col-span-7">
                        <div class="lg:ml-4">
                            <h4 class="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-medium">We are the largest <br/> Business expert </h4>
                            <p class="text-slate-400 max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                            <Link href="" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Buy Now <i class="mdi mdi-chevron-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 pb-8 text-center">
                    <h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">Who We Are ?</h6>
                    <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Business strategies and top <br/> permormance ideas</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
                    <div class="group text-center">
                        <i data-feather="pie-chart" class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"></i>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">Profitable Marketing</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right align-middle"></i></a>
                            </div>
                        </div>
                    </div>
                   
                    
                    <div class="group text-center">
                        <i data-feather="briefcase" class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"></i>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">SEO Specialists</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right align-middle"></i></a>
                            </div>
                        </div>
                    </div>
                   
                    
                    <div class="group text-center">
                        <i data-feather="target" class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"></i>

                        <div class="mt-6">
                            <a href="" class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out">Audience Analysis</a>

                            <p class="text-slate-400 mt-4">We develop digital strategies, products and services appreciated by clients.</p>

                            <div class="mt-4">
                                <a href="" class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i class="uil uil-arrow-right align-middle"></i></a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default BusinessExpert;