// JavaScript for navigation and page transitions

function enterSite() {
    document.querySelector('.landing-page').classList.add('hidden');
    document.querySelector('.second-page').classList.remove('hidden');
}

function nextPage() {
    document.querySelector('.second-page').classList.add('hidden');
    document.querySelector('.letter-page').classList.remove('hidden');
}

function showLetter() {
    document.querySelector('.letter').classList.remove('hidden');
}

function goToGift() {
    window.location.href = "https://www.zeptonow.com/pn/kitkat-grand-break,-4-fingers,-chocolate-coated-wafer-38.5-g-combo/pvid/ffaa4628-2d64-4dd5-9c67-dd7afeaef1d4"; // Replace with your gift link
}
