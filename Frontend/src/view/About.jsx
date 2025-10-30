export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          About Our Patient Management System
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          The <span className="font-semibold text-blue-600">Patient Management Dashboard </span> 
          is designed to make hospital record-keeping and patient tracking efficient, transparent, and accessible.
          Our goal is to empower healthcare professionals with real-time insights into patient conditions, 
          admissions, and recovery statistics.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
               Real-Time Analytics
            </h2>
            <p className="text-gray-600">
              Get instant statistics on admitted, discharged, critical, and normal patients using 
              interactive visualizations and charts.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl border border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
               Streamlined Management
            </h2>
            <p className="text-gray-600">
              Simplify hospital operations by efficiently managing patient data, conditions, and status updates.
            </p>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-700 mb-2">
              Secure & Reliable
            </h2>
            <p className="text-gray-600">
              All patient records are stored securely with robust validation and backend integration.
            </p>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">
               Built for Scalability
            </h2>
            <p className="text-gray-600">
              Developed using modern web technologies like React, Node.js, Express, and MongoDB for 
              high performance and scalability.
            </p>
          </div>
        </div>

        <div className="mt-10 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Akku — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
