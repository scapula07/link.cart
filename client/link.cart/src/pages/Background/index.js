console.log("Background");
chrome.runtime.onMessageExternal.addListener(function (e, r, n) {
  console.log(e, "request"),
    chrome.storage.local.set({ cart: e }, function () {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }
      console.log("Value is set");
    }),
    chrome.storage.local.get(["cart"]).then((o) => {
      console.log("Value currently is " + o.cart);
    }),
    console.log(r.url, "sender url"),
    chrome.windows.create(
      { url: "src/cart.html", type: "popup", width: 288, height: 600 },
      function (o) {
        console.log("Window created");
      }
    );
});
