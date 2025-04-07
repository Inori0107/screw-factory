<template>
	<div class="site-wrapper">
		<header class="site-header">
			<div class="container header-container">
				<div class="logo">
					<nuxt-link to="/">
						<h1>鑫鋒螺絲</h1>
						<!-- 此處可放置公司徽標 <img src="/images/logo.png" alt="鑫鋒螺絲" /> -->
					</nuxt-link>
				</div>
				<div class="mobile-menu-toggle" @click="toggleMobileMenu">
					<span />
					<span />
					<span />
				</div>
				<nav :class="{ active: mobileMenuActive }">
					<nuxt-link to="/">首頁</nuxt-link>
					<nuxt-link to="/about">公司介紹</nuxt-link>
					<nuxt-link to="/products">產品展示</nuxt-link>
					<nuxt-link to="/custom">定製化服務</nuxt-link>
					<nuxt-link to="/news">最新消息</nuxt-link>
					<nuxt-link to="/contact">聯絡我們</nuxt-link>
				</nav>
			</div>
		</header>
		<main>
			<div class="container">
				<slot />
			</div>
		</main>
		<footer class="site-footer">
			<div class="container footer-content">
				<div class="footer-info">
					<div class="footer-logo">
						<h3>鑫鋒螺絲</h3>
					</div>
					<p>專業螺絲製造與客製化服務</p>
					<p>地址：台灣省某市某區某路123號</p>
					<p>電話：+886-1-2345-6789</p>
				</div>
				<div class="footer-nav">
					<h4>快速連結</h4>
					<nuxt-link to="/">首頁</nuxt-link>
					<nuxt-link to="/about">公司介紹</nuxt-link>
					<nuxt-link to="/products">產品展示</nuxt-link>
					<nuxt-link to="/custom">定製化服務</nuxt-link>
					<nuxt-link to="/news">最新消息</nuxt-link>
					<nuxt-link to="/contact">聯絡我們</nuxt-link>
				</div>
				<div class="footer-contact">
					<h4>聯絡我們</h4>
					<p>有任何問題或需求，歡迎與我們聯繫</p>
					<nuxt-link to="/contact" class="btn">立即諮詢</nuxt-link>
				</div>
			</div>
			<div class="footer-bottom">
				<div class="container">
					<p>© {{ new Date().getFullYear() }} 鑫鋒螺絲工廠. 版權所有.</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuActive = ref(false);

function toggleMobileMenu() {
	mobileMenuActive.value = !mobileMenuActive.value;
}
</script>

<style scoped>
.site-wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.site-header {
	background-color: var(--light-gray);
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 100;
	padding: 1rem 0;
}

.header-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo a {
	text-decoration: none;
	color: var(--secondary-color);
	display: flex;
	align-items: center;
}

.logo h1 {
	margin: 0;
	font-size: 1.8rem;
	font-weight: 700;
}

.logo img {
	height: 40px;
	margin-right: 0.5rem;
}

nav {
	display: flex;
	gap: 1.5rem;
}

nav a {
	color: var(--secondary-color);
	font-weight: 500;
	text-decoration: none;
	position: relative;
	padding: 0.5rem 0;
}

nav a:hover {
	color: var(--primary-color);
}

nav a::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2px;
	background-color: var(--primary-color);
	transition: width 0.3s ease;
}

nav a:hover::after,
nav a.router-link-active::after {
	width: 100%;
}

.mobile-menu-toggle {
	display: none;
	flex-direction: column;
	justify-content: space-between;
	width: 30px;
	height: 20px;
	cursor: pointer;
}

.mobile-menu-toggle span {
	height: 3px;
	width: 100%;
	background-color: var(--secondary-color);
	border-radius: 3px;
	transition: all 0.3s ease;
}

main {
	flex: 1;
	padding: var(--spacing-md) 0;
}

.site-footer {
	background-color: var(--secondary-color);
	color: #fff;
	padding-top: var(--spacing-md);
}

.footer-content {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: var(--spacing-md);
	padding-bottom: var(--spacing-md);
}

.footer-logo h3 {
	margin: 0;
	color: #fff;
}

.footer-nav,
.footer-contact {
	display: flex;
	flex-direction: column;
}

.footer-nav a,
.footer-contact a:not(.btn) {
	color: #fff;
	opacity: 0.8;
	margin-bottom: 0.5rem;
	text-decoration: none;
}

.footer-nav a:hover,
.footer-contact a:not(.btn):hover {
	opacity: 1;
	text-decoration: underline;
}

.footer-bottom {
	background-color: rgba(0, 0, 0, 0.2);
	padding: var(--spacing-sm) 0;
	text-align: center;
}

.footer-bottom p {
	margin: 0;
	font-size: 0.9rem;
}

@media (max-width: 768px) {
	.mobile-menu-toggle {
		display: flex;
	}

	nav {
		position: absolute;
		flex-direction: column;
		background-color: var(--light-gray);
		top: 100%;
		left: 0;
		right: 0;
		padding: 1rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transform: translateY(-150%);
		opacity: 0;
		transition: all 0.3s ease;
		z-index: -1;
	}

	nav.active {
		transform: translateY(0);
		opacity: 1;
		z-index: 99;
	}

	.footer-content {
		grid-template-columns: 1fr;
		gap: var(--spacing-md);
	}
}
</style>
