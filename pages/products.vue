<template>
	<div class="products">
		<div class="page-header">
			<div class="container">
				<h1>產品展示</h1>
				<p class="subtitle">專業製造各類高品質螺絲產品</p>
			</div>
		</div>

		<div class="container">
			<div class="product-categories">
				<h2>產品類別</h2>
				<div class="filters">
					<button :class="{ active: filterCategory === '所有產品' }" @click="filterCategory = '所有產品'">所有產品</button>
					<button :class="{ active: filterCategory === '標準螺絲' }" @click="filterCategory = '標準螺絲'">標準螺絲</button>
					<button :class="{ active: filterCategory === '特殊螺絲' }" @click="filterCategory = '特殊螺絲'">特殊螺絲</button>
					<button :class="{ active: filterCategory === '工業用途' }" @click="filterCategory = '工業用途'">工業用途</button>
				</div>
			</div>

			<div class="product-grid">
				<div v-for="product in filteredProducts" :key="product.id" class="product-card card">
					<div class="product-image">
						<!-- <img :src="product.image" :alt="product.name" /> -->
						<div class="image-placeholder" />
					</div>
					<div class="product-info">
						<h3>{{ product.name }}</h3>
						<div class="product-specs">
							<span v-if="product.material" class="spec-item">
								<i class="spec-icon material-icon" />
								材質: {{ product.material }}
							</span>
							<span v-if="product.size" class="spec-item">
								<i class="spec-icon size-icon" />
								尺寸: {{ product.size }}
							</span>
							<span v-if="product.finish" class="spec-item">
								<i class="spec-icon finish-icon" />
								表面處理: {{ product.finish }}
							</span>
						</div>
						<p>{{ product.description }}</p>
						<div class="product-actions">
							<button class="btn" @click="showProductDetails(product)">查看詳情</button>
							<button class="btn btn-secondary" @click="requestQuote(product)">詢價</button>
						</div>
					</div>
				</div>
			</div>

			<div v-if="filteredProducts.length === 0" class="no-products">
				<p>沒有符合條件的產品，請嘗試其他篩選條件。</p>
			</div>
		</div>

		<div class="container">
			<section class="product-standards">
				<h2>品質標準</h2>
				<div class="standards-content">
					<div class="standards-text">
						<p>我們的產品符合國際標準，包括 ISO、DIN、ANSI、JIS 等規範。每一個螺絲都經過嚴格的品質控制流程，確保產品符合客戶的要求。</p>
						<ul class="standards-list">
							<li>原材料檢測</li>
							<li>製程中品質控制</li>
							<li>尺寸精確度檢測</li>
							<li>表面處理檢測</li>
							<li>強度與硬度測試</li>
							<li>成品抽樣檢驗</li>
						</ul>
					</div>
					<div class="standards-image">
						<!-- <img src="/images/products/quality-control.jpg" alt="品質控制流程" /> -->
						<div class="image-placeholder">品質控制流程</div>
					</div>
				</div>
			</section>

			<section class="custom-products">
				<h2>客製化產品</h2>
				<p>除了標準產品外，我們也提供客製化螺絲製造服務，根據客戶的需求設計和生產特殊規格的螺絲產品。</p>
				<div class="custom-process">
					<div class="process-step">
						<div class="step-number">1</div>
						<h4>需求諮詢</h4>
						<p>了解您的特殊需求</p>
					</div>
					<div class="process-step">
						<div class="step-number">2</div>
						<h4>技術評估</h4>
						<p>評估可行性和製造方案</p>
					</div>
					<div class="process-step">
						<div class="step-number">3</div>
						<h4>樣品製作</h4>
						<p>製作樣品供客戶確認</p>
					</div>
					<div class="process-step">
						<div class="step-number">4</div>
						<h4>批量生產</h4>
						<p>確認後進行批量生產</p>
					</div>
				</div>
				<div class="cta-button">
					<nuxt-link to="/custom" class="btn btn-accent">了解更多客製化服務</nuxt-link>
				</div>
			</section>
		</div>

		<!-- 產品詳情模態框 -->
		<div v-if="showModal" class="product-modal">
			<div class="modal-content">
				<div class="modal-header">
					<h3>{{ selectedProduct.name }}</h3>
					<button class="close-button" @click="closeModal">&times;</button>
				</div>
				<div class="modal-body">
					<div class="modal-image">
						<!-- <img :src="selectedProduct.image" :alt="selectedProduct.name" /> -->
						<div class="image-placeholder" />
					</div>
					<div class="modal-details">
						<h4>產品規格</h4>
						<table class="product-specs-table">
							<tr v-if="selectedProduct.material">
								<td>材質</td>
								<td>{{ selectedProduct.material }}</td>
							</tr>
							<tr v-if="selectedProduct.size">
								<td>尺寸</td>
								<td>{{ selectedProduct.size }}</td>
							</tr>
							<tr v-if="selectedProduct.finish">
								<td>表面處理</td>
								<td>{{ selectedProduct.finish }}</td>
							</tr>
							<tr v-if="selectedProduct.standard">
								<td>符合標準</td>
								<td>{{ selectedProduct.standard }}</td>
							</tr>
							<tr v-if="selectedProduct.application">
								<td>應用領域</td>
								<td>{{ selectedProduct.application }}</td>
							</tr>
						</table>
						<h4>產品描述</h4>
						<p>{{ selectedProduct.description }}</p>
						<div class="modal-actions">
							<button class="btn btn-accent" @click="requestQuote(selectedProduct)">詢價</button>
							<button class="btn btn-secondary" @click="closeModal">關閉</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";

