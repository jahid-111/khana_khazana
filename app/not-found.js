import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-3">
      <h2 className=" text-3xl font-semibold">Not Found 🥲</h2>
      <p className=" text-red-700">Could not find requested resource</p>
      <Link className=" bg-orange-600 py-2 px-4 rounded-md  my-3" href="/">
        Return Home
      </Link>
    </div>
  );
}
