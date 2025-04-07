<template>
	<div class="home">
		<section class="hero">
			<div class="hero-content">
				<h1>專業的螺絲製造解決方案</h1>
				<p>20年精湛工藝，打造高品質螺絲產品</p>
				<div class="hero-buttons">
					<nuxt-link to="/products" class="btn">瀏覽產品</nuxt-link>
					<nuxt-link to="/contact" class="btn btn-secondary">聯絡我們</nuxt-link>
				</div>
			</div>
		</section>

		<section class="company-overview">
			<div class="container">
				<div class="overview-content">
					<div class="overview-text">
						<h2>鑫鋒螺絲 - 值得信賴的合作夥伴</h2>
						<p>
							我們是台灣領先的螺絲製造商，專注於提供高品質、高精度的螺絲產品和客製化解決方案。憑藉20年的行業經驗，我們擁有先進的生產設備和嚴格的品質控制流程，確保每一個產品都符合國際標準。
						</p>
						<div class="company-stats">
							<div class="stat">
								<span class="stat-number">20+</span>
								<span class="stat-label">年製造經驗</span>
							</div>
							<div class="stat">
								<span class="stat-number">500+</span>
								<span class="stat-label">客戶信賴</span>
							</div>
							<div class="stat">
								<span class="stat-number">30+</span>
								<span class="stat-label">出口國家</span>
							</div>
						</div>
						<nuxt-link to="/about" class="btn">了解更多</nuxt-link>
					</div>
					<div class="overview-image">
						<div class="image-placeholder">
							<!-- 工廠照片或生產線照片 -->
							<!-- <img src="/images/factory.jpg" alt="鑫鋒螺絲工廠" /> -->
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="features">
			<div class="container">
				<h2 class="section-title">我們的優勢</h2>
				<div class="features-grid">
					<div class="feature card">
						<div class="feature-icon">
							<i class="feature-quality-icon" />
						</div>
						<h3>卓越品質</h3>
						<p>嚴格的品質控制流程，確保每個產品都符合國際標準</p>
					</div>
					<div class="feature card">
						<div class="feature-icon">
							<i class="feature-custom-icon" />
						</div>
						<h3>客製化服務</h3>
						<p>根據您的精確需求，提供量身訂製的螺絲解決方案</p>
					</div>
					<div class="feature card">
						<div class="feature-icon">
							<i class="feature-tech-icon" />
						</div>
						<h3>先進技術</h3>
						<p>運用最新生產技術，確保高精度和一致性</p>
					</div>
				</div>
			</div>
		</section>

		<section class="featured-products">
			<div class="container">
				<h2 class="section-title">精選產品</h2>
				<div class="products-grid">
					<div class="product-card card">
						<div class="product-image">
							<!-- <img src="/images/products/hex-bolt.jpg" alt="六角頭螺絲" /> -->
							<div class="image-placeholder" />
						</div>
						<div class="product-info">
							<h3>六角頭螺絲</h3>
							<p>多種尺寸和材質可選，適用於各種工業應用</p>
							<nuxt-link to="/products" class="btn">了解更多</nuxt-link>
						</div>
					</div>
					<div class="product-card card">
						<div class="product-image">
							<!-- <img src="/images/products/self-tapping.jpg" alt="自攻螺絲" /> -->
							<div class="image-placeholder" />
						</div>
						<div class="product-info">
							<h3>自攻螺絲</h3>
							<p>高品質自攻螺絲，適用於多種材料</p>
							<nuxt-link to="/products" class="btn">了解更多</nuxt-link>
						</div>
					</div>
					<div class="product-card card">
						<div class="product-image">
							<!-- <img src="/images/products/special-alloy.jpg" alt="特殊合金螺絲" /> -->
							<div class="image-placeholder" />
						</div>
						<div class="product-info">
							<h3>特殊合金螺絲</h3>
							<p>使用特殊合金製造，耐腐蝕性強</p>
							<nuxt-link to="/products" class="btn">了解更多</nuxt-link>
						</div>
					</div>
				</div>
				<div class="view-all-products">
					<nuxt-link to="/products" class="btn btn-accent">查看所有產品</nuxt-link>
				</div>
			</div>
		</section>

		<section class="testimonials">
			<div class="container">
				<h2 class="section-title">客戶見證</h2>
				<div class="testimonials-container">
					<div class="testimonial card">
						<div class="testimonial-content">
							<p>"鑫鋒螺絲提供的產品品質始終如一，交貨準時，是我們值得信賴的合作夥伴。"</p>
						</div>
						<div class="testimonial-author">
							<div class="author-image">
								<!-- <img src="/images/testimonials/client1.jpg" alt="張先生" /> -->
							</div>
							<div class="author-info">
								<h4>張先生</h4>
								<p>某機械製造公司 採購經理</p>
							</div>
						</div>
					</div>
					<div class="testimonial card">
						<div class="testimonial-content">
							<p>"他們的客製化服務超出了我們的期望，幫助我們解決了複雜的螺絲需求。"</p>
						</div>
						<div class="testimonial-author">
							<div class="author-image">
								<!-- <img src="/images/testimonials/client2.jpg" alt="李小姐" /> -->
							</div>
							<div class="author-info">
								<h4>李小姐</h4>
								<p>某電子產品製造商 工程主管</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="cta-section">
			<div class="container">
				<div class="cta-content">
					<h2>需要專業的螺絲解決方案？</h2>
					<p>無論是標準產品還是客製化需求，我們都能提供最佳解決方案</p>
					<nuxt-link to="/contact" class="btn btn-accent">立即諮詢</nuxt-link>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.hero {
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/images/hero-bg.jpg");
	background-size: cover;
	background-position: center;
	color: white;
	padding: 100px 0;
	margin-bottom: var(--spacing-lg);
	text-align: center;
}

