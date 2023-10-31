"use client";
import Loader from "@/components/loader/loader";
import MissionTable from "@/components/missions-table/missions-table";
import { Modal } from "@/components/modal/modal";
import MainForm from "@/components/new-form/main-form";
import mock from "@/shared/mockup";
import { Mission } from "@/shared/types";
import { useState } from "react";

export default function Home() {
  const [missions, setMissions] = useState(
    mock.mockShavtzak.missions as Mission[]
  );

  const updateMissions = (newMissions: Mission[]) => {
    setMissions(newMissions);
  };

  return (
    <div className="">
      <div className="">
        <div className="flex min-h-screen flex-col items-center justify-between px-24">
          <div className="container mx-auto p-4">
            <div className="w-fit">
              <h1 className="text-4xl font-semibold text-gray-700">
                Shavtzak
                <span className="block h-1  bg-indigo-500 rounded-full mt-2"></span>
              </h1>
            </div>
            {mock.mockShavtzak ? (
              <div>
                <MissionTable
                  missions={mock.mockShavtzak.missions}
                  updateMissions={updateMissions}
                />
                {/* <div className="mt-8">
                  <Modal>
                    <MainForm />
                  </Modal>
                </div> */}
              </div>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="mt-8">
          <Modal>
            <MainForm />
          </Modal>
        </div>
        section 2
      </div>
    </div>
  );
}
