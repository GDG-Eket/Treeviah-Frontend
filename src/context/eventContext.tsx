import React, { createContext, useState, ReactNode } from "react";

type EventContextType = {
  setEventListener: (listener: any) => void;
  triggerEvent: () => void;
  triggerTableLink: () => void;
  setTableLinkEvent: (open: any) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

type EventProviderProps = {
  children: ReactNode;
};

const EventProvider = ({ children }: EventProviderProps) => {
  const [eventListener, setEventListener] = useState<any>(null);
  const [tableLinkEvent, setTableLinkEvent] = useState<any>(null);

  const triggerEvent = () => {
    if (eventListener) {
      eventListener();
    }
  };

  const triggerTableLink = () => {
    if (tableLinkEvent) {
      tableLinkEvent();
    }
  };

  const contextValue: EventContextType = {
    setEventListener,
    triggerEvent,
    triggerTableLink,
    setTableLinkEvent,
  };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };
