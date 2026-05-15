<script lang="ts">
  import { me, timeline } from '$lib/utils/data';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Timeline from '$lib/components/sections/Timeline.svelte';

  const facts = [
    { label: 'Based in',    value: 'Abuja, Nigeria',     icon: '📍' },
    { label: 'Focus',       value: 'Full-Stack Dev',      icon: '⚡' },
    { label: 'Status',      value: 'Open to work',        icon: '✅' },
    { label: 'Interests',   value: 'AI · Games · Football', icon: '🎮' },
  ];

  const sections = [
    {
      num: '01',
      title: 'Background',
      emoji: '👨‍💻',
      body: me.bio,
    },
    {
      num: '02',
      title: 'Expertise',
      emoji: '🚀',
      body: 'I design and develop full-stack web applications using modern technologies like JavaScript, TypeScript, React.js, Node.js, MySQL, MongoDB & Firebase. I enjoy transforming ideas into high-performing digital solutions — from responsive web apps to cloud-powered services.',
    },
    {
      num: '03',
      title: 'Motivation',
      emoji: '💡',
      body: 'Technology gives me a way to solve problems that matter — faster workflows, automated systems, and tools that help people. I love seeing how software can turn complex processes into simple, scalable, and smarter solutions. Every project is a chance to learn, improve, and contribute something valuable.',
    },
  ];
</script>

<svelte:head>
  <title>About — {me.name}</title>
</svelte:head>

<main class="min-h-screen pt-24 pb-32">

  <!-- ── Hero ── -->
  <section class="px-4 sm:px-6 pt-10 pb-20">
    <div class="max-w-4xl mx-auto">

      <!-- Top label -->
      <p class="text-xs font-mono text-accent-500 uppercase tracking-[0.25em] mb-6">// about me</p>

      <!-- Name + image row -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-10">
        <div>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-900 dark:text-zinc-100 leading-[1.05] mb-4">
            Get to know<br/>
            <span class="text-gradient">me better.</span>
          </h1>
          <p class="text-zinc-500 dark:text-zinc-400 text-base max-w-md leading-relaxed">
            Developer, builder, and problem-solver based in Abuja.
          </p>
        </div>

        <!-- Avatar — no circle, clean card style -->
        <div class="flex-shrink-0">
          <div class="relative w-28 h-28 sm:w-36 sm:h-36">
            <img
              src="/memoji.png"
              alt="Ashraf Aminu"
              class="w-full h-full object-cover rounded-3xl border border-zinc-200 dark:border-white/10 shadow-xl"
            />
            <!-- Small available dot -->
            <span class="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 border-2 border-white dark:border-[#080a0e]">
              <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping absolute"></span>
              <span class="w-1.5 h-1.5 rounded-full bg-white relative"></span>
            </span>
          </div>
        </div>
      </div>

      <!-- Quick facts strip -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {#each facts as fact}
          <div class="rounded-2xl border border-zinc-200 dark:border-white/6 bg-zinc-50 dark:bg-surface-800 px-4 py-3">
            <p class="text-lg mb-1">{fact.icon}</p>
            <p class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-0.5">{fact.label}</p>
            <p class="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{fact.value}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- ── Story sections ── -->
  <section class="px-4 sm:px-6 pb-24">
    <div class="max-w-4xl mx-auto space-y-6">
      {#each sections as s, i}
        <div class="group rounded-3xl border border-zinc-200 dark:border-white/6 bg-white dark:bg-surface-800 p-6 sm:p-8 transition-all hover:border-zinc-300 dark:hover:border-white/10 hover:shadow-lg dark:hover:shadow-black/20">
          <div class="flex items-start gap-5">
            <!-- Number -->
            <span class="font-mono text-4xl font-black text-zinc-100 dark:text-zinc-800 select-none flex-shrink-0 leading-none mt-1">
              {s.num}
            </span>

            <div class="flex-1 min-w-0">
              <!-- Title row -->
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xl">{s.emoji}</span>
                <h2 class="text-lg font-bold text-zinc-800 dark:text-zinc-100">{s.title}</h2>
              </div>
              <!-- Body -->
              <p class="text-sm leading-7 text-zinc-500 dark:text-zinc-400">{s.body}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- ── Toolkit / Skills ── -->
  <section class="px-4 sm:px-6 pb-24">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-4xl font-black text-zinc-100 dark:text-zinc-800 select-none">04</span>
        <div>
          <p class="text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-0.5">// toolkit</p>
          <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-100">My Toolkit</h2>
        </div>
      </div>
      <Skills />
    </div>
  </section>

  <!-- ── Timeline ── -->
  <section class="px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center gap-4 mb-8">
        <span class="font-mono text-4xl font-black text-zinc-100 dark:text-zinc-800 select-none">05</span>
        <div>
          <p class="text-[10px] font-mono text-accent-500 uppercase tracking-widest mb-0.5">// experience</p>
          <h2 class="text-xl font-bold text-zinc-800 dark:text-zinc-100">My Journey</h2>
        </div>
      </div>
      <Timeline />
    </div>
  </section>

</main>