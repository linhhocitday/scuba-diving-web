let maps = [
    {
        daNang: 'https://www.google.com/maps/place/Cham+Island+Diving/@15.8765811,108.3252456,17z/data=!3m1!4b1!4m6!3m5!1s0x31420e7e639ceaa5:0xc047b6a4bf997295!8m2!3d15.8765811!4d108.3278205!16s%2Fg%2F11gdygz4nn?entry=ttu'
    },
    {
        nhaTrang: 'https://www.google.com/maps/place/Nha+Trang+Sea+Star/@12.2399507,109.1872096,17z/data=!3m1!4b1!4m6!3m5!1s0x317067687df756b5:0xd72d8eabbfdfd407!8m2!3d12.2399507!4d109.1897845!16s%2Fg%2F11c5bqsd5y?entry=ttu'
    },
    {
        phuQuoc: 'https://www.google.com/maps/place/OnBird+Phu+Quoc/@10.1883801,103.9768943,17z/data=!3m1!4b1!4m6!3m5!1s0x31a78d38c2ec8f07:0x184f46c06806fbd2!8m2!3d10.1883801!4d103.9794692!16s%2Fg%2F11fk1ncbs7?entry=ttu'
    }
]

let socialMedia = [
    {
        facebook: 'https://www.facebook.com/profile.php?id=100011462262456'
    },
    {
        instagram: 'https://www.instagram.com/ddawngj.linh/'
    }
]

export async function renderFooter() {
    let template = document.createElement('footer');
    template.classList.add('footer');
    template.innerHTML = `
    <div class="footer-div blur-background-wrapper white-bg-8">
        <div class="container">
            <div class="grid-block footer-wrapper">
                <div class="footer-inform">
                    <h3 class="uppercase font-weight-200">Our location</h3>
                    <ul>
                        <li class="white-color-60"><a href="${maps[0]['daNang']}">Da Nang</a></li>
                        <li class="white-color-60"><a href="${maps[1]['nhaTrang']}">Nha Trang</a></li>
                        <li class="white-color-60"><a href="${maps[2]['phuQuoc']}">Phu Quoc</a></li>
                    </ul>
                </div>
                <div class="footer-inform">
                    <h3 class="uppercase font-weight-200">Get help</h3>
                    <ul>
                        <li class="white-color-60"><a href="/contact">Contact us</a></li>
                        <li class="white-color-60"><a href="/booking">Booking</a></li>
                        <li class="white-color-60"><a href="/course">Take course</a></li>
                    </ul>
                </div>
                <div class="social-media">
                    <ul>
                        <li class="inline-block"><a href="${socialMedia[0]['facebook']}">
                            <i class="fa-brands fa-square-facebook white-color-80"></i>
                        </a></li>
                        <li class="inline-block"><a href="${socialMedia[1]['instagram']}">
                            <i class="fa-brands fa-square-instagram white-color-80"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom-text white-color-60 font-size-14">© 2023 BLUR. All rights reserved.</div>
        </div>
    </div>
    `;

    return template;
}