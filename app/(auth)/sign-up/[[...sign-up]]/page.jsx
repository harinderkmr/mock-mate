import { RedirectToUserProfile, SignedIn, SignedOut, SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-white">
      <main className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-4  px-8 lg:px-8">
      <SignedOut>
        <div className="relative lg:w-1/2 lg:px-8 lg:py-8 py-8">
          <img
            alt=""
            src="/women-table.svg"
            className="top-0 left-0 drop-shadow-xl"
            width={500}
            height={500}
          />
        </div>

        <div className="relative lg:w-1/2 lg:px-12 lg:py-12 py-8">
          
            <SignUp afterSignUpUrl ="/dashboard" />
          
        </div>
        </SignedOut>
        <h1>Already SignedUp</h1>
      </main>
    </div>
  );
}
