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
		alert("Your QR code is: " + decodeText);
		
		let followLink = document.getElementById("followLink");
		followLink.value = decodeText;

		htmlscanner.stop();
		htmlscanner.clear();
	}
	
	clickLink.addEventListener('click', function() {
		let followLink = document.getElementById("followLink").value;
		if (followLink) {
			// Open the link in a new tab
			window.open(followLink, '_blank');
		} else {
			alert('Please scan a QR code first');
		}
	});

	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbox: 250 }
	);
	htmlscanner.render(onScanSuccess);
});