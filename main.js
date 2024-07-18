function domReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {
    let clickLink = document.getElementById("clickLink");

	function onScanSuccess(decodeText, decodeResult) {
		alert("You Qr is : " + decodeText, decodeResult);

        document.getElementById("followLink").value = `${decodeText}, ${decodeResult}`;
        htmlscanner.stop();
        htmlscanner.clear();
	}

    clickLink.onclick = () => {
        console.log('clicked!');
		clickLink.target = '_blank';
    }

	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbos: 250 }
	);
	htmlscanner.render(onScanSuccess);
});
