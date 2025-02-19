document.addEventListener("DOMContentLoaded", () => {
    FetchUselessFact();
    FetchDailyNasaImage();
});



function FetchUselessFact() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json();
        })
        .then(data => {
            document.getElementById("k").textContent = data.text;
        })
        .catch(error => console.error(`uselessfacts API Error: `, error));
}


async function FetchDailyNasaImage() {
    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=qYFjQ36ubRHbwTpa8VNlUV5A0xu5gjp6xLKEZlmC");
        if (!response.ok) throw new Error("Network response was not ok.");

        const data = await response.json();
        document.getElementById("nasa-title").textContent = data.title;
        document.getElementById("nasa").textContent = data.explanation;

        const img = document.getElementById("nasa-image");
        const webp = document.getElementById("nasa-image-webp");
        const avif = document.getElementById("nasa-image-avif");

        img.src = data.url;
        webp.srcset = data.url.replace(".jpg", ".webp"); // Example conversion
        avif.srcset = data.url.replace(".jpg", ".avif");
    } catch (error) {
        console.error("NASA API Error:", error);
    }
}



