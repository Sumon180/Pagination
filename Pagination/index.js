const ulTag = document.querySelector("ul");
let totalPage = 20;
// let totalPage = ;

function element(totalPages, page) {
  let liTag = " ";
  let activeLi;
  let beforPages = page - 1; //5-1=4;
  let afterPages = page + 1; //5+1=6;
  if (page > 1) {
    //if page value is greater then 1 then add new li which is show the PREVIOUSE button
    liTag += `<li class="btn prev" onclick="element(totalPage, ${page - 1})">
                <span><i class="fas fa-angle-left"></i>Prev</span>
            </li>`;
  }
  if (page > 2) {
    //if page value is greater than 2 then add new li tag with 1 value
    liTag += ` <li class="numb" onClick="element(totalPage,1)"><span>1</span></li>`;
    if (page > 3) {
      //if page value is greater than 3 then add new li tag with(...)
      liTag += ` <li class="dots"><span>...</span></li>`;
    }
  }
  //how many pages or li show after the current li
  if (page == totalPages) {
    beforPages = beforPages - 2;
  } else if (page == totalPages - 1) {
    beforPages = beforPages - 1;
  }
  //how many pages or li show after the current li
  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforPages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPage) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      //if page value is equal to pageLength then assign the active string in the activeLi variable
      activeLi = "active";
    } else {
      //else leave empty to the activeLi variable
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onClick="element(totalPage, ${pageLength})"><span>${pageLength}</span></li>`;
  }
  if (page < totalPages - 1) {
    //if page value is less than totalPages by -1 then show the last li or page which is 20
    if (page < totalPages - 2) {
      //if page value is less than totalPages by -2 then show the last (...) befor last page
      liTag += ` <li class="dots"><span>...</span></li>`;
    }
    liTag += ` <li class="numb" onClick="element(totalPage, ${totalPage})"><span>${totalPage}</span></li>`;
  }
  if (page < totalPages) {
    //if page value is less then totalPage then add new li which is show the NEXT button
    liTag += `<li class="btn next" onclick="element(totalPage, ${page + 1})">
                 <span>Next<i class="fas fa-angle-right"></i></span>
             </li>`;
  }
  ulTag.innerHTML = liTag;
}
element(totalPage, 5);
