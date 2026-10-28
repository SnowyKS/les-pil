// SEO для SPA: у каждой страницы свои title, description и canonical.
// Основной адрес сайта — GitHub Pages (vercel.app в России без VPN не открывается),
// поэтому canonical всегда ведёт туда, даже если страницу открыли на Vercel.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SITE_URL = 'https://snowyks.github.io/les-pil';

const PAGES = {
    '/': {
        title: 'Пиломатериалы от производителя в Никольском районе — доска, брус, кругляк | Лес Пил',
        description: 'Пилорама в д. Верховино, Никольский район Вологодской области: лес кругляк, доска обрезная, брус, вагонка и баланс по ценам производителя. Доставка и самовывоз.'
    },
    '/lumber': {
        title: 'Цены на доску, брус, кругляк и вагонку за м³ | Лес Пил',
        description: 'Каталог пиломатериалов с ценами за кубометр: лес кругляк от 1500 руб/м³, брус, доска обрезная 1 и 2 сорта, вагонка, баланс. Заказ в один клик.'
    },
    '/contacts': {
        title: 'Пилорама в д. Верховино, Никольский район — контакты | Лес Пил',
        description: 'Как доехать до пилорамы «Лес Пил» в д. Верховино, Никольский район. Телефон +7 (921) 235-15-06, ежедневно 7:00–22:00, самовывоз и доставка.'
    },
    '/privacy-policy': {
        title: 'Политика конфиденциальности | Лес Пил',
        description: 'Политика обработки персональных данных сайта «Лес Пил».'
    },
    '/terms-of-use': {
        title: 'Условия пользования сайтом | Лес Пил',
        description: 'Условия пользования сайтом «Лес Пил».'
    }
};

function setTag(selector, create, attr, value) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = create();
        document.head.appendChild(el);
    }
    el.setAttribute(attr, value);
}

export function useSeo() {
    const { pathname } = useLocation();

    useEffect(() => {
        const page = PAGES[pathname] || PAGES['/'];
        const url = SITE_URL + (pathname === '/' ? '/' : pathname);
        document.title = page.title;
        setTag('meta[name="description"]', () => Object.assign(document.createElement('meta'), { name: 'description' }), 'content', page.description);
        setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
        setTag('meta[property="og:url"]', () => {
            const m = document.createElement('meta');
            m.setAttribute('property', 'og:url');
            return m;
        }, 'content', url);
    }, [pathname]);
}
