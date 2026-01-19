function search_tags() {
    let input = document.getElementById('Tags').value.toLowerCase();
    let trs = document.getElementsByTagName('tr');
    let h1s = document.getElementsByTagName('h1')
    let h2s = document.getElementsByTagName('h2');
    let footer = document.getElementById('footer');
  
    let noElementsFound = true;
  
    for (let i = 0; i < trs.length; i++) {
        let tr = trs[i];
        let trId = tr.id.toLowerCase();
    
        if (trId.includes(input)) {
            tr.classList.remove('hidden');
            noElementsFound = false;
        } else {
            tr.classList.add('hidden');
        }
    }
  
    for (let i = 0; i < h1s.length; i++) {
        let h1 = h1s[i];
        let h1Id = h1.id.toLowerCase();
    
        if (h1Id.includes(input)) {
            h1.classList.remove('hidden');
            noElementsFound = false;
        } else {
            h1.classList.add('hidden');
        }
    }
  
    for (let i = 0; i < h2s.length; i++) {
        let h2 = h2s[i];
        let h2Id = h2.id.toLowerCase();
    
        if (h2Id.includes(input)) {
            h2.classList.remove('hidden');
            noElementsFound = false;
        } else {
            h2.classList.add('hidden');
        }
    }
  
    if (noElementsFound) {
            footer.classList.add('cshort');
            footer.classList.remove('clong');
        } else {
            footer.classList.add('clong');
            footer.classList.remove('cshort');
    }
}