"use client";
import React from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center relative p-8 md:p-20">
      <div className="w-full relative">
        <Header titleComponent={titleComponent} />
        <Card>{children}</Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }: any) => {
  return (
    <div className="div max-w-5xl mx-auto text-center relative z-10">
      {titleComponent}
    </div>
  );
};

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-12 max-w-5xl mx-auto h-[12rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl relative z-0">
      <div className="h-full w-full overflow-hidden rounded-[22px] md:rounded-2xl bg-gray-100 dark:bg-zinc-900 flex items-center justify-center p-0 md:p-4">
        {children}
      </div>
    </div>
  );
};

