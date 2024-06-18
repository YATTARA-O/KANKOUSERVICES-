// Sample testimonials data
const testimonials = [
    {
        name: "John Doe",
        feedback: "Excellent service! Highly recommend ABC Plumbing."
    },
    {
        name: "Jane Smith",
        feedback: "Professional and quick response. Great job!"
    },
    {
        name: "Mike Johnson",
        feedback: "Very satisfied with their work. Reliable and affordable."
    }
];

async function loadContent() {
    const photoResponse = await fetch('photos.json');
    const photos = await photoResponse.json();

    const videoResponse = await fetch('videos.json');
    const videos = await videoResponse.json();

    const blogResponse = await fetch('blog.json');
    const blogs = await blogResponse.json();

    const productResponse = await fetch('products.json');
    const products = await productResponse.json();

    loadPhotos(photos);
    loadVideos(videos);
    loadBlogPosts(blogs);
    loadProducts(products);
    loadTestimonials(testimonials);
    setupChatbot();
}

function loadPhotos(photos) {
    const photoGrid = document.getElementById('photoGrid');
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.src;
        imgElement.alt = photo.alt;
        photoGrid.appendChild(imgElement);
    });
}

function loadVideos(videos) {
    const videoGrid = document.getElementById('videoGrid');
    videos.forEach(video => {
        const iframeElement = document.createElement('iframe');
        iframeElement.src = video.src;
        iframeElement.frameBorder = '0';
        iframeElement.allowFullscreen = true;
        videoGrid.appendChild(iframeElement);
    });
}

function loadTestimonials(testimonials) {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `<p><strong>${testimonial.name}</strong></p><p>${testimonial.feedback}</p>`;
        testimonialsContainer.appendChild(testimonialElement);
    });
}

function loadBlogPosts(blogs) {
    const blogContainer = document.getElementById('blogContainer');
    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog-post';
        blogElement.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <a href="${blog.url}">Read more</a>
        `;
        blogContainer.appendChild(blogElement);
    });
}

function loadProducts(products) {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <figcaption>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
            </figcaption>
        `;
        productGrid.appendChild(productElement);
    });
}

function setupChatbot() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotElement = document.createElement('div');
    chatbotElement.id = 'chatbot';
    chatbotElement.innerHTML = `
        <div class="chatbot-header">Chat with us</div>
        <div class="chatbot-body">
            <div class="messages"></div>
            <input type="text" placeholder="Type your message...">
        </div>
    `;
    chatbotContainer.appendChild(chatbotElement);

    const input = chatbotElement.querySelector('input');
    const messages = chatbotElement.querySelector('.messages');

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            const userMessage = input.value.trim();
            messages.innerHTML += `<div class="message user-message">${userMessage}</div>`;
            input.value = '';

            setTimeout(() => {
                const botMessage = `You said: ${userMessage}`;
                messages.innerHTML += `<div class="message bot-message">${botMessage}</div>`;
                messages.scrollTop = messages.scrollHeight;
            }, 1000);
        }
    });
}

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Handle form submission, e.g., send data to a server
    alert('Thank you for your message!');

    document.getElementById('contactForm').reset();
});

document.addEventListener('DOMContentLoaded', loadContent);