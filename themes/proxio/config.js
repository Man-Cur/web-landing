/**
 * Mango Curation Landing Page Theme
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true,
    PROXIO_WELCOME_TEXT: 'Welcome to Mango Curation. Tap anywhere to begin.',

    PROXIO_HERO_ENABLE: true,
    PROXIO_HERO_TITLE_1: 'A Curated Marketplace of Creative and Local Goods',
    PROXIO_HERO_TITLE_2: 'Streamlining product discovery and sourcing through thoughtful design',
    PROXIO_HERO_BUTTON_1_TEXT: 'Start Exploring',
    PROXIO_HERO_BUTTON_1_URL: '/products',
    PROXIO_HERO_BUTTON_2_TEXT: 'Follow on GitHub',
    PROXIO_HERO_BUTTON_2_URL: 'https://github.com/mango-curation',
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg',
    PROXIO_HERO_BANNER_IMAGE: '',
    PROXIO_HERO_BANNER_IFRAME_URL: '',

    PROXIO_BLOG_ENABLE: true,
    PROXIO_BLOG_TITLE: 'Drops',
    PROXIO_BLOG_COUNT: 4,
    PROXIO_BLOG_TEXT_1: 'Our freshest curated selections',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

    PROXIO_ANNOUNCEMENT_ENABLE: true,

    PROXIO_FEATURE_ENABLE: true,
    PROXIO_FEATURE_TITLE: 'Why Mango Curation',
    PROXIO_FEATURE_TEXT_1: 'We help you find hidden gems worth sharing',
    PROXIO_FEATURE_TEXT_2: 'Curated collections, easy sourcing, and creative storytelling',

    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-gem',
    PROXIO_FEATURE_1_ICON_IMG_URL: '',
    PROXIO_FEATURE_1_TITLE_1: 'Curated Selections',
    PROXIO_FEATURE_1_TEXT_1: 'We handpick standout products from indie creators and trusted suppliers.',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-handshake',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_2_TITLE_1: 'Direct Sourcing',
    PROXIO_FEATURE_2_TEXT_1: 'Connect with vendors and makers directly. No middlemen.',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-bolt',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: 'Quick Launch Tools',
    PROXIO_FEATURE_3_TEXT_1: 'Tools and templates to help you launch and manage product drops easily.',

    PROXIO_FEATURE_BUTTON_TEXT: 'Discover More',
    PROXIO_FEATURE_BUTTON_URL: '/about',

    PROXIO_CAREER_ENABLE: true,
    PROXIO_CAREER_TITLE: 'Journey',
    PROXIO_CAREER_TEXT: 'A glimpse into our journey so far',
    PROXIO_CAREERS: [
        { title: 'Marketplace Pilot', bio: '2023', text: 'Launched curated drops for selected vendors in Toronto. Focused on 3D printed goods and unique local finds.' },
        { title: 'Vendor Expansion', bio: '2024', text: 'Opened up to indie creators and physical retail partners. Added product customization support and group-buying features.' },
        { title: 'Curation Feed Launch', bio: '2025', text: 'Introduced a Pinterest-style product discovery feed. Users can interact, collect, and share their favorite finds.' }
    ],

    PROXIO_TESTIMONIALS_ENABLE: true,
    PROXIO_TESTIMONIALS_TITLE: 'What People Say',
    PROXIO_TESTIMONIALS_TEXT_1: 'Real feedback from our community',
    PROXIO_TESTIMONIALS_TEXT_2: 'Mango Curation has helped creatives and shop owners bring their products to life and into the hands of new audiences.',
    PROXIO_TESTIMONIALS_BUTTON_URL: '/contact',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: 'Get in Touch',
    PROXIO_TESTIMONIALS_ITEMS: [], // Add testimonials as needed

    PROXIO_FAQ_ENABLE: true,
    PROXIO_FAQ_TITLE: 'FAQ',
    PROXIO_FAQ_TEXT_1: 'Got questions?',
    PROXIO_FAQ_TEXT_2: 'Here are some common inquiries from our community.',
    PROXIO_FAQS: [
        { q: 'Can I become a vendor?', a: 'Yes! Visit our "Partner With Us" page to apply as a vendor or product curator.' },
        { q: 'What is a "drop"?', a: 'A drop is a limited-time curated collection of products, usually centered around a theme or collaboration.' },
        { q: 'How do I join a group buy?', a: 'Group-buying options are shown on product pages. Just join an active group or start your own.' },
        { q: 'Where do you ship?', a: 'We currently ship across North America and are expanding globally. Check product pages for specific availability.' }
    ],

    PROXIO_ABOUT_ENABLE: true,
    PROXIO_ABOUT_TITLE: 'About Us',
    PROXIO_ABOUT_TEXT_1: 'Powered by a passion for design and community',
    PROXIO_ABOUT_TEXT_2: 'Mango Curation bridges the gap between creators, local suppliers, and curious shoppers through a seamless digital experience.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: 'Curated Drops',
    PROXIO_ABOUT_VAL_1: '50+',
    PROXIO_ABOUT_KEY_2: 'Vendor Partners',
    PROXIO_ABOUT_VAL_2: '120+',
    PROXIO_ABOUT_KEY_3: 'Products Delivered',
    PROXIO_ABOUT_VAL_3: '5000+',
    PROXIO_ABOUT_KEY_4: 'Community Members',
    PROXIO_ABOUT_VAL_4: '2000+',
    PROXIO_ABOUT_BUTTON_URL: '/about',
    PROXIO_ABOUT_BUTTON_TEXT: 'Learn More',

    PROXIO_BRANDS_ENABLE: true,
    PROXIO_BRANDS: [
        'Local Goods',
        'Curated Design',
        'Custom Drops',
        'Group Buying'
    ],

    PROXIO_FOOTER_SLOGAN: 'We create a bridge between creative goods and curious minds.',
    PROXIO_FOOTER_LINKS: [
        {
            name: 'Community',
            menus: [
                { title: 'Partner With Us', href: '/partners' },
                { title: 'Drop Archive', href: '/drops' }
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

    PROXIO_FOOTER_BLOG_LATEST_TITLE: 'Latest Drops',
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
    PROXIO_CTA_TITLE: 'Let’s Collaborate',
    PROXIO_CTA_TITLE_2: 'Kickstart your next product drop',
    PROXIO_CTA_DESCRIPTION: 'Whether you're a creator or a shop owner, Mango Curation helps you bring your ideas to market.',
    PROXIO_CTA_BUTTON: true,
    PROXIO_CTA_BUTTON_URL: '/contact',
    PROXIO_CTA_BUTTON_TEXT: 'Get in Touch',

    PROXIO_POST_REDIRECT_ENABLE: true,
    PROXIO_POST_REDIRECT_URL: 'https://mangocuration.com/blog',
    PROXIO_NEWSLETTER: true
}

export default CONFIG;
