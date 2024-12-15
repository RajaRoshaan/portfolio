document.getElementById('download-resume').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Create an invisible anchor element to trigger download
    const link = document.createElement('a');
    link.href = './files/Roshaan Zahid Resume.pdf'; // Path to your resume file
    link.download = 'Roshaan_Zahid_Resume.pdf'; // Suggested filename when downloaded

    // Append the anchor to the body, trigger click, then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});