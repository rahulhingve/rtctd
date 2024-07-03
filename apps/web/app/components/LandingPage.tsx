
import Link from "next/link"
import { TextGenerateEffect } from "./TextGenerateEffect"
import { useSession } from "next-auth/react"

export function LandingPage() {


  const { data: session } = useSession()
  return (
    <div className="flex flex-col min-h-[100dvh]">

     
      <header className="px-4 lg:px-6 h-14 flex items-center">
   

      </header>
      <main className="flex-1">
      
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
          <h2 className="max-w-[600px] text-muted-foreground md:text-xl">Hello, {session? session.user?.name:""}</h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    <TextGenerateEffect words="Real-Time Collaboration for Developers" />

                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    This is a powerful tool that allows developers to work together in real-time,
                    streamlining the development process and fostering better collaboration.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">

                  <Link
                    href="/editor"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >

                    {session ? "Go to Code Editor" : "Get started"}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-[400px] w-full rounded-xl bg-muted p-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CodeIcon className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <div className="relative h-full w-full rounded-lg border border-muted bg-background p-4 shadow-lg">
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                      <div className="h-[200px] w-full rounded-md border border-muted bg-muted" />
                      <div className="h-[50px] w-full rounded-md border border-muted bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Development Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  RTCTD   provides a suite of powerful features to help your team work together more
                  efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Real-Time Collaboration</h3>
                      <p className="text-muted-foreground">
                        Multiple developers can work on the same codebase simultaneously, with synced in
                        real-time.
                      </p>
                    </div>
                  </li>
                  
                  
                </ul>
              </div>
              <div className="relative h-[400px] w-full rounded-xl bg-muted p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeIcon className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="relative h-full w-full rounded-lg border border-muted bg-background p-4 shadow-lg">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                    <div className="h-[200px] w-full rounded-md border border-muted bg-muted" />
                    <div className="h-[50px] w-full rounded-md border border-muted bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Boost Your Team's Productivity</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                RTCTD helps your team work more efficiently and effectively, so you can focus on building
                  great software.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative h-[400px] w-full rounded-xl bg-muted p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <CodeIcon className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="relative h-full w-full rounded-lg border border-muted bg-background p-4 shadow-lg">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                    <div className="h-[200px] w-full rounded-md border border-muted bg-muted" />
                    <div className="h-[50px] w-full rounded-md border border-muted bg-muted" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Faster Iteration</h3>
                      <p className="text-muted-foreground">
                        Reduce the time it takes to implement new features and fix bugs by collaborating in real-time.
                      </p>
                    </div>
                  </li>
                 
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Reduced Errors</h3>
                      <p className="text-muted-foreground">
                        Catch and resolve issues early in the development process with real-time collaboration.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 RTCTD . All rights reserved  </p>
        <p className="pl-[36%] text-xs text-muted-foreground">Made with ❤️ by Rahul</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
