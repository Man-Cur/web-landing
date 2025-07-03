/**
 * Mango Curation Landing Page Theme
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true,
    PROXIO_WELCOME_TEXT: 'Welcome to Mango Curation. Tap anywhere to begin.',

    PROXIO_HERO_ENABLE: true,
    PROXIO_HERO_TITLE_1: 'Charming Gadgets & Curated Finds',
    PROXIO_HERO_TITLE_2: 'Exploring cuteness and creativity through small things that spark joy',
    PROXIO_HERO_BUTTON_1_TEXT: 'Start Exploring',
    PROXIO_HERO_BUTTON_1_URL: '/products',
    PROXIO_HERO_BUTTON_2_TEXT: 'Follow on GitHub',
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/mango-curation',
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg',
    PROXIO_HERO_BANNER_IMAGE: '',
    PROXIO_HERO_BANNER_IFRAME_URL: '',

    PROXIO_BLOG_ENABLE: true,
    PROXIO_BLOG_TITLE: 'Discoveries',
    PROXIO_BLOG_COUNT: 4,
    PROXIO_BLOG_TEXT_1: 'Our favorite handpicked pieces',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

    PROXIO_ANNOUNCEMENT_ENABLE: true,

    PROXIO_FEATURE_ENABLE: true,
    PROXIO_FEATURE_TITLE: 'Why Mango Curation',
    PROXIO_FEATURE_TEXT_1: 'We help you find small things that brighten your day',
    PROXIO_FEATURE_TEXT_2: 'Adorable gadgets, curated picks, and positive vibes',

    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-heart',
    PROXIO_FEATURE_1_ICON_IMG_URL: '',
    PROXIO_FEATURE_1_TITLE_1: 'Lovable Picks',
    PROXIO_FEATURE_1_TEXT_1: 'Every item is selected with love for its charm and uniqueness.',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-hand-peace',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_2_TITLE_1: 'Feel-Good Design',
    PROXIO_FEATURE_2_TEXT_1: 'Products that make you smile and add joy to daily life.',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-box-open',
    PROXIO_FEATURE_3_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: 'Small-Scale Wonders',
    PROXIO_FEATURE_3_TEXT_1: 'From tiny accessories to delightful trinkets, small is beautiful.',

    PROXIO_FEATURE_BUTTON_TEXT: 'Discover More',
    PROXIO_FEATURE_BUTTON_URL: '/about',

    PROXIO_CAREER_ENABLE: true,
    PROXIO_CAREER_TITLE: 'Journey',
    PROXIO_CAREER_TEXT: 'A glimpse into our journey so far',
    PROXIO_CAREERS: [
        { title: 'Humble Beginnings', bio: '2023', text: 'Started collecting adorable gadgets and playful pieces from markets, makers, and friends.' },
        { title: 'Growing the Collection', bio: '2024', text: 'Expanded into curating items from local artists, small studios, and niche online communities.' },
        { title: 'Spreading Joy', bio: '2025', text: 'Launched Mango Curation as a place to share joy through tiny treasures and friendly vibes.' }
    ],

    PROXIO_TESTIMONIALS_ENABLE: true,
    PROXIO_TESTIMONIALS_TITLE: 'What People Say',
    PROXIO_TESTIMONIALS_TEXT_1: 'Real feedback from our community',
    PROXIO_TESTIMONIALS_TEXT_2: 'Mango Curation has brought joy and playful design into everyday life.',
    PROXIO_TESTIMONIALS_BUTTON_URL: '/contact',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: 'Get in Touch',
    PROXIO_TESTIMONIALS_ITEMS: [],

    PROXIO_FAQ_ENABLE: true,
    PROXIO_FAQ_TITLE: 'FAQ',
    PROXIO_FAQ_TEXT_1: 'Got questions?',
    PROXIO_FAQ_TEXT_2: 'Here are some common inquiries from our community.',
    PROXIO_FAQS: [
        { q: 'What kind of products do you feature?', a: 'Mostly small gadgets, cute objects, and curious accessories we find delightful.' },
        { q: 'Are your items handmade?', a: 'Some are, some are not — but they’re all curated with love and intention.' },
        { q: 'Do you support small creators?', a: 'Absolutely. Many of our picks come from small studios or independent designers.' },
        { q: 'How can I contribute?', a: 'If you have a cute or curious product idea, feel free to contact us!' }
    ],

    PROXIO_ABOUT_ENABLE: true,
    PROXIO_ABOUT_TITLE: 'About Us',
    PROXIO_ABOUT_TEXT_1: 'Curating cuteness, one gadget at a time',
    PROXIO_ABOUT_TEXT_2: 'Mango Curation is about celebrating charm, design, and human connection through little things.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: 'Items Curated',
    PROXIO_ABOUT_VAL_1: '200+',
    PROXIO_ABOUT_KEY_2: 'Makers Supported',
    PROXIO_ABOUT_VAL_2: '80+',
    PROXIO_ABOUT_KEY_3: 'Smiles Shared',
    PROXIO_ABOUT_VAL_3: '∞',
    PROXIO_ABOUT_KEY_4: 'Established',
    PROXIO_ABOUT_VAL_4: '2023',
    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: 'Learn More',

    PROXIO_BRANDS_ENABLE: true,
    PROXIO_BRANDS: [
        'Cute Finds',
        'Handpicked Joy',
        'Tiny Gadgets',
        'Kind Aesthetics'
    ],

    PROXIO_FOOTER_SLOGAN: 'We curate delightful goods to brighten your everyday life.',
    PROXIO_FOOTER_LINKS: [
        {
            name: 'Community',
            menus: [
                { title: 'Suggest a Product', href: '/contact' },
                { title: 'What We Curate', href: '/about' }
            ]
        },
        {
            name: 'Resources',
            menus: [
                { title: 'Help Center', href: '/faq' },
                { title: 'Blog', href: '/blog' },
                { title: 'Newsletter', href: '/newsletter' },
                { title: 'Contact', href: '/contact' }
            ]
        }
    ],

    PROXIO_FOOTER_BLOG_LATEST_TITLE: 'Latest Discoveries',
    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal-notice',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms',

    PROXIO_404_TITLE: 'Oops! Page not found.',
    PROXIO_404_TEXT: 'The page you are looking for might have been moved or deleted.',
    PROXIO_404_BACK: 'Return Home',

    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: 'Let’s Connect',
    PROXIO_CTA_TITLE_2: 'Share joy through small things',
    PROXIO_CTA_DESCRIPTION: 'Got a cute idea or curious item? We’d love to hear from you.',
    PROXIO_CTA_BUTTON: true,
    PROXIO_CTA_BUTTON_URL: '/contact',
    PROXIO_CTA_BUTTON_TEXT: 'Reach Out',

    PROXIO_POST_REDIRECT_ENABLE: true,
    PROXIO_POST_REDIRECT_URL: 'https://mangocuration.com/blog',
    PROXIO_NEWSLETTER: true
}

export default CONFIG;
