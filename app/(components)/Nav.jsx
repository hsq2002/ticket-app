import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { options } from "../api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth";

const Nav = async () => {
  const session = await getServerSession(options);

  return (
  <nav className="flex-justify-between bg-nav p-4">
    <div className="flex items-center space-x-4">
      <Link href="/">
        <FontAwesomeIcon icon={faHome} className="icon" />
      </Link>
      <Link href="/TicketPage/new">
        <FontAwesomeIcon icon={faTicket} className="icon" />
      </Link>
      <Link href="/CreateUser">Create User</Link>
      <Link href="/ClientMember">Client Member</Link>
      <Link href="/Member">Member</Link>
      <Link href="Public">Public</Link>
      {session ? (<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
        )}
    </div>
    <div>
      <p className="text-default-text">hsq239@gmail.com</p>
    </div>
  </nav>
  )
}

export default Nav
