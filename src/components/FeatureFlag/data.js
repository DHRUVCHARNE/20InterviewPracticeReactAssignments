{
  /*Feature Flags to show response from API during some specific intervals */
}
const dummyApiResponse = {
  showTicTacToe: true,
  showGitHubFinder: true,
  showSearchAutoComplete: true,
  showRandomColor: true,
  showStarRatings: true,
  showLoadMoreButton: true,
  showTreeview: true,
  showQRCodeGenerator: true,
  showThemeSwitch: true,
  showScrollIndicator: true,
  showTabTest: true,
  showModalTest: true,
  showAccordian: true,
  showImageSlider: true,
  showUseFetchTest: true,
  showuseOnClickOutsideTest: true,
  showUseWindowResizeTest: true,
  showScrolltopbottom: true,
  showScrollsection:true
};
export default function FeatureFlagService() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(() => resolve(dummyApiResponse), 500);
    else reject("Some Error Occured! Please Try Again");
  });
}
