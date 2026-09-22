// このアプリはFirebase/外部APIとのリアルタイム通信が中心のため、
// オフラインキャッシュは行わず、単純にネットワークへそのまま流すだけの
// 最小限のサービスワーカーです（Android側の「ホーム画面に追加」の
// インストール条件を満たすために設置しています）。
self.addEventListener('install', function(event){
  self.skipWaiting();
});

self.addEventListener('activate', function(event){
  self.clients.claim();
});

self.addEventListener('fetch', function(event){
  event.respondWith(fetch(event.request));
});
