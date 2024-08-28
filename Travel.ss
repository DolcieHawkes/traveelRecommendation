<style>
    /* Basic Reset */
city {
    margin-bottom: 20px; /* Add spacing between cities within a country */
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif; /* Choose a suitable font */
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
header {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
}

nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: bold;
    font-size: 1.2em;
}

nav ul {
    list-style: none;
    display: flex;
}

nav li a {
    text-decoration: none;
    color: #333;
    margin: 0 15px;
}

.search {
    display: flex;
}

.search input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
}

.search button {
    padding: 8px 12px;
    background-color: #007bff; /* Example color */
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}


/* Hero Section */
.hero {
    background-image: url('https://content.tui.co.uk/adamtui/2021_4/19_8/923955e4-e224-47f9-bcc0-ad0f0093fb79/ACC_969902_shutterstock_1672881559WebOriginalCompressed.jpg?i10c=img.resize(width:1080);img.crop(width:1080%2Cheight:608)');
    background-size: cover;
    background-position: center;
    min-height: 600px; /* Adjust as needed */
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
}

.hero-content {
    padding: 20px;
}

.hero-content h1 {
    font-size: 3em;
    margin-bottom: 10px;
}

.hero-content p {
    margin-bottom: 20px;
}

.hero-content button {
    padding: 10px 20px;
    background-color: #007bff; /* Example color */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.social-icons a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.2em;
}
</style>
