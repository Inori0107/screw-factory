<template>
	<div class="news-page">
		<section class="hero" :style="{ backgroundImage: 'url(/images/hero-bg.jpg)' }">
			<div class="container">
				<h1>公司新聞</h1>
				<p>了解新豐緊固件的最新動態、行業資訊與技術創新</p>
			</div>
		</section>

		<section class="news-content">
			<div class="container">
				<div class="news-filters">
					<h3>新聞分類</h3>
					<ul>
						<li><a href="#" :class="{ active: activeFilter === 'all' }" @click.prevent="filterNews('all')">全部新聞</a></li>
						<li><a href="#" :class="{ active: activeFilter === 'company' }" @click.prevent="filterNews('company')">公司動態</a></li>
						<li><a href="#" :class="{ active: activeFilter === 'industry' }" @click.prevent="filterNews('industry')">行業資訊</a></li>
						<li><a href="#" :class="{ active: activeFilter === 'tech' }" @click.prevent="filterNews('tech')">技術創新</a></li>
					</ul>
				</div>

				<div class="news-list">
					<div v-for="(news, index) in filteredNews" :key="index" class="news-item">
						<div class="news-image">
							<img :src="news.image" :alt="news.title" />
						</div>
						<div class="news-details">
							<span class="news-date">{{ news.date }}</span>
							<span class="news-tag">{{ news.category }}</span>
							<h3>{{ news.title }}</h3>
							<p>{{ news.summary }}</p>
							<button class="btn btn-primary" @click="showNewsDetail(news)">閱讀更多</button>
						</div>
					</div>

					<div class="pagination">
						<a href="#" class="prev" :class="{ disabled: currentPage === 1 }" @click.prevent="prevPage">上一頁</a>
						<span v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }" @click="goToPage(page)">{{ page }}</span>
						<a href="#" class="next" :class="{ disabled: currentPage === totalPages }" @click.prevent="nextPage">下一頁</a>
					</div>
				</div>
			</div>
		</section>

		<div v-if="selectedNews" class="news-modal" @click="closeNewsDetail">
			<div class="news-modal-content" @click.stop>
				<button class="close-btn" @click="closeNewsDetail">&times;</button>
				<h2>{{ selectedNews.title }}</h2>
				<div class="news-meta">
					<span class="news-date">{{ selectedNews.date }}</span>
					<span class="news-tag">{{ selectedNews.category }}</span>
				</div>
				<img :src="selectedNews.image" :alt="selectedNews.title" class="news-detail-image" />
				<div class="news-body">
					<p>{{ selectedNews.content }}</p>
				</div>
			</div>
		</div>

		<section class="newsletter">
			<div class="container">
				<h2>訂閱我們的電子報</h2>
				<p>及時獲取新豐緊固件的最新資訊和產品更新</p>
				<form @submit.prevent="subscribeNewsletter">
					<div class="form-group">
						<input v-model="email" type="email" placeholder="您的電子郵件" required />
						<button type="submit" class="btn btn-primary">訂閱</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";

