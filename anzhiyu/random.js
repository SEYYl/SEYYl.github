var posts=["posts/82a60959.html","posts/624ef525.html","posts/324882c3.html","posts/590f2ba.html","posts/7968a355.html","posts/605a3c7d.html","posts/f0ef015e.html","posts/f1068b53.html","posts/4a17b156.html","posts/e86019d.html","posts/99a5c448.html","posts/2e9081ea.html","posts/62a96202.html","posts/undefined.html","posts/9fe78a1c.html","posts/ab29e5b.html","posts/516ae0b5.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};