function updateSlider(slider,spanId) {
    const value = slider.value;
    document.getElementById(spanId).textContent=value;
    const percentage = (value*20)/51 + "%";
    slider.style.background = `linear-gradient(to right,rgb(255, 0, 204) ${percentage}, #ffffff ${percentage})`;
}

