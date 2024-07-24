import React from "react";
import { useContext } from "react";
import { FeatureFlagContext } from "./context";
import "../accordian/styles.css";
import RandomColor from "../random-color";
import StarRatings from "../star-rating";
import ImageSlider from "../image-slider";
import LoadMoreButton from "../LoadMoreButton";
import TreeView from "../tree-view/index";
import menus from "../tree-view/data";
import QRCodeGen from "../QRCodeGenerator/index.jsx";
import ThemeSwitch from "../ThemeSwitch/index.jsx";
import ScrollIndicator from "../scroll-indicator/index.jsx";
import TabTest from "../custom-tabs/tab-test.jsx";
import ModalTest from "../modal-popup/modal-test.jsx";
import Accordian from "../accordian/index.jsx";
import GitHubFind from "../GitHubProfileFinder/index.jsx";
import SearchAutoComplete from "../SearchAutoComplete/index.jsx";
import TicTacToe from "../TicTacToe/index.jsx";
import UseFetchTest from "../Usefetch/test.jsx";
import UseOnClickOutsideTest from "../UseOutsideClick/test.jsx";
import UseWindowResizeTest from "../UseWindowResize/test.jsx";
import Scrolltopbottom from "../Scrolltopbottom/index.jsx";
import Scrollsection from "../Scrolltopbottom/scrolltosection.jsx";

function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showGitHubFinder",
      component: <GitHubFind />,
    },
    {
      key: "showSearchAutoComplete",
      component: <SearchAutoComplete />,
    },
    {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    {
      key: "showStarRatings",
      component: <StarRatings />,
    },
    {
      key: "showLoadMoreButton",
      component: <LoadMoreButton />,
    },
    {
      key: "showTreeview",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showQRCodeGenerator",
      component: <QRCodeGen />,
    },
    {
      key: "showThemeSwitch",
      component: <ThemeSwitch />,
    },
    {
      key: "showScrollIndicator",
      component: (
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ),
    },
    {
      key: "showTabTest",
      component: <TabTest />,
    },
    {
      key: "showModalTest",
      component: <ModalTest />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showImageSlider",
      component: <ImageSlider />,
    },
    {
      key: "showUseFetchTest",
      component: <UseFetchTest />,
    },
    {
      key: "showuseOnClickOutsideTest",
      component: <UseOnClickOutsideTest />,
    },
    {
      key: "showUseWindowResizeTest",
      component: <UseWindowResizeTest />,
    },
    {
      key: "showScrolltopbottom",
      component: <Scrolltopbottom />,
    },
    {
      key: "showScrollsection",
      component: <Scrollsection />,
    },
  ];

  function checkEnabledFlags(getCurrKey) {
    return enabledFlags[getCurrKey];
  }

  if (loading) return <h1>Loading Data!</h1>;

  return (
    <div>
      <h1>Featured Flags</h1>
      {componentsToRender.map((Item) =>
        checkEnabledFlags(Item.key) ? Item.component : null
      )}
    </div>
  );
}

export default FeatureFlags;
