// GARAGE 22: мінімальний service worker (потрібен для встановлення на екран). Нічого не кешує.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
