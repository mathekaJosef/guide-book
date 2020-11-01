const logoutLinks = document.querySelectorAll('.logged-out');
const loginLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setUI = (users) => {
    if(users){
        //account info
        const html = `
            <div>Logged in as: ${users.email}</div>
        `;
        accountDetails.innerHTML = html;

        loginLinks.forEach(item => {item.style.display = "block"});
        logoutLinks.forEach(item => {item.style.display = "none"});
    }else{
        accountDetails.innerHTML = "";

        loginLinks.forEach(item => {item.style.display = "none"});
        logoutLinks.forEach(item => {item.style.display = "block"});
    }
}
//guides
const guideList = document.querySelector(".guides");
//setup guides
const setUpGuides = (data) => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            // console.log(guide);
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.description}</div>
            </li>
            `;
            html += li;
        });
        guideList.innerHTML = html;
    }else{
        guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});