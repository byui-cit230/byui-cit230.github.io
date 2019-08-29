function test() {
  const aside = document.querySelector('aside'); // output

  // document elements
  const doctype = document.doctype;
  console.log(JSON.stringify(doctype));

  const desc = document.querySelector('meta[name="description"]');

  let debug = "";
  if (doctype != null) {
    if (doctype == '<!doctype html>' || doctype == '<!DOCTYPE html>') {
      debug += '&#9745; Proper Document Declaration Found!<br>';
    } else {
      debug += '<span class="red">&#9744; A proper document type declaration is missing!<br> <span class="user-content level1">' + doctype + '</span></span><br><br>';
    }
  }
  else {
    debug += '<span class="red">&#9744; DTD (doctype) NOT found!</span><br>';
  }

  // meta description
  if (desc) {
    debug += '&#9745; Meta description found!<br>';
    console.log(desc.getAttribute('content').length);
    if (desc.getAttribute('content').length > 49) {
      debug += '<span class="indent1">&#9745; The meta description meets the minimum length requirement.</span><br>';
    } else {
      debug += '<span class="indent1 red">&#9744; Meta description is too short in length! <span class="user-content">' + desc.getAttribute("content") + '</span></span>';
    }
  }
  else {
    debug += '<span class="red">&#9744; Meta description Not found!</span><br>';
  }

  aside.insertAdjacentHTML('beforeEnd', debug);

}