<script lang="ts">
  import { me, skills, timeline } from '$lib/utils/data';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Timeline from '$lib/components/sections/Timeline.svelte';
</script>

<svelte:head>
  <title>About — {me.name}</title>
</svelte:head>

<main class="pt-28 pb-24 px-6 min-h-screen">
  <div class="max-w-4xl mx-auto">

    <!-- Header -->
    <div class="mb-16 animate-fade-up">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-3">// about me</p>
      <h1 class="text-4xl md:text-5xl font-black text-zinc-100 mb-6">I'm {me.name}</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-4">
          <p class="text-zinc-400 leading-relaxed">
            I'm a full-stack engineer based in {me.location}, specializing in Frontend excellence with React.js
            and TypeScript. I build scalable applications using Node.js, AWS, and modern database architectures.
          </p>
          <p class="text-zinc-500 leading-relaxed text-sm">
            With experience across multiple internships and real-world projects, I've shipped production-grade
            applications including Web3 platforms (TicketProof), encrypted messaging systems (WhisperBox), 
            inventory management tools (Invora), and fintech applications (ROSCA). Each project has deepened 
            my understanding of architecture, performance optimization, and security best practices.
          </p>
          <p class="text-zinc-500 leading-relaxed text-sm">
            I'm passionate about writing clean, maintainable code and solving complex business problems through
            technology. When I'm not coding, I'm fascinated by science, technology, and AI. I also enjoy gaming and football.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a href={me.resume} target="_blank"
              class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
              style="background:linear-gradient(135deg,#059669,#10b981); box-shadow:0 4px 16px rgba(16,185,129,0.2)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
            <a href="/contact"
              class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 transition-all bg-surface-800">
              Get in touch →
            </a>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-1 gap-3">
          {#each [
            { label: 'Projects shipped', value: '7+',  accent: '#10b981' },
            { label: 'Years experience',  value: '2+', accent: '#06b6d4' },
            { label: 'Technologies',     value: '25+', accent: '#8b5cf6' },
            { label: 'Location',         value: 'NG 🇳🇬',accent: '#f59e0b' },
          ] as stat}
            <div class="rounded-xl border border-zinc-800 bg-surface-800 p-4">
              <p class="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-1">{stat.label}</p>
              <p class="text-xl font-black" style="color:{stat.accent}">{stat.value}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Available for work banner -->
    <div class="mb-16 rounded-2xl border p-6 flex items-center justify-between flex-wrap gap-4"
      style="background:rgba(16,185,129,0.05); border-color:rgba(16,185,129,0.2)">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60" />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-accent-500" />
          </span>
        </div>
        <div>
          <p class="text-sm font-bold text-zinc-100">Available for work</p>
          <p class="text-xs text-zinc-500">Open to full-time roles and freelance projects</p>
        </div>
      </div>
      <a href="/contact"
        class="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all"
        style="background:linear-gradient(135deg,#059669,#10b981)">
        Contact me →
      </a>
    </div>
  </div>

  <!-- Skills section (reused) -->
  <Skills />
  <!-- Timeline section (reused) -->
  <Timeline />
</main>
