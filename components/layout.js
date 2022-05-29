import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <Link href="/">
            <img src="/logo.svg" alt="React Logo" style={{ width: "50px" }} />
          </Link>
          <span className="flex items-center mx-auto">Blog</span>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-gray-100 mt-8 py-4">
        <div className="container mx-auto flex justify-center">
          @florentzia
        </div>
      </footer>
    </div>
  );
}
