chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "scrape") {
    const productInfo = {
      title: document.querySelector("#productTitle").textContent.trim(),
      imageURL: document.querySelector("#landingImage").src,
      price: document.querySelector("#priceblock_ourprice").textContent.trim(),
      // Add more fields as needed
    };
    chrome.runtime.sendMessage({ action: "showProductInfo", productInfo });
  }
});
