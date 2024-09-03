import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-3 bg-slate-900 border border-t-2 border-t-white">

            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="md:m-6 flex flex-wrap">
                    <div className="w-full md:p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <p className="text-sm text-slate-100">
                                    &copy; Copyright 2023. All Rights Reserved by Vishnu P.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-extrabold uppercase text-slate-100">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-extrabold uppercase text-slate-100">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-3  text-xs font-extrabold uppercase text-slate-100">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-1">
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-slate-100 hover:text-gray-700"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer