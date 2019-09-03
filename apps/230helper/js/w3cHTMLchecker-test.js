function test() {
  const aside = document.querySelector('aside'); // output

  // document elements
  console.log(document.URL);
  console.log(document.title.length);
  console.log(document.head);
  console.log(document.all);

  const doctype = document.doctype;
  console.log(doctype);

  const desc = document.querySelector('meta[name="description"]');

  let debug = "";
  if (doctype != null) {
    if (doctype.name == 'html') {
      debug += '&#9745; Document Type Definition (DTD) found<br>';
    } else {
      debug += '<span class="red">&#9744; A proper document type declaration is missing!<br> <span class="user-content level1">' + doctype + '</span></span><br><br>';
    }
  }
  else {
    debug += '<span class="red">&#9744; DTD (doctype) NOT found!</span><br>';
  }

  // page title
  if (document.title) {
    debug += '&#9745; title found<br>';
    if (document.title.length > 20 && document.title.length < 71) {
      debug += '<span class="indent1">&#9745; The title seems to be of an appropriate length. Check keyword use.</span><br>';
    } else {
      debug += '<span class="indent1 red">&#9744; Check the document title content! <span class="user-content">' + document.title + '</span></span>';
    }
  }
  else {
    debug += '<span class="red">&#9744; Page title not found!</span><br>';
  }

  // meta description
  if (desc) {
    debug += '&#9745; &lt;meta&gt; description found<br>';
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