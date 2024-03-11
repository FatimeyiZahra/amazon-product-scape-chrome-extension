import "./App.css";

function App() {
  const onClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    if (tab && tab.url) {
      chrome.scripting.executeScript<string[], void>({
        target: { tabId: tab.id! },
        args: [tab.url],
        func: (url) => {
          if (
            url.includes("amazon.com") ||
            url.includes("amazon.") ||
            url.endsWith("amazon")
          ) {
            const getTextContent = (selector: string): string => {
              const element = document.querySelector(selector);
              return element instanceof HTMLElement
                ? element.innerText.trim()
                : "Not found";
            };

            const title = getTextContent("#productTitle");
            const price = getTextContent(".priceToPay span.a-price-whole");
            const imageUrl =
              (document.querySelector("#landingImage") as HTMLImageElement)
                ?.src || "Not found";
            const rating = getTextContent(
              'span[data-hook="rating-out-of-text"]'
            );
            const sellerName = (
              document
                .querySelector("#bylineInfo_feature_div a")
                ?.textContent?.trim() || "Not found"
            )
              .replace("Visit the", "")
              .trim();
            const sellerUrl =
              document
                .querySelector("#bylineInfo_feature_div a")
                ?.getAttribute("href") || "Not found";

            const data = {
              title: title,
              Price: price,
              "Image Url": imageUrl,
              Rating: rating,
              Url: url,
              seller: {
                name: sellerName,
                profile_url: sellerUrl,
                platform: {
                  name: "amazon",
                  url: "https://www.amazon.com",
                },
              },
            };
            console.log(data);
          } else {
            alert("You can scape data only from amazon.com");
          }
        },
      });
    }
  };

  return (
    <>
      <h3>Chrome Extension for Amazon Product Data Scraping</h3>
      <div className="card">
        {/* <input type="color" onChange={(e) => setColor(e.currentTarget.value)} /> */}
        <button style={{ borderColor: "#646cff" }} onClick={() => onClick()}>
          Scrape
        </button>
      </div>
    </>
  );
}

export default App;
