import Link from "next/link"

export default function NavbarItem({ link, text }: { link: string, text: string }) {
  return (
    <Link
      href={link}
      className="hover:underline hover:underline-offset-4 transition-all duration-300"
    >
      {text}
    </Link>
  )
}