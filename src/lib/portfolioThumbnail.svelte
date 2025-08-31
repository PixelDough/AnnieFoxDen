<script>
	const { slug } = $props();

    const path = `/src/lib/assets/portfolio/thumbnails/${slug}.png`;
    const images = import.meta.glob(`$lib/assets/portfolio/thumbnails/*.png`, { 
        query: { enhanced: true }, 
        import: "default", 
        eager: true 
    });
</script>

<style>
    .item {
        width: 100%;
        height: 140px;
        object-fit: cover;
        overflow: hidden;
        border-radius: 16px;
    }
</style>

<img src={images[path]} alt={slug} class="item" />