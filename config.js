/**
 * NETFLIX LOVE EDITION • COMPLETE ANNIVERSARY DATABASE
 * ---------------------------------------------------
 * Photos of Her (1-17 & specials): Celebrates her beauty, medicine journey, and grace.
 * Photos of Him (001-011): Talks about him as her loving boyfriend, tech guy, and biggest fan.
 * Video Reels: Live moments in motion.
 */

var ANNIVERSARY_CONFIG = {
    partnerName: "My Gorgeous Doctor",
    yourName: "Your Boyfriend",
    startDate: "2026-02-14",
    passcode: "1818",

    music: {
        bgTitle: "Love Theme • Dedicated to You",
        bgAudioSrc: "music/romantic.mp3",
        songTitle: "A Song Written For You ❤️",
        songArtist: "Dedicated Only To You",
        songAudioSrc: "music/CapCut2.mp3"
    },

    // Hero Billboard Slideshow (Always includes her and your signature moments)
    heroSlides: [
        {
            image: "assets/photos/138B5F6E-41EB-4D4F-A512-09645D474E43.png",
            title: "DRESSED UP & FOREVER YOURS",
            tag: "Your #1 Fan • 100% Dedicated to You",
            desc: "Dressed up and counting down every second until our next date. No matter how many miles separate us, my eyes, my heart, and my entire world will always belong to you, my gorgeous doctor."
        },
        {
            image: "assets/photos/6.jpg",
            title: "MY FAVORITE SMILE IN THE UNIVERSE",
            tag: "99% Match for You • Season 1 (6 Months)",
            desc: "Whenever I have a rough day or feel weighed down by work, all I need is one photo or video call of you smiling like this. It melts away all my stress in a heartbeat. You are my sunshine and my whole world."
        },
        {
            image: "assets/photos/2.PNG",
            title: "MY SUPERWOMAN IN SCRUBS",
            tag: "Brilliant • Beautiful • Compassionate",
            desc: "Every time I see you in your scrubs, I fall in love all over again. You are not just the prettiest girl in the world; you are brilliant, kind, and tirelessly saving lives. I am so proud to be yours."
        },
        {
            image: "assets/photos/4.JPG",
            title: "EFFORTLESS PERFECTION",
            tag: "Pure Natural Beauty",
            desc: "No filters, cozy clothes, and that natural glow... and yet you effortlessly take my breath away every single second. Promise me you will always remember how truly stunning you are."
        },
        {
            image: "assets/photos/1.JPG",
            title: "THE DAY YOU SAID YES",
            tag: "Where Our Forever Began",
            desc: "I remember my heart racing when I asked you to be my girl. Despite every mile separating us, choosing you was the easiest and truest decision I have ever made in my entire life."
        },
        {
            image: "assets/photos/5.jpeg",
            title: "THAT IRRESISTIBLE GLOW",
            tag: "Confidence & Poise",
            desc: "The elegance, the charm, and the way you carry yourself with so much grace leave me completely speechless. I honestly pinch myself every single day knowing that you are my girl."
        },
        {
            image: "assets/photos/10.jpg",
            title: "SWEET SERENITY",
            tag: "The Calm in My World",
            desc: "They say home is a place, but for me, home is hearing your sweet voice at the end of a long day and talking about everything and nothing until we both fall asleep."
        },
        {
            image: "assets/photos/3.JPG",
            title: "DOCTOR IN THE MAKING",
            tag: "Passion & Relentless Ambition",
            desc: "Watching you walk the hospital halls and push forward through long shifts makes me so proud to stand beside you. You will always have me in your corner cheering the loudest."
        },
        {
            image: "assets/photos/11.jpg",
            title: "MY SAFE PLACE TO LAND",
            tag: "Pure Peace & Comfort",
            desc: "In a chaotic world that's always in a rush, you are my safe haven. Thank you for listening to me, understanding me, and giving me your pure, honest love every day."
        }
    ],

    // Complete 47 Media Items Database
    memories: [
        // ==========================================
        // SECTION 1: PHOTOS OF HER (Episodes 1 to 23)
        // ==========================================
        {
            id: 1,
            scene: "Episode 1",
            title: "The Spark • The Day You Said Yes",
            category: "trending",
            tag: "Where It All Started",
            type: "image",
            media: "assets/photos/1.JPG",
            image: "assets/photos/1.JPG",
            storyTitle: "The Best Risk I Ever Took",
            storyText: "I remember my heart racing when I asked you to be my girl. Despite every mile separating us, choosing you was the easiest and truest decision I've ever made in my entire life. Distance doesn't scare me at all because every single piece of my heart belongs to you."
        },
        {
            id: 2,
            scene: "Episode 2",
            title: "My Superwoman in Scrubs 🩺",
            category: "medicine",
            tag: "Dedication, Beauty & Grace",
            type: "image",
            media: "assets/photos/2.PNG",
            image: "assets/photos/2.PNG",
            storyTitle: "In Complete Awe of You",
            storyText: "Every time I see you in your scrubs, I fall in love all over again. You're not just the prettiest girl in the room; you're brilliant, compassionate, and tirelessly working to heal and help others. You inspire me to be a better man every single day."
        },
        {
            id: 3,
            scene: "Episode 3",
            title: "Doctor in the Making 👩‍⚕️",
            category: "medicine",
            tag: "Passion & Relentless Ambition",
            type: "image",
            media: "assets/photos/3.JPG",
            image: "assets/photos/3.JPG",
            storyTitle: "Your Biggest Cheerleader",
            storyText: "Medicine is demanding, the shifts are long, but watching you push forward with that quiet confidence makes me so proud to stand beside you. Whatever life throws at you, remember you'll always have me in your corner cheering the loudest."
        },
        {
            id: 4,
            scene: "Episode 4",
            title: "Effortlessly Breathtaking ✨",
            category: "trending",
            tag: "Pure, Natural Perfection",
            type: "image",
            media: "assets/photos/4.JPG",
            image: "assets/photos/4.JPG",
            storyTitle: "Flawless Without Trying",
            storyText: "No filters, no makeup, cozy clothes... and yet you effortlessly take my breath away every single time. The whole world feels so much softer and brighter whenever you look at me like that."
        },
        {
            id: 5,
            scene: "Episode 5",
            title: "That Irresistible Glow 🔥",
            category: "trending",
            tag: "Pure Confidence & Charm",
            type: "image",
            media: "assets/photos/5.jpeg",
            image: "assets/photos/5.jpeg",
            storyTitle: "How Did I Get So Lucky?",
            storyText: "The elegance, the charm, the way you carry yourself with so much poise... you leave me completely speechless. I honestly pinch myself every single day knowing that the most gorgeous woman on earth is my girl."
        },
        {
            id: 6,
            scene: "Episode 6",
            title: "My Favorite Smile 💖",
            category: "top10",
            tag: "Instant Serotonin",
            type: "image",
            media: "assets/photos/6.jpg",
            image: "assets/photos/6.jpg",
            storyTitle: "Instant Sunshine",
            storyText: "Whenever I have a rough day or feel weighed down by work, all I need is one photo or video call of you smiling like this. It melts away all my stress in a heartbeat. Promise me you'll never stop smiling."
        },
        {
            id: 7,
            scene: "Episode 7",
            title: "Quiet Strength & Resilience 💪",
            category: "medicine",
            tag: "Power, Poise & Character",
            type: "image",
            media: "assets/photos/7.jpg",
            image: "assets/photos/7.jpg",
            storyTitle: "Deep Admiration",
            storyText: "Beyond your stunning beauty, it's your strong mind and generous heart that truly captured my soul. You handle tough moments with so much grace. I look up to you more than words could ever explain."
        },
        {
            id: 8,
            scene: "Episode 8",
            title: "Always on My Mind 🌙",
            category: "top10",
            tag: "My Favorite Thought All Day",
            type: "image",
            media: "assets/photos/8.jpg",
            image: "assets/photos/8.jpg",
            storyTitle: "A Constant Warmth",
            storyText: "Even in the middle of a packed workday or writing complex code, thoughts of you randomly pop into my head and make me smile like an idiot. You've made a permanent home in my heart."
        },
        {
            id: 9,
            scene: "Episode 9",
            title: "Cherished Snapshots 📸",
            category: "top10",
            tag: "Timeless Chapters of Love",
            type: "image",
            media: "assets/photos/9.jpg",
            image: "assets/photos/9.jpg",
            storyTitle: "Priceless Moments",
            storyText: "Every picture of you feels like a scene from a movie I never want to end. Looking back at how we've grown together over these 6 months fills me with so much gratitude and happiness."
        },
        {
            id: 10,
            scene: "Episode 10",
            title: "Sweet Serenity 🌸",
            category: "specials",
            tag: "The Calm in My World",
            type: "image",
            media: "assets/photos/10.jpg",
            image: "assets/photos/10.jpg",
            storyTitle: "Home Isn't a Place...",
            storyText: "They say home is a place, but for me, home is hearing your sweet voice at the end of a long day and talking about everything and nothing until we both drift off to sleep."
        },
        {
            id: 11,
            scene: "Episode 11",
            title: "My Safe Place to Land 🤍",
            category: "specials",
            tag: "Unconditional Comfort",
            type: "image",
            media: "assets/photos/11.jpg",
            image: "assets/photos/11.jpg",
            storyTitle: "You Are My Peace",
            storyText: "In a chaotic world that's always in a rush, you are my safe haven. Thank you for listening to me, understanding me, and giving me your pure, honest love every single day."
        },
        {
            id: 12,
            scene: "Episode 12",
            title: "Golden Memories 🎞️",
            category: "specials",
            tag: "Every Second Counts",
            type: "image",
            media: "assets/photos/12.jpg",
            image: "assets/photos/12.jpg",
            storyTitle: "Collecting Starlight",
            storyText: "I save every photo, replay every voicemail, and treasure every second with you. You make life feel like an award-winning movie where every scene is sweeter than the last."
        },
        {
            id: 13,
            scene: "Episode 13",
            title: "6 Months Down, Forever to Go 🎬",
            category: "specials",
            tag: "Half a Year of Pure Magic",
            type: "image",
            media: "assets/photos/13.jpg",
            image: "assets/photos/13.jpg",
            storyTitle: "Our Forever Premiere",
            storyText: "13 memories, 180+ days, thousands of texts, and infinite laughs. 6 months in, and I love you even more today than when we first started. Happy Anniversary, my gorgeous girl! ❤️"
        },
        {
            id: 14,
            scene: "Episode 14",
            title: "Radiant Elegance 🌹",
            category: "trending",
            tag: "Pure Beauty & Grace",
            type: "image",
            media: "assets/photos/14.jpg",
            image: "assets/photos/14.jpg",
            storyTitle: "Unforgettable Glow",
            storyText: "Your natural elegance and poise always shine so brightly. You bring joy and light into my life with every single picture you send me."
        },
        {
            id: 15,
            scene: "Episode 15",
            title: "A Heart of Pure Gold 💛",
            category: "top10",
            tag: "Gentle Soul & Sweet Style",
            type: "image",
            media: "assets/photos/15.JPG",
            image: "assets/photos/15.JPG",
            storyTitle: "Sweetest Spirit",
            storyText: "Your kindness, your style, and your warm spirit touch my heart deeply. Having you as my girlfriend is the greatest blessing in my life."
        },
        {
            id: 16,
            scene: "Episode 16",
            title: "Doctor Life & Pure Dedication 🏥",
            category: "medicine",
            tag: "Healing & Caring for Others",
            type: "image",
            media: "assets/photos/16.PNG",
            image: "assets/photos/16.PNG",
            storyTitle: "Unmatched Dedication",
            storyText: "Long hospital shifts, endless dedication, and yet you still have so much love and patience in your heart. You are extraordinary in every way."
        },
        {
            id: 17,
            scene: "Episode 17",
            title: "Flawless Confidence 👑",
            category: "trending",
            tag: "My Unstoppable Queen",
            type: "image",
            media: "assets/photos/17.jpeg",
            image: "assets/photos/17.jpeg",
            storyTitle: "Proud of My Girl",
            storyText: "Every single day I look at your photos and marvel at how powerful, smart, stylish, and breathtaking you are. You own my entire heart."
        },
        {
            id: 18,
            scene: "Episode 18",
            title: "A Vision of Beauty 🌺",
            category: "candids",
            tag: "Doctor of My Heart",
            type: "image",
            media: "assets/photos/a0c8202b-a36b-4814-a058-7754e6d210ef.jpg",
            image: "assets/photos/a0c8202b-a36b-4814-a058-7754e6d210ef.jpg",
            storyTitle: "Timeless Charm",
            storyText: "Sitting so gracefully, looking as stunning as ever. You make every ordinary moment feel special."
        },
        {
            id: 19,
            scene: "Episode 19",
            title: "Sweet Reflections 🪞",
            category: "candids",
            tag: "Soft & Sweet Heart",
            type: "image",
            media: "assets/photos/5a0ed36a-039e-41fb-a363-2266aa0a86da.jpg",
            image: "assets/photos/5a0ed36a-039e-41fb-a363-2266aa0a86da.jpg",
            storyTitle: "Pure Sweetheart",
            storyText: "Every mirror selfie and sweet picture you send is a treasure that makes my whole day brighter."
        },
        {
            id: 20,
            scene: "Boyfriend Special",
            title: "Dressed Up & Yours Forever 🥂",
            category: "boyfriend",
            tag: "Your #1 Fan",
            type: "image",
            media: "assets/photos/138B5F6E-41EB-4D4F-A512-09645D474E43.png",
            image: "assets/photos/138B5F6E-41EB-4D4F-A512-09645D474E43.png",
            storyTitle: "Forever In Love with My Doctor",
            storyText: "Dressed up and counting down every second until our next date. No matter how many miles separate us, my eyes, my heart, and my entire world will always belong to you, my gorgeous doctor."
        },
        {
            id: 21,
            scene: "Episode 21",
            title: "Pure Perfection 💎",
            category: "candids",
            tag: "A Precious Gem",
            type: "image",
            media: "assets/photos/IMG_0878.jpg",
            image: "assets/photos/IMG_0878.jpg",
            storyTitle: "My Greatest Treasure",
            storyText: "You are my best friend, my peace, and my forever person. Thank you for choosing to love me."
        },
        {
            id: 22,
            scene: "Episode 22",
            title: "Special Moments with You ✨",
            category: "candids",
            tag: "Cherished Keepsake",
            type: "image",
            media: "assets/photos/F15EE18B-5037-48D9-91F2-666A57342DE5.png",
            image: "assets/photos/F15EE18B-5037-48D9-91F2-666A57342DE5.png",
            storyTitle: "Forever in Love",
            storyText: "6 months down, and I fall deeper in love with you with every conversation and memory we share."
        },
        {
            id: 23,
            scene: "Episode 23",
            title: "The One and Only 🌟",
            category: "candids",
            tag: "One in 8 Billion",
            type: "image",
            media: "assets/photos/File_000.png",
            image: "assets/photos/File_000.png",
            storyTitle: "My Soulmate",
            storyText: "Out of everyone in this world, my heart found its home in you. I love you endlessly, my beautiful doctor."
        },

        // ==========================================
        // SECTION 2: PHOTOS OF HIM (THE BOYFRIEND) (Episodes 24 to 34)
        // ==========================================
        {
            id: 24,
            scene: "Boyfriend File 01",
            title: "Your Guy • Head Over Heels 💙",
            category: "boyfriend",
            tag: "Your #1 Fan",
            type: "image",
            media: "assets/photos/001.jpg",
            image: "assets/photos/001.jpg",
            storyTitle: "The Lucky Guy Who Loves You",
            storyText: "Here's the guy who fell hopelessly in love with you 6 months ago. Every single day, I'm working hard, building my dreams, and counting down the moments until I get to see your smile and hear your voice."
        },
        {
            id: 25,
            scene: "Boyfriend File 02",
            title: "Always Thinking of You 💭",
            category: "boyfriend",
            tag: "Yours Completely",
            type: "image",
            media: "assets/photos/002.jpg",
            image: "assets/photos/002.jpg",
            storyTitle: "Forever In My Mind",
            storyText: "No matter what I'm doing or where I am, you are always on my mind. Having you in my corner as my partner gives me all the motivation and drive I need."
        },
        {
            id: 26,
            scene: "Boyfriend File 03",
            title: "Your Biggest Cheerleader 📣",
            category: "boyfriend",
            tag: "Always in Your Corner",
            type: "image",
            media: "assets/photos/003.jpg",
            image: "assets/photos/003.jpg",
            storyTitle: "Rooting For My Doctor",
            storyText: "Whenever hospital shifts get overwhelming or exams feel heavy, remember you have a boyfriend who believes in you with 1000% of his heart. You've got this, my love."
        },
        {
            id: 27,
            scene: "Boyfriend File 04",
            title: "Dressed Up & Thinking of You 👔",
            category: "boyfriend",
            tag: "Looking My Best for You",
            type: "image",
            media: "assets/photos/004.jpg",
            image: "assets/photos/004.jpg",
            storyTitle: "Your Proud Boyfriend",
            storyText: "Trying to look sharp and hoping you approve! Everything I do is to build an incredible future where you and I never have to say goodbye at the airport again."
        },
        {
            id: 28,
            scene: "Boyfriend File 05",
            title: "The Tech Guy Behind Your Heart 💻",
            category: "boyfriend",
            tag: "Code & Love",
            type: "image",
            media: "assets/photos/005.jpg",
            image: "assets/photos/005.jpg",
            storyTitle: "Building This For You",
            storyText: "I write lines of code and build complex systems, but creating this special Netflix premiere just to make you smile on our 6th month anniversary is my favorite project of all time."
        },
        {
            id: 29,
            scene: "Boyfriend File 06",
            title: "Ready to Listen Anytime 📞",
            category: "boyfriend",
            tag: "Your Safe Haven",
            type: "image",
            media: "assets/photos/006.jpg",
            image: "assets/photos/006.jpg",
            storyTitle: "Always a Call Away",
            storyText: "Whether you need to vent about a hard shift, laugh until your stomach hurts, or just sit in comfortable silence on FaceTime, I'm always right here for you."
        },
        {
            id: 30,
            scene: "Boyfriend File 07",
            title: "Proud to Be Yours 👑",
            category: "boyfriend",
            tag: "Loving You Everyday",
            type: "image",
            media: "assets/photos/007.jpg",
            image: "assets/photos/007.jpg",
            storyTitle: "Unshakable Pride",
            storyText: "Telling people about my girlfriend—how smart she is, how pretty she is, and how kind her heart is—is genuinely my favorite thing to do."
        },
        {
            id: 31,
            scene: "Boyfriend File 08",
            title: "Steadfast & Dedicated 🛡️",
            category: "boyfriend",
            tag: "Your Rock",
            type: "image",
            media: "assets/photos/008.jpg",
            image: "assets/photos/008.jpg",
            storyTitle: "A Promise of Loyalty",
            storyText: "My loyalty, my dedication, and my love belong to you and only you. Thank you for giving me your heart and making these past 6 months unforgettable."
        },
        {
            id: 32,
            scene: "Boyfriend File 09",
            title: "Counting Down the Days ⏳",
            category: "boyfriend",
            tag: "Distance is Temporary",
            type: "image",
            media: "assets/photos/009.jpg",
            image: "assets/photos/009.jpg",
            storyTitle: "Together Soon",
            storyText: "Every day that passes is one day closer to holding you in my arms. Distance cannot compete with the depth of what we have."
        },
        {
            id: 33,
            scene: "Boyfriend File 10",
            title: "Your Forever Fan 💫",
            category: "boyfriend",
            tag: "Endless Devotion",
            type: "image",
            media: "assets/photos/010.jpg",
            image: "assets/photos/010.jpg",
            storyTitle: "Half a Year of Magic",
            storyText: "6 months in, and I love you even more today than the day we started. You make me want to grow, achieve, and be the best partner in the world."
        },
        {
            id: 34,
            scene: "Boyfriend File 11",
            title: "To Infinity & Beyond 🚀",
            category: "boyfriend",
            tag: "Our Forever Story",
            type: "image",
            media: "assets/photos/011.jpg",
            image: "assets/photos/011.jpg",
            storyTitle: "Happy 6 Months Anniversary",
            storyText: "Here's to us—to our late night calls, our shared dreams, and a lifetime of love ahead. I love you with all my heart, my pretty doctor! ❤️"
        },

        // ==========================================
        // SECTION 3: ALL 13 LIVE VIDEO REELS (HER REELS & HIS REELS)
        // ==========================================
        // 1. BOYFRIEND VIDEO 1 (Song / Lyrics Dedication)
        {
            id: 35,
            scene: "Boyfriend Reel 01",
            title: "A Song For You 🎵",
            category: "boyfriend",
            tag: "Dedicated To My Girl",
            type: "video",
            media: "assets/videos/vid1.mp4",
            image: "assets/photos/001.jpg",
            storyTitle: "Our Melody in the Night",
            storyText: "Whenever I listen to music or think of our story, every lyric reminds me of you. Sending you this song to let you know you are always in my thoughts."
        },
        // 2. BOYFRIEND VIDEO 2 (Work / Desk Space)
        {
            id: 36,
            scene: "Boyfriend Reel 02",
            title: "Building Our Future 💻",
            category: "boyfriend",
            tag: "Your Tech Guy",
            type: "video",
            media: "assets/videos/vid2.mp4",
            image: "assets/photos/005.jpg",
            storyTitle: "Working Hard For Us",
            storyText: "Late nights at the desk, writing code and building big dreams—all motivated by you and the future we are creating together."
        },
        // 3. BOYFRIEND VIDEO 3 (Puppy Video)
        {
            id: 37,
            scene: "Boyfriend Reel 03",
            title: "Puppy Love 🐶",
            category: "boyfriend",
            tag: "A Little Joy For You",
            type: "video",
            media: "assets/videos/vid3.mp4",
            image: "assets/photos/008.jpg",
            storyTitle: "Making You Smile",
            storyText: "Saw this cute puppy and immediately thought of you! Sending you a little piece of joy to brighten up your busy day."
        },
        // 4. BOYFRIEND VIDEO 4 (Playing The Piano)
        {
            id: 38,
            scene: "Boyfriend Reel 04",
            title: "Playing For You 🎹",
            category: "boyfriend",
            tag: "Notes of Love",
            type: "video",
            media: "assets/videos/vid4.mp4",
            image: "assets/photos/004.jpg",
            storyTitle: "Melodies of My Heart",
            storyText: "Sitting at the keys and playing a song dedicated to my favorite doctor. Every note is filled with love for you."
        },
        // 5. HER VIDEO 1 (Glass House / Patio)
        {
            id: 39,
            scene: "Her Reel 01",
            title: "Cute & Playful Vibes 💖",
            category: "videos",
            tag: "Her Radiant Energy",
            type: "video",
            media: "assets/videos/vid5.mp4",
            image: "assets/photos/11.jpg",
            storyTitle: "Playful Energy",
            storyText: "Your laughter is the sweetest melody I have ever heard. Watching you enjoy life brings pure joy to my heart."
        },
        // 6. HER VIDEO 2 (Mirror / Outfit Reel)
        {
            id: 40,
            scene: "Her Reel 02",
            title: "Golden Moments Reel 🎞️",
            category: "videos",
            tag: "Pure Sophistication",
            type: "video",
            media: "assets/videos/vid7.mp4",
            image: "assets/photos/12.jpg",
            storyTitle: "Always In Style",
            storyText: "Looking as stunning and graceful as ever. You effortlessly take my breath away every single time."
        },
        // 7. HER VIDEO 3 (Scrubs / Hospital)
        {
            id: 41,
            scene: "Her Reel 03",
            title: "My Doctor in Scrubs 🩺",
            category: "medicine",
            tag: "Saving Lives With Grace",
            type: "video",
            media: "assets/videos/vid8.MOV",
            image: "assets/photos/2.PNG",
            storyTitle: "My Real-Life Hero",
            storyText: "Seeing you in your scrubs working hard to care for people makes me so proud to be your boyfriend. You are my superstar."
        },
        // 8. HER VIDEO 4 (Vibrant Energy)
        {
            id: 42,
            scene: "Her Reel 04",
            title: "Radiant Energy In Motion ⚡",
            category: "videos",
            tag: "Instant Serotonin",
            type: "video",
            media: "assets/videos/vid9.mp4",
            image: "assets/photos/14.jpg",
            storyTitle: "Full of Life",
            storyText: "Your vibrant energy and beautiful spirit are contagious. Keep shining bright, my love."
        },
        // 9. HER VIDEO 5 (Sweet Moments)
        {
            id: 43,
            scene: "Her Reel 05",
            title: "Precious Video Diary 🎬",
            category: "videos",
            tag: "Cherished Memories",
            type: "video",
            media: "assets/videos/vid10.mp4",
            image: "assets/photos/13.jpg",
            storyTitle: "Every Second With You",
            storyText: "Every video you send is a keepsake I replay over and over. Thank you for filling my days with so much love."
        },
        // 10. HER VIDEO 6 (Candid Live Clip)
        {
            id: 44,
            scene: "Her Reel 06",
            title: "Candid Video Gem 💎",
            category: "videos",
            tag: "Pure Natural Beauty",
            type: "video",
            media: "assets/videos/046ef3b8-8e40-4c64-951c-b66964f0740a.mp4",
            image: "assets/photos/15.JPG",
            storyTitle: "Pure Authenticity",
            storyText: "I love seeing the real, unscripted you in all your natural beauty and sweetness."
        },
        // 11. BOYFRIEND VIDEO 5 (Driving In The Car B&W)
        {
            id: 45,
            scene: "Boyfriend Reel 05",
            title: "On the Road • Thinking of You 🚗",
            category: "boyfriend",
            tag: "Always On My Mind",
            type: "video",
            media: "assets/videos/0EAF8D88-FFC0-4FFD-8000-49B48778245E.mov",
            image: "assets/photos/007.jpg",
            storyTitle: "Driving With You in My Heart",
            storyText: "Behind the wheel, playing our favorite playlist, and counting down the miles until we are together again."
        },
        // 12. HER VIDEO 7 (Sweet Smile)
        {
            id: 46,
            scene: "Her Reel 07",
            title: "Sweet Smile Video 🌸",
            category: "videos",
            tag: "Heart Melter",
            type: "video",
            media: "assets/videos/11ef8180-bcb7-47e2-ad72-2768b4bed88f.mp4",
            image: "assets/photos/17.jpeg",
            storyTitle: "Instant Joy",
            storyText: "A live capture of your irresistible charm, grace, and gorgeous smile."
        },
        // 13. HER VIDEO 8 (Our Journey)
        {
            id: 47,
            scene: "Her Reel 08",
            title: "Our Journey in Motion 🚀",
            category: "videos",
            tag: "To Infinity & Beyond",
            type: "video",
            media: "assets/videos/fe1cdc2c-6dc0-4170-b042-086a8f545307.mp4",
            image: "assets/photos/3.JPG",
            storyTitle: "Endless Love",
            storyText: "Moving forward together, hand in hand, today, tomorrow, and always. Happy 6 Months Anniversary!"
        }
    ]
};

if (typeof window !== "undefined") {
    window.ANNIVERSARY_CONFIG = ANNIVERSARY_CONFIG;
}
