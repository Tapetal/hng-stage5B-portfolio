<script lang="ts">
  import { onMount } from 'svelte';
  import { me } from '$lib/utils/data';

  let mounted = false;
  let typedText = '';
  const phrases = ['Frontend Engineer.', 'Systems Thinker.', 'UI Craftsman.', 'Open Source Builder.'];
  let phraseIdx = 0;
  let charIdx = 0;
  let deleting = false;

  onMount(() => {
    mounted = true;

    // Typewriter
    let timeout: ReturnType<typeof setTimeout>;
    function type() {
      const current = phrases[phraseIdx];
      if (!deleting) {
        typedText = current.slice(0, ++charIdx);
        if (charIdx === current.length) { deleting = true; timeout = setTimeout(type, 2000); return; }
      } else {
        typedText = current.slice(0, --charIdx);
        if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
      }
      timeout = setTimeout(type, deleting ? 40 : 80);
    }
    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  });
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
  <!-- Background grid -->
  <div class="absolute inset-0 pointer-events-none"
    style="background-image: linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px); background-size: 48px 48px;">
  </div>

  <!-- Radial glow -->
  <div class="absolute inset-0 pointer-events-none"
    style="background: radial-gradient(ellipse 60% 50% at 50% 40%, rgba(16,185,129,0.06) 0%, transparent 70%);" />

  <!-- Scan line -->
  <div class="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent pointer-events-none animate-scan" style="opacity:0.4" />

  <div class="relative z-10 max-w-4xl mx-auto w-full pt-24 pb-16">
    <!-- Status chip -->
    <div class="flex justify-center mb-10" class:animate-fade-up={mounted}>
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-500/25 bg-accent-500/8 text-sm font-medium text-accent-400 font-mono"
        style="animation-delay:0.1s; opacity: 0; animation-fill-mode: forwards;"
        class:animate-fade-up={mounted}>
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-60" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
        </span>
        Open to new opportunities
      </div>
    </div>

    <!-- Main heading -->
    <div class="text-center space-y-4">
      <div style="opacity:0; animation-fill-mode:forwards; animation-delay:0.2s" class:animate-fade-up={mounted}>
        <p class="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">Hello, I'm</p>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-zinc-100">
          {me.name}
        </h1>
      </div>

      <!-- Typewriter -->
      <div style="opacity:0; animation-fill-mode:forwards; animation-delay:0.35s; min-height:3rem" class:animate-fade-up={mounted}>
        <h2 class="text-2xl md:text-4xl font-bold">
          <span class="text-gradient">{typedText}</span><span class="inline-block w-0.5 h-8 bg-accent-400 ml-0.5 align-middle animate-cursor" />
        </h2>
      </div>

      <!-- Bio -->
      <p style="opacity:0; animation-fill-mode:forwards; animation-delay:0.5s; max-width:560px; margin:0 auto"
        class="text-base md:text-lg text-zinc-500 leading-relaxed"
        class:animate-fade-up={mounted}>
        {me.bio}
      </p>
    </div>

    <!-- CTA buttons -->
    <div style="opacity:0; animation-fill-mode:forwards; animation-delay:0.65s"
      class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
      class:animate-fade-up={mounted}>
      <a href="/projects"
        class="group flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300"
        style="background: linear-gradient(135deg,#059669,#10b981); box-shadow: 0 0 24px rgba(16,185,129,0.25);"
        on:mouseover={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.boxShadow = '0 0 36px rgba(16,185,129,0.4)'; }}
        on:mouseout={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.boxShadow = '0 0 24px rgba(16,185,129,0.25)'; }}>
        View my work
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" class="group-hover:translate-x-1 transition-transform">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>

      <a href={me.resume} target="_blank"
        class="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all duration-300 bg-surface-800">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download CV
      </a>
    </div>

    <!-- Social links -->
    <div style="opacity:0; animation-fill-mode:forwards; animation-delay:0.8s"
      class="flex items-center justify-center gap-5 mt-10"
      class:animate-fade-up={mounted}>
      {#each [
        { href: me.github,   label: 'GitHub',   icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>` },
        { href: me.twitter,  label: 'Twitter',  icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
        { href: me.linkedin, label: 'LinkedIn', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>` },
      ] as link}
        <a href={link.href} target="_blank" rel="noopener" aria-label={link.label}
          class="w-10 h-10 rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:bg-white/5 bg-surface-800">
          {@html link.icon}
        </a>
      {/each}
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700">
      <span class="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent animate-pulse" />
    </div>
  </div>
</section>
