document.getElementById("upper-case").addEventListener("click", function() {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    document.querySelector('textarea').value = document.querySelector('textarea').value.toLowerCase();
});

document.getElementById("sentence-case").addEventListener("click", function() {
    document.querySelector('textarea').value = document.querySelector('textarea').value
        .toLowerCase()
        .replace(/(^\w)|(\.\s+\w)/g, letter => letter.toUpperCase());
});

document.getElementById("proper-case").addEventListener("click", function() {
    document.querySelector('textarea').value = document.querySelector('textarea').value
        .toLowerCase()
        .replace(/(^\w)|(\s+\w)/g, letter => letter.toUpperCase());
});

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.querySelector('textarea').value;

    const filename ='text.txt';

    let element = document.createElement('a');

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));

    element.setAttribute('download', filename);

    element.style.display = 'none';

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    document.querySelector('textarea').value = `Your text is saved to: ${filename}`;
});