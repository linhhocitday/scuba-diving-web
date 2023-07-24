import { 
    removeLoader,
} from "../helper.js";

export async function renderContact() {
    let template = document.createElement('div');
    template.classList.add('contact-page');
    template.innerHTML = `
    <section class="contact-slide1">
        <div class="container">
            <div class="row contact-slide1-row1 text-align-center">
                <h1 class="uppercase font-weight-200">Contact with us by one of these ways</h1>
                <p class="uppercase gradient-text colorful-text">Choose one!</p>
            </div>
        </div>
    </section>
    <section class="contact-slide2">
        <div class="container">
            <div class="row contact-slide2-row1 grid-block">
                <div class="text-align-center">
                    <div class="contact-icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="uppercase">Call us</h2>
                        <p>12034567</p>
                    </div>
                </div>
                <div class="text-align-center">
                    <div class="contact-icon">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="uppercase">Send email</h2>
                        <p>bluriovn@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;

    removeLoader();

    return template;
}