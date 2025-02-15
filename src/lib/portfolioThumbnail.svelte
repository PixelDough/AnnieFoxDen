<script>
	const { slug } = $props();

    const path = `/src/lib/assets/portfolio/thumbnails/${slug}.png`;
    const images = import.meta.glob(`$lib/assets/portfolio/thumbnails/*.png`, { eager: true, as: 'url' });
</script>

<style>
    .item {
        width: 100%;
        height: 140px;
        object-fit: cover;
        overflow: hidden;
    }
</style>

<img src={images[path]} alt={slug} class="item" />