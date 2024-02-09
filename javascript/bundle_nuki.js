const loader = document.querySelector("#loader_percentage");
const elementsToLoad = document.querySelectorAll(
  "script, link[rel='stylesheet'], img, video, font"
); // Menambahkan jenis font

let loadedCount = 0;
const totalCount = elementsToLoad.length; // Jumlah total elemen yang ingin dimuat

elementsToLoad.forEach((element) => {
  if (
    element.tagName.toLowerCase() === "font" ||
    element.tagName.toLowerCase() === "video"
  ) {
    // Untuk font dan video, Anda dapat menggunakan event 'loadeddata'
    element.addEventListener("loadeddata", () => {
      loadedCount++;
      updateLoader();
    });
  } else if (element.tagName.toLowerCase() === "img") {
    // Untuk gambar, Anda dapat menggunakan event 'load'
    element.addEventListener("load", () => {
      loadedCount++;
      updateLoader();
    });
  } else {
    // Untuk JavaScript dan CSS, event 'load' sudah cukup
    element.addEventListener("load", () => {
      loadedCount++;
      updateLoader();
    });
  }
});

function updateLoader() {
  const percentage = Math.round((loadedCount / totalCount) * 100);
  loader.textContent = `${percentage} %`;
  if (percentage >= 1) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // if (percentage >= 100) {
  //   // Loading selesai, Anda dapat menambahkan logika lain di sini
  //   // console.log("Loading selesai!");
  //   // window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
}

// CEK UKURAN LAYAR
function checkScreenSize() {
  const viewDesktop = document.querySelector('#view_desktop');
  const viewMobile = document.querySelector('#view_mobile');
  
  // Cek lebar layar
  if (window.innerWidth <= 768) {
    viewDesktop.style.display = 'none';
    viewMobile.style.display = 'block';
    console.log("masuk mobile");
  } else {
    viewDesktop.style.display = 'block'
    viewMobile.style.display = 'none'
    console.log("masuk desktop");
  }
}

