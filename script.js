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
    window.location.href = "https://www.zeptonow.com/pn/kitkat-grand-break,-4-fingers,-chocolate-coated-wafer/pvid/f7ee6357-dc9d-4de4-a77e-87f74225d3a9"; // Replace with your gift link
}
