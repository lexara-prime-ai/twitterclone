// DEBUGGING
const log = console.log;

// SELECTORS
const userName = document.querySelector('.avatar-name');
const userHandle = document.querySelector('.user-handle');

const bio = document.querySelector('.bio');
const userInfo = document.querySelector('.user-info');

const posts = document.querySelector('.posts');

// GET USER INFO
const getUserInfo = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const userData = await response.json();
    userName.innerText = userData.name;
    userHandle.innerText = `@` + userData.username;

    // BIO CONTENT
    const bioContent = `
    <p class="bio-content">
        Developer at <a href="https://www.linkedin.com/in/shellahelo">@${userData.company.name}</a> | ${userData.company.catchPhrase}
    </p>
    `;

    // RENDER BIO CONTENT
    bio.innerHTML = bioContent;

    const userCredentials = `
        <a class="link">
        <i class="fas fa-link info-icon"></i>
            <a href="https://google.com">
                ${userData.website}
            </a>
        </a>

        <p>
        <i class="fas fa-location-dot info-icon"></i>
            ${userData.address.city}
        </p>
    `;

    // RENDER USER INFO
    userInfo.innerHTML = userCredentials;
}

getUserInfo();

// GET POSTS
const getPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const postContent = await response.json();

    // log(postContent[0]); // LOG INDIVIDUAL POST

    // FORMAT FOR INDIVIDUAL POSTS
    let post = `
    <!-- SINGLE POST -->
    <div class="post">
        <div class="user-credentials">
            <!-- USER AVATAR -->
            <div class="user-avatar-container">
                <img src="./assets/images/avatar.jpg" alt="" class="avatar-post">

                <!-- UESR INFO -->
                <div class="user-info-post">
                    <h2 class="user-name-post">
                        ${postContent[0].name}
                    </h2>
                    <h2 class="user-email-post">
                        ${postContent[0].email}
                    </h2>
                    <li class="date">Apr 22</li>
                </div>
            </div>

            <a href="#">
                <i class="fas fa-ellipsis ellipsis-post"></i>
            </a>
        </div>

        <!-- POST CONTENT -->
        <div class="post-content">
            ${postContent[0].body}
        </div>
    </div>
    `;

    posts.innerHTML += post;

}

getPosts();