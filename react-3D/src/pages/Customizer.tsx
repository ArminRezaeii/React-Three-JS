import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import { state } from "../store";
import { reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { Tab, ColorPicker, CustomButton, FilePicker } from "../components";
import { ActiveFilterTab } from "../Types";
export default function Customizer() {
  const snap = useSnapshot(state);

  const [file, setFile] = useState("");

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState<ActiveFilterTab>({
    logoShirt: true,
    stylishShirt: false,
  });
  const genrateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  const handleDecals = (type: string, result: any) => {
    // @ts-ignore
    const decalType = DecalTypes[type] as {
      stateProperty: string;
      filterTab: string;
    };
    state[decalType.stateProperty] = result;

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
    setActiveFilterTab((prevstate) => {
      return {
        ...prevstate,
        [tabName]: !prevstate[tabName],
      };
    });
  };
  const readFile = (type: string) => {
    reader(file).then((result) => {
      handleDecals(type, result);
      setActiveEditorTab("");
    });
  };
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 lef-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="items-center flex min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {genrateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                tab={tab}
                handleClick={() => {
                  handleActiveFilterTab(tab.name);
                }}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
