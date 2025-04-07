<template>
	<div class="contact">
		<div class="page-header">
			<div class="container">
				<h1>聯絡我們</h1>
				<p class="subtitle">隨時為您提供螺絲解決方案的專業支援</p>
			</div>
		</div>

		<div class="container">
			<div class="contact-container">
				<div class="contact-info card">
					<h2>聯絡資訊</h2>
					<ul class="info-list">
						<li class="info-item">
							<div class="info-icon location-icon">
								<i class="icon-location" />
							</div>
							<div class="info-content">
								<strong>地址</strong>
								<address>台灣省某市某區某路123號</address>
							</div>
						</li>
						<li class="info-item">
							<div class="info-icon phone-icon">
								<i class="icon-phone" />
							</div>
							<div class="info-content">
								<strong>電話</strong>
								<a href="tel:+886123456789">+886-1-2345-6789</a>
							</div>
						</li>
						<li class="info-item">
							<div class="info-icon fax-icon">
								<i class="icon-fax" />
							</div>
							<div class="info-content">
								<strong>傳真</strong>
								<span>+886-1-2345-6788</span>
							</div>
						</li>
						<li class="info-item">
							<div class="info-icon email-icon">
								<i class="icon-email" />
							</div>
							<div class="info-content">
								<strong>電子郵件</strong>
								<a href="mailto:contact@screwfactory.com">contact@screwfactory.com</a>
							</div>
						</li>
						<li class="info-item">
							<div class="info-icon time-icon">
								<i class="icon-time" />
							</div>
							<div class="info-content">
								<strong>營業時間</strong>
								<span>週一至週五 9:00 - 18:00</span>
							</div>
						</li>
					</ul>

					<div class="social-links">
						<h3>關注我們</h3>
						<div class="social-icons">
							<a href="#" class="social-icon facebook" title="Facebook">
								<i class="icon-facebook" />
							</a>
							<a href="#" class="social-icon linkedin" title="LinkedIn">
								<i class="icon-linkedin" />
							</a>
							<a href="#" class="social-icon instagram" title="Instagram">
								<i class="icon-instagram" />
							</a>
						</div>
					</div>
				</div>

				<div class="contact-form card">
					<h2>聯絡表單</h2>
					<p class="form-intro">請填寫以下表單，我們會盡快回覆您的訊息。</p>
					<form @submit.prevent="submitContact">
						<div class="form-row">
							<div class="form-group">
								<label for="contact-name">姓名 <span class="required">*</span></label>
								<input id="contact-name" v-model="contact.name" type="text" placeholder="請輸入您的姓名" required />
							</div>
							<div class="form-group">
								<label for="contact-email">電子郵件 <span class="required">*</span></label>
								<input id="contact-email" v-model="contact.email" type="email" placeholder="請輸入您的電子郵件" required />
							</div>
						</div>
						<div class="form-row">
							<div class="form-group">
								<label for="contact-phone">電話</label>
								<input id="contact-phone" v-model="contact.phone" type="tel" placeholder="請輸入您的聯絡電話" />
							</div>
							<div class="form-group">
								<label for="contact-subject">主旨 <span class="required">*</span></label>
								<input id="contact-subject" v-model="contact.subject" type="text" placeholder="請輸入主旨" required />
							</div>
						</div>
						<div class="form-group">
							<label for="contact-message">訊息內容 <span class="required">*</span></label>
							<textarea id="contact-message" v-model="contact.message" rows="5" placeholder="請輸入您的訊息內容..." required />
						</div>
						<div class="form-group form-check">
							<input id="contact-privacy" type="checkbox" required />
							<label for="contact-privacy">我同意根據隱私政策處理我的個人資訊</label>
						</div>
						<button type="submit" class="btn btn-accent">送出訊息</button>
					</form>
				</div>
			</div>

			<div class="location-section">
				<h2>我們的位置</h2>
				<div class="map-container">
					<!-- 這裡可以放置地圖元素，如 Google Maps 嵌入等 -->
					<div class="map-placeholder">
						<p>地圖載入中...</p>
						<p>台灣省某市某區某路123號</p>
					</div>
				</div>
			</div>

			<section class="office-section">
				<h2>辦公環境</h2>
				<div class="office-images">
					<div class="office-image">
						<!-- <img src="/images/contact/office1.jpg" alt="辦公室前台" /> -->
						<div class="image-placeholder">辦公室前台</div>
					</div>
					<div class="office-image">
						<!-- <img src="/images/contact/office2.jpg" alt="會議室" /> -->
						<div class="image-placeholder">會議室</div>
					</div>
					<div class="office-image">
						<!-- <img src="/images/contact/office3.jpg" alt="樣品展示區" /> -->
						<div class="image-placeholder">樣品展示區</div>
					</div>
				</div>
			</section>

			<section class="faq-section">
				<h2>常見問題</h2>
				<div class="faq-grid">
					<div class="faq-item card">
						<h3>如何申請樣品？</h3>
						<p>您可以通過此頁面的聯絡表單或直接電話聯繫我們申請產品樣品。我們將根據您的需求提供適合的樣品。</p>
					</div>
					<div class="faq-item card">
						<h3>交貨時間為多久？</h3>
						<p>標準產品的交貨時間通常為7-14天，客製化產品則視複雜程度而定，一般為2-4週。大量訂單可能需要更長時間。</p>
					</div>
					<div class="faq-item card">
						<h3>您們有提供急件服務嗎？</h3>
						<p>是的，我們提供急件服務，但可能會收取額外費用。請直接聯繫我們的銷售團隊以了解更多詳情。</p>
					</div>
					<div class="faq-item card">
						<h3>如何取得報價？</h3>
						<p>您可以通過填寫聯絡表單、電子郵件或電話方式向我們索取報價。請提供詳細的產品規格和數量以獲取準確報價。</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const contact = ref({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: ""
});

