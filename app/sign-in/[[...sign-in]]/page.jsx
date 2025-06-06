import { SignedIn, SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <main className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-4  px-8 lg:px-8">

        <div className="relative lg:w-1/2 lg:px-8 lg:py-8 py-8">
          <Image
            alt=""
            src="/women-table.svg"
            className="top-0 left-0 drop-shadow-xl"
            width={500}
            height={500}
          />
        </div>

        <div className="relative lg:w-1/2 lg:px-12 lg:py-12 py-8">
          <SignIn afterSignInUrl="/dashboard" />
        </div>
      </main>
    </div>
  );
}
