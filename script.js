document.addEventListener('DOMContentLoaded', function() {
    // Glitch Intro Animation
    const glitchIntro = document.querySelector('.glitch-intro');
    const mainContent = document.querySelector('.main-content');
    
    setTimeout(() => {
        glitchIntro.classList.add('hide');
        mainContent.classList.add('show');
        
        setTimeout(() => {
            glitchIntro.style.display = 'none';
        }, 1000);
    }, 3000);

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const hoverElements = document.querySelectorAll('a, button, .bubble, .portfolio-item, .play-btn, .service-card, .style-choice, .style-option');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
    
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });
    
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });

    // Animated Logo Drawing
    const logoPath = document.querySelector('.logo-path');
    const logoText = document.querySelector('.logo-text');
    
    // Portfolio Filter Bubbles
    const filterBubbles = document.querySelectorAll('.bubble');
    const portfolioItems = [
        {
            category: 'short',
            title: 'Instagram Reel',
            description: 'Engaging short-form content for Instagram',
            duration: '0:30',
            tags: 'Social Media, Quick Cuts',
            thumbnail: 'https://via.placeholder.com/400x225/6e48aa/ffffff?text=Short+Form+1',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'long',
            title: 'Documentary Preview',
            description: 'Cinematic long-form documentary editing',
            duration: '5:20',
            tags: 'Documentary, Cinematic',
            thumbnail: 'https://via.placeholder.com/400x225/9d50bb/ffffff?text=Long+Form+1',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'gaming',
            title: 'Valorant Montage',
            description: 'High-energy gaming highlights with effects',
            duration: '2:15',
            tags: 'Gaming, Montage',
            thumbnail: 'https://via.placeholder.com/400x225/4776e6/ffffff?text=Gaming+Montage',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'football',
            title: 'Match Highlights',
            description: 'Football match highlights with dynamic editing',
            duration: '3:45',
            tags: 'Sports, Highlights',
            thumbnail: 'https://via.placeholder.com/400x225/1e9600/ffffff?text=Football+Edits',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'ecommerce',
            title: 'Product Ad',
            description: 'E-commerce product showcase video',
            duration: '1:00',
            tags: 'E-commerce, Product',
            thumbnail: 'https://via.placeholder.com/400x225/f46b45/ffffff?text=eCommerce+Ad',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'documentary',
            title: 'Nature Documentary',
            description: 'Documentary style editing with narration',
            duration: '8:30',
            tags: 'Documentary, Nature',
            thumbnail: 'https://via.placeholder.com/400x225/1488cc/ffffff?text=Documentary',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'color',
            title: 'Color Grading Sample',
            description: 'Before/after color grading comparison',
            duration: '1:15',
            tags: 'Color Grading, Correction',
            thumbnail: 'https://via.placeholder.com/400x225/ff7e5f/ffffff?text=Color+Grading',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'anime',
            title: 'Anime AMV',
            description: 'Anime music video with effects',
            duration: '3:20',
            tags: 'Anime, Music Video',
            thumbnail: 'https://via.placeholder.com/400x225/614385/ffffff?text=Anime+AMV',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'ads',
            title: 'Brand Commercial',
            description: 'Professional brand advertisement',
            duration: '0:45',
            tags: 'Commercial, Brand',
            thumbnail: 'https://via.placeholder.com/400x225/4568dc/ffffff?text=Brand+Ad',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'short',
            title: 'TikTok Video',
            description: 'Trendy TikTok format with effects',
            duration: '0:20',
            tags: 'Social Media, Trendy',
            thumbnail: 'https://via.placeholder.com/400x225/8e54e9/ffffff?text=TikTok+Video',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'long',
            title: 'Interview Series',
            description: 'Multi-cam interview editing',
            duration: '12:45',
            tags: 'Interview, Multi-cam',
            thumbnail: 'https://via.placeholder.com/400x225/a73737/ffffff?text=Interview',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        },
        {
            category: 'gaming',
            title: 'Stream Highlights',
            description: 'Live stream highlight compilation',
            duration: '4:10',
            tags: 'Gaming, Stream',
            thumbnail: 'https://via.placeholder.com/400x225/3a7bd5/ffffff?text=Stream+Highlights',
            video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    ];
    
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Load portfolio items
    function loadPortfolioItems(filter = 'all') {
        portfolioGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filter);
        
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            
            portfolioItem.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="item-overlay">
                    <h3>${item.title}</h3>
                    <div class="play-btn" 
                         data-video="${item.video}"
                         data-title="${item.title}"
                         data-description="${item.description}"
                         data-duration="${item.duration}"
                         data-tags="${item.tags}">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
            `;
            
            // Add hover video preview
            const img = portfolioItem.querySelector('img');
            const video = document.createElement('video');
            video.src = item.video;
            video.muted = true;
            video.loop = true;
            video.style.display = 'none';
            portfolioItem.appendChild(video);
            
            portfolioItem.addEventListener('mouseenter', () => {
                img.style.display = 'none';
                video.style.display = 'block';
                video.play();
            });
            
            portfolioItem.addEventListener('mouseleave', () => {
                video.style.display = 'none';
                video.pause();
                img.style.display = 'block';
            });
            
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Reattach event listeners for play buttons
        attachPlayButtonListeners();
    }
    
    // Initial load
    loadPortfolioItems();
    
    // Filter bubbles functionality
    filterBubbles.forEach(bubble => {
        bubble.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all bubbles
            filterBubbles.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked bubble
            this.classList.add('active');
            
            // Animate bubble
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
            
            // Load filtered items
            loadPortfolioItems(filter);
        });
    });
    
    // Video Lightbox
    const lightbox = document.querySelector('.video-lightbox');
    const lightboxVideo = lightbox.querySelector('video');
    const closeBtn = lightbox.querySelector('.close-btn');
    const videoTitle = lightbox.querySelector('.video-title');
    const videoDescription = lightbox.querySelector('.video-description');
    const videoDuration = lightbox.querySelector('.duration');
    const videoTags = lightbox.querySelector('.tags');
    
    function attachPlayButtonListeners() {
        const playButtons = document.querySelectorAll('.play-btn');
        
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoSrc = this.getAttribute('data-video');
                lightboxVideo.setAttribute('src', videoSrc);
                
                // Set video info
                videoTitle.textContent = this.getAttribute('data-title');
                videoDescription.textContent = this.getAttribute('data-description');
                videoDuration.textContent = this.getAttribute('data-duration');
                videoTags.textContent = this.getAttribute('data-tags');
                
                // Show lightbox
                lightbox.classList.add('active');
                lightboxVideo.play();
                
                // Pause all other videos
                document.querySelectorAll('video').forEach(vid => {
                    if (vid !== lightboxVideo) vid.pause();
                });
            });
        });
    }
    
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        lightboxVideo.removeAttribute('src');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightboxVideo.pause();
            lightboxVideo.removeAttribute('src');
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            lightboxVideo.pause();
            lightboxVideo.removeAttribute('src');
        }
    });
    
    // Color Grading Simulator
    const gradingSlider = document.getElementById('grading-slider');
    const gradingVideo = document.getElementById('grading-video');
    const gradedVideo = document.getElementById('graded-video');
    const styleOptions = document.querySelectorAll('.style-option');
    
    gradingSlider.addEventListener('input', function() {
        const value = this.value;
        document.querySelector('.before').style.width = `${value}%`;
        document.querySelector('.slider-button').style.left = `${value}%`;
    });
    
    styleOptions.forEach(option => {
        option.addEventListener('click', function() {
            const style = this.getAttribute('data-style');
            
            // Remove active class from all options
            styleOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Apply different filters based on style
            switch(style) {
                case 'cinematic':
                    gradedVideo.style.filter = 'contrast(110%) saturate(120%) brightness(90%) sepia(10%)';
                    break;
                case 'vintage':
                    gradedVideo.style.filter = 'sepia(30%) contrast(120%) saturate(80%) brightness(110%) hue-rotate(-10deg)';
                    break;
                case 'neon':
                    gradedVideo.style.filter = 'brightness(110%) contrast(120%) saturate(150%) hue-rotate(10deg)';
                    break;
                case 'dramatic':
                    gradedVideo.style.filter = 'contrast(130%) brightness(80%) saturate(110%)';
                    break;
                default:
                    gradedVideo.style.filter = 'none';
            }
        });
    });
    
    // Play videos on hover for style matcher
    const styleChoices = document.querySelectorAll('.style-choice');
    
    styleChoices.forEach(choice => {
        choice.addEventListener('mouseenter', function() {
            const style = this.getAttribute('data-style');
            const previewContainer = document.querySelector('.preview-container');
            
            // Clear previous content
            previewContainer.innerHTML = '';
            
            // Add appropriate content based on style
            let videoSrc, title, description;
            
            switch(style) {
                case 'gaming':
                    videoSrc = 'assets/videos/gaming-preview.mp4';
                    title = 'Gaming Edits';
                    description = 'High-energy edits perfect for gaming content';
                    break;
                case 'fashion':
                    videoSrc = 'assets/videos/fashion-preview.mp4';
                    title = 'Fashion Edits';
                    description = 'Elegant edits for fashion brands and influencers';
                    break;
                case 'education':
                    videoSrc = 'assets/videos/education-preview.mp4';
                    title = 'Educational Content';
                    description = 'Clear and engaging edits for educational content';
                    break;
                case 'food':
                    videoSrc = 'assets/videos/food-preview.mp4';
                    title = 'Food Content';
                    description = 'Mouth-watering edits for food content';
                    break;
                case 'travel':
                    videoSrc = 'assets/videos/travel-preview.mp4';
                    title = 'Travel Content';
                    description = 'Cinematic edits for travel vlogs and content';
                    break;
                default:
                    videoSrc = 'assets/videos/default-preview.mp4';
                    title = 'Professional Edits';
                    description = 'High-quality edits for any content';
            }
            
            const video = document.createElement('video');
            video.src = videoSrc;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            
            const infoOverlay = document.createElement('div');
            infoOverlay.className = 'preview-info';
            infoOverlay.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
            `;
            
            previewContainer.appendChild(video);
            previewContainer.appendChild(infoOverlay);
        });
    });
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Animate timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Magnetic button effect
    const magneticButtons = document.querySelectorAll('.magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const position = this.getBoundingClientRect();
            const x = e.pageX - position.left - position.width / 2;
            const y = e.pageY - position.top - position.height / 2;
            
            gsap.to(this, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.8,
                ease: 'power3.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});