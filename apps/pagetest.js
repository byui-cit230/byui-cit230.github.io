javascript: console.log(document.URL);
console.log(document.title + '- length = ' + document.title.length);
console.log(document.head);
console.log(document.all);
const doctype = document.doctype;
const desc = document.querySelector('meta[name="description"]');
let debug = "";
if (doctype != null) {
  if (doctype.name == 'html') {
    debug += '&#9745; Document Type Definition (DTD) found<br>';
  } else {
    debug += '<span class="red">&#9744; A proper document type declaration is missing!<br> <span class="user-content level1">' + doctype + '</span></span><br><br>';
  }
} else {
  debug += '<span class="red">&#9744; DTD (doctype) NOT found!</span><br>';
}
if (document.title) {
  debug += '&#9745; title found<br>';
  if (document.title.length > 20 && document.title.length < 71) {
    debug += '<span class="indent1">&#9745; The title seems to be of an appropriate length. Check keyword use.</span><br>';
  } else {
    debug += '<span class="indent1 red">&#9744; Check the document title content! <span class="user-content">' + document.title + '</span></span>';
  }
} else {
  debug += '<span class="red">&#9744; Page title not found!</span><br>';
}
if (desc) {
  debug += '&#9745; &lt;meta&gt; description found<br>';
  console.log(desc.getAttribute('content').length);
  if (desc.getAttribute('content').length > 49) {
    debug += '<span class="indent1">&#9745; The meta description meets the minimum length requirement.</span><br>';
  } else {
    debug += '<span class="indent1 red">&#9744; Meta description is too short in length! <span class="user-content">' + desc.getAttribute("content") + '</span></span>';
  }
} else {
  debug += '<span class="red">&#9744; Meta description Not found!</span><br>';
}

win = window.open();
  doc = win.document;
  const meta = doc.createElement('meta');
  meta.setAttribute('charset', 'utf-8');
  const title = doc.createElement('title');
  title.appendChild(doc.create('230 Standards Test'));
  const style = doc.createElement('style');
  style.type = 'text/css';
  style.appendChild(doc.createTextNode('body { font-family: Verdana,Arial,sans-serif; } ' + 'div.code > pre { display: table-cell; padding-left: 0.5em; } ' + 'div.code > pre.linenum {' + '  padding: 0 0.5em 0 0; border-right: 1px solid;' + '  text-align: right;' + '}'));
  doc.head.appendChild(meta);
  doc.head.appendChild(title);
  doc.head.appendChild(style);
  doc.body.appendChild(doc.createTextNode(debug));