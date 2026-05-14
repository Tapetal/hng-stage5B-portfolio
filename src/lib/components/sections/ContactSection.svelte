<script lang="ts">
  import { me } from '$lib/utils/data';

  let name = '';
  let email = '';
  let message = '';
  let status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  let errors: Record<string, string> = {};

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim())    e.name    = 'Name is required';
    if (!email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit() {
    errors = validate();
    if (Object.keys(errors).length) return;

    status = 'sending';
    // Simulate send (replace with real endpoint)
    await new Promise(r => setTimeout(r, 1200));
    status = 'sent';
    name = ''; email = ''; message = '';
  }
</script>

<section class="py-24 px-6" id="contact">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-14">
      <p class="text-xs font-mono text-accent-500 uppercase tracking-widest mb-3">// get in touch</p>
      <h2 class="text-3xl md:text-4xl font-black text-zinc-100">Let's Work Together</h2>
      <p class="text-zinc-500 mt-3 max-w-md mx-auto text-sm leading-relaxed">
        Have a project in mind, or just want to chat? I'm always open to interesting conversations.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <!-- Contact info -->
      <div class="lg:col-span-2 space-y-4">
        {#each [
          { icon: '✉️', label: 'Email',    val: me.email,    href: `mailto:${me.email}` },
          { icon: '🐙', label: 'GitHub',   val: 'tapetal',   href: me.github },
          { icon: '💼', label: 'LinkedIn', val: 'tapetal',   href: me.linkedin },
          { icon: '🐦', label: 'Twitter',  val: '@tapetal',  href: me.twitter },
        ] as item}
          <a href={item.href} target="_blank" rel="noopener"
            class="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800 bg-surface-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-all group">
            <span class="text-xl w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0">{item.icon}</span>
            <div>
              <p class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{item.label}</p>
              <p class="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">{item.val}</p>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="ml-auto text-zinc-700 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        {/each}
      </div>

      <!-- Form -->
      <div class="lg:col-span-3 rounded-2xl border border-zinc-800 bg-surface-800 p-6">
        {#if status === 'sent'}
          <div class="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-3xl">
              ✅
            </div>
            <div>
              <h3 class="text-lg font-bold text-zinc-100 mb-1">Message sent!</h3>
              <p class="text-sm text-zinc-500">I'll get back to you as soon as possible.</p>
            </div>
            <button on:click={() => status = 'idle'}
              class="text-sm text-accent-400 hover:text-accent-300 font-medium transition-colors mt-2">
              Send another →
            </button>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-4" novalidate>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="cf-name" class="block text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">Name</label>
                <input id="cf-name" type="text" bind:value={name} placeholder="Your name"
                  class="w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none transition-colors"
                  class:border-red-800={errors.name}
                  class:border-zinc-800={!errors.name}
                  on:focus={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = '#10b981'; }}
                  on:blur={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = errors.name ? '#991b1b' : '#27272a'; }}
                />
                {#if errors.name}<p class="text-[11px] text-red-400 mt-1">{errors.name}</p>{/if}
              </div>
              <div>
                <label for="cf-email" class="block text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">Email</label>
                <input id="cf-email" type="email" bind:value={email} placeholder="you@example.com"
                  class="w-full bg-zinc-900 border rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none transition-colors"
                  class:border-red-800={errors.email}
                  class:border-zinc-800={!errors.email}
                  on:focus={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = '#10b981'; }}
                  on:blur={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = errors.email ? '#991b1b' : '#27272a'; }}
                />
                {#if errors.email}<p class="text-[11px] text-red-400 mt-1">{errors.email}</p>{/if}
              </div>
            </div>

            <div>
              <label for="cf-message" class="block text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-1.5">Message</label>
              <textarea id="cf-message" bind:value={message} rows={5} placeholder="Tell me about your project…"
                class="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-700 outline-none transition-colors resize-none"
                class:border-red-800={errors.message}
                on:focus={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = '#10b981'; }}
                on:blur={e => { const el = e.currentTarget; if (el instanceof HTMLElement) el.style.borderColor = errors.message ? '#991b1b' : '#27272a'; }}
              />
              {#if errors.message}<p class="text-[11px] text-red-400 mt-1">{errors.message}</p>{/if}
            </div>

            <button type="submit" disabled={status === 'sending'}
              class="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
              style="background: linear-gradient(135deg,#059669,#10b981); box-shadow: 0 4px 20px rgba(16,185,129,0.2)">
              {#if status === 'sending'}
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending…
              {:else}
                Send message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              {/if}
            </button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
