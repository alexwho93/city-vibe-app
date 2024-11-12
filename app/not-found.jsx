import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen mt-56">
      <div className=" p-8 rounded-lg  text-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-400 mb-6">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