const newsList = ref([
	{
		id: 1,
		title: "新豐緊固件榮獲國際品質認證",
		date: "2023-10-15",
		category: "公司動態",
		image: "/images/news1.jpg",
		summary: "我們很榮幸地宣布，新豐緊固件已獲得ISO 9001:2015國際品質管理系統認證，這標誌著我們在品質管理上的卓越成就。",
		content:
			"我們很榮幸地宣布，新豐緊固件已獲得ISO 9001:2015國際品質管理系統認證，這標誌著我們在品質管理上的卓越成就。此認證確認了我們致力於提供高品質產品和服務的承諾，以及我們持續改進流程和系統的能力。這一成就是我們全體員工共同努力的結果，我們將繼續秉持高標準，為客戶提供最優質的緊固件產品和解決方案。認證過程涉及對我們整個運營流程的全面審核，包括設計、生產、質量控制和客戶服務等各個方面。獲得此認證不僅提升了我們在國際市場上的競爭力，也為我們的客戶提供了更多的信心和保障。"
	},
	{
		id: 2,
		title: "緊固件行業新技術趨勢分析",
		date: "2023-09-28",
		category: "行業資訊",
		image: "/images/news2.jpg",
		summary: "隨著製造業的快速發展，緊固件行業也在不斷創新。本文分析了最新的緊固件技術趨勢，包括智能化、環保材料和定制化解決方案。",
		content:
			"隨著製造業的快速發展，緊固件行業也在不斷創新。本文分析了最新的緊固件技術趨勢，包括智能化、環保材料和定制化解決方案。近年來，智能緊固件的應用日益廣泛，這些緊固件可以監測壓力、溫度和其他環境因素，為預防性維護提供寶貴數據。同時，環保材料在緊固件製造中的應用也越來越普遍，這不僅符合全球環保趨勢，也提高了產品的耐用性和安全性。此外，隨著不同行業對特殊緊固解決方案的需求增加，定制化服務已成為緊固件製造商的重要競爭優勢。新豐緊固件正積極響應這些趨勢，投資研發新技術和解決方案，以滿足客戶不斷變化的需求。"
	},
	{
		id: 3,
		title: "新豐推出高強度航空級螺絲系列",
		date: "2023-08-17",
		category: "技術創新",
		image: "/images/news3.jpg",
		summary: "新豐緊固件自豪地宣布推出全新高強度航空級螺絲系列，採用先進合金材料，專為航空航天、國防和高要求工業應用設計。",
		content:
			"新豐緊固件自豪地宣布推出全新高強度航空級螺絲系列，採用先進合金材料，專為航空航天、國防和高要求工業應用設計。這個創新產品系列是我們研發團隊歷時三年的心血結晶，代表了緊固件技術的最新突破。新系列螺絲具有卓越的強度重量比，能在極端溫度和高振動環境下保持穩定性能。通過嚴格的測試和認證，這些螺絲已經證明可以滿足甚至超越航空航天工業的嚴格標準。我們的工程師使用電腦模擬和先進的材料科學，優化了螺絲的設計，使其在保持輕量化的同時提供最大的強度和耐用性。這一創新不僅展示了新豐在技術研發方面的實力，也為我們進入高端市場奠定了堅實基礎。"
	},
	{
		id: 4,
		title: "新豐參加2023國際五金展，展示最新產品線",
		date: "2023-07-05",
		category: "公司動態",
		image: "/images/news4.jpg",
		summary: "上個月，新豐緊固件成功參加了在上海舉行的2023國際五金展。我們的展位吸引了眾多國內外客戶，並展示了我們最新的產品線和定制解決方案。",
		content:
			"上個月，新豐緊固件成功參加了在上海舉行的2023國際五金展。我們的展位吸引了眾多國內外客戶，並展示了我們最新的產品線和定制解決方案。這次展會是全球五金行業的頂級盛會，匯集了來自50多個國家的展商和專業買家。我們的團隊利用這個機會展示了新豐在緊固件領域的創新成果，包括最新的高強度合金螺絲、防腐蝕緊固件系列以及智能監測緊固解決方案。展會期間，我們與多家國際知名企業達成了合作意向，為公司未來的發展開闢了新的機遇。這次參展不僅提高了新豐在行業內的知名度，也讓我們更深入地了解了市場需求和競爭格局，為進一步優化產品和服務提供了寶貴參考。"
	},
	{
		id: 5,
		title: "緊固件在新能源汽車中的應用分析",
		date: "2023-06-12",
		category: "行業資訊",
		image: "/images/news5.jpg",
		summary: "隨著新能源汽車產業的蓬勃發展，對高性能緊固件的需求也在迅速增長。本文探討了緊固件在電動汽車、混合動力車等新能源汽車中的關鍵應用。",
		content:
			"隨著新能源汽車產業的蓬勃發展，對高性能緊固件的需求也在迅速增長。本文探討了緊固件在電動汽車、混合動力車等新能源汽車中的關鍵應用。新能源汽車的特殊設計和工作條件對緊固件提出了更高的要求，包括更強的耐腐蝕性、更高的電絕緣性能以及在高震動環境下的可靠性。例如，在電池組裝和固定方面，需要特殊設計的緊固件來確保電池包的安全和穩定；在電機和電控系統中，則需要能夠在高溫和高振動條件下保持可靠連接的緊固解決方案。作為行業領先的緊固件製造商，新豐已經開發出一系列專為新能源汽車設計的產品，並與多家汽車製造商建立了合作關係。隨著新能源汽車市場的持續擴大，我們預計這一領域的緊固件需求將保持強勁增長，為行業帶來更多創新機會。"
	},
	{
		id: 6,
		title: "新豐緊固件升級生產線，提高自動化水平",
		date: "2023-05-20",
		category: "公司動態",
		image: "/images/news6.jpg",
		summary: "為滿足不斷增長的市場需求，新豐緊固件近期完成了生產線的全面升級，引入了先進的自動化設備和智能製造系統。",
		content:
			"為滿足不斷增長的市場需求，新豐緊固件近期完成了生產線的全面升級，引入了先進的自動化設備和智能製造系統。這次升級是公司五年發展計劃的重要組成部分，總投資超過3000萬元。新的生產線採用了最先進的CNC加工中心、自動檢測設備和機器人搬運系統，大大提高了生產效率和產品一致性。同時，我們還引入了智能製造管理系統，實現了從原材料入庫到成品出廠的全過程數字化管理。升級後的生產線年產能將提高40%，同時能耗降低15%，不良品率降低至千分之一以下。這一投資不僅提升了新豐的生產能力和產品品質，也為我們進一步拓展高端市場奠定了堅實基礎。"
	}
]);

