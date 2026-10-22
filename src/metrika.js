// Яндекс.Метрика для SPA: счётчик грузится один раз, а переходы по страницам react-router
// отправляются вручную через hit — иначе Метрика увидит только первую открытую страницу.
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const YM_ID = 113742243; // номер счётчика из metrika.yandex.ru; 0 — Метрика выключена

let loaded = false;

function load() {
    if (loaded || !YM_ID) return;
    loaded = true;
    window.ym = window.ym || function () { (window.ym.a = window.ym.a || []).push(arguments); };
    window.ym.l = Date.now();
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + YM_ID;
    document.head.appendChild(s);
    // Первый просмотр init отправляет сам (defer новый tag.js игнорирует), дальше — hit из useMetrika
    window.ym(YM_ID, 'init', {
        ssr: true,
        referrer: document.referrer,
        url: window.location.href,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
}

// Цель в Метрике: создать там цель «JavaScript-событие» с этим же идентификатором
export function reachGoal(goal, params) {
    if (YM_ID && window.ym) window.ym(YM_ID, 'reachGoal', goal, params);
}

export function useMetrika() {
    const location = useLocation();
    const prevUrl = useRef(null);

    useEffect(() => {
        if (!YM_ID) return;
        const url = window.location.href;
        if (prevUrl.current === null) {
            load();
        } else if (prevUrl.current !== url) {
            window.ym(YM_ID, 'hit', url, { referer: prevUrl.current, title: document.title });
        }
        prevUrl.current = url;
    }, [location.pathname, location.search]);
}
