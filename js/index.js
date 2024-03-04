const allPostContainer = document.getElementById("all-post-container");
const all = document.getElementById("all");
const latest = document.getElementById("latest");
const searchContainer = document.getElementById("search-container");
const errorElement = document.getElementById("error-element");

let readCount = 0;

// -----------------Display All Posts------------------
const Allfetchdata = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(url);
  const data = await res.json();
  const allposts = data.posts;
  let stringfyss = JSON.stringify(allposts).replace(/'/g, " ");
  let parsing = JSON.parse(stringfyss)
  
  displayAllPosts(parsing);
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
          <div id="badge" class="ml-16  justify-start badge ${
            post.isActive == true ? "badge-success" : "badge-error"
          } badge-xs"></div>
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
                  <button onclick="buttonClick('${post.title}','${
      post.view_count
    }');"><img class="btn"  src="images/Group 40106.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>`;

    allPostContainer.appendChild(newdiv);
  });
};

const buttonClick = async (title, count) => {
  // console.log(readCount);
  readCount++;
  // console.log(readCount);
  document.getElementById("makeReadCount").innerText = readCount;

  titleShow(title, count);
};

const titleShow = (title, count) => {
  // console.log("clicked", post);

  const newDiv = document.createElement("div");
  newDiv.classList =
    "lg:border-2 lg:border-black bg-white mt-[17px] lg:p-[15px] rounded-lg lg:w-[370px]";
  newDiv.innerHTML = `
        <div
        class="flex justify-between items-center w-full"
      >
        <h3 class="text-[16px] font-bold">
          ${title}
          
        </h3>
        <div class="flex gap-2">
          <img src="images/Group 16.png" alt="" />
          <p>${count}</p>
        </div>
      </div>
        `;
  all.appendChild(newDiv);
};

const latestPost = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const res = await fetch(url);
  const data = await res.json();
  const posts = data;
  latestDataDisplay(posts);
  // console.log(posts);
};

const latestDataDisplay = (posts) => {
  // console.log(posts);
  posts.forEach((post) => {
    // console.log(post);

    const newdiv = document.createElement("div");
    newdiv.classList =
      "flex border-2 border-[#f4f3f3] rounded-xl lg:w-[374px] p-[24px]";
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
            <p>${
              typeof post.author.posted_date == "string"
                ? post.author.posted_date
                : "No Publish Date"
            }</p>
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
            <img class="h-[44px] w-[44px] rounded-full" src="${
              post.profile_image
            }" alt="" />
            <div>
              <h4 class="text-[16px] font-extrabold">${post.author.name}</h4>
              <p>${
                typeof post.author.designation == "string"
                  ? post.author.designation
                  : "Unknown"
              }</p>
            </div>
          </div>
          </div>
        
        `;
    latest.appendChild(newdiv);
  });
};

// --------------Search data-----------------
const searchdatafetch = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  const posts = data.posts;

  let stringfyss = JSON.stringify(posts).replace(/'/g, " ");
  let parsing = JSON.parse(stringfyss)

  displaySearchData(parsing);
};

const displaySearchData = (posts) => {
  // console.log(posts);
  searchContainer.textContent = "";

  setTimeout(() => {
    posts.forEach((post) => {
      // console.log(post);

      const searchdiv = document.createElement("div");
      searchdiv.classList =
        "bg-[#797DFC1A] mb-6 lg:mb-0 flex flex-col lg:flex-row gap-[24px] p-[40px] lg:rounded-xl";
      searchdiv.innerHTML = `
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
                  <button onclick="buttonClick('${post.title}','${post.view_count}');"><img class="btn"  src="images/Group 40106.png" alt="" /></button>
                </div>
              </div>
            </div>
          </div>`;

      searchContainer.appendChild(searchdiv);
      allPostContainer.classList.add("hidden");
    });
  }, 2000);

  setTimeout(() => {
    loading(false);
  }, 2000);
};

setTimeout(() => {
  loading(true);
}, -2000);

const searchButton = () => {
  loading(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  // console.log(searchText);
  searchdatafetch(searchText);
};

const loading = (isLoading) => {
  const loadingSpainer = document.getElementById("loading");
  if (isLoading) {
    loadingSpainer.classList.remove("hidden");
  } else {
    loadingSpainer.classList.add("hidden");
  }
};

latestPost();
Allfetchdata();
searchdatafetch();

