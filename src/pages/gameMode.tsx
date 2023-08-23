import React from "react";
import Image from "next/image";

export default function GameMode() {
  return (
    <div>
      <main className="bg-primary py-16 px-8 sm:px-12 lg:px-[72px]">
				<div className="z-10">
					<div className="flex flex-col gap-y-2 text-white mb-[92px]">
						<h1 className="text-[40px] leading-[48px] font-bold">Select Game mode</h1>
						<p className="text-base ">Choose Your Game Mode: Unleash the Thrills in Your Preferred Challenge!</p>
					</div>
					<div className="flex justify-center gap-[120px]">
						<div className="">
							<div className="bg-primarylight flex flex-col justify-center items-center">
								<div className="px-40 py-[76px]">
									<div className="p-8 bg-white rounded-full">
										<Image alt="single-user" className="" src={require("../../public/Images/user-user-01.svg")}></Image>
									</div>
								</div>
								<div className="px-6 py-4 bg-white gap-4">
									<h2 className="text-white font-bold text-[32px] leading-10">Classic Mode</h2>
									<p className="text-lg leading-6 text-white font-medium">In Classic Mode, players can dive into thrilling gaming adventures without the need for teams or companions.</p>
								</div>
							</div>

						</div>

					</div>

				</div>
      </main>
    </div>
  )
}
