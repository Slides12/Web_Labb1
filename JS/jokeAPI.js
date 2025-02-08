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


function FetchDailyNasaImage() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json();
        })
        .then(data => {
            const nasaExplanation = document.getElementById("nasa");
            const nasaTitle = document.getElementById("nasa-title");
            const nasaImage = document.getElementById("nasa-image");

            if (nasaExplanation && nasaTitle && nasaImage) {
                nasaExplanation.textContent = data.explanation;
                nasaTitle.textContent = data.title;

                nasaImage.src = data.url;
                nasaImage.alt = data.title;
            } else {
                console.error("Element(s) for NASA data not found.");
            }
        })
        .catch(error => console.error("NASA API Error:", error));
}


