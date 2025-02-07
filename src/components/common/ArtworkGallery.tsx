"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
import { Post } from "@/utils/axios";
import { bigShoulders } from "@/app/layout";
import DeleteModal from "../modals/DeleteModal";
import { getDeviceCheck } from "@/api/generateDeviceId";

interface Artwork {
  ArtworkBOM: number;
  ArtworkCode: string;
  ArtworkSize: string;
  ArtworkType: string;
  ArtworkLine: number;
  ArtworkPrice: number;
  ArtworkImage: string;
  ArtworkPosition: string;
  ArtworkSequence: number;
  ArtworkDescription: string;
}

export default function ArtworkGallery({
  cart,
  onclose,
  artworks,
  showDeleteButton,
}: {
  cart: any;
  onclose: any;
  artworks: Artwork[];
  showDeleteButton: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [deleteModalID, setDeleteModalID] = useState<any>("");
  const [artWorklist, setArtWorklist] = useState(artworks ?? []);

  const handleDeleteLogo = async (id: number) => {
    console.log(setArtWorklist, showDeleteButton);
    const url = "api/DeleteAddedArtwork";
    const data = {
      DeviceID: getDeviceCheck(),
      Product: cart?.ProductCode,
      Fit: cart?.Fitting?.trim() || "NA",
      Colour: cart?.Colour?.trim() || "NA",
    };
    try {
      const response: any = await Post(url, { ...data, Seq: id });
      if (response.status) {
        // const url = "api/AddedArtworkList";
        // const data = {
        //   device_id: getDeviceCheck(),
        //   Product: cart?.ProductCode,
        //   Fit: cart?.Fitting?.trim() || "NA",
        //   Colour: cart?.Colour?.trim() || "NA",
        // };
        // const resp: any = await Fetch(url, data, 5000, true, false);
        // if (resp?.status) setArtWorklist(resp.addedArtworkList);
        // else setArtWorklist([]);
      }
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      reseModal();
      onclose();
    }
  };

  // const handleDelete = (id: string | number) => {
  //   setDeleteModalID(id);
  //   setIsVisible(true);
  // };

  const reseModal = () => {
    setDeleteModalID("");
    setIsVisible(false);
  };

  return (
    <div className={`bg-[#1C1C1C] p-6 ${bigShoulders.className}`}>
      <div>
        <DeleteModal
          onClose={reseModal}
          isVisible={isVisible}
          onDelete={handleDeleteLogo}
          deleteModalID={deleteModalID}
        />
        {/* Logo Link */}
        <Link href="/" className="absolute top-2 left-2">
          <Image
            priority
            alt="Logo"
            width={100}
            unoptimized
            height={60}
            src={
              "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
            }
            className="w-32 p-1"
          />
        </Link>
        <h1 className="text-4xl font-extrabold text-center text-secondary mb-8 tracking-wide">
          Artwork Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {artWorklist.map((artwork, index) => (
            <div
              key={index}
              className="relative group border border-white/50 shadow-lg rounded-2xl transition-all duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={artwork.ArtworkImage}
                  alt={artwork.ArtworkDescription}
                  fill
                  priority
                  className="object-contain bg-white rounded-t-2xl w-fit"
                />
              </div>
              {/* {showDeleteButton && (
                <span className="">
                  <RxCross1
                    size={32}
                    title="Remove Artwork"
                    onClick={() => handleDelete(artwork.ArtworkSequence)}
                    className="cursor-pointer bg-secondary rounded-full p-1.5 font-bold transition absolute -top-3 z-20 -right-3 text-white"
                  />
                </span>
              )} */}

              <div className="p-5">
                <h2 className="text-2xl font-semibold text-white">
                  {artwork.ArtworkDescription} ({artwork.ArtworkType})
                </h2>
                <div className="mt-3 grid grid-cols-2 space-y-0.5 text-gray-200">
                  <p className="text-lg">
                    <span className="font-medium text-white/50 uppercase pr-1 text-lg">
                      Code:
                    </span>{" "}
                    {artwork.ArtworkCode}
                  </p>
                  <p className="text-lg">
                    <span className="font-medium text-white/50 uppercase pr-1 text-lg">
                      Position:
                    </span>{" "}
                    {artwork.ArtworkPosition}
                  </p>
                  <p className="text-lg">
                    <span className="font-medium text-white/50 uppercase pr-1 text-lg">
                      Size:
                    </span>{" "}
                    {artwork.ArtworkSize}
                  </p>
                  <p className="text-lg">
                    <span className="font-medium text-white/50 uppercase pr-1 text-lg">
                      Price:
                    </span>{" "}
                    <span className="text-green-400 font-medium">
                      £{artwork.ArtworkPrice}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
