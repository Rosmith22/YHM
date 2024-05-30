const mobileBtn = document.querySelector('.mobile-menu');
const menuList = document.querySelector('#menulist');
const closeBtn = document.querySelector('#closebtn');

mobileBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', hideNav)


function showNav () {
    menuList.style.display = 'block'
    mobileBtn.style.display = 'none'
    closeBtn.style.display = 'block'
}

function hideNav () {
    menuList.style.display = 'none'
    mobileBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}

let data = [
    {
        id: 1,
        image: './assets/one.svg',
        title: 'Data Analysis Training',
        point1: 'Understanding Data: Learn the fundamentals of data, its types, and how it can be used for decision-making.',
        point2: 'Data Visualization: Master the art of presenting data in a visually appealing manner to effectively communicate insights.',
        point3: 'Advanced Analytical Tools: Get hands-on experience with advanced data analysis tools and software.'
    },
    {
        id: 2,
        image: './assets/two.svg',
        title: 'Financial Management Training',
        point1: 'Management Accounting: Equip finance professionals with the skills to prepare and interpret management accounts, aiding in strategic decision-making.',
        point2: 'Financial Risk Management: Learn advanced techniques to identify, analyze, and manage financial risks in a volatile business environment.',
        point3: 'Cost Savings and Efficiency: Understand and implement strategies for cost reduction and efficiency, driving profitability and sustainable growth.'
    },
    {
        id: 3,
        image: './assets/three.svg',
        title: 'HSE Management Training',
        point1: 'Safety Protocols: Learn about various safety protocols and regulations in the workplace.',
        point2: 'Environmental Responsibility: Understand the importance of environmental responsibility and sustainable practices.',
        point3: 'Emergency Response: Learn how to effectively respond to emergencies and unforeseen incidents.'
    },
    {
        id: 4,
        image: './assets/five.svg',
        title: 'Sales and Marketing Training',
        point1: 'Sales Techniques: Master various sales techniques and strategies to improve sales performance.',
        point2: 'Marketing Strategies: Learn about different marketing strategies and how to effectively implement them.',
        point3: 'Customer Relationship Management: Understand the importance of building strong customer relationships and learn techniques to improve customer satisfaction.'
    },
    {
        id: 5,
        image: './assets/six.svg',
        title: 'Soft Skills and Team Building Training',
        point1: 'Communication Skills: Improve your verbal and non-verbal communication skills for effective teamwork.',
        point2: 'Leadership Skills: Learn about different leadership styles and how to motivate and inspire your team.',
        point3: 'Problem-Solving Skills: Develop your problem-solving skills to overcome challenges and conflicts in the workplace.'
    },
    {
        id: 6,
        image: './assets/seven.svg',
        title: 'Digital Marketing Training',
        point1: 'Digital Marketing Fundamentals: Understand the basics of digital marketing, including SEO, SEM, and social media marketing.',
        point2: 'Content Marketing: Learn how to create engaging content that drives traffic and increases brand awareness.',
        point3: 'Analytics and Reporting: Learn how to use digital marketing tools to track performance and make data-driven decisions.'
    },
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const prevMobBtn = document.querySelector(".mob-prev");
const nextMobBtn = document.querySelector(".mob-next");
let index = 0;
const mainElement = document.querySelector('.slide-container');
const mobileElement = document.querySelector('.slider-container');

function displayElement(i) {
    const currentIndex = i % data.length;
    const nextIndex = (i + 1) % data.length;
    const thirdIndex = (i + 2) % data.length;
    const dataElement = `
        <div class="data-card">
            <img src="${data[currentIndex].image}" alt="" />
            <h4 class="title">${data[currentIndex].title}</h4>
            <ul>
                <li>${data[currentIndex].point1}</li>
                <li>${data[currentIndex].point2}</li>
                <li>${data[currentIndex].point3}</li>
            </ul>
        </div>
        <div class="data-card">
            <img src="${data[nextIndex].image}" alt="" />
            <h4 class="title">${data[nextIndex].title}</h4>
            <ul>
                <li>${data[nextIndex].point1}</li>
                <li>${data[nextIndex].point2}</li>
                <li>${data[nextIndex].point3}</li>
            </ul>
        </div>
        <div class="data-card">
            <img src="${data[thirdIndex].image}" alt="" />
            <h4 class="title">${data[thirdIndex].title}</h4>
            <ul>
                <li>${data[thirdIndex].point1}</li>
                <li>${data[thirdIndex].point2}</li>
                <li>${data[thirdIndex].point3}</li>
            </ul>
        </div>
    `;

    mainElement.innerHTML = dataElement;
}

function displayMobElement(i) {
    const currentIndex = i % data.length;
    const dataElement = `
        <div class="data-card">
            <img src="${data[currentIndex].image}" alt="" />
            <h4 class="title">${data[currentIndex].title}</h4>
            <ul>
                <li>${data[currentIndex].point1}</li>
                <li>${data[currentIndex].point2}</li>
                <li>${data[currentIndex].point3}</li>
            </ul>
        </div>
    `;

    mobileElement.innerHTML = dataElement;
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

prevMobBtn.addEventListener('click', prevMob);
nextMobBtn.addEventListener('click', nextMob);

function prev() {
    index = (index - 1 + data.length) % data.length;
    displayElement(index);
    console.log('clicked')
}

function next() {
    index = (index + 1) % data.length;
    displayElement(index);
}

function prevMob() {
    index = (index - 1 + data.length) % data.length;
    displayMobElement(index);
}

function nextMob() {
    index = (index + 1) % data.length;
    displayMobElement(index);
}

displayMobElement(index);
displayElement(index);