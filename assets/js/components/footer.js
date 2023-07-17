import {
     maps, 
     socialMedia 
} from "../fake_data.js";


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
            <div class="flex-block flex-align-justify">
                <div class="footer-bottom-text white-color-60 font-size-14">© 2023 BLUR. All rights reserved.</div>
                <div class="footer-bottom-text white-color-60 font-size-14">Web design and copywriting: <strong>Linh Dang</strong></div>
            </div>
        </div>
    </div>
    `;

    return template;
}