import { createContext, type ReactNode, useContext, useState } from "react";

export type ChatView =
  | "MAIN_MENU"
  | "ASK_QUESTION"
  | "CONVERSATION_HISTORY"
  | "HELPDESK_TICKETS"
  | "SMART_SUPPORT";

interface ViewContextType {
  view: ChatView;
  setView: (view: ChatView) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ChatView>("MAIN_MENU");

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewStore = (): ViewContextType => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
};