function submitContact() {
	// 這裡可以處理表單提交邏輯
	console.log("提交聯絡表單:", contact.value);
	alert("您的訊息已送出，我們會盡快回覆您！");
	// 重置表單
	contact.value = {
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: ""
	};
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

.contact-container {
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	gap: var(--spacing-lg);
	margin-bottom: var(--spacing-lg);
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

.contact-info {
	padding: var(--spacing-md);
}

.info-list {
	list-style: none;
	padding: 0;
	margin-bottom: var(--spacing-md);
}

.info-item {
	display: flex;
	margin-bottom: var(--spacing-md);
	align-items: flex-start;
}

.info-icon {
	width: 40px;
	height: 40px;
	background-color: var(--primary-color);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: var(--spacing-sm);
	flex-shrink: 0;
	color: white;
}

.info-content {
	flex-grow: 1;
}

.info-content strong {
	display: block;
	margin-bottom: 4px;
	color: var(--primary-color);
}

.info-content a {
	color: var(--secondary-color);
	text-decoration: none;
	transition: color 0.2s ease;
}

.info-content a:hover {
	color: var(--primary-color);
}

.social-links {
	margin-top: var(--spacing-md);
}

.social-links h3 {
	text-align: center;
	margin-bottom: var(--spacing-sm);
}

.social-icons {
	display: flex;
	justify-content: center;
	gap: var(--spacing-sm);
}

.social-icon {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: var(--primary-color);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
}

.social-icon:hover {
	transform: translateY(-5px);
	background-color: var(--primary-dark);
}

.contact-form {
	padding: var(--spacing-md);
}

.form-intro {
	text-align: center;
	margin-bottom: var(--spacing-md);
}

.form-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: var(--spacing-md);
	margin-bottom: var(--spacing-sm);
}

.form-group {
	margin-bottom: var(--spacing-md);
}

label {
	display: block;
	margin-bottom: var(--spacing-xs);
	font-weight: 500;
}

.required {
	color: #e53e3e;
}

input,
textarea {
	width: 100%;
	padding: 0.8rem;
	border: 1px solid var(--medium-gray);
	border-radius: 4px;
	transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
	border-color: var(--primary-color);
	outline: none;
	box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
}

.form-check {
	display: flex;
	align-items: center;
}

.form-check input {
	width: auto;
	margin-right: var(--spacing-xs);
}

.form-check label {
	margin-bottom: 0;
	font-size: 0.9rem;
}

button[type="submit"] {
	padding: 0.8rem 2rem;
	width: 100%;
	font-weight: 500;
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
}

.map-container {
	height: 400px;
	background-color: var(--light-gray);
	border-radius: 8px;
	overflow: hidden;
	margin-bottom: var(--spacing-lg);
}

.map-placeholder {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: var(--dark-gray);
}

.office-section {
	margin-bottom: var(--spacing-lg);
}

.office-images {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: var(--spacing-md);
}

.office-image {
	height: 200px;
	background-color: var(--light-gray);
	border-radius: 8px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--dark-gray);
}

.faq-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: var(--spacing-md);
}

.faq-item {
	padding: var(--spacing-md);
}

.faq-item h3 {
	color: var(--primary-color);
	margin-bottom: var(--spacing-xs);
}

@media (max-width: 768px) {
	.contact-container {
		grid-template-columns: 1fr;
	}

	.form-row {
		grid-template-columns: 1fr;
		gap: 0;
	}

	.office-images {
		grid-template-columns: 1fr;
	}
}
</style>
