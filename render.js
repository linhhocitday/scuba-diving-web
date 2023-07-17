module.exports = {
    html() {
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BLUR</title>

                <!-- favicon -->
                <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />

                <!-- my css -->
                <!-- loading css -->
                <link rel="stylesheet" href="/assets/css/loading_scene.css" />
                <!-- main css -->
                <link rel="stylesheet" href="/assets/css/main.css" />
                <!-- responsive css -->
                <link rel="stylesheet" href="/assets/css/responsive.css" />
                <!-- header css -->
                <link rel="stylesheet" href="/assets/css/header_tag.css" />
                <!-- home css -->
                <link rel="stylesheet" href="/assets/css/home_page.css" />
                <!-- about page css -->
                <link rel="stylesheet" href="/assets/css/about_page.css" />
                <!-- booking page css -->
                <link rel="stylesheet" href="/assets/css/booking_page.css" />
                <!-- course page css -->
                <link rel="stylesheet" href="/assets/css/course_page.css" />
                <!-- product page css -->
                <link rel="stylesheet" href="/assets/css/product_page.css" />
                <!-- footer css -->
                <link rel="stylesheet" href="/assets/css/footer_tag.css" />                
                <!-- color changing css -->
                <link rel="stylesheet" href="/assets/css/day_changing.css" />

                <!-- google font -->
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Anton&family=Urbanist:wght@100;200;400;500;600&display=swap" 
                rel="stylesheet" />

                <!-- font awesome-->
                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                crossorigin="anonymous"
                referrerpolicy="no-referrer"
                />
            </head>
            <body class="white-color-100 black-bg-100">
                <main>
                
                </main>

                <!-- my js -->
                <script src="/assets/js/main.js" type="module"></script>
            </body>
        </html>
        `;
    }
}