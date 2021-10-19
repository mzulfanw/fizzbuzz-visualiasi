

// get the buttong
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();


const getButton = document.getElementById("button-submit");

getButton.addEventListener('click', () => {
    let validasi = /^[0-9]+$/;
    let getInput = document.querySelector('.input-number');
    let loader = document.querySelector('.loader');
    let getContainer = document.querySelector('.fizzbuzz-content');
    let template = '';


    if (getInput.value.match(validasi)) {
        for (let i = 1; i <= getInput.value; i++) {
            if (i % 5 === 0 && i % 3 === 0) {

                template += `
                        <div>
                            <h1>FizzBuzz</h1>
                            <p>Penjelasan : ketika nilai  ${i} modulus 3 dan 5 maka hasilnya <strong>FizzBuzz</strong>  </p>
                        </div>`;

            } else if (i % 5 === 0) {
                template += `<div>
                                <h1>Buzz</h1>
                                <p>Penjelasan : ketika nilai ${i} modulus 5 maka hasilnya <strong>Buzz</strong></p>
                            </div>`;
            } else if (i % 3 === 0) {
                template +=
                    `<div>
                                <h1>Fizz</h1>
                                <p>Penjelasan : ketika nilai ${i} modulus 3 maka hasilnya <strong>Fizz</strong></p>
                            </div>`;
            } else {
                template += `
                <div>
                    <h1>${i}</h1>
                    <p>Penjelasan : Jika selain itu maka munculkan <strong>angka</strong> </p>
                </div>`
            }

        };
        loader.style.display = "block";
        setTimeout(() => {
            loader.style.display = 'none';
            getContainer.innerHTML = template;
        }, 2000)


    } else {
        alert("Masukan angka atau angka tidak valid")
        loader.style.display = "none";
        getInput.value = ""
    }

});

