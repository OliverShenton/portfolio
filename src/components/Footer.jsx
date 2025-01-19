export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center p-8">
      <p className="mb-2">&copy; {currentYear} Oliver Shenton's Portfolio</p>
      <p className="mb-2">Last updated: 20th January 2025</p>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/olivershenton"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn Profile"
          className="hover:text-blue-500">
          LinkedIn
        </a>
        |
        <a
          href="https://github.com/olivershenton"
          target="_blank"
          rel="noopener"
          aria-label="GitHub Profile"
          className="hover:text-blue-500">
          GitHub
        </a>
        |
        <a
          href="mailto:olivermshenton@outlook.com"
          aria-label="Email Oliver Shenton"
          className="hover:text-blue-500">
          Email
        </a>
      </div>
    </div>
  );
}
