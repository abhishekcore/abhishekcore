import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Profile</h1>
          <p className="text-gray-600">Manage your profile information...</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