const activeFilter = ref("all");
const currentPage = ref(1);
const itemsPerPage = 3;
const email = ref("");
const selectedNews = ref(null);

const filterNews = (category) => {
	activeFilter.value = category;
	currentPage.value = 1;
};

const filteredNews = computed(() => {
	let result = newsList.value;
	if (activeFilter.value !== "all") {
		const categoryMap = {
			company: "公司動態",
			industry: "行業資訊",
			tech: "技術創新"
		};
		result = newsList.value.filter((news) => news.category === categoryMap[activeFilter.value]);
	}

	const startIndex = (currentPage.value - 1) * itemsPerPage;
	return result.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => {
	let filteredList = newsList.value;
	if (activeFilter.value !== "all") {
		const categoryMap = {
			company: "公司動態",
			industry: "行業資訊",
			tech: "技術創新"
		};
		filteredList = newsList.value.filter((news) => news.category === categoryMap[activeFilter.value]);
	}
	return Math.ceil(filteredList.length / itemsPerPage);
});

const prevPage = () => {
	if (currentPage.value > 1) {
		currentPage.value--;
	}
};

const nextPage = () => {
	if (currentPage.value < totalPages.value) {
		currentPage.value++;
	}
};

const goToPage = (page) => {
	currentPage.value = page;
};

const subscribeNewsletter = () => {
	alert(`感謝您的訂閱！電子郵件：${email.value}`);
	email.value = "";
};

const showNewsDetail = (news) => {
	selectedNews.value = news;
	document.body.style.overflow = "hidden";
};

const closeNewsDetail = () => {
	selectedNews.value = null;
	document.body.style.overflow = "";
};
</script>

<style scoped>
.news-page {
	padding-bottom: 60px;
}

.hero {
	background-size: cover;
	background-position: center;
	color: white;
	padding: 100px 0;
	text-align: center;
	position: relative;
}

.hero::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.6);
}

.hero .container {
	position: relative;
	z-index: 1;
}

.hero h1 {
	font-size: 3rem;
	margin-bottom: 20px;
}

.hero p {
	font-size: 1.2rem;
	max-width: 700px;
	margin: 0 auto;
}

.news-content {
	display: flex;
	margin-top: 60px;
}

.news-content .container {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
}

.news-filters {
	width: 250px;
	padding-right: 30px;
}

.news-filters h3 {
	margin-bottom: 20px;
	font-size: 1.4rem;
	color: var(--primary-color);
}

