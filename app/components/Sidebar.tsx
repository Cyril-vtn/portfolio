import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Sidebar = ({
  sidebarRef,
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarRef: React.MutableRefObject<any>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="sidebar"
      ref={sidebarRef}
      className={`absolute z-50 m-4 top-0 flex flex-col overflow-auto h-[-webkit-fill-available] w-[30%] max-w-[420px] gap-4 bg-brandOffwhite bg-noise-bg rounded-lg shadow-hard py-3 px-5 transition-all duration-300 ease-in-out ${
        sidebarOpen ? "right-0" : "-right-[60%]"
      }`}
    >
      <div className="flex flex-col rounded-t-lg w-full h-full gap-4">
        <div className="flex flex-col  items-center gap-2">
          <div className="flex gap-2 justify-between w-full">
            <h3 className="font-marlin-medium text-brandBlue tracking-normal xl:text-lg text-xs">
              Fonctionnalités
            </h3>
            <div className="xl:text-lg text-xs flex items-center justify-center">
              <FaArrowRight
                size={22}
                className="cursor-pointer transition-all duration-200 ease-in-out p-1 hover:bg-brandBlue text-brandBlue hover:text-brandOffwhite rounded-full"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
          </div>
          <ul className="text-sm space-y-1 text-lightGray w-full">
            <li>- Création d’utilisateur</li>
            <li>- Changement de Photo de profil / nom / mot de passe</li>
            <li>
              - Progressions de l’utilisateur via des succès ainsi qu’une barre
              d’xp
            </li>
            <li>
              - Sauvegarde des données via Firebase (Firestore, Authentication,
              Storage)
            </li>
            <li>
              - Partage de profil via React Router et ses routes dynamiques
            </li>
            <li>- Responsive design (Desktop First & Tablette)</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-marlin-medium text-brandBlue text-md tracking-normal">
            Languages utilisés
          </h3>
          <ul className="text-sm space-y-1 text-lightGray">
            <li>- React</li>
            <li>- React Router</li>
            <li>- Firebase</li>
            <li>- MUI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
