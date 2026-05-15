<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let scrolled = false;
  let menuOpen = false;
  let cmdOpen  = false;
  let theme: 'light' | 'dark' = 'dark';
  let search = '';

  const actions = [
    { name: 'Home',                 href: '/',                               icon: '🏠' },
    { name: 'Projects',             href: '/projects',                       icon: '🚀' },
    { name: 'About',                href: '/about',                          icon: '👤' },
    { name: 'Contact',              href: '/contact',                        icon: '📧' },
    { name: 'Switch to light mode', command: 'light' as const,               icon: '☀️' },
    { name: 'Switch to dark mode',  command: 'dark'  as const,               icon: '🌙' },
    { name: 'Send email',           href: 'mailto:aminuashraf55@gmail.com',   icon: '✉️' },
    { name: 'GitHub profile',       href: 'https://github.com/Tapetal',       icon: '⭐' },
  ];

  $: filteredActions = actions.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  // KEY FIX: derive currentPath reactively from $page store so it
  // updates on every client-side navigation
  $: currentPath = $page.url.pathname;

  function isActive(href: string): boolean {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });

    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = stored === 'light' ? 'light' : stored === 'dark' ? 'dark' : prefersDark ? 'dark' : 'light';
    applyTheme(theme);

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); cmdOpen = !cmdOpen; }
      if (e.key === 'Escape') { cmdOpen = false; menuOpen = false; }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  });

  function applyTheme(mode: 'light' | 'dark') {
    theme = mode;
    if (mode === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', mode);
  }

  function handleAction(action: { name: string; href?: string; command?: 'light' | 'dark'; icon: string }) {
    if (action.command) {
      applyTheme(action.command);
    } else if (action.href) {
      if (action.href.startsWith('mailto:') || action.href.startsWith('http')) {
        window.open(action.href, '_blank');
      } else {
        goto(action.href);
      }
    }
    cmdOpen = false;
    menuOpen = false;
    search = '';
  }

  const links = [
    { href: '/',         label: 'Home'     },
    { href: '/projects', label: 'Projects' },
    { href: '/about',    label: 'About'    },
    { href: '/contact',  label: 'Contact'  },
  ];
</script>

<!-- ════════════════════════ NAVBAR ════════════════════════ -->
<header class="fixed top-0 left-0 right-0 z-50">
  <nav
    class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between transition-all duration-300"
    class:nav-scrolled={scrolled}
  >
    <!-- Logo -->
    <a href="/" class="flex items-center gap-2.5 group flex-shrink-0">
      <img src="/logo.png" alt="Ashraf Aminu" class="w-8 h-8 transition-transform group-hover:scale-110" />
      <span class="text-sm font-bold font-mono text-zinc-800 dark:text-zinc-100">
        ashraf<span class="text-accent-500">-aminu</span>
      </span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex items-center gap-1">
      {#each links as { href, label }}
        <a
          {href}
          class="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors
            {isActive(href)
              ? 'text-accent-500'
              : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/5'}"
        >
          {label}
          {#if isActive(href)}
            <span class="absolute bottom-0 left-3 right-3 h-px rounded-full bg-accent-500"></span>
          {/if}
        </a>
      {/each}
    </div>

    <!-- Right controls -->
    <div class="flex items-center gap-2">
      <!-- Theme toggle -->
      <button
        on:click={() => applyTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
        class="flex items-center justify-center w-8 h-8 rounded-lg transition-all
          border border-zinc-200 dark:border-zinc-800
          bg-white dark:bg-surface-800
          text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100
          hover:border-zinc-300 dark:hover:border-zinc-600"
      >
        {#if theme === 'dark'}
          <!-- Sun icon -->
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        {:else}
          <!-- Moon icon -->
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        {/if}
      </button>

      <!-- Available badge (desktop) -->
      <div class="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-accent-500/10 border border-accent-500/20 text-[11px] font-semibold text-accent-500">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
        Available
      </div>

      <!-- Hamburger -->
      <button
        on:click={() => menuOpen = !menuOpen}
        class="md:hidden p-2 rounded-lg transition-colors
          text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200
          hover:bg-zinc-100 dark:hover:bg-white/5"
        aria-label="Toggle menu"
      >
        {#if menuOpen}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        {:else}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        {/if}
      </button>
    </div>
  </nav>

  <!-- Mobile dropdown -->
  {#if menuOpen}
    <div class="md:hidden px-4 py-3 space-y-1 border-b
      bg-white/95 dark:bg-[#080a0e]/95
      border-zinc-200 dark:border-white/5
      backdrop-blur-xl">
      {#each links as { href, label }}
        <a
          {href}
          on:click={() => menuOpen = false}
          class="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
            {isActive(href)
              ? 'text-accent-500 bg-accent-500/8'
              : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-zinc-200'}"
        >
          {label}
          {#if isActive(href)}
            <span class="w-1.5 h-1.5 rounded-full bg-accent-500"></span>
          {/if}
        </a>
      {/each}

      <div class="h-px bg-zinc-100 dark:bg-white/5 my-1"></div>
      <div class="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-accent-500">
        <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
        Available for work
      </div>
    </div>
  {/if}
</header>

<!-- ════════════════ FLOATING COMMAND PALETTE ════════════════ -->
<div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-3">

  {#if cmdOpen}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="fixed inset-0 z-[99] bg-black/30 dark:bg-black/60 backdrop-blur-sm"
      on:click={() => { cmdOpen = false; search = ''; }}
    ></div>

    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="relative z-[101] w-[min(92vw,380px)] overflow-hidden rounded-2xl shadow-2xl
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-[#0d1117]"
      on:click|stopPropagation
    >
      <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-white/5">
        <span class="text-sm flex-shrink-0 text-zinc-400 dark:text-zinc-600">⌘</span>
        <input
          bind:value={search}
          type="text"
          placeholder="Search pages or actions…"
          autofocus
          class="flex-1 bg-transparent text-sm outline-none
            text-zinc-800 dark:text-zinc-100
            placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        />
        <kbd class="shrink-0 rounded px-1.5 py-0.5 text-[10px]
          bg-gray-100 dark:bg-white/5
          text-zinc-400 dark:text-white/40
          border border-gray-200 dark:border-white/10">ESC</kbd>
      </div>

      <div class="max-h-[50vh] overflow-y-auto p-1.5">
        {#each filteredActions as action}
          <button
            type="button"
            class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors
              text-zinc-600 dark:text-zinc-400
              hover:bg-gray-100 dark:hover:bg-white/5
              hover:text-zinc-900 dark:hover:text-zinc-100"
            on:click={() => handleAction(action)}
          >
            <span class="text-base">{action.icon}</span>
            <span class="flex-1 font-medium">{action.name}</span>
          </button>
        {:else}
          <div class="py-8 text-center text-xs text-zinc-400 dark:text-zinc-600">
            No results for "{search}"
          </div>
        {/each}
      </div>

      <div class="flex items-center justify-between border-t px-4 py-2 text-[10px] uppercase tracking-tighter
        border-gray-100 dark:border-white/5
        bg-gray-50 dark:bg-white/[0.02]
        text-zinc-400 dark:text-white/25">
        <div class="flex gap-3">
          <span><kbd class="rounded px-1 bg-gray-100 dark:bg-white/5">↑↓</kbd> Navigate</span>
          <span><kbd class="rounded px-1 bg-gray-100 dark:bg-white/5">↵</kbd> Select</span>
        </div>
        <span>Ashraf_OS v1.0</span>
      </div>
    </div>
  {/if}

  <!-- FAB -->
  <button
    type="button"
    on:click={() => { cmdOpen = !cmdOpen; if (!cmdOpen) search = ''; }}
    aria-label="Open command palette"
    class="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-all duration-200
      border border-gray-200 dark:border-white/10
      bg-white dark:bg-[#0d1117]
      shadow-lg shadow-black/8 dark:shadow-black/40
      hover:scale-105 hover:border-accent-500/40 hover:shadow-xl hover:shadow-accent-500/10
      active:scale-95"
  >
    <span class="absolute inset-0 rounded-full bg-accent-500/0 group-hover:bg-accent-500/8 transition-all duration-300"></span>

    {#if cmdOpen}
      <svg class="h-4 w-4 sm:h-5 sm:w-5 text-zinc-500 dark:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    {:else}
      <svg class="h-4 w-4 sm:h-5 sm:w-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3"/>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
      </svg>
    {/if}

    <span class="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-medium
      opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-lg
      border border-gray-200 dark:border-white/10
      bg-white dark:bg-[#0a0a0a]
      text-zinc-600 dark:text-white/60">
      Command Palette
      <kbd class="ml-1 rounded px-1 py-0.5 text-[10px]
        bg-gray-100 dark:bg-white/5
        text-zinc-400 dark:text-white/30
        border border-zinc-200 dark:border-white/10">⌘K</kbd>
    </span>
  </button>
</div>

<style>
  .nav-scrolled {
    background: rgba(248, 250, 252, 0.92);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }

  :global(.dark) .nav-scrolled {
    background: rgba(8, 10, 14, 0.92);
    border-bottom-color: rgba(255, 255, 255, 0.06);
  }
</style>