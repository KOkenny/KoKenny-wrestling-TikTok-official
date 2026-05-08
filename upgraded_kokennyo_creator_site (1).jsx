'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
const icons = {
  menu: '☰',
  close: '✕',
  play: '▶',
  trophy: '🏆',
  users: '👥',
  flame: '🔥',
  arrow: '➜',
};

const SOCIAL_LINK = 'https://www.tiktok.com/@k.o.kenny.o';
const EMAIL = 'mailto:osterhoudtkenny@gmail.com';

const stats = [
  {
    id: 'followers',
    icon: icons.users,
    label: 'Followers',
    value: '3.2K+',
  },
  {
    id: 'views',
    icon: icons.flame,
    label: 'Monthly Views',
    value: '50K+',
  },
  {
    id: 'style',
    icon: icons.trophy,
    label: 'Content Style',
    value: 'Elite Wrestling',
  },
];

const contentCards = [
  {
    id: 'edits',
    title: 'Wrestling Edits',
    description:
      'Cinematic match edits with intense transitions, athlete energy, and motivational storytelling.',
  },
  {
    id: 'tutorials',
    title: 'Technique Tutorials',
    description:
      'Breakdowns, wrestling IQ tips, takedowns, conditioning, and performance mindset.',
  },
  {
    id: 'branding',
    title: 'Athlete Branding',
    description:
      'Modern creator culture mixed with competitive sports visuals and storytelling.',
  },
];

const videos = [
  {
    id: 'finals-edit',
    title: 'State Finals Edit',
    description: 'High-energy cinematic wrestling edit.',
  },
  {
    id: 'conditioning',
    title: 'Conditioning Motivation',
    description: 'Mindset and endurance-focused athlete content.',
  },
  {
    id: 'breakdown',
    title: 'Technique Breakdown',
    description: 'Tutorial-focused wrestling training content.',
  },
];

const faqs = [
  {
    id: 'content',
    question: 'What type of content does k.o.kenny.o make?',
    answer:
      'Wrestling edits, athlete motivation, tutorials, match breakdowns, and creator-focused sports storytelling.',
  },
  {
    id: 'collab',
    question: 'Can I collaborate?',
    answer:
      'Yes. Collaborations are open for creators, athletes, and wrestling-related projects.',
  },
  {
    id: 'beginner',
    question: 'Are tutorials beginner friendly?',
    answer:
      'Yes. The content ranges from beginner fundamentals to advanced mindset and match strategy.',
  },
];

const communityItems = [
  {
    id: 'motivation',
    text: 'Athlete Motivation',
  },
  {
    id: 'tutorials',
    text: 'Wrestling Tutorials',
  },
  {
    id: 'mindset',
    text: 'Mindset Development',
  },
  {
    id: 'storytelling',
    text: 'Creative Sports Storytelling',
  },
];

