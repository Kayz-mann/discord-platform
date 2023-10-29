import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

//folders created are automatically mapped to the page router
//to create directories without making use of the page router (auth)folder
//they are called organization folder


export default function Home() {
  const state = true
  return (
    //allow only logged in users
    <div className="">
      <UserButton
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
  )
}


//24:38