const allPostContainer = document.getElementById("all-post-container");
const all = document.getElementById("all");
const latest = document.getElementById('latest');

const Allfetchdata = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(url);
  const data = await res.json();
  const allposts = data.posts;
  displayAllPosts(allposts);
  // console.log(allposts);
};

const displayAllPosts = (allposts) => {
  // console.log(allposts);
  allposts.forEach((post) => {
    // console.log(post)
    const newdiv = document.createElement("div");
    newdiv.classList =
      "bg-[#797DFC1A] mb-6 lg:mb-0 flex flex-col lg:flex-row gap-[24px] p-[40px] lg:rounded-xl";
    newdiv.innerHTML = `
          <div id=""
            class=""
          >
          <div id="badge" class="ml-16  justify-start badge badge-error badge-xs"></div>
            <div class=" h-[72px] w-[72px]">
              <img class="rounded-lg" src="${post.image}" alt="" />
            </div>
            <div>
              <div class="flex gap-2 lg:gap-[20px] mb-[12px]">
                <p class="font-bold">#${post.category}</p>
                <p class="font-bold">Author: ${post.author.name}</p>
              </div>
              <h2 class="mb-[16px] text-[20px] font-extrabold">
                ${post.title}
              </h2>
              <p class="mb-[19px]">
                ${post.description}
              </p>
              <hr class="new2 mb-[20px]" />
              <div
                class="flex flex-col lg:flex-row lg:gap-6 justify-between items-center"
              >
                <div class="flex gap-6 items-center">
                  <div class="flex gap-4">
                    <img src="images/Group 13.png" alt="" />
                    <p>${post.comment_count}</p>
                  </div>
                  <div class="flex gap-4">
                    <img src="images/Group 16.png" alt="" />
                    <p>${post.view_count}</p>
                  </div>
                  <div class="flex lg:gap-4">
                    <img src="images/Group 18.png" alt="" />
                    <p>${post.posted_time} min</p>
                  </div>
                </div>
                <div>
                  <button onclick="buttonClick(${post.id})"><img class="btn"  src="images/Group 40106.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>`;

    allPostContainer.appendChild(newdiv);
  });
};

const buttonClick = (allposts, id) => {
  console.log("clicked", id);
  allposts.forEach((post) => {
    console.log(post);
    const newDiv = document.createElement("div");
    newDiv.classList = "bg-white mt-[17px] lg:p-[15px] p-1 rounded-lg";
    newDiv.innerHTML = `
        <div
        class="flex justify-between items-center"
      >
        <h3 class="text-[16px] font-bold">
          
        </h3>
        <div class="flex gap-2">
          <img src="images/Group 16.png" alt="" />
          <p>1,568</p>
        </div>
      </div>
        `;
    all.appendChild(newDiv);
  });
};

const latestPost = async () =>{
    const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
    const res = await fetch(url);
    const data = await res.json();
    const posts = data;
    latestDataDisplay(posts)
    // console.log(posts);
}

const latestDataDisplay = (posts) =>{
    // console.log(posts);
    posts.forEach(post => {
        console.log(post);

        const newdiv = document.createElement('div');
        newdiv.classList = 'flex border-2 border-[#f4f3f3] rounded-xl lg:w-[374px] p-[24px]';
        newdiv.innerHTML = `
        <div class="">
          <div class="mb-[24px]">
            <img
              class="bg-[#f4f3f3] lg:h-[190px] lg:w-[326px] rounded-lg"
              src="${post.cover_image}"
              alt=""
            />
          </div>
          <div class="flex gap-2 items-center mb-[12px]">
            <img src="images/Frame 0.png" alt="" />
            <p>${post.author.posted_date}</p>
          </div>
          <div class="mb-[16px]">
            <h2 class="text-[18px] font-extrabold mb-[12px]">
              ${post.title}
            </h2>
            <p>
            ${post.description}
            </p>
          </div>
          <div class="flex gap-5">
            <img src="" alt="" />
            <div>
              <h4 class="text-[16px] font-extrabold">${post.author.name}</h4>
              <p>${post.author.designation}</p>
            </div>
          </div>
          </div>
        
        `
        latest.appendChild(newdiv)
    });
}

latestPost();
Allfetchdata();
// buttonClick();
