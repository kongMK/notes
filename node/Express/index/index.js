
    const div = document.querySelector('div');
    
    function uploadDate() {
      div.innerHTML = new Date().toLocaleString();
      setTimeout(uploadDate, 1000);
    }
    uploadDate();
  