// 模擬產品數據
const products = ref([
	{
		id: 1,
		name: "六角頭螺絲",
		category: "標準螺絲",
		material: "碳鋼、不銹鋼",
		size: "M3-M20",
		finish: "鍍鋅、鍍鎳",
		standard: "ISO 4014, DIN 933",
		application: "建築、機械設備",
		description: "標準六角頭螺絲，多種尺寸和材質可選，適用於各種工業應用。具有優良的抗拉強度和耐用性。",
		image: "/images/products/hex-bolt.jpg"
	},
	{
		id: 2,
		name: "自攻螺絲",
		category: "標準螺絲",
		material: "碳鋼、不銹鋼",
		size: "#4-#14",
		finish: "鍍鋅、黑化",
		standard: "DIN 7982, DIN 7981",
		application: "木材、塑料、薄金屬",
		description: "高品質自攻螺絲，適用於多種材料，無需預先鑽孔即可使用。提供多種頭型和尺寸選擇。",
		image: "/images/products/self-tapping.jpg"
	},
	{
		id: 3,
		name: "特殊合金螺絲",
		category: "特殊螺絲",
		material: "鈦合金、銅合金",
		size: "客製化",
		finish: "陽極處理、電鍍",
		standard: "客製化",
		application: "航空、海洋、醫療",
		description: "使用特殊合金製造，耐腐蝕性強，適用於特殊環境。可根據客戶需求定製尺寸和規格。",
		image: "/images/products/special-alloy.jpg"
	},
	{
		id: 4,
		name: "機械螺絲",
		category: "工業用途",
		material: "合金鋼",
		size: "M2-M16",
		finish: "鍍鋅、磷化",
		standard: "ISO 4762, DIN 912",
		application: "精密機械、汽車",
		description: "高強度機械螺絲，特別設計用於精密機械裝配。具有極高的精度和穩定性，適合重要的結構連接。",
		image: "/images/products/machine-screw.jpg"
	}
]);

const filterCategory = ref("所有產品");
const showModal = ref(false);
const selectedProduct = ref({});

const filteredProducts = computed(() => {
	if (filterCategory.value === "所有產品") {
		return products.value;
	}
	return products.value.filter((product) => product.category === filterCategory.value);
});

function showProductDetails(product) {
	selectedProduct.value = product;
	showModal.value = true;
}

function closeModal() {
	showModal.value = false;
}

function requestQuote(product) {
	console.log("請求報價:", product);
	alert(`您已請求 ${product.name} 的報價，我們會盡快與您聯繫！`);
	// 可以導向到聯絡表單或直接開啟報價表單
}
</script>

<style scoped>
.page-header {
	background-color: var(--light-gray);
	padding: var(--spacing-lg) 0;
	margin-bottom: var(--spacing-lg);
	text-align: center;
}

.subtitle {
	font-size: 1.2rem;
	color: var(--dark-gray);
	max-width: 600px;
	margin: 0 auto;
}

h2 {
	text-align: center;
	margin-bottom: var(--spacing-md);
	position: relative;
	padding-bottom: var(--spacing-sm);
}

h2::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	width: 80px;
	height: 3px;
	background-color: var(--primary-color);
}

.product-categories {
	margin-bottom: var(--spacing-lg);
}