.news-filters ul {
	list-style: none;
	padding: 0;
}

.news-filters li {
	margin-bottom: 10px;
}

.news-filters a {
	display: block;
	padding: 10px 15px;
	color: #333;
	text-decoration: none;
	border-left: 3px solid transparent;
	transition: all 0.3s;
}

.news-filters a:hover,
.news-filters a.active {
	background-color: #f5f5f5;
	border-left-color: var(--primary-color);
	color: var(--primary-color);
}

.news-list {
	flex: 1;
}

.news-item {
	display: flex;
	margin-bottom: 40px;
	background: #fff;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s;
}

.news-item:hover {
	transform: translateY(-5px);
}

.news-image {
	width: 300px;
	height: 220px;
	overflow: hidden;
}

.news-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.5s;
}

.news-item:hover .news-image img {
	transform: scale(1.05);
}

.news-details {
	flex: 1;
	padding: 25px;
}

.news-date {
	display: inline-block;
	font-size: 0.9rem;
	color: #777;
	margin-right: 15px;
}

.news-tag {
	display: inline-block;
	padding: 5px 10px;
	background: var(--primary-color);
	color: white;
	border-radius: 15px;
	font-size: 0.8rem;
}

.news-details h3 {
	margin: 15px 0;
	font-size: 1.4rem;
	color: #333;
}

.news-details p {
	color: #666;
	margin-bottom: 20px;
	line-height: 1.6;
}

.pagination {
	display: flex;
	justify-content: center;
	margin-top: 50px;
}

.pagination span,
.pagination a {
	display: inline-block;
	padding: 8px 16px;
	margin: 0 5px;
	border-radius: 4px;
	cursor: pointer;
	transition: background 0.3s;
}

.pagination span {
	background: #f0f0f0;
}

.pagination span.active {
	background: var(--primary-color);
	color: white;
}

.pagination a {
	text-decoration: none;
	color: #333;
	background: #f0f0f0;
}

.pagination a:hover:not(.disabled) {
	background: #e0e0e0;
}

.pagination a.disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

.newsletter {
	background: #f8f8f8;
	padding: 60px 0;
	text-align: center;
	margin-top: 60px;
}

.newsletter h2 {
	margin-bottom: 20px;
	color: #333;
}

.newsletter p {
	margin-bottom: 30px;
	color: #666;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

.newsletter .form-group {
	display: flex;
	max-width: 500px;
	margin: 0 auto;
}

.newsletter input {
	flex: 1;
	padding: 12px 15px;
	border: 1px solid #ddd;
	border-radius: 4px 0 0 4px;
	font-size: 1rem;
}

.newsletter button {
	border-radius: 0 4px 4px 0;
	padding: 0 25px;
}

.news-modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	overflow-y: auto;
	padding: 20px;
}

.news-modal-content {
	background: white;
	border-radius: 8px;
	max-width: 800px;
	width: 100%;
	max-height: 90vh;
	overflow-y: auto;
	padding: 30px;
	position: relative;
}

.close-btn {
	position: absolute;
	right: 20px;
	top: 20px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: #333;
}

.news-detail-image {
	width: 100%;
	height: 400px;
	object-fit: cover;
	border-radius: 8px;
	margin: 20px 0;
}

.news-meta {
	margin-bottom: 20px;
}

.news-body {
	line-height: 1.8;
}

@media (max-width: 992px) {
	.news-content .container {
		flex-direction: column;
	}

	.news-filters {
		width: 100%;
		padding-right: 0;
		margin-bottom: 30px;
	}

	.news-filters ul {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.news-filters li {
		margin-bottom: 0;
	}
}

@media (max-width: 768px) {
	.news-item {
		flex-direction: column;
	}

	.news-image {
		width: 100%;
		height: 200px;
	}

	.newsletter .form-group {
		flex-direction: column;
	}

	.newsletter input,
	.newsletter button {
		border-radius: 4px;
		width: 100%;
	}

	.newsletter button {
		margin-top: 10px;
	}
}
</style>
