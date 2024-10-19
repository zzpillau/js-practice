// @ts-check

export default () => {
  // BEGIN (write your solution here)
const navTabs = document.querySelectorAll('[data-bs-toggle="tab"]');

navTabs.forEach((navTab) => {
  navTab.addEventListener('click', () => {
    const tabContentId = navTab.dataset.bsTarget;

    const tabContent = document.querySelector(tabContentId);

    const navParent = navTab.parentNode;

    const activeTab = navParent.querySelector('.active');
    activeTab.classList.remove('active');

    const contentParent = tabContent.parentNode

    const activeTabContent = contentParent.querySelector('.active');
    activeTabContent.classList.remove('active');

    navTab.classList.add('active');
    tabContent.classList.add('active');
  })
})

  const navPills = document.querySelectorAll('[data-bs-toggle="pill"]');

  navPills.forEach((navPill) => {

    navPill.addEventListener('click', () => {
      const pillContentId = navPill.dataset.bsTarget;
      const pillContent = document.querySelector(pillContentId);

      const pillParent = navPill.closest('#appTab');

      const activePill = pillParent.querySelector('.active');
      activePill.classList.remove('active');

      const contentPillParent = pillContent.parentNode;
      const activePillContent = contentPillParent.querySelector('.active');
      activePillContent.classList.remove('active');

      navPill.classList.add('active');
      pillContent.classList.add('active');
    })
  })
  
  // END
};
