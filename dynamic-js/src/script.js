// const navbar = document.querySelector("#navbar");
const foot = document.querySelector("#footer-data");
const overlayDiv = document.querySelector(".overlay");
const events = ["click", "scroll", "mouseover", "mouseout"];

// Fetching the Navigation bar from navbar.html
// fetch("./src/components/navbar.html")
//   .then((result1) => result1.text())
//   .then((data1) => {
//     navbar.innerHTML = data1;
//   });

// Fetching the Footer from footer.html
fetch("./src/components/footer.html")
  .then((result2) => result2.text())
  .then((data2) => {
    foot.innerHTML = data2;
  });

// Change select in search section
const selectDrop = document.querySelector("#opt");
const searchSection = document.querySelector(".search");
selectDrop.addEventListener("change", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  searchSection.classList.add("outline-orange-400");
  document.querySelector("#search-ip").focus();
  document.querySelector("#search-ip").setSelectionRange(5, 5);
});

// Click search input
document.querySelector("#search-ip").addEventListener("click", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  searchSection.classList.add("outline-orange-400");
  document.querySelector("#search-ip").focus();
  document.querySelector("#search-ip").setSelectionRange(5, 5);
});

// Click & Scroll search section
events.forEach((eachEvent) => {
  if (eachEvent === "click") {
    overlayDiv.addEventListener(eachEvent, (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      searchSection.classList.remove("outline-orange-400");
      document.querySelector("#search-ip").focus();
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      searchSection.classList.remove("outline-orange-400");
      document.querySelector("#search-ip").focus();
    });
  }
});

// MouseOver language section
document.querySelector(".select-lang").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".lang-drop1").classList.remove("invisible");
});

// MouseOut & Scroll language section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".select-lang").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".lang-drop1").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".lang-drop1").classList.add("invisible");
    });
  }
});

// MouseOver Account section
document.querySelector(".select-accnt").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".accnt-drop1").classList.remove("invisible");
});

// MouseOut & Scroll Account section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document
      .querySelector(".select-accnt")
      .addEventListener("mouseout", (e) => {
        e.stopPropagation();
        overlayDiv.classList.add("hidden");
        overlayDiv.classList.remove("block");
        document.querySelector(".accnt-drop1").classList.add("invisible");
      });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".accnt-drop1").classList.add("invisible");
    });
  }
});

// Click All section
document.querySelector(".all-container").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").classList.remove("hidden");
  document.querySelector("BODY").classList.add("overflow-y-hidden");
  // document.querySelector("#navbar1").classList.remove("z-");
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  overlayDiv.classList.add("top-0");
  overlayDiv.classList.add("bg-black/70");
  overlayDiv.classList.add("z-3");
});

// Close All Section
document.querySelector(".close-btn").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").classList.add("hidden");
  document.querySelector("BODY").classList.remove("overflow-y-hidden");
  overlayDiv.classList.remove("block");
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("top-0");
  overlayDiv.classList.remove("bg-black/70");
  overlayDiv.classList.remove("z-3");
});
document.querySelector(".overlay").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".all-drop-container").classList.add("hidden");
  document.querySelector("BODY").classList.remove("overflow-y-hidden");
  overlayDiv.classList.remove("block");
  overlayDiv.classList.add("hidden");
  overlayDiv.classList.remove("top-0");
  overlayDiv.classList.remove("bg-black/70");
  overlayDiv.classList.remove("z-3");
});

// MouseOver Fresh section
document.querySelector(".fresh").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".fresh-drop").classList.remove("invisible");
});

// MouseOut & Scroll Fresh section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".fresh").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      document.querySelector(".fresh-drop").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.remove("block");
      overlayDiv.classList.add("hidden");
      document.querySelector(".fresh-drop").classList.add("invisible");
    });
  }
});

// MouseOver Prime section
document.querySelector(".prime").addEventListener("mouseover", (e) => {
  e.stopPropagation();
  overlayDiv.classList.remove("hidden");
  overlayDiv.classList.add("block");
  document.querySelector(".prime-drop").classList.remove("invisible");
});

// MouseOut & Scroll Prime section
events.forEach((eachEvent) => {
  if (eachEvent === "mouseout") {
    document.querySelector(".prime").addEventListener("mouseout", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".prime-drop").classList.add("invisible");
    });
  } else if (eachEvent === "scroll") {
    document.addEventListener("scroll", (e) => {
      e.stopPropagation();
      overlayDiv.classList.add("hidden");
      overlayDiv.classList.remove("block");
      document.querySelector(".prime-drop").classList.add("invisible");
    });
  }
});
