const CONFIG = {
    // 1. Ідентифікація (Core)
    branch_name: "Bricks-Repo",
    version: "2.0.4",
    updated: "2026-02-28",
    hub_url: "https://bricks-repo.github.io/",
    org_name: "ProfitRepo",
    ideas_email: "myprofitrepo+idea+bricks@gmail.com",
    
    // 2. SEO & Соціальні мережі (Master SEO)
    seo: {
        title_suffix: " | Bricks-Repo",
        default_desc: "Professional LEGO tools for collectors and resellers.",
        twitter: "@ProfitRepo",
        og_default_img: "https://bricks-repo.github.io/assets/og-main.jpg",
        category: "SoftwareApplication",
        keywords: "LEGO, bricks, calculator, bricklink, moc, parts weight"
    },

    // 3. Розширений стайлінг (Deep Design System)
    style: {
        theme: "bright-playful",
        favicon: "🧱",
        colors: {
            primary: "#e3000b",    // LEGO Red
            secondary: "#ffdd00",  // LEGO Yellow
            accent: "#0055a2",     // LEGO Blue
            bg: "#f4f4f4",
            text: "#111111"
        },
        ui: {
            radius: "20px",
            border: "3px solid #111111",
            shadow: "0 6px 0 #111111" // Плаский ретро-стиль
        }
    },

    icons: {
            idea: `<svg class="idea-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 15c-19.3 0-35 15.7-35 35 0 11.9 5.9 22.4 15 28.7V85h40V78.7c9.1-6.3 15-16.8 15-28.7 0-19.3-15.7-35-35-35z" fill="#FFD700"/><path d="M40 85h20v5H40zM35 80h30v3H35z" fill="#A9A9A9"/><path d="M50 25v10M32.3 32.3l7.1 7.1M25 50h10M32.3 67.7l7.1-7.1M67.7 32.3l-7.1 7.1M75 50h-10M67.7 67.7l-7.1-7.1" stroke="#FFF" stroke-width="3" stroke-linecap="round"/></svg>`
        },

    // 4. Посилання та Монетизація (Traffic Flow)
    urls: {
        support: "https://www.buymeacoffee.com/bricks-repo",
        patreon: "https://patreon.com/bricksrepo",
        suggestion: "https://github.com/ProfitRepo/bricks-repo.github.io/issues",
        affiliate_bricklink: "https://www.bricklink.com",
        affiliate_amazon: "https://amazon.com/lego"
    },

    // 5. Shared i18n Interface (Глобальні елементи інтерфейсу)
    common_i18n: {
        en: {
            back: "Bricks-Repo Hub",
            support: "Support Project",
            copy: "Copy",
            copied: "Copied!",
            calculate: "Calculate",
            share: "Share Result",
            f_idea_q: " Idea?",
            f_idea_a: "Write to us",
        },
        ua: {
            back: "Bricks-Repo Xaб",
            support: "Підтримати",
            copy: "Копіювати",
            copied: "Скопійовано!",
            calculate: "Розрахувати",
            share: "Поділитися",
            f_idea_q: " Ідея?",
            f_idea_a: "Напишіть нам",
        }
    }
};
Object.freeze(CONFIG);