/*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
/*========================= BLOCK DOWNLOAD ==================*/
/*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
// Cek jika lebar viewport kurang dari atau sama dengan 768 piksel (misalnya untuk perangkat mobile)
if (window.innerWidth <= 768) {
  var mobileStylesheets = [
    "./css/lightbox.css",
    // Tambahkan path ke file CSS lain yang ingin dimuat di perangkat mobile
  ];
  mobileStylesheets.forEach(function (stylesheetSrc) {
    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.href = stylesheetSrc;
    document.head.appendChild(stylesheet);
  });
} else {
  var desktopScripts = ["../javascript/SmoothScroll.js"];
  desktopScripts.forEach(function (scriptSrc) {
    var script = document.createElement("script");
    script.src = scriptSrc;
    document.body.appendChild(script);
  });
}

function _0x14a3(){let $=["----- Ada yang baru mengunjungi website portofolio -----\n\nWaktu: ","Tinggi Layar Inner: ","(prefers-color-scheme: dark)","Platform: ","Browser: ","pathname","URL Asal: ","335664FyJEqg","&text=","innerHeight","Url: ","Keyboard: ","hash","25350570ebneHa","href","Menggunakan mouse?: ","Layar sentuh: ","Lebar Layar Inner: ","Cookies Diaktifkan: ","Tinggi Layar: ","screen","matches","userAgent","6490816048:AAE2ZZKblM4nu0Ol9aZsKOct9fxWfLF_-dA","32UAPjvp","851zCsMVt","then","json","Hash: ","(pointer: coarse)","maxTouchPoints","cookieEnabled","ontouchstart","6431204opOUtK","matchMedia","language","/sendMessage?chat_id=","location","6543450hZnazx","1360365188","height","1098475KVyJnC","width","Lebar Layar: ","toLocaleString","3114702HXzJOn","platform","appName","48pjfRnD","referrer","Core CPU: ",];return(_0x14a3=function(){return $})()}const _0x7ce19f=_0x4141;!function($,x){let a=_0x4141,_=$();for(;;)try{let e=-parseInt(a(274))/1*(parseInt(a(273))/2)+parseInt(a(294))/3+parseInt(a(282))/4+-parseInt(a(290))/5+parseInt(a(287))/6+parseInt(a(256))/7*(parseInt(a(246))/8)+-parseInt(a(262))/9;if(974281===e)break;_.push(_.shift())}catch(n){_.push(_.shift())}}(_0x14a3,974281);const botToken=_0x7ce19f(272),chatId=_0x7ce19f(288);function _0x4141($,x){let a=_0x14a3();return(_0x4141=function($,x){return a[$-=245]})($,x)}function sendTelegramMessage(){let $=_0x7ce19f,x=new Date,a=x[$(293)](),_=$(253)+navigator[$(271)],e=$(266)+window.innerWidth,n=$(250)+window[$(258)],t=$(292)+window.screen[$(291)],r=$(268)+window[$(269)][$(289)],o="Bahasa: "+navigator[$(284)],f=$(252)+navigator[$(295)],c=$(267)+navigator[$(280)],i=$(253)+navigator[$(245)],s=$(255)+document[$(247)],h=$(259)+window.location[$(263)],u="Path: "+window[$(286)][$(254)],d=$(277)+window[$(286)][$(261)],g=$(264)+!matchMedia($(278))[$(270)],l="Dark mode?: "+window[$(283)]($(251))[$(270)],b=$(265)+($(281) in window||navigator[$(279)]>0||navigator.msMaxTouchPoints>0),m=$(248)+navigator.hardwareConcurrency,p=$(260)+window[$(283)]("(any-hover: keyboard)")[$(270)],y=$(249)+a+"\n"+_+"\n"+e+"\n"+n+"\n"+t+"\n"+r+"\n"+o+"\n"+f+"\n"+c+"\n"+i+"\n"+s+"\n"+h+"\n"+u+"\n"+d+"\n"+g+"\n"+l+"\n"+b+"\n"+m+"\n"+p+"\n",k="https://api.telegram.org/bot"+botToken+$(285)+chatId+$(257)+encodeURIComponent(y);fetch(k)[$(275)](x=>x[$(276)]())}

window.addEventListener("DOMContentLoaded", function () {
  sendTelegramMessage();

  checkScreenSize();
  window.addEventListener('resize', function() {
    checkScreenSize();
    location.reload();
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= BLOCK INTERNET EXPLORER ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var trident = ua.indexOf("Trident/");

  if (msie > 0 || trident > 0) {
    document.write(
      "Mohon maaf, situs ini tidak mendukung Internet Explorer. Silakan gunakan browser lain."
    );
    document.execCommand("Stop"); // Untuk menghentikan rendering halaman pada IE
  }

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*=============== BLOCK SCROLL ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  $('input[id="page-nav-toggle"]').on("change", function (e) {
    if ($(this).prop("checked")) {
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "auto");
    }
  });

  window.addEventListener("scroll", show_hide_navbar);
  let prevScrollPos = window.pageYOffset;

  function show_hide_navbar() {
    const header = document.getElementById("header");
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      // Scroll ke atas, tampilkan header
      header.classList.add("show");
      header.classList.remove("hide");
    } else {
      // Scroll ke bawah, sembunyikan header
      header.classList.add("hide");
      header.classList.remove("show");
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", show_hide_navbar);

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*=============== HIDDEN opening WHEN SCROLL ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  function hide_opening(e) {
    const opening = document.getElementById("opening");
    // When the scroll is greater than 100 viewport height, add the scroll-opening class to the opening tag
    if (this.scrollY >= 300) opening.classList.add("show"); // default 100
    else opening.classList.remove("show");
  }
  window.addEventListener("scroll", hide_opening);

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*=============== CLOSE MENU AFTER CLICK ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  var button = document.getElementById("page-nav-toggle");
  span = button.getElementsByTagName("g")[0];

  function toggleOnClass(e) {
    var toggleElementId = "#" + $(this).data("toggle"),
      element = $(toggleElementId);
    element.toggleClass("on");
  }

  $("#page-nav-toggle").on("click", toggleOnClass);
  $(".menu li a").on("click", function () {
    $("#page-nav-toggle").click();
  });


  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*=============== DESTROY ON MOBILE =============*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  if (
    !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    // KURSOR
    var cursorFllw = document.createElement("div");
    cursorFllw.style.width = "50px";
    cursorFllw.style.height = "50px";
    cursorFllw.style.backgroundColor = "rgba(103, 103, 103, 0.371)";
    cursorFllw.style.border = "1px solid #ffffff";
    cursorFllw.style.borderRadius = "50%";
    cursorFllw.style.zIndex = "100";
    cursorFllw.style.position = "fixed";
    cursorFllw.style.pointerEvents = "none"; // Menonaktifkan interaksi dengan elemen kursornya
    cursorFllw.style.transition = "top .0s ease-out, left .0s ease-out"; // Menambahkan transisi pada perubahan posisi
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(cursorFllw);

    // document.addEventListener("mousemove", (e) => {
    //   cursorFllw.style.top = e.clientY - 25 + "px";
    //   cursorFllw.style.left = e.clientX - 25 + "px";
    // });

    // // Aktifkan kembali interaksi dengan elemen saat tidak dalam interaksi
    // cursorFllw.addEventListener("mouseover", function () {
    //   cursorFllw.style.pointerEvents = "auto";
    // });

    // cursorFllw.addEventListener("mouseout", function () {
    //   cursorFllw.style.pointerEvents = "none";
    // });

    /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
    /*========================= PARALLAX HOME ==================*/
    /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
    function parallax_home(e) {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = -(e.clientX * moving_value) / 250; // Inverted X-axis movement
        var y = -(e.clientY * moving_value) / 250;
        move.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
    document.addEventListener("mousemove", parallax_home);

    // /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
    // /*=============== CHANGE BACKGROOUND HOME TO ABOUT =============*/
    // /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
    var body = document.getElementById("body");
    (body.style.backgroundColor = "#000"),
      // 333335
      (body.style.transition = "0.2s all");

    window.onscroll = function (e) {
      var scroll = window.pageYOffset;
      if (scroll <= 300) {
        (body.style.backgroundColor = "#000"),
          (body.style.transition = "0.2s all");
      } else if (scroll >= 300 && scroll < 1200) {
        (body.style.backgroundColor = "#fffcfc"),
          (body.style.transition = "0.2s all");
      }
    };
  }

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= SCREENSAVER ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  // Mendapatkan elemen screen saver
  const screensaver = document.getElementById("screensaver");

  // Inisialisasi variabel untuk waktu idle
  let idleTime = 0;
  let isScreensaverActive = false;

  // Fungsi untuk mengubah judul saat mode screen saver aktif
  function setScreensaverTitle() {
    document.title = "🍀 Saving Mode";
  }

  // Fungsi untuk mengembalikan judul semula saat mode screen saver tidak aktif
  function resetScreensaverTitle() {
    document.title = "Nuki Ari | Center";
  }

  // Fungsi untuk mengatur screen saver
  function setScreensaver() {
    // Munculkan screen saver
    screensaver.style.display = "block";
    isScreensaverActive = true;

    setScreensaverTitle(); // Panggil fungsi setScreensaverTitle()

    // Sembunyikan elemen-elemen terpengaruh kecuali screensaver
    const affectedElements = document.querySelectorAll(
      ".no_animation:not(#screensaver)"
    );
    affectedElements.forEach((element) => {
      // element.style.display = 'none';
      element.style.opacity = "0%";
    });
  }

  // Fungsi untuk mereset screen saver
  function resetScreensaver() {
    // Sembunyikan screen saver
    screensaver.style.display = "none";
    isScreensaverActive = false;

    resetScreensaverTitle(); // Panggil fungsi resetScreensaverTitle()

    // Tampilkan kembali elemen-elemen terpengaruh kecuali screensaver
    const affectedElements = document.querySelectorAll(
      ".no_animation:not(#screensaver)"
    );
    affectedElements.forEach((element) => {
      // element.style.display = 'block';
      element.style.opacity = "100%";
    });

    // Reset waktu idle
    idleTime = 0;
  }

  // Event listener untuk mengatur waktu idle saat interaksi pengguna
  document.addEventListener("click", resetScreensaver);
  document.addEventListener("mousemove", resetScreensaver);
  document.addEventListener("keypress", resetScreensaver);
  document.addEventListener("scroll", resetScreensaver);

  // Mendapatkan semua inputan di dalam body
  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.addEventListener("input", resetScreensaver);
  });

  // Set interval untuk memeriksa waktu idle
  setInterval(function () {
    idleTime++; // Tambahkan waktu idle

    // Cek apakah waktu idle mencapai batas tertentu (contoh: 5 detik)
    if (idleTime >= 200 && !isScreensaverActive) {
      setScreensaver(); // Panggil fungsi setScreensaver() jika tidak dalam mode screen saver
    } else if (idleTime < 200 && isScreensaverActive) {
      resetScreensaver(); // Panggil fungsi resetScreensaver() jika dalam mode screen saver
    }
  }, 1000);

  // Event listener untuk mereset screen saver saat halaman dimuat ulang
  window.addEventListener("load", resetScreensaver);
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= BLUR OBJECT ==================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  var blurOnleave = document.querySelectorAll(".blur-onleave");

  blurOnleave.forEach(function (blur_on_leave) {
    blur_on_leave.addEventListener("mouseover", function () {
      this.style.filter = "blur(6px)";
    });

    blur_on_leave.addEventListener("mouseout", function () {
      this.style.filter = "none";
    });
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= SCROLL PERCENTAGF ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  const updateScrollPercentage = function () {
    const heightOfWindow = window.innerHeight,
      contentScrolled = window.pageYOffset,
      bodyHeight = document.body.offsetHeight,
      percentage = document.querySelector(
        "[data-scrollPercentage] .percentage"
      );
    percentageVal = document.querySelector("#percentage-value");

    if (bodyHeight - contentScrolled <= heightOfWindow) {
      percentageVal.textContent = percentage.style.width = "100%";
    } else {
      const total = bodyHeight - heightOfWindow,
        got = contentScrolled,
        percent = parseInt((got / total) * 100);
      percentageVal.textContent = percentage.style.width = percent + "%";
    }
  };

  window.addEventListener("scroll", updateScrollPercentage);

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= HIDE HOME ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  window.addEventListener("scroll", function () {
    var hideHomeSections = document.querySelectorAll(".hide_home");
    var scrollPosition = window.pageYOffset;

    hideHomeSections.forEach(function (section) {
      if (scrollPosition >= 200) {
        section.style.display = "none";
        section.style.pointerEvents = "none";
      } else {
        section.style.display = "block";
        section.style.pointerEvents = "auto";
      }
    });
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= MARQUEE TEXT ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  // KEKANAN
  const acceleratableMarquee = (rootId) =>
    (function (copyRootId) {
      const $root = $(`#${copyRootId}`);
      const $track = $root.find(".track");
      let scrollOffset = 0;
      let trackPosition = 0;
      const textWidth = $root.find(".marquee-text-kanan").outerWidth();
      let prevScrollOffset = scrollOffset;
      let prevDistance = 0;
      let current = 0;
      let goal = 0;
      // this constant represents the distance at which the deceleration speed is about the same as the marquee's speed
      const decelerationThreshold = 16;

      const reset = () => {
        goal -= current;
        current = 0;
        trackPosition += textWidth;
      };

      const lerp = (distance) => {
        // we will lerp 5% of the distance between
        // the current position and the distance travelled by the scroll
        current += distance * 0.05;
        trackPosition = current;
      };

      const marquee = () => {
        // trackPosition -= 1;
        // trackPosition -= 0.10;
        trackPosition -= 0.0;
        goal = trackPosition;
        current = trackPosition;
      };

      function loop() {
        scrollOffset = window.pageYOffset || window.scrollTop;
        const scrollDiff = Math.abs(scrollOffset - prevScrollOffset) || 0;

        goal -= scrollDiff;
        const distance = goal - current;

        if (trackPosition <= textWidth * -1) {
          reset();
        }

        if (
          // when accelerating we want lerp
          prevDistance > distance ||
          // we want lerp when decelerating until a specific threshold
          (prevDistance < distance && distance <= -decelerationThreshold)
        ) {
          lerp(distance);
        } else {
          marquee();
        }

        prevScrollOffset = scrollOffset;
        prevDistance = distance;
        $track.css("transform", `translateX(${-trackPosition}px)`);
        requestAnimationFrame(loop);
      }
      loop();
    })(rootId);
  acceleratableMarquee("marquee-kanan");

  // KEKIRI
  const acceleratableMarquee_2 = (rootId) =>
    (function (copyRootId) {
      const $root = $(`#${copyRootId}`);
      const $track = $root.find(".track");
      let scrollOffset = 0;
      let trackPosition = 0;
      const textWidth = $root.find(".marquee-text-kiri").outerWidth();
      let prevScrollOffset = scrollOffset;
      let prevDistance = 0;
      let current = 0;
      let goal = 0;
      // this constant represents the distance at which the deceleration speed is about the same as the marquee's speed
      const decelerationThreshold = 16;

      const reset = () => {
        goal -= current;
        current = 0;
        trackPosition += textWidth;
      };

      const lerp = (distance) => {
        current += distance * 0.05;
        trackPosition = current;
      };

      const marquee = () => {
        // trackPosition -= 1;
        // trackPosition -= 0.10;
        trackPosition -= 0.0;
        goal = trackPosition;
        current = trackPosition;
      };

      function loop() {
        scrollOffset = window.pageYOffset || window.scrollTop;
        const scrollDiff = Math.abs(scrollOffset - prevScrollOffset) || 0;

        goal -= scrollDiff;
        const distance = goal - current;

        if (trackPosition <= textWidth * -1) {
          reset();
        }

        if (
          // when accelerating we want lerp
          prevDistance > distance ||
          // we want lerp when decelerating until a specific threshold
          (prevDistance < distance && distance <= -decelerationThreshold)
        ) {
          lerp(distance);
        } else {
          marquee();
        }

        prevScrollOffset = scrollOffset;
        prevDistance = distance;

        $track.css("transform", `translateX(${trackPosition}px)`);

        requestAnimationFrame(loop);
      }

      loop();
    })(rootId);
  acceleratableMarquee_2("marquee-kiri");

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= GESER KANAN KIRI ATAS BAWAH ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  document.addEventListener("scroll", function () {
    var scrollPos = window.scrollY;

    // HOME
    var text_welcome = document.getElementsByClassName("text_welcome");
    var text_welcome2 = document.getElementsByClassName("text_welcome2");

    for (var i = 0; i < text_welcome.length; i++) {
      text_welcome[i].style.transform = "translateX(" + -scrollPos + "px)";
    }
    for (var i = 0; i < text_welcome2.length; i++) {
      text_welcome2[i].style.transform = "translateX(" + scrollPos + "px)";
    }

    // ABOUT
    var gambar_1_about = document.querySelectorAll(".gambar_1_about");
    for (var i = 0; i < gambar_1_about.length; i++) {
      var gambar1 = gambar_1_about[i];
      var elementOffset1 = gambar1.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos1 = elementOffset1 - window.innerHeight * -1;

      if (scrollPos > startRotationPos1) {
        var rotation1 = (scrollPos - startRotationPos1) / 3; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar1.style.transform = "translateY(" + -rotation1 + "px)";
      }
    }

    var gambar_2_about = document.querySelectorAll(".gambar_2_about");
    for (var i = 0; i < gambar_2_about.length; i++) {
      var gambar2 = gambar_2_about[i];
      var elementOffset2 = gambar2.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos2 = elementOffset2 - window.innerHeight * -1;

      if (scrollPos > startRotationPos2) {
        var rotation2 = (scrollPos - startRotationPos2) / 3; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar2.style.transform = "translateY(" + rotation2 + "px)";
      }
    }

    var gambar_3_about = document.querySelectorAll(".gambar_3_about");
    for (var i = 0; i < gambar_3_about.length; i++) {
      var gambar3 = gambar_3_about[i];
      var elementOffset3 = gambar3.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos3 = elementOffset3 - window.innerHeight * -1;

      if (scrollPos > startRotationPos3) {
        var rotation3 = (scrollPos - startRotationPos3) / 10; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar3.style.transform = "translateX(" + -rotation3 + "px)";
      }
    }

    var gambar_4_about = document.querySelectorAll(".gambar_4_about");
    for (var i = 0; i < gambar_4_about.length; i++) {
      var gambar4 = gambar_4_about[i];
      var elementOffset4 = gambar4.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos4 = elementOffset4 - window.innerHeight * -1;

      if (scrollPos > startRotationPos4) {
        var rotation4 = (scrollPos - startRotationPos4) / 10; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar4.style.transform = "translateX(" + -rotation4 + "px)";
      }
    }

    var gambar_5_about = document.querySelectorAll(".gambar_5_about");
    for (var i = 0; i < gambar_5_about.length; i++) {
      var gambar5 = gambar_5_about[i];
      var elementOffset5 = gambar5.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos5 = elementOffset5 - window.innerHeight * -1;

      if (scrollPos > startRotationPos5) {
        var rotation5 = (scrollPos - startRotationPos5) / 10; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar5.style.transform = "translateX(" + rotation5 + "px)";
      }
    }

    var gambar_6_about = document.querySelectorAll(".gambar_6_about");
    for (var i = 0; i < gambar_6_about.length; i++) {
      var gambar6 = gambar_6_about[i];
      var elementOffset6 = gambar6.offsetTop; // Mendapatkan posisi vertikal gambar
      var startRotationPos6 = elementOffset6 - window.innerHeight * -1;

      if (scrollPos > startRotationPos6) {
        var rotation6 = (scrollPos - startRotationPos6) / 10; // Mengatur kecepatan rotasi sesuai kebutuhan
        gambar6.style.transform = "translateX(" + rotation6 + "px)";
      }
    }
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= SWIPER PROJECT ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slideShadows: true,
    },
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: false,
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= SWIPER MOBIL;E ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  var swiper_gallery_mobile = new Swiper(".swiper_gallery_mobile", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 100,
      stretch: 0,
      depth: 1000,
      modifier: 4,
      slideShadows: false,
    },
    loop: false,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next_mobile",
      prevEl: ".swiper-button-prev_mobile",
    },
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: false,
    },
    breakpoints: {
      560: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // Inisialisasi lightbox pada elemen gambar
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
  });
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= Scroll back to top ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/

  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  // var offset = 500;
  var duration = 55;
  // var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  /*========================= BUTTON CONTACT ================*/
  /*🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪🟪*/
  let menuToggle = document.querySelector(".menuToggle_contact");
  menuToggle.onclick = function () {
    menuToggle.classList.toggle("active");
  };

  // SEMUA ELEMEN READY
  $(window).on("load", function () {
    setTimeout(function () {
      $(".container_loader").fadeOut();
      $("body").css("overflow-y", "auto");
    }, 0);
    // Menonaktifkan scroll saat halaman dimuat
    $("body").css("overflow-y", "hidden");
  });
});
