function toggleContent(pageId) {
  // إ
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
  
  // 
  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
      selectedPage.style.display = 'block';
  } else {
      console.warn(`Element with ID ${pageId} not found.`);
  }
}
