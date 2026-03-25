export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">ScholarPath</h3>
            <p className="text-blue-200 text-sm">Find Your Future, Fund Your Dreams</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm mb-1">Powered by</p>
            <p className="text-xl font-semibold">
              Shri Vishnu Engineering College for Women
            </p>
            <p className="text-blue-200 text-sm mt-1">SVIT</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} ScholarPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
