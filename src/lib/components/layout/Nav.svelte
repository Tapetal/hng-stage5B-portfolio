<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let scrolled = false;
  let menuOpen = false;
  let cmdOpen  = false;

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', handler, { passive: true });

    const keyHandler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); cmdOpen = !cmdOpen; }
      if (e.key === 'Escape') { cmdOpen = false; menuOpen = false; }
    };
    window.addEventListener('keydown', keyHandler);
    return () => { window.removeEventListener('scroll', handler); window.removeEventListener('keydown', keyHandler); };
  });

  const links = [
    { href: '/',        label: 'Home'     },
    { href: '/projects',label: 'Projects' },
    { href: '/about',   label: 'About'    },
    { href: '/contact', label: 'Contact'  },
  ];

  function isActive(href: string) {
    if (href === '/') return $page.url.pathname === '/';
    return $page.url.pathname.startsWith(href);
  }
</script>

<header
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  class:scrolled
>
  <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
    class:glass={scrolled}
    class:border-b={scrolled}
    class:border-white={scrolled}
    style={scrolled ? 'border-color: rgba(255,255,255,0.06)' : ''}
  >
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 group">
      <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:glow-green-sm"
        style="background: linear-gradient(135deg,#059669,#10b981);">
        <span class="text-white font-black text-sm">T</span>
      </div>
      <span class="text-sm font-bold text-zinc-100 font-mono">tapetal<span class="text-accent-500">.dev</span></span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">
      {#each links as { href, label }}
        <a
          {href}
          class="relative px-3 py-1.5 text-sm font-medium transition-colors rounded-lg"
          class:active={isActive(href)}
          style={isActive(href) ? 'color:#10b981' : 'color:#71717a'}
          on:mouseover={e => { if (!isActive(href)) { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.color = '#a1a1aa'; } }}
          on:mouseout={e => { if (!isActive(href)) { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.color = '#71717a'; } }}
        >
          {label}
          {#if isActive(href)}
            <span class="absolute bottom-0.5 left-3 right-3 h-px bg-accent-500 rounded-full" />
          {/if}
        </a>
      {/each}
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-3">
      <!-- ⌘K hint -->
      <button
        on:click={() => cmdOpen = true}
        class="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-mono text-zinc-600 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-400 transition-all bg-surface-800"
      >
        <span>⌘K</span>
      </button>

      <!-- Available badge -->
      <div class="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent-500/10 border border-accent-500/20 text-[11px] font-semibold text-accent-400">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
        Available
      </div>

      <!-- Mobile hamburger -->
      <button
        on:click={() => menuOpen = !menuOpen}
        class="md:hidden p-2 text-zinc-400 hover:text-zinc-200"
        aria-label="Toggle menu"
      >
        {#if menuOpen}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        {:else}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden glass border-b border-white/5 px-6 py-4 space-y-1">
      {#each links as { href, label }}
        <a {href} on:click={() => menuOpen = false}
          class="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={isActive(href) ? 'color:#10b981;background:rgba(16,185,129,0.08)' : 'color:#71717a'}
        >{label}</a>
      {/each}
    </div>
  {/if}
</header>

<!-- Command Palette -->
{#if cmdOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="fixed inset-0 z-[100] flex items-start justify-center pt-[18vh] px-4" on:click={() => cmdOpen = false}>
    <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" />
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="relative w-full max-w-md glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden" on:click|stopPropagation>
      <div class="flex items-center gap-3 px-4 py-3 border-b border-white/5">
        <span class="text-zinc-600">⌘</span>
        <input autofocus placeholder="Search or navigate…"
          class="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-700 outline-none font-mono"
          on:keydown={e => { if (e.key === 'Escape') cmdOpen = false; }}
        />
      </div>
      <div class="py-2">
        {#each links as { href, label }}
          <a {href} on:click={() => cmdOpen = false}
            class="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors">
            <span class="text-zinc-700">→</span>
            {label}
          </a>
        {/each}
        <div class="border-t border-white/5 mt-2 pt-2">
          <a href="mailto:hello@tapetal.dev" on:click={() => cmdOpen = false}
            class="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors">
            <span class="text-zinc-700">✉</span> Send email
          </a>
          <a href="https://github.com/tapetal" target="_blank" on:click={() => cmdOpen = false}
            class="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-400 hover:bg-white/5 hover:text-zinc-200 transition-colors">
            <span class="text-zinc-700">⭐</span> GitHub profile
          </a>
        </div>
      </div>
      <div class="px-4 py-2 border-t border-white/5 text-[10px] text-zinc-700 font-mono flex gap-4">
        <span>↑↓ navigate</span><span>⏎ open</span><span>Esc close</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .scrolled { /* handled via Tailwind class binding */ }
</style>
