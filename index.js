let imgBox = document.getElementById("qr-src");
let qrBox = document.getElementById("qr-img");
let ssidBox = document.getElementById("ssid-text");
let passwordBox = document.getElementById("password-text");
let encryptionBox = document.getElementById("encryption-type");
let downloadBtn = document.getElementById("download-btn");

function generateQR() {
    if(ssidBox.value ===''){
        qrBox.classList.add('error');
        setTimeout(()=>{
            qrBox.classList.remove('error')
        },1000)
    }
    else{
        const ssid = ssidBox.value;
        const password = passwordBox.value;
        const encryption = encryptionBox.value;

        const qrData = `WIFI:S:${ssid};T:${encryption};P:${password};;`;
        qrBox.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
        imgBox.classList.add("show-img");

        // Show the download button
        downloadBtn.classList.remove("hidden");
    }
    
}

function downloadQR() {
    const link = document.createElement('a');
    link.href = qrBox.src; // Use the source of the QR code image
    link.download = 'wifi-qr-code.jpeg'; // Specify the download filename
    document.body.appendChild(link);
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up
}
