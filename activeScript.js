var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

switch (thisfilefullname)
{
  case '1-1.html':
    document.querySelector('#list1-1').style.backgroundColor = 'yellow';
    document.querySelector('#list1-1').style.color = 'red';
    break;
  case '1-2.html':
    document.querySelector('#list1-2').style.backgroundColor = 'yellow';
    document.querySelector('#list1-2').style.color = 'red';
    break;
  case '1-3.html':
    document.querySelector('#list1-3').style.backgroundColor = 'yellow';
    document.querySelector('#list1-3').style.color = 'red';
    break;
  case '2-1.html':
    document.querySelector('#list2-1').style.backgroundColor = 'yellow';
    document.querySelector('#list2-1').style.color = 'red';
    break;
  case '2-2.html':
    document.querySelector('#list2-2').style.backgroundColor = 'yellow';
    document.querySelector('#list2-2').style.color = 'red';
    break;
  case '2-3.html':
    document.querySelector('#list2-3').style.backgroundColor = 'yellow';
    document.querySelector('#list2-3').style.color = 'red';
    break;
  case '2-4.html':
    document.querySelector('#list2-4').style.backgroundColor = 'yellow';
    document.querySelector('#list2-4').style.color = 'red';
    break;
}