const tutorialItems = [
  {
    id: 'takedowns',
    text: 'Beginner takedown tutorials',
  },
  {
    id: 'conditioning',
    text: 'Conditioning & endurance training',
  },
  {
    id: 'analysis',
    text: 'Match breakdowns & analysis',
  },
  {
    id: 'discipline',
    text: 'Mental toughness & discipline',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function KOKennyOTikTokSite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={SOCIAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-black shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          Follow Now
        </a>
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black uppercase tracking-[0.3em]">
            k.o.kenny.o
          </h1>

          <div className="hidden gap-10 text-sm uppercase tracking-[0.25em] text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#content" className="transition hover:text-white">
              Content
            </a>
            <a href="#community" className="transition hover:text-white">
              Community
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span>{menuOpen ? icons.close : icons.menu}</span>
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-6 border-t border-white/10 bg-black/95 px-6 py-6 text-sm uppercase tracking-widest backdrop-blur-xl md:hidden">
            <a href="#about">About</a>
            <a href="#content">Content</a>
            <a href="#community">Community</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      <section className="relative flex min-h-screen items-center">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 text-sm uppercase tracking-[0.5em] text-gray-400">
              Wrestling Creator • Athlete Motivation
            </p>

            <h2 className="mb-8 text-6xl font-black uppercase leading-[0.9] md:text-[9rem]">
              Wrestling
              <br />
              Creator
            </h2>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Cinematic wrestling edits, tutorials, athlete mindset content,
              and creative sports storytelling for the next generation of
              wrestlers.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href={SOCIAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-5 text-sm font-black uppercase tracking-widest text-black transition-transform duration-300 hover:scale-105"
              >
                Visit TikTok
              </a>

              <a
                href="#content"
                className="rounded-full border border-white/20 px-8 py-5 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
              >
                Explore Content
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-3xl" />

            <div className="relative rounded-[3rem] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
              <div className="relative flex aspect-[9/16] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)]" />

                <div className="z-10 mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-white text-5xl font-black text-black">
                  K
                </div>

                <h3 className="z-10 mb-3 text-3xl font-black uppercase">
                  @k.o.kenny.o
                </h3>

                <p className="z-10 mb-8 text-sm uppercase tracking-[0.4em] text-gray-400">
                  Wrestling Creator
                </p>

                <a
                  href={SOCIAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-transform hover:scale-105"
                >
                  Follow on TikTok
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          {stats.map((item) => {
            return (
              <motion.div
                key={item.id}
                {...fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center transition hover:bg-white/10"
              >
                <div className="mx-auto mb-5 text-4xl">{item.icon}</div>

                <p className="mb-3 text-5xl font-black">{item.value}</p>

                <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-gray-500">
              About The Brand
            </p>

            <h2 className="mb-8 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              Wrestling.
              <br />
              Creativity.
              <br />
              Community.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              k.o.kenny.o is building a modern wrestling creator brand centered
              around athlete inspiration, tutorials, edits, mindset content, and
              digital storytelling.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              The goal is to motivate athletes, elevate wrestling culture online,
              and create a community built on discipline, creativity, and hard
              work.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-widest transition-all hover:gap-5"
            >
              Work Together
              <span>{icons.arrow}</span>
            </a>
          </motion.div>

          <div className="space-y-6">
            {contentCards.map((card) => (
              <motion.div
                key={card.id}
                {...fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <h3 className="mb-5 text-3xl font-black uppercase">
                  {card.title}
                </h3>

                <p className="text-lg leading-relaxed text-gray-300">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="content" className="relative overflow-hidden bg-white px-6 py-32 text-black">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-500">
              Featured Content
            </p>

            <h2 className="mb-6 text-5xl font-black uppercase md:text-7xl">
              Wrestling Content
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Match edits, tutorials, conditioning visuals, motivational clips,
              and cinematic wrestling storytelling.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {videos.map((video) => (
              <motion.div
                key={video.id}
                {...fadeUp}
                className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-3"
              >
                <div className="relative flex aspect-[9/16] items-center justify-center overflow-hidden bg-gradient-to-b from-gray-200 to-gray-400">
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-black text-white shadow-2xl">
                      <span className="ml-1 text-4xl">{icons.play}</span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.4em] text-gray-700">
                      TikTok Wrestling Edit
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-3xl font-black uppercase">
                    {video.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-gray-600">
                    {video.description}
                  </p>

                  <a
                    href={SOCIAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest"
                  >
                    Watch Content
                    <span>{icons.arrow}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-20 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-500">
            Community
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">
            Why Athletes Follow
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {communityItems.map((item) => (
            <motion.div
              key={item.id}
              {...fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center transition hover:bg-white/10"
            >
              <p className="text-2xl font-black uppercase leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[3rem] bg-white p-12 text-black shadow-2xl">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-500">
              Tutorials
            </p>

            <h2 className="mb-8 text-5xl font-black uppercase leading-[1]">
              Learn
              <br />
              Wrestling.
            </h2>

            <div className="space-y-4 text-lg">
              {tutorialItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-gray-100 p-5 font-medium"
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-xl">
            <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-400">
              Collaboration Access
            </p>

            <h2 className="mb-8 text-5xl font-black uppercase leading-[1]">
              Support
              <br />
              The Creator.
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              Collaborate on wrestling edits, creator projects, athlete features,
              and community-driven content.
            </p>

            <div className="mb-10 rounded-[2rem] bg-white p-10 text-black shadow-2xl">
              <h3 className="mb-3 text-7xl font-black">$5</h3>

              <p className="text-lg leading-relaxed text-gray-600">
                Creator collaboration access and direct support.
              </p>
            </div>

            <a
              href={SOCIAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-white py-5 text-sm font-black uppercase tracking-widest text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Pay & Collaborate
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-32">
        <div className="mb-20 text-center">
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-500">
            FAQ
          </p>

          <h2 className="text-5xl font-black uppercase md:text-7xl">
            Questions.
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              {...fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-4 text-2xl font-black uppercase">
                {faq.question}
              </h3>

              <p className="text-lg leading-relaxed text-gray-300">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-32 text-center">
        <p className="mb-5 text-sm uppercase tracking-[0.4em] text-gray-500">
          Contact
        </p>

        <h2 className="mb-8 text-5xl font-black uppercase leading-[0.95] md:text-8xl">
          Let’s
          <br />
          Connect.
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-300">
          Reach out for collaborations, creator projects, athlete features,
          tutorials, and wrestling content partnerships.
        </p>

        <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <a
            href={SOCIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all duration-300 hover:scale-105"
          >
            Follow @k.o.kenny.o
          </a>

          <a
            href={EMAIL}
            className="rounded-full border border-white/20 px-10 py-5 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.02] px-6 py-12 text-center">
        <h3 className="mb-4 text-3xl font-black uppercase tracking-[0.3em]">
          k.o.kenny.o
        </h3>

        <p className="mb-6 text-sm uppercase tracking-widest text-gray-500">
          Wrestling Creator • Athlete Motivation • 2026
        </p>

        <div className="flex justify-center gap-6 text-sm uppercase tracking-widest text-gray-400">
          <a
            href={SOCIAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            TikTok
          </a>

          <a href={EMAIL} className="transition hover:text-white">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
