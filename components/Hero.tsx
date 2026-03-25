'use client'

import Link from 'next/link'
import { GraduationCap, BookOpen, Trophy, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <main className="flex-grow">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-4">
              <GraduationCap size={48} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Find Your Future,
              <br />
              <span className="text-blue-300">Fund Your Dreams</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover thousands of scholarships tailored to your profile and make your educational aspirations a reality
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link
                href="/scholarships"
                className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
              >
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <BookOpen size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Database
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access thousands of scholarships from various institutions and organizations worldwide
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Trophy size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personalized Matches
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get scholarship recommendations based on your academic profile and interests
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <GraduationCap size={32} className="text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Application Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep track of your applications and never miss a deadline with our organized system
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
