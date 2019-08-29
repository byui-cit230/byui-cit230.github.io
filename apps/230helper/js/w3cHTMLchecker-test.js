function test() {
  const aside = document.querySelector('aside'); // output

  // document elements
  const doctype = document.doctype;
  const desc = document.querySelector('meta[name="description"]');

  let debug = "";

  console.log(doctype);
  if (doctype == '<!doctype html>' || doctype == '<!DOCTYPE html>') {
    debug += '&#9745; Proper Document Declaration Found!<br>';
  } else {
    debug += '<span class="red">&#9744; A proper document type declaration is missing!<br> <span class="user-content level1">' + doctype + '</span></span><br><br>';
  }

  // meta description
  if (desc) {
    debug += '&#9745; Meta Description Found!<br>';

    if (desc.length > 49) {
      debug += '&#9745; The description content is of proper length.' + desc.length + '<br>';
    } else {
      debug += '<span class="indent1 red">&#9744; Meta description is too short in length! <span class="user-content">' + desc.getAttribute("content") + '</span></span>';
    }
  }

  aside.insertAdjacentHTML('beforeEnd', debug);

}