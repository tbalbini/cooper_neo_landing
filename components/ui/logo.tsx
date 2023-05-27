import Link from 'next/link'

export default function Logo() {
  return (
    <div>
      <Link href="/" className="block" aria-label="Cruip">
        <img src="./images/logo.svg" alt="Logo" />
      </Link>
    </div>
  );
}
