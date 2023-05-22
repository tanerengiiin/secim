import Adaylar from "@/components/adaylar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-between mx-auto h-[100vh] overflow-auto max-w-[30rem]">
      <Adaylar/>
      <div className="text-center text-black mb-4 text-sm">
        <div>Created with ❤️ <Link href={"https://twitter.com/tanerengiin"} target="_blank" className="font-medium">tanerengiin</Link></div>
      </div>
    </main>
  )
}
