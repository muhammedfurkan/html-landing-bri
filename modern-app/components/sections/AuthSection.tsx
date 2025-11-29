"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthSection() {
    const [tab, setTab] = useState<'signin' | 'signup'>('signin');

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid lg:grid-cols-2 min-h-[700px]">
                {/* Left Panel */}
                <div className="relative hidden lg:flex bg-[#193470] text-white p-12 flex-col justify-center overflow-hidden">
                    <div className="relative z-10 flex flex-col h-full justify-center">
                        <div className="mb-12">
                             <h1 className="text-5xl font-bold mb-4 leading-tight">Welcome to Bazarly</h1>
                             <p className="text-blue-100 text-lg">Your Gateway to Effortless Client Management.</p>
                        </div>

                        <div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-8 border border-white/20 shadow-xl">
                                <h2 className="text-2xl font-bold mb-2">Seamless Client Management</h2>
                                <p className="text-blue-100">Effortlessly work together with your team in real-time.</p>
                            </div>

                            <div className="flex gap-2">
                                <div className="w-8 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Background decorations */}
                     <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
                     <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>
                </div>

                {/* Right Panel */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block mb-8">
                            <Image src="/assets/img/logo/logo.svg" alt="Bazarly Logo" width={150} height={40} className="mx-auto" />
                        </Link>

                        <div className="flex bg-gray-100 p-1 rounded-xl w-full max-w-xs mx-auto">
                            <button
                                onClick={() => setTab('signin')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${tab === 'signin' ? 'bg-white shadow-sm text-[#193470]' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Sign In
                            </button>
                            <button
                                onClick={() => setTab('signup')}
                                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${tab === 'signup' ? 'bg-white shadow-sm text-[#193470]' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>

                    {tab === 'signin' ? (
                        <form className="space-y-6 max-w-sm mx-auto w-full">
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <a href="#" className="text-xs text-[#193470] font-medium hover:underline">Forgot Password?</a>
                                </div>
                                <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                            </div>
                            <button type="submit" className="w-full py-3 bg-[#193470] text-white font-bold rounded-xl hover:bg-[#19366f] transition-colors shadow-lg shadow-blue-900/10">
                                Sign In
                            </button>
                             <div className="relative text-center my-6">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                                <span className="relative bg-white px-2 text-xs text-gray-500 uppercase">OR</span>
                            </div>
                            <button type="button" onClick={() => setTab('signup')} className="w-full block text-center text-sm text-[#193470] font-medium hover:underline">
                                Create an account
                            </button>
                        </form>
                    ) : (
                        <form className="space-y-6 max-w-sm mx-auto w-full">
                             <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#193470] focus:border-transparent transition-all" required />
                            </div>
                            <button type="submit" className="w-full py-3 bg-[#193470] text-white font-bold rounded-xl hover:bg-[#19366f] transition-colors shadow-lg shadow-blue-900/10">
                                Sign Up
                            </button>
                            <div className="relative text-center my-6">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                                <span className="relative bg-white px-2 text-xs text-gray-500 uppercase">OR</span>
                            </div>
                            <button type="button" onClick={() => setTab('signin')} className="w-full block text-center text-sm text-[#193470] font-medium hover:underline">
                                Already have an account? Sign In
                            </button>
                             <p className="text-xs text-center text-gray-500 mt-4">By signing up, you accept Bazarly's <a href="#" className="text-[#193470] underline">Terms of Use & Privacy Policy</a>.</p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
