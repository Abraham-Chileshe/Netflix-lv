/* ==========================================================================
   NETFLIX LOVE EDITION • INTERACTION ENGINE
   Hero Crossfading Slideshow & Complete Media Showcase (47 Items)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const cfg = window.ANNIVERSARY_CONFIG || {};

    // ----------------------------------------------------------------------
    // 1. CONFIG POPULATION & ELEMENTS
    // ----------------------------------------------------------------------
    const partnerProfileName = document.getElementById('partner-profile-name');
    const pillSongTitle = document.getElementById('pill-song-title');

    const mConfig = cfg.music || {};
    const memories = cfg.memories || [];
    const heroSlides = cfg.heroSlides || [
        {
            image: 'assets/photos/6.jpg',
            title: 'OUR LOVE STORY',
            tag: '99% Match for You • 6 Months',
            desc: 'Separated by physical miles but bound by pure love, a tech guy and a brilliant doctor build an unbreakable bond full of late-night laughs, endless support, and unforgettable memories.'
        }
    ];

    if (partnerProfileName && cfg.partnerName) partnerProfileName.textContent = cfg.partnerName;
    if (pillSongTitle) pillSongTitle.textContent = mConfig.bgTitle || "Our Love Melody";

    // ----------------------------------------------------------------------
    // 2. HERO BILLBOARD CROSSFADING SLIDESHOW ENGINE
    // ----------------------------------------------------------------------
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const heroMetaMatch = document.getElementById('hero-meta-match');
    const heroPosterImgA = document.getElementById('hero-poster-img-a');
    const heroPosterImgB = document.getElementById('hero-poster-img-b');
    const heroPosterTag = document.getElementById('hero-poster-tag');
    const heroSlideDots = document.getElementById('hero-slide-dots');
    const heroPlayBtn = document.getElementById('hero-play-btn');
    const heroInfoBtn = document.getElementById('hero-info-btn');

    let currentHeroSlideIdx = 0;
    let activePosterIsA = true;
    let heroSlideshowTimer = null;

    function renderHeroDots() {
        if (!heroSlideDots || heroSlides.length <= 1) return;
        heroSlideDots.innerHTML = '';
        heroSlides.forEach((slide, idx) => {
            const dot = document.createElement('span');
            dot.className = `hero-dot ${idx === currentHeroSlideIdx ? 'active' : ''}`;
            dot.title = slide.title;
            dot.addEventListener('click', () => {
                goToHeroSlide(idx);
                restartHeroTimer();
            });
            heroSlideDots.appendChild(dot);
        });
    }

    function updateHeroSlideContent(slide) {
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            setTimeout(() => {
                heroTitle.textContent = slide.title || "OUR LOVE STORY";
                heroTitle.style.opacity = '1';
            }, 200);
        }
        if (heroDescription) {
            heroDescription.style.opacity = '0';
            setTimeout(() => {
                heroDescription.textContent = slide.desc || "";
                heroDescription.style.opacity = '1';
            }, 200);
        }
        if (heroMetaMatch && slide.tag) {
            heroMetaMatch.textContent = slide.tag;
        }
        if (heroPosterTag) {
            heroPosterTag.textContent = `EPISODE ${currentHeroSlideIdx + 1}`;
        }

        // Update active dot
        if (heroSlideDots) {
            const dots = heroSlideDots.querySelectorAll('.hero-dot');
            dots.forEach((d, idx) => {
                if (idx === currentHeroSlideIdx) d.classList.add('active');
                else d.classList.remove('active');
            });
        }
    }

    function goToHeroSlide(idx) {
        if (heroSlides.length === 0) return;
        currentHeroSlideIdx = (idx + heroSlides.length) % heroSlides.length;
        const slide = heroSlides[currentHeroSlideIdx];

        if (activePosterIsA) {
            // Transition to Poster B
            if (heroPosterImgB) {
                heroPosterImgB.src = slide.image;
                heroPosterImgB.classList.add('active');
            }
            if (heroPosterImgA) heroPosterImgA.classList.remove('active');
            activePosterIsA = false;
        } else {
            // Transition to Poster A
            if (heroPosterImgA) {
                heroPosterImgA.src = slide.image;
                heroPosterImgA.classList.add('active');
            }
            if (heroPosterImgB) heroPosterImgB.classList.remove('active');
            activePosterIsA = true;
        }

        updateHeroSlideContent(slide);
    }

    function startHeroSlideshow() {
        if (heroSlides.length <= 1) return;
        if (heroSlideshowTimer) clearInterval(heroSlideshowTimer);
        heroSlideshowTimer = setInterval(() => {
            goToHeroSlide(currentHeroSlideIdx + 1);
        }, 4200);
    }

    function restartHeroTimer() {
        startHeroSlideshow();
    }

    // Initialize Hero
    if (heroSlides.length > 0) {
        if (heroPosterImgA) {
            heroPosterImgA.src = heroSlides[0].image;
            heroPosterImgA.classList.add('active');
        }
        updateHeroSlideContent(heroSlides[0]);
        renderHeroDots();
        startHeroSlideshow();
    }

    // ----------------------------------------------------------------------
    // 3. BACKGROUND CANVAS ENGINE (SOFT BOKEH SPARKS)
    // ----------------------------------------------------------------------
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.8,
            speedY: Math.random() * 0.25 + 0.08,
            opacity: Math.random() * 0.5 + 0.15,
            color: Math.random() > 0.6 ? '#e50914' : '#ffffff'
        });
    }

    function animateCanvas() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y -= p.speedY;
            if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(animateCanvas);
    }
    animateCanvas();

    // ----------------------------------------------------------------------
    // 4. SOUNDTRACK AUDIO CONTROLLER
    // ----------------------------------------------------------------------
    const bgAudio = new Audio(mConfig.bgAudioSrc || 'music/romantic.mp3');
    bgAudio.loop = true;

    const soundtrackToggleBtn = document.getElementById('soundtrack-toggle-btn');
    const audioPlayIcon = document.getElementById('audio-play-icon');
    const soundBars = document.getElementById('sound-bars');
    const playerAudioToggle = document.getElementById('player-audio-toggle');

    function playAudio() {
        bgAudio.play().then(() => {
            if (soundBars) soundBars.classList.add('playing');
            if (audioPlayIcon) {
                audioPlayIcon.classList.remove('fa-play');
                audioPlayIcon.classList.add('fa-pause');
            }
        }).catch(() => {});
    }

    function toggleAudio() {
        if (bgAudio.paused) {
            playAudio();
        } else {
            bgAudio.pause();
            if (soundBars) soundBars.classList.remove('playing');
            if (audioPlayIcon) {
                audioPlayIcon.classList.remove('fa-pause');
                audioPlayIcon.classList.add('fa-play');
            }
        }
    }

    if (soundtrackToggleBtn) soundtrackToggleBtn.addEventListener('click', toggleAudio);
    if (playerAudioToggle) playerAudioToggle.addEventListener('click', toggleAudio);

    ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
        window.addEventListener(evt, () => {
            if (bgAudio.paused) playAudio();
        }, { passive: true, once: true });
    });

    // ----------------------------------------------------------------------
    // 5. NETFLIX PROFILE PIN GATE & INSTANT UNLOCK
    // ----------------------------------------------------------------------
    const profileGate = document.getElementById('netflix-profile-gate');
    const pinBox = document.getElementById('pin-box');
    const primaryProfileBtn = document.getElementById('primary-profile-btn');
    const profileUnlockBtn = document.getElementById('profile-unlock-btn');
    const switchProfileBtn = document.getElementById('switch-profile-btn');
    const pinDots = document.querySelectorAll('.pin-dots-display .dot');
    let enteredPIN = "";

    if (primaryProfileBtn) {
        primaryProfileBtn.addEventListener('click', () => {
            if (pinBox) pinBox.style.display = 'flex';
        });
    }

    function updatePINDots() {
        pinDots.forEach((dot, idx) => {
            if (idx < enteredPIN.length) dot.classList.add('filled');
            else dot.classList.remove('filled');
        });
    }

    function unlockNetflix() {
        const correctPIN = (cfg.passcode || '1818').trim();
        const pinTrimmed = enteredPIN.trim();

        if (pinTrimmed === correctPIN) {
            // Correct secret PIN 1818 entered!
            playAudio();
            if (profileGate) {
                profileGate.style.opacity = '0';
                setTimeout(() => {
                    profileGate.classList.remove('active');
                }, 400);
            }
        } else {
            // Incorrect PIN - Trigger error shake and reset
            const pinInstruction = document.querySelector('.pin-instruction');
            if (pinInstruction) {
                pinInstruction.innerHTML = '<i class="fas fa-circle-exclamation" style="color:#e50914;"></i> Incorrect PIN. Try again.';
                pinInstruction.style.color = "#e50914";
            }
            pinDots.forEach(d => d.classList.add('error'));
            setTimeout(() => {
                pinDots.forEach(d => d.classList.remove('error'));
                enteredPIN = "";
                updatePINDots();
            }, 600);
        }
    }

    function handleKeypadInput(key) {
        if (!key) return;
        if (key === 'clear' || key === 'Backspace' || key === 'Delete') {
            if (enteredPIN.length > 0) {
                enteredPIN = enteredPIN.slice(0, -1);
                updatePINDots();
            }
        } else if (key === 'Enter') {
            if (enteredPIN.length > 0) unlockNetflix();
        } else if (/^[0-9]$/.test(key)) {
            if (enteredPIN.length < 4) {
                enteredPIN += key;
                updatePINDots();
                if (enteredPIN.length === 4) {
                    setTimeout(unlockNetflix, 200);
                }
            }
        }
    }

    document.querySelectorAll('.key-btn').forEach(btn => {
        const key = btn.dataset.key || btn.getAttribute('data-key');
        btn.addEventListener('pointerdown', (e) => {
            if (e) e.preventDefault();
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 150);
            handleKeypadInput(key);
        });
    });

    window.addEventListener('keydown', (e) => {
        if (!profileGate || !profileGate.classList.contains('active')) return;
        let key = e.key;
        if (key >= '0' && key <= '9') handleKeypadInput(key);
        else if (key === 'Backspace' || key === 'Delete') handleKeypadInput('clear');
        else if (key === 'Enter' || key === ' ') handleKeypadInput('Enter');
    });

    if (profileUnlockBtn) {
        profileUnlockBtn.addEventListener('click', (e) => {
            if (e) e.preventDefault();
            unlockNetflix();
        });
    }

    if (switchProfileBtn) {
        switchProfileBtn.addEventListener('click', () => {
            if (profileGate) {
                profileGate.classList.add('active');
                profileGate.style.opacity = '1';
                enteredPIN = "";
                updatePINDots();
            }
        });
    }

    // ----------------------------------------------------------------------
    // 6. ALTERNATING SHUFFLE ENGINE (HERS -> MINE -> HERS -> MINE ON REFRESH)
    // ----------------------------------------------------------------------
    function shuffleArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function createAlternatingShuffledMemories() {
        const herItems = shuffleArray(memories.filter(m => m.category !== 'boyfriend'));
        const hisItems = shuffleArray(memories.filter(m => m.category === 'boyfriend'));

        const alternatingList = [];
        let herIdx = 0;
        let hisIdx = 0;

        while (herIdx < herItems.length) {
            // Add Her Image
            alternatingList.push(herItems[herIdx]);
            herIdx++;

            // Add My Image (cycling through his shuffled items so the pattern never breaks)
            if (hisItems.length > 0) {
                alternatingList.push(hisItems[hisIdx % hisItems.length]);
                hisIdx++;
            }
        }
        return alternatingList;
    }

    // Master collection strictly alternating: Her Image -> My Image -> Her Image -> My Image
    const alternatingMemories = createAlternatingShuffledMemories();

    const trendingSlider = document.getElementById('trending-slider');
    const top10Slider = document.getElementById('top10-slider');
    const medicineSlider = document.getElementById('medicine-slider');
    const boyfriendSlider = document.getElementById('boyfriend-slider');
    const videosSlider = document.getElementById('videos-slider');
    const specialsSlider = document.getElementById('specials-slider');

    function buildStandardCard(mem) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.dataset.id = mem.id;
        const isVid = mem.type === 'video';
        
        if (isVid) {
            card.classList.add('video-card-item');
            card.innerHTML = `
                <video src="${mem.media}" muted loop playsinline preload="metadata" class="video-reel-element"></video>
                <div class="video-live-badge"><i class="fas fa-circle" style="color:#e50914;font-size:6px;margin-right:4px;"></i>LIVE</div>
                <div class="movie-card-overlay">
                    <span class="movie-card-title"><i class="fas fa-play" style="font-size:9px;margin-right:3px;color:#e50914"></i>${mem.scene}: ${mem.title}</span>
                    <span class="movie-card-tag">${mem.tag}</span>
                </div>
            `;
            const vid = card.querySelector('video');
            card.addEventListener('mouseenter', () => {
                if (vid && vid.paused) vid.play().catch(() => {});
            });
        } else {
            card.innerHTML = `
                <img src="${mem.image}" alt="${mem.title}" loading="lazy">
                <div class="movie-card-overlay">
                    <span class="movie-card-title">${mem.scene}: ${mem.title}</span>
                    <span class="movie-card-tag">${mem.tag}</span>
                </div>
            `;
        }

        card.addEventListener('click', () => {
            const originalIndex = memories.findIndex(m => m.id === mem.id);
            openPlayerModal(originalIndex >= 0 ? originalIndex : 0);
        });
        return card;
    }

    function buildVideoCard(mem) {
        const card = document.createElement('div');
        card.className = 'movie-card video-reel-card video-card-item';
        card.dataset.id = mem.id;
        card.innerHTML = `
            <video src="${mem.media}" muted loop playsinline preload="metadata" class="video-reel-element"></video>
            <div class="video-live-badge"><i class="fas fa-circle" style="color:#e50914;font-size:6px;margin-right:4px;"></i>LIVE REEL</div>
            <div class="movie-card-overlay">
                <span class="movie-card-title"><i class="fas fa-play" style="font-size:9px;margin-right:3px;color:#e50914"></i>${mem.scene}: ${mem.title}</span>
                <span class="movie-card-tag">${mem.tag}</span>
            </div>
        `;

        const vid = card.querySelector('video');

        // Hover playback booster
        card.addEventListener('mouseenter', () => {
            if (vid && vid.paused) {
                vid.play().catch(() => {});
            }
        });

        card.addEventListener('click', () => {
            const originalIndex = memories.findIndex(m => m.id === mem.id);
            openPlayerModal(originalIndex >= 0 ? originalIndex : 0);
        });
        return card;
    }

    // High-Performance Smooth Video Streaming Manager
    let videoStreamObserver = null;
    function initVideoStreamObserver() {
        if (!('IntersectionObserver' in window)) return;
        if (videoStreamObserver) videoStreamObserver.disconnect();

        videoStreamObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const vid = entry.target.querySelector('video');
                if (!vid) return;

                if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                    // Smoothly start playback for on-screen video
                    const playPromise = vid.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(() => {});
                    }
                } else {
                    // Instantly pause off-screen videos to preserve 100% GPU bandwidth
                    vid.pause();
                }
            });
        }, {
            root: null,
            threshold: [0, 0.35, 0.75]
        });

        document.querySelectorAll('.video-card-item').forEach(card => {
            videoStreamObserver.observe(card);
        });
    }

    function buildTop10Card(mem, rank) {
        const card = document.createElement('div');
        card.className = 'top10-card';
        card.dataset.id = mem.id;
        const isVid = mem.type === 'video';

        if (isVid) {
            card.classList.add('video-card-item');
            card.innerHTML = `
                <span class="top10-rank-num">${rank}</span>
                <div class="top10-poster">
                    <video src="${mem.media}" muted loop playsinline preload="metadata" class="video-reel-element"></video>
                    <div class="video-live-badge"><i class="fas fa-circle" style="color:#e50914;font-size:6px;margin-right:4px;"></i>LIVE</div>
                    <div class="movie-card-overlay">
                        <span class="movie-card-title"><i class="fas fa-play" style="font-size:9px;margin-right:3px;color:#e50914"></i>${mem.scene}</span>
                        <span class="movie-card-tag">${mem.tag}</span>
                    </div>
                </div>
            `;
            const vid = card.querySelector('video');
            card.addEventListener('mouseenter', () => {
                if (vid && vid.paused) vid.play().catch(() => {});
            });
        } else {
            card.innerHTML = `
                <span class="top10-rank-num">${rank}</span>
                <div class="top10-poster">
                    <img src="${mem.image}" alt="${mem.title}" loading="lazy">
                    <div class="movie-card-overlay">
                        <span class="movie-card-title">${mem.scene}</span>
                        <span class="movie-card-tag">${mem.tag}</span>
                    </div>
                </div>
            `;
        }

        card.addEventListener('click', () => {
            const originalIndex = memories.findIndex(m => m.id === mem.id);
            openPlayerModal(originalIndex >= 0 ? originalIndex : 0);
        });
        return card;
    }

    function renderAllRows() {
        // Row 1: Trending Now (Alternating: Her -> Mine -> Her -> Mine)
        if (trendingSlider) {
            trendingSlider.innerHTML = '';
            alternatingMemories.slice(0, 12).forEach(m => trendingSlider.appendChild(buildStandardCard(m)));
        }

        // Row 2: Top 10 in Our Hearts Today (Alternating: Her -> Mine -> Her -> Mine with #1-10)
        if (top10Slider) {
            top10Slider.innerHTML = '';
            alternatingMemories.slice(12, 22).forEach((m, idx) => top10Slider.appendChild(buildTop10Card(m, idx + 1)));
        }

        // Row 3: Women in Medicine • My Favorite Doctor 🩺
        if (medicineSlider) {
            medicineSlider.innerHTML = '';
            shuffleArray(memories.filter(m => m.category === 'medicine' || m.id === 2 || m.id === 3 || m.id === 7 || m.id === 16))
                .forEach(m => medicineSlider.appendChild(buildStandardCard(m)));
        }

        // Row 4: Your Guy • The Boyfriend ❤️
        if (boyfriendSlider) {
            boyfriendSlider.innerHTML = '';
            shuffleArray(memories.filter(m => m.category === 'boyfriend'))
                .forEach(m => boyfriendSlider.appendChild(buildStandardCard(m)));
        }

        // Row 5: Live Video Reels (Enlarged Cards with Smart Viewport Video Previews)
        if (videosSlider) {
            videosSlider.innerHTML = '';
            shuffleArray(memories.filter(m => m.type === 'video' || m.category === 'videos'))
                .forEach(m => videosSlider.appendChild(buildVideoCard(m)));
            
            // Attach observer to video cards
            setTimeout(initVideoStreamObserver, 100);
        }

        // Row 6: The Complete Love Anthology (Full Alternating Shuffled Collection)
        if (specialsSlider) {
            specialsSlider.innerHTML = '';
            alternatingMemories.forEach(m => specialsSlider.appendChild(buildStandardCard(m)));
        }
    }

    // Row Slider Arrow Scroll Buttons
    document.querySelectorAll('.slider-arrow').forEach(arrow => {
        arrow.addEventListener('click', () => {
            const targetId = arrow.dataset.row;
            const slider = document.getElementById(targetId);
            if (!slider) return;
            const scrollAmount = 480;
            if (arrow.classList.contains('arrow-prev')) {
                slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
            if (targetId === 'videos-slider') {
                setTimeout(initVideoStreamObserver, 350);
            }
        });
    });

    if (videosSlider) {
        videosSlider.addEventListener('scroll', () => {
            if (window._videoScrollTimeout) clearTimeout(window._videoScrollTimeout);
            window._videoScrollTimeout = setTimeout(initVideoStreamObserver, 200);
        }, { passive: true });
    }

    renderAllRows();

    // ----------------------------------------------------------------------
    // 7. NETFLIX VIDEO PLAYER & EPISODE MODAL
    // ----------------------------------------------------------------------
    const playerModal = document.getElementById('netflix-player-modal');
    const closePlayerModal = document.getElementById('close-player-modal');
    const playerModalImg = document.getElementById('player-modal-img');
    const playerModalVideo = document.getElementById('player-modal-video');
    const playerSubtitleText = document.getElementById('player-subtitle-text');
    const playerEpisodeTag = document.getElementById('player-episode-tag');
    const modalEpisodeTitle = document.getElementById('modal-episode-title');
    const modalStoryBody = document.getElementById('modal-story-body');
    const modalEpisodesList = document.getElementById('modal-episodes-list');

    const playerPrevBtn = document.getElementById('player-prev-btn');
    const playerNextBtn = document.getElementById('player-next-btn');

    let currentEpisodeIdx = 5; // Default Memory 6
    let subtitleInterval = null;

    function openPlayerModal(idx) {
        if (memories.length === 0) return;
        currentEpisodeIdx = (idx + memories.length) % memories.length;
        const item = memories[currentEpisodeIdx];

        if (item.type === 'video' && item.media) {
            if (playerModalImg) playerModalImg.style.display = 'none';
            if (playerModalVideo) {
                playerModalVideo.style.display = 'block';
                playerModalVideo.src = item.media;
                playerModalVideo.play().catch(() => {});
            }
        } else {
            if (playerModalVideo) {
                playerModalVideo.pause();
                playerModalVideo.style.display = 'none';
            }
            if (playerModalImg) {
                playerModalImg.style.display = 'block';
                playerModalImg.style.opacity = '0.3';
                setTimeout(() => {
                    playerModalImg.src = item.image;
                    playerModalImg.style.opacity = '1';
                }, 150);
            }
        }

        if (playerEpisodeTag) playerEpisodeTag.textContent = `${item.scene} • "${item.title}"`;
        if (modalEpisodeTitle) modalEpisodeTitle.textContent = `${item.scene} • ${item.storyTitle || item.title}`;
        if (modalStoryBody) modalStoryBody.textContent = `"${item.storyText}"`;

        // Start Subtitles Typewriter
        typeSubtitles(item.storyText);

        // Build Episodes List inside Modal
        buildModalEpisodesList();

        if (playerModal) playerModal.classList.add('active');
    }

    function typeSubtitles(text) {
        if (!playerSubtitleText) return;
        playerSubtitleText.textContent = "";
        if (subtitleInterval) clearInterval(subtitleInterval);

        let i = 0;
        subtitleInterval = setInterval(() => {
            if (i < text.length) {
                playerSubtitleText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(subtitleInterval);
            }
        }, 30);
    }

    function buildModalEpisodesList() {
        if (!modalEpisodesList) return;
        modalEpisodesList.innerHTML = '';

        memories.forEach((mem, idx) => {
            const row = document.createElement('div');
            row.className = `episode-item-row ${idx === currentEpisodeIdx ? 'active' : ''}`;
            row.innerHTML = `
                <span class="ep-num">${idx + 1}</span>
                <div class="ep-thumbnail">
                    <img src="${mem.image}" alt="${mem.title}">
                </div>
                <div class="ep-info">
                    <h4>${mem.type === 'video' ? '<i class="fas fa-play" style="font-size:9px;margin-right:4px;color:#e50914"></i>' : ''}${mem.title}</h4>
                    <p>${mem.storyText}</p>
                </div>
                <span class="ep-duration">${mem.duration || 'Full HD'}</span>
            `;

            row.addEventListener('click', () => {
                openPlayerModal(idx);
            });

            modalEpisodesList.appendChild(row);
        });
    }

    function closePlayer() {
        if (playerModal) playerModal.classList.remove('active');
        if (playerModalVideo) playerModalVideo.pause();
        if (subtitleInterval) clearInterval(subtitleInterval);
    }

    if (closePlayerModal) closePlayerModal.addEventListener('click', closePlayer);
    if (playerModal) {
        playerModal.addEventListener('click', (e) => {
            if (e.target === playerModal) closePlayer();
        });
    }

    if (heroPlayBtn) heroPlayBtn.addEventListener('click', () => openPlayerModal(currentHeroSlideIdx));
    if (heroInfoBtn) heroInfoBtn.addEventListener('click', () => openPlayerModal(currentHeroSlideIdx));

    if (playerPrevBtn) {
        playerPrevBtn.addEventListener('click', () => openPlayerModal(currentEpisodeIdx - 1));
    }
    if (playerNextBtn) {
        playerNextBtn.addEventListener('click', () => openPlayerModal(currentEpisodeIdx + 1));
    }

    window.addEventListener('keydown', (e) => {
        if (!playerModal || !playerModal.classList.contains('active')) return;
        if (e.key === 'Escape') closePlayer();
        else if (e.key === 'ArrowLeft') openPlayerModal(currentEpisodeIdx - 1);
        else if (e.key === 'ArrowRight') openPlayerModal(currentEpisodeIdx + 1);
    });

    // Sidebar navigation active state
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
