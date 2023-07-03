export async function renderServices() {
    let template = document.createElement('div');
    template.classList.add('services-page');
    template.innerHTML = `
    <div class="container">
        <h1>Services page</h1>
    </div>
    `;

    let servicesText = document.querySelector('.services');
    servicesText.classList.add('white-text');

    return template;
}