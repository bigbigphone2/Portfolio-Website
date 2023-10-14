const handleScroll = (scrolling)=> {
    let top = scrolling ? document.getElementById(scrolling).offsetTop : 0;
    switch (scrolling){
      case 'about':
        top += -60;
        break;
      case 'skills':
        top += -60;
        break;
      case 'experience':
        top += 0;
        break;
      case 'education':
        top += -50;
        break;
      case 'projects':
        top += -50;
        break;
      default:
        top += 0;
    }
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
};

export default handleScroll;