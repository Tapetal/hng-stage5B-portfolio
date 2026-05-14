<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Timeline from '$lib/components/sections/Timeline.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';
</script>

<svelte:head>
  <title>Tapetal Dev — Frontend Engineer</title>
  <meta name="description" content="Frontend engineer building real-time systems, E2EE apps, and high-performance interfaces." />
</svelte:head>

<Hero />
<FeaturedProjects />
<Skills />
<Timeline />
<ContactSection />
