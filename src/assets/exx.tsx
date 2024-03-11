
const exx = () => {
  // const onClick = async () => {
  //   let [tab] = await chrome.tabs.query({ active: true });
  //   if (tab && tab.url) {
  //     chrome.scripting.executeScript<string[], void>({
  //       target: { tabId: tab.id! },
  //       args: [tab.url, color],
  //       func: (url, color) => {
  //         document.body.style.backgroundColor = color;

  //         const titleElement = document.querySelector("#productTitle");
  //         let title: string;

  //         if (titleElement instanceof HTMLElement) {
  //           title = titleElement.innerText.trim();
  //         } else {
  //           title = "Title not found";
  //         }

  //         // Retrieving price
  //         const priceElement = document.querySelector(
  //           ".priceToPay span.a-price-whole"
  //         );
  //         let price: string;

  //         if (priceElement instanceof HTMLElement) {
  //           price = priceElement.innerText.trim();
  //         } else {
  //           price = "Price not found";
  //         }

  //         // Retrieving image URL
  //         const imageUrlElement = document.querySelector("#landingImage");
  //         let imageUrl: string;

  //         if (imageUrlElement instanceof HTMLImageElement) {
  //           imageUrl = imageUrlElement.src;
  //         } else {
  //           imageUrl = "Image URL not found";
  //         }

  //         // Retrieving current price
  //         // const currentPriceElement = document.querySelector(
  //         //   ".a-button-selected .a-color-base"
  //         // );
  //         // let currentPrice: string;

  //         // if (currentPriceElement instanceof HTMLElement) {
  //         //   currentPrice = currentPriceElement.innerText.trim();
  //         // } else {
  //         //   currentPrice = "Current price not found";
  //         // }
  //         // Retrieving rating
  //         const ratingElement = document.querySelector(
  //           'span[data-hook="rating-out-of-text"]'
  //         );
  //         const rating =
  //           (ratingElement as HTMLElement)?.innerText.trim() ||
  //           "Rating not found";

  //         // Retrieving seller name and URL
  //         const sellerElement = document.querySelector(
  //           "#bylineInfo_feature_div a"
  //         );
  //         let sellerName =
  //           sellerElement?.textContent?.trim() || "Seller name not found";
  //         sellerName = sellerName.replace("Visit the", "").trim();
  //         const sellerUrl =
  //           sellerElement?.getAttribute("href") || "Seller URL not found";

  //         const data = {
  //           title: title,
  //           Price: price,
  //           "Image Url": imageUrl,
  //           Rating: rating,
  //           Url: url,
  //           seller: {
  //             name: sellerName,
  //             profile_url: sellerUrl,
  //             platform: {
  //               name: "amazon",
  //               url: "https://www.amazon.com",
  //             },
  //           },
  //         };

  //         console.log(data);
  //       },
  //     });
  //   }
  // };
  return <div>exx</div>;
};

export default exx;
