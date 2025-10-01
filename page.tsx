export default function Whitepaper() {
  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">MBA — Meme Basketball Association</h1>
        <p className="mt-2 text-slam-500 font-semibold">$SLAM • Season One</p>
        <p className="mt-3 text-white/70">
          A parody hoops league where cards are players, packs are mystery drafts, and the crowd runs on vibes.
        </p>
      </header>

      <section className="space-y-6">
        <Block
          title="Commissioner’s Note"
          body={[
            "Welcome to the inaugural season of the MBA — the first basketball league where the players are pixels, the teams are memes, and the fans are degens.",
            "This is more than a set of images. It’s a living league powered by vibe.market and the $SLAM token. Unopened packs evolve. Opened cards take the court. Holders become franchise owners."
          ]}
        />

        <Block
          title="League Structure"
          list={[
            "30 Meme Teams — a full parody conference, from ATL Clucks to Wiz Simps.",
            "Cards = Players — collect, flex, or draft them from packs.",
            "Unopened Packs — dynamic slots that may receive trait boosts, foils, or playoff upgrades as the season advances."
          ]}
        />

        <Block
          title="Season Play (Lightweight, Weekly)"
          list={[
            "Matchup of the Week — select clashes drive perks, badges, or $SLAM rewards.",
            "Standings — parody leaderboards; vibes matter as much as stats.",
            "Playoffs — burn/evolve paths into limited Playoff Editions."
          ]}
          footnote="We keep it weekly so you don’t have to sweat every IRL game. Easy to follow, fun to play."
        />

        <Block
          title="$SLAM — The League Token"
          list={[
            "Access — stake on matchups, vote on league twists, unlock trait upgrades.",
            "Economy — bonding-curve fueled mint on vibe.market; growth pushes momentum.",
            "Liquidity — $SLAM is swappable (Base). Use it or hold it like a true GM."
          ]}
        />

        <Block
          title="Rarities & Traits"
          list={[
            "Common / Uncommon / Rare / Ultra — foil & wear influence collectability.",
            "Crossover Traits — CryptoPunks-inspired hats/shades + Simpsons/Pepe/Wojak flavor.",
            "Event Badges — weekly wins, playoff runs, or meme moments can imprint on metadata."
          ]}
        />

        <Block
          title="Hidden Plays (Read the Defense)"
          body={[
            "We won’t call every play from the sideline. Expect surprise drops, secret trait merges, and meta events. Unopened packs may age like fine copium.",
            "Collectors who read the floor — and time the season — will find the angles."
          ]}
        />

        <Block
          title="How to Participate"
          list={[
            "Mint Packs on vibe.market (unopened can evolve).",
            "Open Packs to draft players into your franchise.",
            "Stake $SLAM in Matchup of the Week. Win perks or badges.",
            "Hold for Playoffs — burn/evolve into special editions."
          ]}
        />

        <Callout
          title="Commissioner’s Promise"
          text="This isn’t just a collection. It’s a season. A league built on culture, memes, and blockchain. Tip-off has begun — and the crowd is loud."
        />

        <footer className="mt-10 border-t border-white/10 pt-6 text-white/60 text-sm">
          <p>Parody project. Not affiliated with the NBA. Art and names are satirical.</p>
        </footer>
      </section>
    </div>
  );
}

function Block({
  title,
  body,
  list,
  footnote
}: {
  title: string;
  body?: string[];
  list?: string[];
  footnote?: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {body?.map((p, i) => (
        <p key={i} className="text-white/80 leading-relaxed mt-2">{p}</p>
      ))}
      {list && (
        <ul className="list-disc pl-5 space-y-1 mt-3 text-white/80">
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      )}
      {footnote && <p className="mt-3 text-white/50 text-sm">{footnote}</p>}
    </div>
  );
}

function Callout({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-slam-500/30 bg-slam-500/10 p-5">
      <h3 className="text-xl font-semibold text-slam-500">{title}</h3>
      <p className="mt-2 text-white/80">{text}</p>
    </div>
  );
}