.hero-content {
	max-width: 800px;
	margin: 0 auto;
	padding: 0 var(--spacing-md);
}

.hero h1 {
	font-size: 3rem;
	margin-bottom: var(--spacing-sm);
	color: white;
}

.hero p {
	font-size: 1.3rem;
	margin-bottom: var(--spacing-md);
}

.hero-buttons {
	display: flex;
	gap: var(--spacing-sm);
	justify-content: center;
}

.section-title {
	text-align: center;
	margin-bottom: var(--spacing-md);
	position: relative;
	padding-bottom: var(--spacing-sm);
}

.section-title::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 80px;
	height: 3px;
	background-color: var(--primary-color);
}

.company-overview {
	margin-bottom: var(--spacing-lg);
}

.overview-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--spacing-lg);
	align-items: center;
}

.company-stats {
	display: flex;
	gap: var(--spacing-md);
	margin: var(--spacing-md) 0;
}

.stat {
	display: flex;
	flex-direction: column;
}

.stat-number {
	font-size: 2rem;
	font-weight: bold;
	color: var(--primary-color);
}

.stat-label {
	font-size: 0.9rem;
}

.overview-image,
.image-placeholder {
	width: 100%;
	height: 400px;
	background-color: #f0f0f0;
	border-radius: 8px;
	overflow: hidden;
}

.overview-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: var(--spacing-md);
	margin-bottom: var(--spacing-lg);
}

.feature {
	text-align: center;
	padding: var(--spacing-md);
}

.feature-icon {
	margin-bottom: var(--spacing-sm);
	width: 60px;
	height: 60px;
	background-color: var(--light-gray);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto var(--spacing-sm);
}

.featured-products {
	margin-bottom: var(--spacing-lg);
}

.products-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: var(--spacing-md);
	margin-bottom: var(--spacing-md);
}

.product-card {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.product-image,
.product-image .image-placeholder {
	height: 200px;
	background-color: #f0f0f0;
	border-radius: 6px;
	margin-bottom: var(--spacing-sm);
}

.product-info {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

.product-info .btn {
	margin-top: auto;
	align-self: flex-start;
}

.view-all-products {
	text-align: center;
	margin-top: var(--spacing-md);
}

.testimonials {
	background-color: var(--light-gray);
	padding: var(--spacing-lg) 0;
	margin-bottom: var(--spacing-lg);
}

.testimonials-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: var(--spacing-md);
}

.testimonial {
	padding: var(--spacing-md);
}

.testimonial-content {
	margin-bottom: var(--spacing-md);
	position: relative;
}

.testimonial-content p {
	font-style: italic;
}

.testimonial-author {
	display: flex;
	align-items: center;
}

.author-image {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #ddd;
	margin-right: var(--spacing-sm);
}

.author-info h4 {
	margin: 0;
	font-size: 1rem;
}

.author-info p {
	margin: 0;
	font-size: 0.9rem;
	color: var(--dark-gray);
}

.cta-section {
	background-color: var(--primary-dark);
	color: white;
	padding: var(--spacing-lg) 0;
	text-align: center;
}

.cta-content h2 {
	color: white;
	margin-bottom: var(--spacing-sm);
}

.cta-content p {
	margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
	.hero h1 {
		font-size: 2rem;
	}

	.hero p {
		font-size: 1.1rem;
	}

	.hero-buttons {
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.overview-content {
		grid-template-columns: 1fr;
	}

	.company-stats {
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
