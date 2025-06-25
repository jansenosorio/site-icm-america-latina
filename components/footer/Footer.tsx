export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-black py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
        <p>
          Follow us on{" "}
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="https://github.com"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};
