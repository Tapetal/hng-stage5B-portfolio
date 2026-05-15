<script lang="ts">
  import Hero from '$lib/components/sections/Hero.svelte';
  import FeaturedProjects from '$lib/components/sections/FeaturedProjects.svelte';
  import Skills from '$lib/components/sections/Skills.svelte';
  import Timeline from '$lib/components/sections/Timeline.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';
</script>

<svelte:head>
  <title>Ashraf Aminu — Full Stack Software Engineer</title>
  <meta name="description" content="Full Stack Software Engineer specializing in React.js, Node.js, and Web3. Building scalable, high-impact applications from Abuja, Nigeria." />
</svelte:head>

<Hero />
<FeaturedProjects />
<Skills />
<Timeline />
<ContactSection />
