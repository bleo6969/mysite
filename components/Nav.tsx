import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">
          MBA<span className="text-slam-500">/$SLAM</span>
        </Link>
        <nav className="flex gap-4 text-sm text-white/80">
          <Link href="/">Dashboard</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/staking">Staking</Link>
          <Link href="/packs">Packs</Link>
          <Link href="/whitepaper">Whitepaper</Link>
        </nav>
      </div>
    </header>
  );
}