.filters {
	display: flex;
	justify-content: center;
	gap: var(--spacing-sm);
	flex-wrap: wrap;
	margin-top: var(--spacing-md);
}

.filters button {
	padding: 0.6rem 1.2rem;
	background-color: var(--light-gray);
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.2s ease;
}

.filters button.active {
	background-color: var(--primary-color);
	color: white;
}

.product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: var(--spacing-md);
	margin-bottom: var(--spacing-lg);
}

.product-card {
	display: flex;
	flex-direction: column;
	height: 100%;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
	transform: translateY(-5px);
}

.product-image {
	height: 200px;
	background-color: #f0f0f0;
	border-radius: 6px 6px 0 0;
	overflow: hidden;
}

.image-placeholder {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--dark-gray);
	font-weight: 500;
}

.product-info {
	padding: var(--spacing-md);
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

.product-specs {
	margin: var(--spacing-xs) 0;
	display: flex;
	flex-wrap: wrap;
	gap: var(--spacing-xs);
}

.spec-item {
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	color: var(--dark-gray);
	margin-right: var(--spacing-sm);
}

.spec-icon {
	width: 16px;
	height: 16px;
	margin-right: 4px;
	background-color: var(--medium-gray);
	border-radius: 50%;
}

.product-actions {
	margin-top: auto;
	display: flex;
	gap: var(--spacing-sm);
}

.no-products {
	text-align: center;
	padding: var(--spacing-md);
	background-color: var(--light-gray);
	border-radius: 6px;
	margin-bottom: var(--spacing-lg);
}

/* 品質標準和客製化產品區塊 */
.product-standards,
.custom-products {
	margin-bottom: var(--spacing-lg);
	padding: var(--spacing-md);
	border-radius: 8px;
	background-color: var(--light-gray);
}

.standards-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--spacing-md);
	margin-top: var(--spacing-md);
	align-items: center;
}

.standards-list {
	margin-top: var(--spacing-sm);
	padding-left: var(--spacing-md);
}

.standards-list li {
	margin-bottom: var(--spacing-xs);
	position: relative;
}

.standards-list li::before {
	content: "✓";
	position: absolute;
	left: -20px;
	color: var(--primary-color);
	font-weight: bold;
}

.standards-image {
	height: 250px;
	background-color: #f0f0f0;
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}

.custom-process {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: var(--spacing-md);
	margin: var(--spacing-md) 0;
}

.process-step {
	text-align: center;
	padding: var(--spacing-sm);
	position: relative;
}

.process-step::after {
	content: "";
	position: absolute;
	top: 40px;
	right: -50%;
	width: 100%;
	height: 2px;
	background-color: var(--primary-color);
	z-index: 1;
}

.process-step:last-child::after {
	display: none;
}

.step-number {
	width: 40px;
	height: 40px;
	background-color: var(--primary-color);
	color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto var(--spacing-sm);
	font-weight: bold;
	position: relative;
	z-index: 2;
}

.cta-button {
	text-align: center;
	margin-top: var(--spacing-md);
}

/* 產品詳情模態框 */
.product-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
}

.modal-content {
	background-color: white;
	border-radius: 8px;
	width: 90%;
	max-width: 900px;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
	padding: var(--spacing-sm) var(--spacing-md);
	border-bottom: 1px solid var(--medium-gray);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.modal-header h3 {
	margin: 0;
}

.close-button {
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: var(--dark-gray);
}

.modal-body {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--spacing-md);
	padding: var(--spacing-md);
}

.modal-image {
	height: 300px;
	background-color: #f0f0f0;
	border-radius: 6px;
	overflow: hidden;
}

.product-specs-table {
	width: 100%;
	border-collapse: collapse;
	margin-bottom: var(--spacing-md);
}

.product-specs-table td {
	padding: 8px;
	border-bottom: 1px solid var(--medium-gray);
}

.product-specs-table td:first-child {
	font-weight: 500;
	width: 30%;
}

.modal-actions {
	display: flex;
	gap: var(--spacing-sm);
	margin-top: var(--spacing-md);
}

@media (max-width: 768px) {
	.product-grid {
		grid-template-columns: 1fr;
	}

	.standards-content {
		grid-template-columns: 1fr;
	}

	.custom-process {
		grid-template-columns: 1fr;
	}

	.process-step::after {
		display: none;
	}

	.modal-body {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 550px) {
	.filters {
		flex-direction: column;
		align-items: center;
	}

	.filters button {
		width: 100%;
		max-width: 300px;
	}
}
</style>
