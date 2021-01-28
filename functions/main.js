function changeSrc(id) {
    let video = document.getElementById("v2");
    if (id === "li-1") {
        video.src = "../videos/bg.mp4";
    }
    else if (id === "li-2") {
        video.src = "../videos/bg1.mp4";
    }
    else if (id === "li-3") {
        video.src = "../videos/bg2.mp4";
    }
    else if (id === "li-4") {
        video.src = "../videos/bg3.mp4";
    }
}

// upload the green screen video function
function upload() {
    let input = document.getElementById("uploadVideo");
    let freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onload = function () {
        alert(freader.result);
        let video = document.getElementById("v1");
        video.crossOrigin = 'anonymous';
        video.src = freader.result;
        console.log("Video source", video);
    }
}

// upload the background video
