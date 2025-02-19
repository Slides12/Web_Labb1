let datasrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13683.22984886655!2d-97.78661143221517!3d30.97585478904296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864534d103838f89%3A0x9bdb6ce32533d174!2sDing%20Dong%2C%20Killeen%2C%20TX%2076542%2C%20USA!5e0!3m2!1sen!2sse!4v1738953240926!5m2!1sen!2sse";

var map = document.getElementById('mymap'); 

var mapListener = function() { 
    var frame = document.createElement('iframe'); 
    frame.src = datasrc; 
    frame.width = "600"; 
    frame.height = "450"; 
    frame.style.border = "0"; 
    frame.allowFullscreen = true;
    frame.loading = "lazy"; 
    map.innerHTML = ""; // Clear the image on hover
    map.appendChild(frame); 
    map.removeEventListener("mouseover", mapListener); 
};

map.addEventListener('mouseover', mapListener);
