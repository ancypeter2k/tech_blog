import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Oops! That page doesn’t exist. Maybe try heading back to the homepage and exploring our latest posts.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound