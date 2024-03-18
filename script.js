function toggleContent() {
    var tabla = document.getElementById("tabla");
    var video = document.getElementById("video");

    if (tabla.style.display === "none") {
        tabla.style.display = "block";
        video.style.display = "none";
    } else {
        tabla.style.display = "none";
        video.style.display = "block";
    }
}