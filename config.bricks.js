const CONFIG = {
    // 1. Ідентифікація (Core)
    branch_name: "Bricks-Repo",
    version: "2.0.3",
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
            f_idea: "Have an Idea? Write to us"
        },
        ua: {
            back: "Bricks-Repo Xaб",
            support: "Підтримати",
            copy: "Копіювати",
            copied: "Скопійовано!",
            calculate: "Розрахувати",
            share: "Поділитися",
            f_idea: "Маєте ідею? Напишіть нам"
        }
    }
};
Object.freeze(CONFIG);