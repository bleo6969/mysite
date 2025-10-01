export default function Page() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-slam-500">MBA Whitepaper</h1>
      <p className="text-lg text-white/80">
        Welcome to the <span className="text-slam-500">Meme Basketball Association</span> (MBA).  
        This is not just a game — it’s a new league where memes, trading cards, and 
        decentralized finance collide.  
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-slam-400">Vision</h2>
        <p className="mt-2 text-white/70">
          The MBA is built like the NBA — teams, standings, and fans — but powered by tokens, 
          markets, and gamified staking. Collectors and players are part of the same arena.  
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slam-400">Game Mechanics</h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-white/70">
          <li>Pack ripping reveals meme player cards tied to teams.</li>
          <li>Unopened packs can change as the season evolves.</li>
          <li>Staking cards boosts token rewards and unlocks perks.</li>
          <li>Standings shift with real NBA energy — but in meme style.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slam-400">Tokenomics</h2>
        <p className="mt-2 text-white/70">
          The native token <span className="text-slam-500">$SLAM</span> fuels the league.  
          It’s used to enter games, swap for cards, and stake for rewards.  
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slam-400">The Hidden Playbook</h2>
        <p className="mt-2 text-white/70 italic">
          Not every rule is revealed. Some mechanics unlock only when the community plays, 
          discovers, and pushes the league forward — just like the real game.  
        </p>
      </section>

      <footer className="pt-6 border-t border-white/10 text-sm text-white/50">
        This is the Meme Basketball Association. Built for fun, memes, and the unexpected. 🏀⚡
      </footer>
    </div>
  );
}

